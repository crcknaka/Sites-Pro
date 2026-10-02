'use server';

import { headers } from 'next/headers';
import { Resend } from 'resend';
import { BUDGETS, LIMITS, SERVICES, type ContactResult } from './contact-options';

const resend = new Resend(process.env.RESEND_API_KEY);

/** Hosts the Turnstile widget may legitimately be solved on. */
const ALLOWED_HOSTNAMES = ['www.sitespro.org', 'sitespro.org'];

const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;

/* ------------------------------------------------------
   Rate limit — a per-IP window kept in memory. One container
   serves the site, so this is enough to stop a script from
   flooding the inbox; the Cloudflare WAF rule is the outer layer.
------------------------------------------------------ */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  // keep the map from growing without bound
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** Single line, no control characters — safe for a mail header. */
const oneLine = (s: string) => s.replace(/[\r\n\t\u0000-\u001f\u007f]+/g, ' ').trim();

export async function sendContactMessage(formData: FormData): Promise<ContactResult> {
  const h = await headers();
  const ip =
    h.get('cf-connecting-ip') ||
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown';

  if (rateLimited(ip)) return { ok: false, reason: 'rate' };

  /* ---------- Turnstile ---------- */

  const token = String(formData.get('cf-turnstile-response') || '');
  if (!token) return { ok: false, reason: 'captcha' };

  let verified = false;
  try {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY ?? '',
        response: token,
        ...(ip !== 'unknown' ? { remoteip: ip } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const verifyData = (await verifyRes.json()) as { success?: boolean; hostname?: string };
    verified =
      verifyData.success === true &&
      // Turnstile's test keys answer with example.com — only enforce the host in production
      (process.env.NODE_ENV !== 'production' ||
        ALLOWED_HOSTNAMES.includes(verifyData.hostname ?? ''));
  } catch {
    verified = false;
  }
  if (!verified) return { ok: false, reason: 'captcha' };

  /* ---------- Fields ---------- */

  const name = oneLine(String(formData.get('name') || ''));
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').replace(/\r\n/g, '\n').trim();
  const serviceRaw = String(formData.get('service') || '');
  const budgetRaw = String(formData.get('budget') || '');

  // only the values the form offers; anything else is dropped, not echoed
  const service = (SERVICES as readonly string[]).includes(serviceRaw) ? serviceRaw : '';
  const budget = (BUDGETS as readonly string[]).includes(budgetRaw) ? budgetRaw : '';

  if (
    !name ||
    name.length > LIMITS.name ||
    !email ||
    email.length > LIMITS.email ||
    !EMAIL_RE.test(email) ||
    !message ||
    message.length > LIMITS.message
  ) {
    return { ok: false, reason: 'invalid' };
  }

  /* ---------- Email ---------- */

  const subject = `New project request from ${oneLine(name).slice(0, 80)}${service ? ` — ${service}` : ''}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...(service ? [`Service: ${service}`] : []),
    ...(budget ? [`Budget: ${budget}`] : []),
    '',
    message,
    '',
    '— Sent from sitespro.org',
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ''}
      ${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      <hr />
      <p style="font-size:12px;color:#666">Sent from sitespro.org</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: 'Sites Pro <info@sitespro.org>',
      to: ['info@sitespro.org'],
      replyTo: email,
      subject,
      text,
      html,
    });
    if (error) throw new Error(`${error.name}: ${error.message}`);
  } catch (err) {
    // Resend reports failures as a value, not an exception — and a lead that
    // never arrived must not vanish: the container log keeps a copy.
    console.error('[contact] email not sent', {
      error: err instanceof Error ? err.message : String(err),
      submission: { name, email, service, budget, message },
    });
    return { ok: false, reason: 'send' };
  }

  return { ok: true };
}
