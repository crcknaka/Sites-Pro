import Link from 'next/link';
import Image from 'next/image';
import { LinkedinIcon, Send, type LucideIcon } from 'lucide-react';
import { ACCENT_1 } from '@/lib';

const navServices = [
  { label: 'Websites', href: '/services/web' },
  { label: 'Web Platforms', href: '/services/web-platforms' },
  { label: 'AI & Automations', href: '/services/ai' },
  { label: 'Consulting', href: '/services/consulting' },
];

const navCompany = [
  { label: 'About', href: '/#about' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
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
              <Link href="/" aria-label="Go to home" className="relative inline-block h-[56px] w-[56px] select-none">
                <Image
                  src="/logo-dark.svg"
                  alt="Sites Pro"
                  width={56}
                  height={56}
                  className="logo-dark absolute inset-0"
                />
                <Image
                  src="/logo-light.svg"
                  alt="Sites Pro"
                  width={56}
                  height={56}
                  className="logo-light absolute inset-0"
                />
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
                Product-grade websites, web platforms and AI automations —
                built to scale.
              </p>

              <p className="mt-3 text-sm font-medium" style={{ color: ACCENT_1 }}>
                Digital Done Right.
              </p>
            </div>

            {/* SERVICES */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT_1 }}>
                Services
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT_1 }}>
                Company
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT_1 }}>
                Contact
              </p>
              <div className="grid grid-cols-2 items-start lg:block">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:info@sitespro.org"
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors select-text"
                    >
                      info@sitespro.org
                    </a>
                  </li>
                  <li className="text-sm text-[var(--text-muted)]">
                    Europe — working globally
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
            <span>© {new Date().getFullYear()} SIA SitesPro. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-[var(--fg)] transition-colors underline">
                Privacy Policy
              </Link>
              <Link href="/legal" className="hover:text-[var(--fg)] transition-colors underline">
                Legal Notice
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
    </Link>
  );
}
