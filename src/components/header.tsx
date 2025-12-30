'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';

/* brand accent */
const ACCENT = 'var(--accent-1)';

type NavItem =
  | { label: string; type: 'section'; target: string }
  | { label: string; type: 'page'; href: string };

const navItems: NavItem[] = [
  { label: 'Home', type: 'section', target: 'home' },
  { label: 'Services', type: 'section', target: 'services' },
  { label: 'Portfolio', type: 'section', target: 'portfolio' },
  { label: 'About', type: 'section', target: 'about' },
  { label: 'FAQ', type: 'section', target: 'faq' },
  { label: 'Contact', type: 'section', target: 'contact' },
];

const SPRING = {
  stiffness: 0.045,
  damping: 0.88,
};

const UNDERLINE_PADDING = 0.32;

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isAboutPage = pathname === '/about';
  const isServicesPage = pathname.startsWith('/services');
  const isPortfolioPage = pathname.startsWith('/portfolio');

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const underline = useRef({
    x: 0,
    width: 0,
    vx: 0,
    targetX: 0,
    targetW: 0,
  });

  const [, force] = useState(0);

  /* scroll spy */
  useEffect(() => {
    if (!isHome) return;

    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestRatio = 0;
        let bestId = '';

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          if (!target.id) return;
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestId = target.id;
          }
        });

        if (bestId) {
          setActive(bestId);
          // Update URL hash without scrolling
          if (window.location.hash !== `#${bestId}`) {
            window.history.replaceState(null, '', `#${bestId}`);
          }
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  /* handle hash on page load */
  useEffect(() => {
    if (!isHome) return;

    const hash = window.location.hash.slice(1);
    if (hash) {
      // Set active section based on hash
      setActive(hash);
    }
  }, [isHome]);

  useEffect(() => {
    if (isAboutPage) {
      setActive('about');
      setVisible(true);
    } else if (isServicesPage) {
      setActive('services');
      setVisible(true);
    } else if (isPortfolioPage) {
      setActive('portfolio');
      setVisible(true);
    } else if (!isHome) {
      // For other pages, hide underline
      setActive('');
      setVisible(false);
    }
  }, [isAboutPage, isServicesPage, isPortfolioPage, isHome]);

  /* underline target */
  useLayoutEffect(() => {
    if (!navRef.current || !active) {
      setVisible(false);
      return;
    }

    // Find the link by data-key attribute
    const links = navRef.current.querySelectorAll<HTMLElement>('a[data-key]');
    const link = Array.from(links).find(
      (el) => el.getAttribute('data-key') === active
    );

    if (!link) {
      setVisible(false);
      return;
    }

    const text = link.querySelector<HTMLElement>('span');
    if (!text) {
      setVisible(false);
      return;
    }

    const navRect = navRef.current.getBoundingClientRect();
    const textRect = text.getBoundingClientRect();

    const width = textRect.width * (1 + UNDERLINE_PADDING);
    const x = textRect.left - navRect.left - (width - textRect.width) / 2;

    underline.current.targetX = x;
    underline.current.targetW = width;

    setVisible(true);
  }, [active]);

  /* spring animation */
  useEffect(() => {
    let raf: number;

    const tick = () => {
      const u = underline.current;

      u.vx += (u.targetX - u.x) * SPRING.stiffness;
      u.vx *= SPRING.damping;

      u.x += u.vx;
      u.width += (u.targetW - u.width) * 0.1;

      force((n) => n + 1);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-30 border-b border-[var(--border)]"
        style={{
          boxSizing: 'border-box',
          overflow: 'clip',
        }}
      >
        {/* Darkening overlay for dark theme */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 dark-overlay"
        />
        
        {/* Light overlay for light theme */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 light-overlay"
        />
        
        {/* Backdrop blur layer with enhanced opacity */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: 'color-mix(in oklab, var(--surface) 95%, transparent)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        />

        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Go to home"
            className="relative block h-[70px] w-[70px] select-none"
          >
            <Image
              src="/logo-dark.svg"
              alt="Logo"
              width={70}
              height={70}
              className="logo-dark absolute inset-0"
              priority
            />
            <Image
              src="/logo-light.svg"
              alt="Logo"
              width={70}
              height={70}
              className="logo-light absolute inset-0"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <div ref={navRef} className="relative hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => {
              const key = item.type === 'section' ? item.target : item.href;
              // Fixed: Navigate to home with hash for sections
              const href = item.type === 'section' 
                ? (isHome ? `#${item.target}` : `/#${item.target}`)
                : item.href;

              const isActive =
                item.type === 'section' ? active === item.target : pathname === item.href;

              return (
                <Link
                  key={item.label}
                  data-key={key}
                  href={href}
                  className={`
                    cursor-pointer select-none
                    transition-colors transition-transform
                    active:scale-[0.97]
                    ${
                      isActive
                        ? 'text-[var(--fg)]'
                        : 'text-[var(--text-muted)] hover:text-[var(--fg)]'
                    }
                  `}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <span
              className="absolute -bottom-1 h-[1.5px]"
              style={{
                transform: `translateX(${underline.current.x}px)`,
                width: underline.current.width,
                background: ACCENT,
                opacity: visible ? 1 : 0,
                transition: 'opacity 220ms ease',
              }}
            />
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            <Link
              href={isHome ? "#contact" : "/#contact"}
              className="
                cursor-pointer select-none
                rounded-lg px-4 py-2 text-sm font-medium
                text-black
                transition-transform active:scale-[0.96]
              "
              style={{ background: ACCENT }}
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE */}
          <button 
            onClick={() => setOpen(true)} 
            className="cursor-pointer select-none md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-[var(--fg)]" />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`
          fixed inset-0 z-[60]
          bg-[var(--bg)]/60
          backdrop-blur-sm
          transition
          ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}
        `}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <aside
        className={`
          fixed right-4 top-4 z-[70]
          w-[48%] max-w-[280px]
          rounded-3xl border border-[var(--border)]
          bg-[var(--surface)]
          backdrop-blur-xl
          shadow-2xl
          transition
          ${open ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-6 opacity-0'}
        `}
      >
        {/* Header with Theme Toggle and Close Button */}
        <div className="flex items-center justify-between px-5 pt-5">
          <ThemeToggle />
          <button
            onClick={() => setOpen(false)}
            className="
              cursor-pointer select-none
              p-2 rounded-lg
              hover:bg-[var(--surface-strong)]
              transition-colors
              active:scale-[0.96]
            "
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-[var(--fg)]" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center gap-2 px-5 pt-6 pb-5">
          {navItems.map((item) => {
            // Fixed: Navigate to home with hash for sections from any page
            const href = item.type === 'section' 
              ? (isHome ? `#${item.target}` : `/#${item.target}`)
              : item.href;
            const isActive =
              item.type === 'section' ? active === item.target : pathname === item.href;

            return (
              <Link
                key={item.label}
                href={href}
                onClick={() => setOpen(false)}
                className={`
                  w-full
                  text-center
                  cursor-pointer select-none
                  rounded-xl px-4 py-2.5
                  text-sm font-medium
                  transition-all
                  active:scale-[0.98]
                  ${
                    isActive
                      ? 'text-[var(--fg)] bg-[var(--surface-strong)]'
                      : 'text-[var(--text-muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--fg)]'
                  }
                `}
                style={isActive ? { 
                  color: ACCENT,
                  border: `1px solid ${ACCENT}40`
                } : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          {/* CTA Button */}
          <div className="w-full pt-4">
            <Link
              href={isHome ? "#contact" : "/#contact"}
              onClick={() => setOpen(false)}
              className="
                w-full
                block
                text-center
                cursor-pointer select-none
                rounded-xl px-4 py-3
                text-sm font-medium text-black
                transition-all
                active:scale-[0.98]
                hover:opacity-90
              "
              style={{ background: ACCENT }}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
