'use client';

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { ACCENT } from '@/lib';
import { dictionaryFor, localizePath, type Locale } from '@/i18n';

/**
 * On the home page every item scrolls to its section. Elsewhere the items
 * that have a page of their own link to it, so the nav carries real links
 * to /services, /portfolio and /about instead of anchors on the home page.
 */
type NavItem = { label: string; target: string; page?: string };

function navItemsFor(locale: Locale): NavItem[] {
  const t = dictionaryFor(locale).nav;
  return [
    { label: t.home, target: 'home', page: '/' },
    { label: t.services, target: 'services', page: localizePath(locale, '/services') },
    { label: t.portfolio, target: 'portfolio', page: '/portfolio' },
    { label: t.about, target: 'about', page: localizePath(locale, '/about') },
    { label: t.faq, target: 'faq' },
    { label: t.contact, target: 'contact' },
  ];
}

const UNDERLINE_PADDING = 0.32;

export default function Header({ locale }: { locale: Locale }) {
  const t = dictionaryFor(locale).nav;
  const navItems = useMemo(() => navItemsFor(locale), [locale]);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [open, setOpen] = useState(false);
  // home page: set by the scroll spy below
  const [sectionActive, setSectionActive] = useState('');

  const navRef = useRef<HTMLElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const hrefFor = (item: NavItem) =>
    isHome ? `#${item.target}` : (item.page ?? `/#${item.target}`);

  /* ---------- which item is active ---------- */

  // Off the home page the active item follows the route.
  const active = isHome
    ? sectionActive
    : (navItems.find((i) => i.page && i.page !== '/' && pathname.startsWith(i.page))?.target ?? '');

  // On the home page the section crossing a thin band at 40% of the viewport
  // is active. A band with threshold 0 works for sections of any height — the
  // old ratio thresholds never fired for sections taller than the screen.
  useEffect(() => {
    if (!isHome) return;

    const sections = ['home', 'services', 'portfolio', 'about', 'faq', 'contact']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          setSectionActive(id);
          // keep the address shareable, but no #home on the bare home page
          const hash = id === 'home' ? '' : `#${id}`;
          if (window.location.hash !== hash) {
            window.history.replaceState(
              null,
              '',
              `${window.location.pathname}${window.location.search}${hash}`
            );
          }
        }
      },
      { rootMargin: '-40% 0px -59% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  /* ---------- underline: measured, then moved by a CSS transition ----------
     Written straight to the element's style — it is pure layout, so it needs
     neither React state nor a re-render. */

  const measure = useCallback(() => {
    const nav = navRef.current;
    const line = underlineRef.current;
    if (!nav || !line) return;
    const text = active
      ? nav.querySelector<HTMLElement>(`a[data-key="${active}"] span`)
      : null;
    if (!text) {
      line.style.opacity = '0';
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const textRect = text.getBoundingClientRect();
    const w = textRect.width * (1 + UNDERLINE_PADDING);
    const x = textRect.left - navRect.left - (w - textRect.width) / 2;
    line.style.transform = `translateX(${x}px)`;
    line.style.width = `${w}px`;
    line.style.opacity = '1';
  }, [active]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener('resize', measure);
    // web fonts can change the label widths after the first paint
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  /* ---------- mobile menu ---------- */

  const closeMenu = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeMenu]);

  return (
    <>
      <a
        href="#main"
        className="
          sr-only focus:not-sr-only
          focus:fixed focus:left-4 focus:top-4 focus:z-[80]
          focus:rounded-xl focus:bg-[var(--bg)] focus:px-4 focus:py-2
          focus:text-sm focus:text-[var(--fg)] focus:shadow-lg
        "
      >
        {t.skip}
      </a>

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

        <div className="relative mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* LOGO — theme CSS hides one of the two marks, so neither is preloaded */}
          <Link
            href="/"
            aria-label={t.homeLabel}
            className="relative block h-[54px] w-[54px] sm:h-[70px] sm:w-[70px] select-none"
          >
            <Image
              src="/logo-dark.svg"
              alt=""
              width={70}
              height={70}
              loading="eager"
              className="logo-dark absolute inset-0 h-full w-full"
            />
            <Image
              src="/logo-light.svg"
              alt=""
              width={70}
              height={70}
              loading="eager"
              className="logo-light absolute inset-0 h-full w-full"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            ref={navRef}
            aria-label={t.main}
            className="relative hidden items-center gap-8 text-sm md:flex"
          >
            {navItems.map((item) => {
              const isActive = active === item.target;
              return (
                <Link
                  key={item.label}
                  data-key={item.target}
                  href={hrefFor(item)}
                  aria-current={isActive ? (isHome ? 'location' : 'page') : undefined}
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
              ref={underlineRef}
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-[1.5px] w-0 opacity-0 motion-reduce:!transition-none"
              style={{
                background: ACCENT,
                transition:
                  'transform 480ms cubic-bezier(0.34, 1.4, 0.64, 1), width 320ms ease, opacity 220ms ease',
              }}
            />
          </nav>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle locale={locale} />

            <Link
              href={isHome ? '#contact' : '/#contact'}
              className="btn-primary !px-4 !py-2 !text-sm"
            >
              {t.cta}
            </Link>
          </div>

          {/* MOBILE */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            className="cursor-pointer select-none md:hidden"
            aria-label={t.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6 text-[var(--fg)]" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        aria-hidden="true"
        className={`
          fixed inset-0 z-[60]
          bg-[var(--bg)]/60
          backdrop-blur-sm
          transition
          ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}
        `}
        onClick={() => closeMenu(false)}
      />

      {/* MOBILE MENU — inert while closed, so its links stay out of the tab order */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t.menu}
        inert={!open}
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
          <ThemeToggle locale={locale} />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => closeMenu()}
            className="
              cursor-pointer select-none
              p-2 rounded-lg
              hover:bg-[var(--surface-strong)]
              transition-colors
              active:scale-[0.96]
            "
            aria-label={t.closeMenu}
          >
            <X className="h-5 w-5 text-[var(--fg)]" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation */}
        <nav aria-label={t.mobile} className="flex flex-col items-center gap-2 px-5 pt-6 pb-5">
          {navItems.map((item) => {
            const isActive = active === item.target;

            return (
              <Link
                key={item.label}
                href={hrefFor(item)}
                onClick={() => closeMenu(false)}
                aria-current={isActive ? (isHome ? 'location' : 'page') : undefined}
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
                  color: 'var(--accent-text)',
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
              href={isHome ? '#contact' : '/#contact'}
              onClick={() => closeMenu(false)}
              className="btn-primary w-full !text-sm"
            >
              {t.cta}
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
