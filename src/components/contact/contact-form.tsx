'use client';

import { useEffect, useState, useTransition } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { SendHorizontal, CheckCircle, ChevronDown } from 'lucide-react';
import { sendContactMessage } from './contact-actions';
import { ACCENT_1 } from '@/lib';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const SERVICES = [
  'Website',
  'Web platform / application',
  'AI & automation',
  'Consulting',
  'Not sure yet',
];

const BUDGETS = [
  'Under €3,000',
  '€3,000 – €10,000',
  '€10,000 – €30,000',
  '€30,000+',
  'Not decided yet',
];

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess(false);
      setToken(null);
    }, 7000);

    return () => clearTimeout(timer);
  }, [success]);

  function onSubmit(formData: FormData) {
    if (!token) {
      setError('Verification failed. Please try again.');
      return;
    }

    setError(null);
    formData.append('cf-turnstile-response', token);

    startTransition(async () => {
      try {
        await sendContactMessage(formData);
        setSuccess(true);
      } catch {
        setError('Something went wrong. Please try again.');
      }
    });
  }

  /* ================= SUCCESS ================= */

  if (success) {
    return (
      <div
        className="
          flex h-[360px] flex-col items-center justify-center
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
          <CheckCircle className="h-7 w-7" style={{ color: ACCENT_1 }} />
        </div>

        <h3 className="text-xl font-semibold text-[var(--fg)]">Message sent</h3>

        <p className="mt-3 max-w-md text-sm text-[var(--text-muted)]">
          Thanks for reaching out. We’ll reply within 24 hours with next steps.
        </p>

        <button
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
          Send another message
        </button>
      </div>
    );
  }

  /* ================= FORM ================= */

  return (
    <form
      action={onSubmit}
      className="
        card-premium card-topline
        rounded-3xl
        p-6 sm:p-8
        space-y-4
      "
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={input} />
        <input name="email" type="email" required placeholder="Your email" className={input} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Select name="service" label="What do you need?" options={SERVICES} />
        <Select name="budget" label="Budget range" options={BUDGETS} />
      </div>

      <textarea
        name="message"
        rows={5}
        required
        placeholder="Tell us about the project — goals, timeline, anything already decided"
        className={`${input} resize-none`}
      />

      {/* Turnstile — only mounted when a site key is configured, so an
          environment without one degrades to a clear message instead of an
          uncaught widget error */}
      {TURNSTILE_SITE_KEY && (
        <Turnstile
          siteKey={TURNSTILE_SITE_KEY}
          onSuccess={(token) => setToken(token)}
          options={{ appearance: 'interaction-only' }}
        />
      )}

      {error && <p className="text-sm text-[var(--text-muted)]">{error}</p>}

      <button
        disabled={isPending}
        className="btn-primary mt-2 w-full disabled:opacity-60 disabled:pointer-events-none"
      >
        {isPending ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border-2 border-black/20 border-t-black/70 animate-spin" />
            Sending…
          </span>
        ) : (
          <>
            Send the brief
            <SendHorizontal className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

/* ================= FIELDS ================= */

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <select name={name} defaultValue="" className={`${input} appearance-none pr-10 cursor-pointer`}>
        <option value="" disabled>
          {label}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
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
