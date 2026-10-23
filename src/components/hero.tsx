import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import HeroBackground from './hero-background';
import HeroWindows from './hero-windows';
import ClientLogos from './client-logos';
import { getI18n } from '@/i18n/server';

/* ======================================================
   HERO — headline on the left, proof on the right.

   The right side is not an illustration: it is three of our own
   product windows (the same covers the portfolio grid uses), so the
   first screen already shows real work. A server component — only
   the window entrance (HeroWindows) and the dot canvas run on the client.
====================================================== */

export default async function Hero() {
  const { t } = await getI18n();
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        pt-28 sm:pt-36 pb-12 sm:pb-16
        px-4 sm:px-6
        text-[var(--fg)]
      "
    >
      {/* DOT GRID BACKGROUND */}
      <HeroBackground />

      {/* Bottom fade into the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(180deg, transparent, var(--bg))' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* COPY */}
          <div className="hero-copy text-center lg:col-span-6 lg:text-left">
            <span
              className="
                inline-flex items-center gap-2
                rounded-full px-4 py-1.5
                text-xs font-medium tracking-wide
                border border-[var(--border)]
                bg-[var(--surface)]
                text-[var(--text-muted)]
                backdrop-blur-sm
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ background: 'var(--accent-1)' }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--accent-1)' }} />
              </span>
              {t.hero.badge}
            </span>

            <h1 className="font-display mt-6 text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-balance sm:mt-8 sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              {t.hero.title}{' '}
              <span className="text-gradient">{t.hero.titleAccent}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:mt-6 sm:text-lg lg:mx-0">
              {t.hero.intro}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Link href="#contact" className="btn-primary group w-full sm:w-auto">
                {t.hero.primary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/portfolio" className="btn-secondary w-full sm:w-auto">
                <Briefcase className="h-4 w-4" />
                {t.hero.secondary}
              </Link>
            </div>

            <p className="mt-6 text-xs text-[var(--text-subtle)] sm:text-sm">
              {t.hero.note}
            </p>
          </div>

          {/* PROOF — three real product windows */}
          <div className="lg:col-span-6">
            <HeroWindows alts={t.hero.windows} />
          </div>
        </div>

        {/* CLIENTS */}
        <ClientLogos className="mt-16 sm:mt-20" />
      </div>
    </section>
  );
}
