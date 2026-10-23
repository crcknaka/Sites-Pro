import { LEGAL_NAME, SOCIAL_PROFILES, AREA_SERVED } from '@/lib';
import { SITES, absoluteUrl, dictionaryFor, otherLocale, type Locale } from '@/i18n';
import { getLocale } from '@/i18n/server';
import { faqsFor, type Faq } from '@/data/faqs';
import type { Project } from '@/data/projects';
import { servicesFor, type ServiceDefinition } from '@/data/services';

/** Stable node ids so every schema on a site points at one organization. */
const orgId = (locale: Locale) => `${SITES[locale].url}/#organization`;
const siteId = (locale: Locale) => `${SITES[locale].url}/#website`;

const LANGUAGE_NAMES: Record<Locale, string> = { en: 'English', lv: 'Latvian' };

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export async function OrganizationJsonLd() {
  const locale = await getLocale();
  const site = SITES[locale];
  const t = dictionaryFor(locale);

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': orgId(locale),
        name: t.site.name,
        legalName: LEGAL_NAME,
        url: site.url,
        // the dark-ink mark — the light one is white and vanishes on white backgrounds
        logo: {
          '@type': 'ImageObject',
          url: `${site.url}/logo-light.svg`,
        },
        image: `${site.url}/og-image.jpg`,
        description: t.site.description,
        email: site.email,
        priceRange: '$$',
        // the same company's site in the other language
        sameAs: [...SOCIAL_PROFILES, SITES[otherLocale(locale)].url],
        knowsAbout: [
          'Web development',
          'Next.js',
          'React',
          'TypeScript',
          'Web platform development',
          'AI automation',
          'Large language model integration',
          'Payment systems',
          'Fintech',
          'Technical consulting',
          'Search engine optimization',
          'Generative engine optimization',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: site.email,
          contactType: 'customer service',
          areaServed: AREA_SERVED,
          availableLanguage: ['English', 'Latvian', 'Russian'],
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Riga',
          addressCountry: 'LV',
        },
        areaServed: AREA_SERVED.map((name) => ({ '@type': 'Place', name })),
      }}
    />
  );
}

export async function WebsiteJsonLd() {
  const locale = await getLocale();
  const t = dictionaryFor(locale);

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': siteId(locale),
        name: t.site.name,
        url: SITES[locale].url,
        description: t.site.description,
        inLanguage: SITES[locale].lang,
        publisher: { '@id': orgId(locale) },
      }}
    />
  );
}

/* ======================================================
   SERVICES
====================================================== */

/** ItemList of all services — rendered on the home page. */
export async function ServicesJsonLd() {
  const locale = await getLocale();
  const t = dictionaryFor(locale);

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `${t.nav.services} — ${t.site.name}`,
        itemListElement: servicesFor(locale).map((service, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: absoluteUrl(locale, service.path),
          item: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            serviceType: service.serviceType,
            url: absoluteUrl(locale, service.path),
            provider: { '@id': orgId(locale) },
          },
        })),
      }}
    />
  );
}

/** Full Service node — rendered on an individual service page. */
export async function ServiceJsonLd({ service }: { service: ServiceDefinition }) {
  const locale = await getLocale();
  const url = absoluteUrl(locale, service.path);

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.name,
        description: service.description,
        serviceType: service.serviceType,
        url,
        provider: { '@id': orgId(locale) },
        areaServed: AREA_SERVED.map((name) => ({ '@type': 'Place', name })),
        availableLanguage: [LANGUAGE_NAMES[locale]],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: service.name,
          itemListElement: service.offers.map((offer) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: offer },
          })),
        },
      }}
    />
  );
}

/* ======================================================
   FAQ / BREADCRUMBS / PORTFOLIO
====================================================== */

export async function FaqJsonLd({ items }: { items?: Faq[] } = {}) {
  const locale = await getLocale();
  const list = items ?? faqsFor(locale);

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: SITES[locale].lang,
        mainEntity: list.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }}
    />
  );
}

/** Breadcrumb trail after "Home"; paths are internal and get localized here. */
export async function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const locale = await getLocale();
  const t = dictionaryFor(locale);

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [{ name: t.breadcrumbHome, path: '/' }, ...items].map(
          (item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: absoluteUrl(locale, item.path),
          }),
        ),
      }}
    />
  );
}

export async function ProjectJsonLd({ project }: { project: Project }) {
  const locale = await getLocale();
  const base = SITES[locale].url;
  const url = `${base}/portfolio/${project.slug}`;
  const categories = Array.isArray(project.category)
    ? project.category
    : [project.category];
  const services = servicesFor(locale);
  // The case study is ABOUT the client's site, not the same thing as it —
  // so the live URL goes into `about`, never into sameAs.
  const about = [
    ...(project.link ? [{ '@type': 'WebSite', url: project.link, name: project.title }] : []),
    ...(project.services ?? [])
      .map((key) => services.find((s) => s.key === key))
      .filter((s): s is ServiceDefinition => s !== undefined)
      .map((s) => ({ '@type': 'Service', '@id': `${absoluteUrl(locale, s.path)}#service` })),
  ];

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        '@id': `${url}#project`,
        name: project.title,
        headline: `${project.title} — ${categories.join(', ')} ${dictionaryFor(locale).caseStudy.ogEyebrow.toLowerCase()}`,
        description: project.description.trim(),
        url,
        image: `${base}${project.images?.[0] ?? project.image}`,
        genre: categories,
        inLanguage: SITES[locale].lang,
        ...(project.tech?.length ? { keywords: project.tech.join(', ') } : {}),
        ...(project.status ? { creativeWorkStatus: project.status } : {}),
        ...(about.length ? { about } : {}),
        ...(project.updated ? { dateModified: project.updated } : {}),
        creator: { '@id': orgId(locale) },
        publisher: { '@id': orgId(locale) },
        ...(project.logo ? { thumbnailUrl: `${base}${project.logo}` } : {}),
        isPartOf: { '@id': siteId(locale) },
      }}
    />
  );
}
