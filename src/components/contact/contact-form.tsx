'use client';

import { useEffect, useRef, useState, useTransition, type FormEvent } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { SendHorizontal, CheckCircle, ChevronDown } from 'lucide-react';
import { sendContactMessage } from './contact-actions';
import { BUDGETS, LIMITS, SERVICES, type ContactResult } from './contact-options';
import { ACCENT_1 } from '@/lib';
import { SITES, dictionaryFor, type Locale } from '@/i18n';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = dictionaryFor(locale).form;
  const MESSAGES = t.errors;
  const CONTACT_EMAIL = SITES[locale].email;
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<TurnstileInstance | undefined>(undefined);
  const waitingRef = useRef(false);

  // Turnstile is ~800 KB of third-party code: it is only mounted once the
  // form is close to the viewport or a field gets focus.
  const [armed, setArmed] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [waiting, setWaiting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (armed || !TURNSTILE_SITE_KEY) return;
    const el = formRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [armed]);

  function stopWaiting() {
    waitingRef.current = false;
    setWaiting(false);
  }

  function send(withToken: string) {
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    data.set('cf-turnstile-response', withToken);
    data.set('locale', locale);
    setError(null);

    startTransition(async () => {
      let result: ContactResult;
      try {
        result = await sendContactMessage(data);
      } catch {
        result = { ok: false, reason: 'send' };
      }

      if (result.ok) {
        setSuccess(true);
        return;
      }

      setError(MESSAGES[result.reason]);
      // a Turnstile token is single-use — fetch a fresh one for the retry
      setToken(null);
      turnstileRef.current?.reset();
    });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    // Handled here instead of <form action>: React resets a form after every
    // action call, which wiped what the visitor had typed whenever sending failed.
    e.preventDefault();
    if (isPending || waiting) return;

    if (!TURNSTILE_SITE_KEY) {
      setError(MESSAGES.captcha);
      return;
    }

    if (token) {
      send(token);
      return;
    }

    // Pressed before the check finished: send as soon as the token arrives.
    setArmed(true);
    setError(null);
    waitingRef.current = true;
    setWaiting(true);
  }

  /* ================= SUCCESS ================= */

  if (success) {
    return (
      <div
        role="status"
        className="
          flex min-h-[360px] flex-col items-center justify-center
          rounded-3xl
          bg-[var(--surface)]
          border border-[var(--border)]
          text-center
          px-6
        "
      >
        <div
          className="
            mb-6 flex h-14 w-14 items-center justify-center
            rounded-full
            border border-[var(--accent-1)]/30
          "
          style={{ background: `color-mix(in srgb, ${ACCENT_1} 12%, transparent)` }}
        >
          <CheckCircle className="h-7 w-7 text-[var(--accent-text)]" aria-hidden="true" />
        </div>

        <h3 className="text-xl font-semibold text-[var(--fg)]">{t.sentTitle}</h3>

        <p className="mt-3 max-w-md text-sm text-[var(--text-muted)]">
          {t.sentText}
        </p>

        <button
          type="button"
          onClick={() => {
            setSuccess(false);
            setToken(null);
          }}
          className="
            mt-8 cursor-pointer
            text-sm font-medium
            text-[var(--text-muted)]
            hover:text-[var(--fg)]
            transition-colors
          "
        >
          {t.sendAnother}
        </button>
      </div>
    );
  }

  /* ================= FORM ================= */

  const busy = isPending || waiting;

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      onFocus={() => setArmed(true)}
      className="
        card-premium card-topline
        rounded-3xl
        p-6 sm:p-8
        space-y-4
      "
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">{t.name}</span>
          <input
            name="name"
            required
            maxLength={LIMITS.name}
            autoComplete="name"
            placeholder={t.name}
            className={input}
          />
        </label>
        <label className="block">
          <span className="sr-only">{t.email}</span>
          <input
            name="email"
            type="email"
            required
            maxLength={LIMITS.email}
            autoComplete="email"
            placeholder={t.email}
            className={input}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Select name="service" label={t.service} options={SERVICES} labels={t.services} />
        <Select name="budget" label={t.budget} options={BUDGETS} labels={t.budgets} />
      </div>

      <label className="block">
        <span className="sr-only">{t.message}</span>
        <textarea
          name="message"
          rows={5}
          required
          maxLength={LIMITS.message}
          placeholder={t.messagePlaceholder}
          className={`${input} resize-none`}
        />
      </label>

      {/* Turnstile — mounted lazily (see above) and only when a site key is
          configured, so an environment without one degrades to a clear
          message instead of an uncaught widget error */}
      {TURNSTILE_SITE_KEY && armed && (
        <Turnstile
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY}
          onSuccess={(t) => {
            setToken(t);
            if (waitingRef.current) {
              stopWaiting();
              send(t);
            }
          }}
          onExpire={() => setToken(null)}
          onError={() => {
            setToken(null);
            if (waitingRef.current) {
              stopWaiting();
              setError(MESSAGES.captcha);
            }
          }}
          options={{ appearance: 'interaction-only' }}
        />
      )}

      {waiting && (
        <p role="status" className="text-sm text-[var(--text-muted)]">
          {t.checking}
        </p>
      )}

      {error && (
        <p role="alert" className="text-sm leading-relaxed text-[var(--danger)]">
          {error} {t.writeDirect}{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="btn-primary mt-2 w-full disabled:opacity-60 disabled:pointer-events-none"
      >
        {busy ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border-2 border-black/20 border-t-black/70 animate-spin" />
            {waiting ? t.verifying : t.sending}
          </span>
        ) : (
          <>
            {t.send}
            <SendHorizontal className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}

/* ================= FIELDS ================= */

function Select({
  name,
  label,
  options,
  labels,
}: {
  name: string;
  label: string;
  /** Submitted values — the server only accepts these. */
  options: readonly string[];
  /** What the visitor reads, in the page language; same order as options. */
  labels: string[];
}) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <select name={name} defaultValue="" className={`${input} appearance-none pr-10 cursor-pointer`}>
        <option value="" disabled>
          {label}
        </option>
        {options.map((o, i) => (
          <option key={o} value={o}>
            {labels[i] ?? o}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]"
      />
    </label>
  );
}

const input = `
  w-full rounded-xl
  bg-[var(--surface-strong)]
  border border-[var(--border)]
  px-4 py-3
  text-sm
  text-[var(--fg)]
  placeholder:text-[var(--text-muted)]
  transition-all duration-200
  focus:outline-none
  focus:border-[var(--accent-1)]
  focus:ring-2 focus:ring-[var(--accent-1)]/20
  focus:bg-[var(--surface)]
`;
