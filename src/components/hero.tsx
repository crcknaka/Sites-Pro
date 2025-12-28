'use client';

import { Linkedin, Send } from 'lucide-react';

/* brand accents via CSS vars */
const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

export default function Hero() {

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
          We Build{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
            }}
          >
            Digital
          </span>{' '}
          <br className="hidden md:block" />
          Experiences
        </h1>

        {/* SUBHEADING */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[var(--text-muted)] px-2">
          Websites, Applications & Media — crafted with precision and passion.
        </p>

        {/* CREDO */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-[var(--accent-1)]">
          Digital Done Right.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <a
            href="#contact"
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
          </a>

          <a
            href="#services"
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
          </a>
        </div>

        {/* SOCIAL */}
        <div className="mt-10 sm:mt-16 flex flex-col items-center gap-3 sm:gap-4">
          <span className="text-xs sm:text-sm text-[var(--text-subtle)]">
            Connect with us:
          </span>

          <div className="flex items-center gap-4">
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
                  cursor-pointer h-11 w-11
                  flex items-center justify-center rounded-full
                  bg-[var(--surface)]
                  border border-[var(--border)]
                  transition
                  hover:bg-[var(--surface-strong)]
                "
              >
                <Icon className="h-5 w-5 text-[var(--fg)]/80" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
