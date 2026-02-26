'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Send, ArrowRight, Briefcase } from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import HeroBackground from './hero-background';

const animatedWords = ['platforms', 'applications', 'systems'];

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
        relative min-h-[70dvh] sm:min-h-[75vh]
        flex items-center justify-center
        pt-20 sm:pt-24 pb-8 sm:pb-12
        px-4 sm:px-6 select-none
        text-[var(--fg)]
      "
    >
      {/* DOT GRID BACKGROUND */}
      <HeroBackground />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl text-center w-full">
        {/* HEADING */}
        <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.15] sm:leading-tight">
          Product-grade{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
            }}
          >
            websites
          </span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline">{' '}</span>
          <br className="hidden md:block" />
          and web{' '}
          <span className="relative inline-block min-w-[120px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[260px]">
            {animatedWords.map((word, index) => (
              <span
                key={word}
                className="bg-clip-text text-transparent absolute left-0 top-0 whitespace-nowrap"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
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
        <p className="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto text-[var(--text-muted)] leading-relaxed">
          We design and build scalable websites, web applications and secure digital platforms — from concept to production.
        </p>

        {/* CREDO */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-medium text-[var(--accent-1)]">
          Digital Done Right.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href={isHome ? '#contact' : '/#contact'}
            className="
              group
              w-full sm:w-auto
              cursor-pointer inline-flex items-center justify-center gap-2
              rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4
              text-sm sm:text-base font-medium text-black
              transition-all duration-300
              hover:opacity-90 hover:scale-[1.02]
              active:scale-[0.98]
              shadow-lg shadow-[var(--accent-1)]/20
            "
            style={{ background: 'var(--accent-1)' }}
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href={isHome ? '#portfolio' : '/#portfolio'}
            className="
              group
              w-full sm:w-auto
              cursor-pointer inline-flex items-center justify-center gap-2
              rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4
              text-sm sm:text-base font-medium
              border border-[var(--border)]
              bg-[var(--surface)]
              text-[var(--fg)]
              transition-all duration-300
              hover:bg-[var(--surface-strong)]
              hover:border-[var(--accent-1)]/30
              hover:shadow-lg
              active:scale-[0.98]
            "
          >
            <Briefcase className="h-4 w-4" />
            View Portfolio
          </Link>
        </div>

        {/* SOCIAL */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center gap-3">
          <span className="text-xs text-[var(--text-muted)]">
            Connect with us
          </span>

          <div className="flex items-center gap-2 sm:gap-3">
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
                  w-10 h-10 sm:w-11 sm:h-11
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
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
