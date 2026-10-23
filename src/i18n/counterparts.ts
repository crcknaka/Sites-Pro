import { servicesFor } from '@/data/services';
import { localizePath, otherLocale, type Locale } from './index';

/** Pages both sites have under the same internal path. */
const SHARED = ['/', '/services', '/portfolio', '/about', '/privacy', '/legal'];

/**
 * Public path on this site → public path of the same page on the other
 * language's site. Feeds the language switch in the header, which has to know
 * the counterpart of whatever page it is rendered on. The same pairs are what
 * pageMetadata() declares as hreflang. Case studies share their slug and are
 * matched by prefix in the switch, so they are not listed here.
 */
export function counterpartMap(locale: Locale): Record<string, string> {
  const other = otherLocale(locale);
  const map: Record<string, string> = {};

  for (const path of SHARED) {
    map[localizePath(locale, path)] = localizePath(other, path);
  }
  for (const service of servicesFor(locale)) {
    const match = servicesFor(other).find((s) => s.key === service.key);
    if (match) map[localizePath(locale, service.path)] = localizePath(other, match.path);
  }
  return map;
}
