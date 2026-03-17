import Image from 'next/image';
import Link from 'next/link';
import { LinkedinIcon, Send, type LucideIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative">
      {/* TOP DIVIDER */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--border), transparent)',
        }}
      />

      {/* FOOTER SURFACE */}
      <div className="bg-[var(--surface)] backdrop-blur-xl">
        <div
          className="
            mx-auto max-w-7xl
            px-6 py-12
            flex flex-col gap-8
            md:flex-row md:items-center md:justify-between
          "
        >
          {/* LEFT — LOGO + TEXT */}
          <div
            className="
              flex flex-col items-center gap-3
              md:flex-row md:items-center md:gap-4
            "
          >
            {/* LOGO (70x70, theme-safe) */}
            <div className="relative h-[70px] w-[70px]">
              <Image
                src="/logo-dark.svg"
                alt="Sites Pro"
                width={70}
                height={70}
                className="logo-dark absolute inset-0"
              />
              <Image
                src="/logo-light.svg"
                alt="Sites Pro"
                width={70}
                height={70}
                className="logo-light absolute inset-0"
              />
            </div>

            {/* TEXT */}
            <span className="text-sm font-medium text-[var(--text-muted)] text-center md:text-left">
              Digital Done Right.
            </span>
          </div>

          {/* CENTER — SOCIALS */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
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

          {/* RIGHT */}
          <div className="text-sm text-[var(--text-muted)] text-center md:text-right">
            <div>© {new Date().getFullYear()} SIA SitesPro. All rights reserved.</div>
            <div className="mt-2 flex flex-col md:flex-row gap-2 md:gap-4 justify-center md:justify-end">
              <Link
                href="/privacy"
                className="text-xs text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal"
                className="text-xs text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors underline"
              >
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
