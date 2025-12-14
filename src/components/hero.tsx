'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Linkedin, Facebook, Send } from 'lucide-react';

/* brand accents via CSS vars */
const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

/* -------------------------------------------------------
  helper: scroll to section (no URL change)
------------------------------------------------------- */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export default function Hero() {
  /* -------------------------------------------------------
    scroll target from other pages
  ------------------------------------------------------- */
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTarget');
    if (!target) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      sessionStorage.removeItem('scrollTarget');
    });
  }, []);

  return (
    <section
      id="home"
      className="
        relative min-h-screen
        flex items-center justify-center
        px-6 select-none
        text-[var(--fg)]
      "
    >
      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl text-center">
        {/* LOGO (theme-safe) */}
        <div className="mb-10 flex justify-center">
          <div className="relative h-[92px] w-[92px]">
            <Image
              src="/logo-dark.png"
              alt="Sites Pro"
              width={92}
              height={92}
              className="logo-dark absolute inset-0"
              priority
            />
            <Image
              src="/logo-light.png"
              alt="Sites Pro"
              width={92}
              height={92}
              className="logo-light absolute inset-0"
              priority
            />
          </div>
        </div>

        {/* HEADING */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          We Build{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
            }}
          >
            Digital
          </span>
          <br className="hidden md:block" />
          Experiences
        </h1>

        {/* SUBHEADING */}
        <p className="mt-8 text-lg md:text-xl max-w-3xl mx-auto text-[var(--text-muted)]">
          Websites, Applications & Media — crafted with precision and passion.
        </p>

        {/* CREDO */}
        <p className="mt-4 text-base font-medium text-[var(--accent-1)]">
          Digital Done Right.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="
              cursor-pointer inline-flex items-center justify-center gap-3
              rounded-2xl px-9 py-4 font-medium text-black
              transition hover:opacity-95
            "
            style={{ background: 'var(--accent-1)' }}
          >
            Get in Touch <span aria-hidden>→</span>
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className="
              cursor-pointer inline-flex items-center justify-center
              rounded-2xl px-9 py-4 font-medium
              border border-[var(--border)]
              bg-[var(--surface)]
              text-[var(--fg)]
              transition hover:bg-[var(--surface-strong)]
            "
          >
            Explore Services
          </button>
        </div>

        {/* SOCIAL */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <span className="text-sm text-[var(--text-subtle)]">
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
                href: 'https://www.facebook.com/ilja.kovalenko',
                label: 'Ilja on Facebook',
                Icon: Facebook,
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
