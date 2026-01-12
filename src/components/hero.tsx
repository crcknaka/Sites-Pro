'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Send } from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';

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
      }, 500); // Half of transition duration
    }, 2500); // 2.5 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative min-h-[100dvh] sm:min-h-screen
        flex items-center justify-center
        pt-24 sm:pt-28 pb-12
        px-4 sm:px-6 select-none
        text-[var(--fg)]
      "
    >
      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl text-center w-full">
        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight px-2">
          Product-grade{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
            }}
          >
            websites
          </span>{' '}
          <br className="hidden md:block" />
          and web{' '}
          <span className="relative inline-block min-w-[140px] sm:min-w-[180px] md:min-w-[220px]">
            {animatedWords.map((word, index) => (
              <span
                key={word}
                className="bg-clip-text text-transparent absolute left-0 top-0 whitespace-nowrap"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
                  opacity: currentIndex === index && isVisible ? 1 : 0,
                  filter: currentIndex === index && isVisible ? 'blur(0px)' : 'blur(4px)',
                  transition: 'opacity 1s ease-in-out, filter 1s ease-in-out',
                  pointerEvents: 'none',
                }}
              >
                {word}
              </span>
            ))}
            {/* Invisible placeholder to maintain width */}
            <span className="invisible whitespace-nowrap">{animatedWords[0]}</span>
          </span>
        </h1>

        {/* SUBHEADING */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[var(--text-muted)] px-2">
        We design and build scalable websites, web applications and secure digital platforms — from concept to production.
        </p>

        {/* CREDO */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-[var(--accent-1)]">
          Digital Done Right.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <Link
            href={isHome ? "#contact" : "/#contact"}
            className="
              w-full sm:w-auto
              cursor-pointer inline-flex items-center justify-center gap-2 sm:gap-3
              rounded-2xl px-6 sm:px-9 py-3 sm:py-4 
              text-sm sm:text-base font-medium text-black
              transition hover:opacity-95
            "
            style={{ background: 'var(--accent-1)' }}
          >
            Get in Touch 
          </Link>

          <Link
            href={isHome ? "#services" : "/#services"}
            className="
              w-full sm:w-auto
              cursor-pointer inline-flex items-center justify-center
              rounded-2xl px-6 sm:px-9 py-3 sm:py-4
              text-sm sm:text-base font-medium
              border border-[var(--border)]
              bg-[var(--surface)]
              text-[var(--fg)]
              transition hover:bg-[var(--surface-strong)]
            "
          >
            Explore Services
          </Link>
        </div>

        {/* SOCIAL */}
        <div className="mt-10 sm:mt-16 flex flex-col items-center gap-3 sm:gap-4">
          <span className="text-xs sm:text-sm text-[var(--text-muted)]">
            Connect with us:
          </span>

          <div className="flex items-center gap-3">
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
                  w-10 h-10
                  rounded-xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  text-[var(--text-muted)]
                  hover:text-[var(--fg)]
                  hover:border-[var(--accent-1)]
                  hover:bg-[var(--surface-strong)]
                  transition-all
                  cursor-pointer
                "
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
