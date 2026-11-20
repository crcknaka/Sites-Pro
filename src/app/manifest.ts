import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { SITES, dictionaryFor, localeForHost } from '@/i18n';

/** One manifest per domain — home-screen icon, name and colours. */
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = localeForHost((await headers()).get('host'));
  const t = dictionaryFor(locale);

  return {
    name: t.site.name,
    short_name: t.site.name,
    description: t.footer.tagline,
    lang: SITES[locale].lang,
    start_url: '/',
    display: 'browser',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
