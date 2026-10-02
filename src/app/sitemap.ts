import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { SERVICES, SERVICES_HUB_LV } from '@/data/services';
import { SITE_URL } from '@/lib';

/**
 * lastmod is content-derived, not build-derived: a fresh timestamp on every
 * page at every deploy makes Google discount the signal entirely. Each date
 * below moves only when that page's copy actually changes — services carry
 * theirs in the service registry, cases in Project.updated.
 */
const HOME_UPDATED = '2026-10-02';
const ABOUT_UPDATED = '2026-10-02';
const LEGAL_UPDATED = '2026-07-31';
const RIGA_UPDATED = '2026-10-02';
/** Default for cases without their own date: the last portfolio-wide pass. */
const CASES_UPDATED = '2026-09-02';

const LV_HOME = 'https://sitespro.lv';

const pair = (en: string, lv: string) => ({
  languages: { en, lv, 'x-default': en },
});

export default function sitemap(): MetadataRoute.Sitemap {
  const caseDates = projects.map((p) => p.updated ?? CASES_UPDATED).sort();
  const newestCase = caseDates[caseDates.length - 1];

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: HOME_UPDATED,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: pair(SITE_URL, LV_HOME),
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: '2026-10-02',
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: pair(`${SITE_URL}/services`, SERVICES_HUB_LV),
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: newestCase,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: ABOUT_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/web-development-riga`,
      lastModified: RIGA_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/legal`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}${s.path}`,
    lastModified: s.updated,
    changeFrequency: 'monthly' as const,
    priority: s.core ? 0.9 : 0.8,
    ...(s.lv ? { alternates: pair(`${SITE_URL}${s.path}`, s.lv) } : {}),
  }));

  const portfolioPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified: project.updated ?? CASES_UPDATED,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...portfolioPages];
}
