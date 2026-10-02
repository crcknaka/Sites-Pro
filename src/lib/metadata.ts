import type { Metadata } from 'next';
import { SITE_NAME } from './site';

/**
 * Complete metadata for one page.
 *
 * Next merges metadata shallowly: a page that sets `openGraph` replaces the
 * root object wholesale, so a partial one silently drops og:image, og:type,
 * og:site_name and og:locale — and a page without `twitter` keeps the home
 * page's twitter title. Every page builds its metadata here instead.
 */
export function pageMetadata({
  title,
  description,
  path,
  socialTitle,
  socialDescription,
  image = '/og-image.jpg',
  type = 'website',
  languages,
}: {
  /** Page title; the root template appends " | Sites Pro". */
  title: string;
  description: string;
  /** Canonical path, e.g. '/services/web'. */
  path: string;
  /** Title for share cards — defaults to the full page title. */
  socialTitle?: string;
  socialDescription?: string;
  /**
   * Share image. `false` when the route has its own opengraph-image file:
   * an explicit image here would override the generated one.
   */
  image?: string | false;
  type?: 'website' | 'article';
  /** hreflang alternates, e.g. the matching page on sitespro.lv. */
  languages?: Record<string, string>;
}): Metadata {
  const shareTitle = socialTitle ?? `${title} | ${SITE_NAME}`;
  const shareDescription = socialDescription ?? description;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type,
      locale: 'en_US',
      siteName: SITE_NAME,
      url: path,
      title: shareTitle,
      description: shareDescription,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: shareTitle }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description: shareDescription,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/** sitespro.lv counterpart of an English page, as an hreflang pair. */
export function withLatvian(enUrl: string, lvUrl: string): Record<string, string> {
  return { en: enUrl, lv: lvUrl, 'x-default': enUrl };
}
