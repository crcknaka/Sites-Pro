import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { projects } from '@/data/projects';
import { findService, servicesFor } from '@/data/services';
import { absoluteUrl, localeForHost, otherLocale, type Locale } from '@/i18n';
import { hreflang } from '@/lib/metadata';

/**
 * One sitemap per domain, each listing its own pages with hreflang links to
 * the other language.
 *
 * lastmod is content-derived, not build-derived: a fresh timestamp on every
 * page at every deploy makes Google discount the signal entirely. Each date
 * below moves only when that page's copy actually changes — services carry
 * theirs in the service registry, cases in Project.updated.
 */
const UPDATED: Record<Locale, { home: string; about: string; legal: string; hub: string }> = {
  en: { home: '2026-10-02', about: '2026-10-02', legal: '2026-07-31', hub: '2026-10-02' },
  // the Latvian site moved onto this codebase on this date
  lv: { home: '2026-10-23', about: '2026-10-23', legal: '2026-10-23', hub: '2026-10-23' },
};
const RIGA_UPDATED = '2026-10-02';
/** Default for cases without their own date: the last portfolio-wide pass. */
const CASES_UPDATED = '2026-09-02';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locale = localeForHost((await headers()).get('host'));
  const other = otherLocale(locale);
  const dates = UPDATED[locale];

  const entry = (
    path: string,
    lastModified: string,
    priority: number,
    changeFrequency: 'weekly' | 'monthly' | 'yearly',
    alternate: string | null = path,
  ) => ({
    url: absoluteUrl(locale, path),
    lastModified,
    changeFrequency,
    priority,
    ...(alternate ? { alternates: { languages: hreflang(locale, path, alternate) } } : {}),
  });

  const caseDates = projects.map((p) => p.updated ?? CASES_UPDATED).sort();
  const newestCase = caseDates[caseDates.length - 1];

  const staticPages: MetadataRoute.Sitemap = [
    entry('/', dates.home, 1, 'weekly'),
    entry('/services', dates.hub, 0.9, 'monthly'),
    entry('/portfolio', newestCase, 0.9, 'monthly'),
    entry('/about', dates.about, 0.8, 'monthly'),
    ...(locale === 'en' ? [entry('/web-development-riga', RIGA_UPDATED, 0.8, 'monthly', null)] : []),
    entry('/privacy', dates.legal, 0.3, 'yearly'),
    entry('/legal', dates.legal, 0.3, 'yearly'),
  ];

  const servicePages: MetadataRoute.Sitemap = servicesFor(locale).map((s) =>
    entry(s.path, s.updated, s.core ? 0.9 : 0.8, 'monthly', findService(other, s.key)?.path ?? null),
  );

  const portfolioPages: MetadataRoute.Sitemap = projects.map((project) =>
    entry(`/portfolio/${project.slug}`, project.updated ?? CASES_UPDATED, 0.6, 'yearly'),
  );

  return [...staticPages, ...servicePages, ...portfolioPages];
}
