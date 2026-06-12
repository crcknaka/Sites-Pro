'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Send, ArrowRight, Briefcase } from 'lucide-react';
import HeroBackground from './hero-background';

const animatedWords = ['platforms', 'applications', 'systems'];

const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '4+', label: 'Core services' },
  { value: '24h', label: 'Response time' },
];

export default function Hero() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % animatedWords.length);
        setIsVisible(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative min-h-[88dvh] sm:min-h-[85vh]
        flex items-center justify-center
        pt-28 sm:pt-32 pb-10 sm:pb-14
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
        style={{
          background: 'linear-gradient(180deg, transparent, var(--bg))',
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl text-center w-full">
        {/* BADGE */}
        <div className="mb-6 sm:mb-8 flex justify-center">
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
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: 'var(--accent-1)' }}
              />
            </span>
            Available for new projects
          </span>
        </div>

        {/* HEADING */}
        <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.12] sm:leading-tight text-balance">
          Product-grade <span className="text-gradient">websites</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline">{' '}</span>
          <br className="hidden md:block" />
          and web{' '}
          <span className="relative inline-block min-w-[120px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[260px]">
            {animatedWords.map((word, index) => (
              <span
                key={word}
                className="text-gradient absolute left-0 top-0 whitespace-nowrap"
                style={{
                  opacity: currentIndex === index && isVisible ? 1 : 0,
                  filter: currentIndex === index && isVisible ? 'blur(0px)' : 'blur(4px)',
                  transition: 'opacity 0.8s ease-in-out, filter 0.8s ease-in-out',
                  pointerEvents: 'none',
                }}
              >
                {word}
              </span>
            ))}
            <span className="invisible whitespace-nowrap">{animatedWords[1]}</span>
          </span>
        </h1>

        {/* SUBHEADING */}
        <p className="mt-5 sm:mt-7 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto text-[var(--text-muted)] leading-relaxed">
          We design and build scalable websites, web applications and secure digital platforms — from concept to production.
        </p>

        {/* CREDO */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-medium" style={{ color: 'var(--accent-1)' }}>
          Digital Done Right.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href={isHome ? '#contact' : '/#contact'}
            className="btn-primary group w-full sm:w-auto"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href={isHome ? '#portfolio' : '/#portfolio'}
            className="btn-secondary w-full sm:w-auto"
          >
            <Briefcase className="h-4 w-4" />
            View Portfolio
          </Link>
        </div>

        {/* STATS */}
        <div
          className="
            mt-10 sm:mt-14 mx-auto max-w-xl
            grid grid-cols-3
            divide-x divide-[var(--border-soft)]
            rounded-2xl border border-[var(--border-soft)]
            bg-[var(--surface)] backdrop-blur-sm
          "
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-4 sm:py-5 text-center">
              <div className="font-display text-xl sm:text-2xl font-semibold text-gradient">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs text-[var(--text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* SOCIAL */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
          <span className="text-xs text-[var(--text-muted)]">Connect with us</span>
          {[
            {
              href: 'https://www.linkedin.com/company/sites-pro/',
              label: 'Sites Pro on LinkedIn',
              Icon: Linkedin,
            },
            {
              href: 'https://t.me/IljaFinTech',
              label: 'IljaFinTech on Telegram',
              Icon: Send,
            },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="
                inline-flex items-center justify-center
                w-9 h-9 sm:w-10 sm:h-10
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                text-[var(--text-muted)]
                hover:text-[var(--fg)]
                hover:border-[var(--accent-1)]/50
                hover:bg-[var(--surface-strong)]
                hover:scale-105
                transition-all duration-300
                cursor-pointer
              "
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
