'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Briefcase } from 'lucide-react';
import HeroBackground from './hero-background';
import ClientLogos from './client-logos';

/* ======================================================
   HERO — headline on the left, proof on the right.

   The right side is not an illustration: it is three of our own
   product windows (the same covers the portfolio grid uses), so the
   first screen already shows real work.
====================================================== */

const WINDOWS = [
  {
    src: '/projects/covers/payment-gateway.webp?v=4',
    alt: 'Payment gateway operator console',
    className: 'left-0 top-0 w-[74%] -rotate-[4deg] opacity-90',
    delay: '0s',
  },
  {
    src: '/projects/covers/agency-crm.webp?v=4',
    alt: 'Web studio CRM dashboard',
    className: 'right-0 top-[14%] w-[74%] rotate-[3deg] opacity-95',
    delay: '-2.5s',
  },
  {
    src: '/projects/covers/vadi.webp?v=4',
    alt: 'Vadi accounting platform',
    className: 'left-[6%] bottom-0 w-[80%]',
    delay: '-5s',
  },
];

export default function Hero() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  // The three windows arrive from the network at different moments. Rather than
  // letting each pop in on its own, we wait until all of them have decoded (or
  // 1.8 s, whichever comes first) and then run one choreographed entrance.
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (loaded >= WINDOWS.length) { setReady(true); return; }
    const t = setTimeout(() => setReady(true), 1800);
    return () => clearTimeout(t);
  }, [loaded]);

  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        pt-28 sm:pt-36 pb-12 sm:pb-16
        px-4 sm:px-6 select-none
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
              Available for new projects
            </span>

            <h1 className="font-display mt-6 text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-balance sm:mt-8 sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Product-grade websites and{' '}
              <span className="text-gradient">web applications</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:mt-6 sm:text-lg lg:mx-0">
              We design and build scalable websites, web platforms and secure digital
              products — from the first conversation to production, and the years after.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Link href={isHome ? '#contact' : '/#contact'} className="btn-primary group w-full sm:w-auto">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/portfolio" className="btn-secondary w-full sm:w-auto">
                <Briefcase className="h-4 w-4" />
                See the work
              </Link>
            </div>

            <p className="mt-6 text-xs text-[var(--text-subtle)] sm:text-sm">
              Working across the EU and worldwide
            </p>
          </div>

          {/* PROOF — three real product windows */}
          <div className="lg:col-span-6">
            <div
              className="relative mx-auto w-full max-w-[560px]"
              style={{ aspectRatio: '560 / 470' }}
              aria-hidden="true"
            >
              {WINDOWS.map((w, i) => (
                <div
                  key={w.src}
                  className={`hero-window absolute ${w.className} ${ready ? 'is-ready' : ''}`}
                  style={{ '--i': i } as React.CSSProperties}
                >
                  {/* float runs on an inner element so it never fights the entrance transform */}
                  <div
                    className={ready ? 'lg:animate-[slow-float_8s_ease-in-out_infinite]' : ''}
                    style={{ animationDelay: w.delay }}
                  >
                    <Image
                      src={w.src}
                      alt={w.alt}
                      width={1200}
                      height={900}
                      priority
                      fetchPriority={i === WINDOWS.length - 1 ? 'high' : 'auto'}
                      sizes="(max-width: 1024px) 80vw, 420px"
                      className="h-auto w-full"
                      onLoad={() => setLoaded((n) => n + 1)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CLIENTS */}
        <ClientLogos className="mt-16 sm:mt-20" />
      </div>
    </section>
  );
}
