import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p
        className="text-8xl font-bold tracking-tighter sm:text-9xl"
        style={{
          background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        404
      </p>

      <h1 className="mt-4 text-2xl font-semibold text-[var(--fg)] sm:text-3xl">
        Page not found
      </h1>

      <p className="mt-3 max-w-md text-[var(--text-muted)]">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="
          mt-8 inline-flex items-center gap-2
          rounded-xl px-6 py-3
          text-sm font-medium text-black
          transition-all hover:opacity-90
          shadow-lg shadow-[var(--accent-1)]/20
        "
        style={{ background: 'var(--accent-1)' }}
      >
        <span>&#8592;</span>
        Back Home
      </Link>
    </section>
  );
}
