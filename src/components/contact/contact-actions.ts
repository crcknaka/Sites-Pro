'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(formData: FormData) {
  // 🔐 Turnstile token
  const token = String(formData.get('cf-turnstile-response') || '');

  if (!token) {
    throw new Error('Captcha missing');
  }

  // 🔐 Verify Turnstile
  const verifyRes = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: token,
      }),
    }
  );

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    throw new Error('Captcha verification failed');
  }

  // 📩 Form data
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const service = String(formData.get('service') || '').trim();
  const budget = String(formData.get('budget') || '').trim();

  if (!name || !email || !message) {
    throw new Error('Missing required fields');
  }

  // ✉️ Send email
  await resend.emails.send({
    from: 'Sites Pro <info@sitespro.org>',
    to: ['info@sitespro.org'],
    replyTo: email,
    subject: `New project request from ${name}${service ? ` — ${service}` : ''}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
        <hr />
        <p style="font-size:12px;color:#666">
          Sent from sitespro.org
        </p>
      </div>
    `,
  });

  return { ok: true };
}
