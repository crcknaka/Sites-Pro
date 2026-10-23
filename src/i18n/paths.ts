import { SITES, type Locale } from './config';

/**
 * Routes are named in English internally (app/[locale]/services/…); Latvian
 * URLs keep the words sitespro.lv has always used, so existing links and
 * search rankings carry over unchanged. Only the first path segment is
 * translated — service slugs are localized by the service registry itself.
 */
const SEGMENTS: Record<Locale, Record<string, string>> = {
  en: {},
  lv: {
    services: 'pakalpojumi',
    about: 'par-mums',
    privacy: 'privacy-policy',
    legal: 'terms',
  },
};

const REVERSE: Record<Locale, Record<string, string>> = {
  en: {},
  lv: Object.fromEntries(Object.entries(SEGMENTS.lv).map(([k, v]) => [v, k])),
};

function mapFirstSegment(path: string, table: Record<string, string>): string {
  const match = /^\/([^/?#]+)(.*)$/.exec(path);
  if (!match) return path;
  const [, first, rest] = match;
  return table[first] ? `/${table[first]}${rest}` : path;
}

/** Internal route path → the URL a visitor sees on that locale's domain. */
export function localizePath(locale: Locale, path: string): string {
  return mapFirstSegment(path, SEGMENTS[locale]);
}

/** Public URL path on a locale's domain → internal route path (without the locale). */
export function internalPath(locale: Locale, path: string): string {
  return mapFirstSegment(path, REVERSE[locale]);
}

/** Internal path → absolute URL on the locale's own domain. */
export function absoluteUrl(locale: Locale, path: string): string {
  const localized = localizePath(locale, path);
  return `${SITES[locale].url}${localized === '/' ? '' : localized}`;
}
