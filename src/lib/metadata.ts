import type { Metadata } from 'next';
import {
  SITES,
  absoluteUrl,
  dictionaryFor,
  localizePath,
  otherLocale,
  type Locale,
} from '@/i18n';

/**
 * Complete metadata for one page.
 *
 * Next merges metadata shallowly: a page that sets `openGraph` replaces the
 * root object wholesale, so a partial one silently drops og:image, og:type,
 * og:site_name and og:locale — and a page without `twitter` keeps the home
 * page's twitter title. Every page builds its metadata here instead.
 */
export function pageMetadata({
  locale,
  title,
  description,
  path,
  alternate,
  socialTitle,
  socialDescription,
  image = '/og-image.jpg',
  type = 'website',
  absoluteTitle = false,
}: {
  locale: Locale;
  /** Page title; the root template appends " | Sites Pro". */
  title: string;
  description: string;
  /** Internal route path, e.g. '/services/web' — localized for the canonical. */
  path: string;
  /**
   * The same page on the other language's site (internal path), which becomes
   * a reciprocal hreflang pair. Defaults to `path`; `null` when there is none.
   */
  alternate?: string | null;
  /** Title for share cards — defaults to the full page title. */
  socialTitle?: string;
  socialDescription?: string;
  /**
   * Share image. `false` when the route has its own opengraph-image file:
   * an explicit image here would override the generated one.
   */
  image?: string | false;
  type?: 'website' | 'article';
  /** Skip the " | Sites Pro" template (the home page carries the brand already). */
  absoluteTitle?: boolean;
}): Metadata {
  const siteName = dictionaryFor(locale).site.name;
  const shareTitle = socialTitle ?? (absoluteTitle ? title : `${title} | ${siteName}`);
  const shareDescription = socialDescription ?? description;
  const canonical = localizePath(locale, path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      ...(alternate !== null ? { languages: hreflang(locale, path, alternate ?? path) } : {}),
    },
    openGraph: {
      type,
      locale: SITES[locale].ogLocale,
      siteName,
      url: canonical,
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

/**
 * hreflang pair across the two domains. Google ignores one-sided pairs, so
 * both pages must declare each other — they do, since both are built here.
 * English is the x-default: it is the version for everyone outside Latvia.
 */
export function hreflang(locale: Locale, path: string, alternate: string): Record<string, string> {
  const other = otherLocale(locale);
  const urls = { [locale]: absoluteUrl(locale, path), [other]: absoluteUrl(other, alternate) };
  return { en: urls.en, lv: urls.lv, 'x-default': urls.en };
}
