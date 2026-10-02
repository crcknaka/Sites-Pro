import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  SOCIAL_PROFILES,
  AREA_SERVED,
} from '@/lib';
import { faqs, type Faq } from '@/data/faqs';
import type { Project } from '@/data/projects';
import { SERVICES, type ServiceDefinition } from '@/data/services';

/** Stable node ids so every schema on the site points at one organization. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': ORG_ID,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        url: SITE_URL,
        // the dark-ink mark — the light one is white and vanishes on white backgrounds
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo-light.svg`,
        },
        image: `${SITE_URL}/og-image.jpg`,
        description: SITE_DESCRIPTION,
        email: CONTACT_EMAIL,
        priceRange: '$$',
        sameAs: SOCIAL_PROFILES,
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
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: CONTACT_EMAIL,
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

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': SITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: 'en',
        publisher: { '@id': ORG_ID },
      }}
    />
  );
}

/* ======================================================
   SERVICES
====================================================== */

export type { ServiceDefinition } from '@/data/services';

/** Kept under its old name for the service pages that import it. */
export const SERVICE_DEFINITIONS = SERVICES;

/** ItemList of all services — rendered on the home page. */
export function ServicesJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Services by Sites Pro',
        itemListElement: SERVICE_DEFINITIONS.map((service, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE_URL}${service.path}`,
          item: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            serviceType: service.serviceType,
            url: `${SITE_URL}${service.path}`,
            provider: { '@id': ORG_ID },
          },
        })),
      }}
    />
  );
}

/** Full Service node — rendered on an individual service page. */
export function ServiceJsonLd({ service }: { service: ServiceDefinition }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}${service.path}#service`,
        name: service.name,
        description: service.description,
        serviceType: service.serviceType,
        url: `${SITE_URL}${service.path}`,
        provider: { '@id': ORG_ID },
        areaServed: AREA_SERVED.map((name) => ({ '@type': 'Place', name })),
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

export function FaqJsonLd({ items = faqs }: { items?: Faq[] } = {}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
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

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [{ name: 'Home', path: '/' }, ...items].map(
          (item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
          }),
        ),
      }}
    />
  );
}

export function ProjectJsonLd({ project }: { project: Project }) {
  const url = `${SITE_URL}/portfolio/${project.slug}`;
  const categories = Array.isArray(project.category)
    ? project.category
    : [project.category];
  // The case study is ABOUT the client's site, not the same thing as it —
  // so the live URL goes into `about`, never into sameAs.
  const about = [
    ...(project.link ? [{ '@type': 'WebSite', url: project.link, name: project.title }] : []),
    ...(project.services ?? []).map((key) => ({
      '@type': 'Service',
      '@id': `${SITE_URL}/services/${key}#service`,
    })),
  ];

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        '@id': `${url}#project`,
        name: project.title,
        headline: `${project.title} — ${categories.join(', ')} case study`,
        description: project.description.trim(),
        url,
        image: `${SITE_URL}${project.images?.[0] ?? project.image}`,
        genre: categories,
        inLanguage: 'en',
        ...(project.tech?.length ? { keywords: project.tech.join(', ') } : {}),
        ...(project.status ? { creativeWorkStatus: project.status } : {}),
        ...(about.length ? { about } : {}),
        ...(project.updated ? { dateModified: project.updated } : {}),
        creator: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        ...(project.logo
          ? { thumbnailUrl: `${SITE_URL}${project.logo}` }
          : {}),
        isPartOf: { '@id': SITE_ID },
      }}
    />
  );
}
