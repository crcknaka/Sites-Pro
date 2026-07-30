import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { SITE_URL } from '@/lib';

/**
 * lastmod is content-derived, not build-derived: a fresh timestamp on every
 * page at every deploy makes Google discount the signal entirely.
 * Bump CONTENT_UPDATED when page copy actually changes.
 */
const CONTENT_UPDATED = '2026-07-31';
const PROJECTS_UPDATED = '2026-07-31';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: PROJECTS_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/legal`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    'web',
    'web-platforms',
    'ai',
    'consulting',
  ].map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const portfolioPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified: PROJECTS_UPDATED,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...portfolioPages];
}
