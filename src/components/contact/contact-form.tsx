'use client';

import { useEffect, useState, useTransition } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { SendHorizontal, CheckCircle } from 'lucide-react';
import { sendContactMessage } from './contact-actions';
import { ACCENT_1 } from '@/lib';

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
          flex h-[320px] flex-col items-center justify-center
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

        <h3 className="text-xl font-semibold text-[var(--fg)]">
          Message sent
        </h3>

        <p className="mt-3 max-w-md text-sm text-[var(--text-muted)]">
          Thanks for reaching out. We’ll get back to you within 24 hours.
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
        space-y-5
      "
    >
      <input
        name="name"
        required
        placeholder="Your name"
        className={input}
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className={input}
      />

      <textarea
        name="message"
        rows={5}
        required
        placeholder="Tell us about your project"
        className={`${input} resize-none`}
      />

      {/* Turnstile */}
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={(token) => setToken(token)}
        options={{ appearance: 'interaction-only' }}
      />

      {/* Error */}
      {error && (
        <p className="text-sm text-[var(--text-muted)]">
          {error}
        </p>
      )}

      <button
        disabled={isPending}
        className="btn-primary mt-4 w-full disabled:opacity-60 disabled:pointer-events-none"
      >
        {isPending ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border-2 border-black/20 border-t-black/70 animate-spin" />
            Sending…
          </span>
        ) : (
          <>
            Send
            <SendHorizontal className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

/* ================= INPUT ================= */

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
