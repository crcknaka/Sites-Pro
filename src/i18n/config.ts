/**
 * One app, two sites: the language is picked by the domain, not by a path
 * prefix. sitespro.org serves English, sitespro.lv serves Latvian.
 *
 * Internally every route lives under app/[locale]; src/proxy.ts rewrites
 * `sitespro.lv/pakalpojumi` to `/lv/services` and so on, so visitors and
 * search engines only ever see the unprefixed, localized URLs.
 */

export const LOCALES = ['en', 'lv'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

interface SiteConfig {
  /** Canonical origin — every self-referencing URL is built on it. */
  url: string;
  /** Hosts that serve this locale. The first non-canonical ones redirect. */
  hosts: string[];
  /** BCP 47 tag for <html lang> and inLanguage. */
  lang: string;
  ogLocale: string;
  email: string;
  /** SitesPro Analytics (Umami) — each domain keeps its own stats. */
  umami: { id: string; domains: string };
}

export const SITES: Record<Locale, SiteConfig> = {
  en: {
    url: 'https://www.sitespro.org',
    hosts: ['www.sitespro.org', 'sitespro.org'],
    lang: 'en',
    ogLocale: 'en_US',
    email: 'info@sitespro.org',
    umami: { id: '9de7302e-c7b9-4a0a-ac4b-9fce7368a3e8', domains: 'www.sitespro.org,sitespro.org' },
  },
  lv: {
    url: 'https://sitespro.lv',
    hosts: ['sitespro.lv', 'www.sitespro.lv'],
    lang: 'lv',
    ogLocale: 'lv_LV',
    email: 'info@sitespro.lv',
    umami: { id: '7752540f-f096-4ac5-8006-33441c960b0e', domains: 'sitespro.lv' },
  },
};

/**
 * Which locale a request host serves. Locally, `lv.localhost:3000` opens the
 * Latvian site (browsers resolve *.localhost to the loopback address) and
 * plain `localhost:3000` the English one.
 */
export function localeForHost(host: string | null): Locale {
  const name = (host ?? '').split(':')[0].toLowerCase();
  if (SITES.lv.hosts.includes(name) || name === 'lv.localhost') return 'lv';
  return DEFAULT_LOCALE;
}

/** The other language's counterpart, for hreflang and the language switch. */
export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'lv' : 'en');
