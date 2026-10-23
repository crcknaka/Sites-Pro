import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { SITES, localeForHost } from '@/i18n';

/** Per domain: each site points crawlers at its own sitemap and host. */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const site = SITES[localeForHost((await headers()).get('host'))];

  return {
    rules: [
      // /_next/ must stay open: it holds the CSS, JS and optimized images
      // Googlebot needs to render the pages and index the case screenshots.
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // AI crawlers are welcome — being cited in AI answers is the point.
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-User',
          'Claude-SearchBot',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
          'Bingbot',
          'CCBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
