import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib';

export default function robots(): MetadataRoute.Robots {
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
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
