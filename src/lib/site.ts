/**
 * Canonical site identity.
 *
 * SITE_URL is the host the site actually serves from: the apex domain
 * 307-redirects to www, so every self-referencing URL (metadataBase,
 * canonicals, sitemap, robots, JSON-LD) must use www — otherwise sitemap
 * entries and structured-data URLs point at redirects.
 */
export const SITE_URL = 'https://www.sitespro.org';

export const SITE_NAME = 'Sites Pro';
export const LEGAL_NAME = 'SIA SitesPro';

export const SITE_DESCRIPTION =
  'Product-grade websites, platforms and AI automations built to scale.';

export const CONTACT_EMAIL = 'info@sitespro.org';

export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/sites-pro/',
  'https://t.me/IljaFinTech',
];

/** Markets we sell into — used for areaServed in structured data. */
export const AREA_SERVED = ['Latvia', 'European Union', 'Worldwide'];
