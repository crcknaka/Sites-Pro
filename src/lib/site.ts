/**
 * Company identity shared by both sites. Per-language values — origin,
 * contact address, analytics — live in src/i18n/config.ts.
 *
 * Canonical origins: sitespro.org serves from www (the apex redirects),
 * sitespro.lv from the apex (www redirects). Every self-referencing URL —
 * metadataBase, canonicals, sitemap, JSON-LD — is built on SITES[locale].url.
 */

export const LEGAL_NAME = 'SIA SitesPro';

/** Profiles of the company itself; each site adds the other domain. */
export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/sites-pro/',
  'https://t.me/IljaFinTech',
];

/** Markets we sell into — used for areaServed in structured data. */
export const AREA_SERVED = ['Latvia', 'European Union', 'Worldwide'];
