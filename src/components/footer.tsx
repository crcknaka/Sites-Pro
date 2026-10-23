import Link from 'next/link';
import Image from 'next/image';
import { LinkedinIcon, Send, type LucideIcon } from 'lucide-react';
import { servicesFor } from '@/data/services';
import { SITES, localizePath, otherLocale } from '@/i18n';
import { getI18n } from '@/i18n/server';

export default async function Footer() {
  const { locale, t } = await getI18n();
  const l = (path: string) => localizePath(locale, path);
  const other = otherLocale(locale);
  const email = SITES[locale].email;

  const navServices = servicesFor(locale).map((s) => ({ label: s.short, href: l(s.path) }));
  const navCompany = [
    { label: t.nav.about, href: l('/about') },
    { label: t.nav.portfolio, href: '/portfolio' },
    { label: t.footer.allServices, href: l('/services') },
    ...t.footer.extraLinks,
    { label: t.nav.faq, href: '/#faq' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  return (
    <footer className="relative">
      {/* TOP DIVIDER */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--border), transparent)',
        }}
      />

      <div className="bg-[var(--surface)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">

          {/* MAIN GRID — brand + 3 nav columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

            {/* BRAND */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" aria-label={t.nav.homeLabel} className="relative inline-block h-[56px] w-[56px] select-none">
                <Image
                  src="/logo-dark.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="logo-dark absolute inset-0"
                />
                <Image
                  src="/logo-light.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="logo-light absolute inset-0"
                />
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
                {t.footer.tagline}
              </p>

              <p className="mt-3 text-sm font-medium" style={{ color: 'var(--accent-text)' }}>
                {t.footer.motto}
              </p>
            </div>

            {/* SERVICES */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>
                {t.footer.services}
              </p>
              <ul className="space-y-3">
                {navServices.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>
                {t.footer.company}
              </p>
              <ul className="space-y-3">
                {navCompany.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="col-span-2 lg:col-span-1">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>
                {t.footer.contact}
              </p>
              <div className="grid grid-cols-2 items-start lg:block">
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors select-text"
                    >
                      {email}
                    </a>
                  </li>
                  <li className="text-sm text-[var(--text-muted)]">
                    {t.site.location}
                  </li>
                </ul>

                <div className="flex items-center gap-3 lg:mt-5">
                  <SocialLink
                    href="https://www.linkedin.com/company/sites-pro/"
                    icon={LinkedinIcon}
                    label="Sites Pro on LinkedIn"
                  />
                  <SocialLink
                    href="https://t.me/IljaFinTech"
                    icon={Send}
                    label="IljaFinTech on Telegram"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div
            className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <span>© {new Date().getFullYear()} SIA SitesPro. {t.footer.rights}</span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={SITES[other].url}
                hrefLang={SITES[other].lang}
                lang={SITES[other].lang}
                className="hover:text-[var(--fg)] transition-colors underline"
              >
                {t.footer.switchLabel}
              </a>
              <Link href={l('/privacy')} className="hover:text-[var(--fg)] transition-colors underline">
                {t.footer.privacy}
              </Link>
              <Link href={l('/legal')} className="hover:text-[var(--fg)] transition-colors underline">
                {t.footer.legal}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
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
      <Icon className="h-5 w-5" aria-hidden="true" />
    </Link>
  );
}
