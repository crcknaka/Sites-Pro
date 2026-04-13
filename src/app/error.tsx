'use client';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p
        className="text-7xl font-bold tracking-tighter sm:text-8xl"
        style={{
          background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Oops
      </p>

      <h1 className="mt-4 text-2xl font-semibold text-[var(--fg)] sm:text-3xl">
        Something went wrong
      </h1>

      <p className="mt-3 max-w-md text-[var(--text-muted)]">
        An unexpected error occurred. Please try again.
      </p>

      <div className="mt-8 flex gap-3">
        <button
          onClick={reset}
          className="
            inline-flex items-center gap-2
            rounded-xl px-6 py-3
            text-sm font-medium text-black
            transition-all hover:opacity-90 cursor-pointer
            shadow-lg shadow-[var(--accent-1)]/20
          "
          style={{ background: 'var(--accent-1)' }}
        >
          Try again
        </button>

        <a
          href="/"
          className="
            inline-flex items-center gap-2
            rounded-xl px-6 py-3
            text-sm font-medium
            border border-[var(--border)]
            bg-[var(--surface)]
            text-[var(--fg)]
            transition-all hover:bg-[var(--surface-strong)]
          "
        >
          Back Home
        </a>
      </div>
    </section>
  );
}
