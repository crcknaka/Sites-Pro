'use client';

import { useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { SITES, dictionaryFor, otherLocale, type Locale } from '@/i18n';

/* ======================================================
   LANGUAGE SWITCH — LV · EN. The two languages are two domains, so the
   other language is a plain cross-site link to the same page there
   (counterparts map from the server), or to its home page when that
   site has no such page.
====================================================== */

/** Same order on both sites, so the switch never moves under the cursor. */
const ORDER: Locale[] = ['lv', 'en'];

const subscribe = () => () => {};
const getHost = () => window.location.host;
const getServerHost = () => '';

/** Locally the sites are localhost / lv.localhost on the same port. */
function originFor(locale: Locale, host: string): string {
  const [name, port] = host.split(':');
  if (name === 'localhost' || name.endsWith('.localhost')) {
    return `http://${locale === 'lv' ? 'lv.localhost' : 'localhost'}${port ? `:${port}` : ''}`;
  }
  return SITES[locale].url;
}

export default function LanguageSwitch({
  locale,
  counterparts,
  className = '',
}: {
  locale: Locale;
  counterparts: Record<string, string>;
  className?: string;
}) {
  const pathname = usePathname();
  const host = useSyncExternalStore(subscribe, getHost, getServerHost);
  const other = otherLocale(locale);
  const t = dictionaryFor(locale).languageSwitch;

  const path =
    counterparts[pathname] ?? (pathname.startsWith('/portfolio/') ? pathname : '/');
  const href = `${originFor(other, host)}${path === '/' ? '' : path}`;

  return (
    <nav
      aria-label={t.label}
      className={`inline-flex h-9 items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-xs font-semibold ${className}`}
    >
      {ORDER.map((l) =>
        l === locale ? (
          <span
            key={l}
            aria-current="true"
            className="rounded-full bg-[var(--surface-strong)] px-2.5 py-1 text-[var(--fg)]"
          >
            {l.toUpperCase()}
          </span>
        ) : (
          <a
            key={l}
            href={href}
            hrefLang={SITES[l].lang}
            lang={SITES[l].lang}
            aria-label={t.other}
            className="rounded-full px-2.5 py-1 text-[var(--text-muted)] transition-colors hover:text-[var(--fg)]"
          >
            {l.toUpperCase()}
          </a>
        ),
      )}
    </nav>
  );
}
