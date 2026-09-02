import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  SOCIAL_PROFILES,
  AREA_SERVED,
} from '@/lib';
import { faqs } from '@/data/faqs';
import type { Project } from '@/data/projects';

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
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo-dark.svg`,
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
          availableLanguage: ['English', 'Russian'],
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'LV',
          addressRegion: 'Latvia',
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

export interface ServiceDefinition {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  offers: string[];
}

export const SERVICE_DEFINITIONS: ServiceDefinition[] = [
  {
    path: '/services/web',
    name: 'Website Development',
    serviceType: 'Web Development',
    description:
      'High-performance websites built for growth. Scalable, fast and product-ready, with Core Web Vitals, accessibility and search visibility built in from day one.',
    offers: [
      'Marketing and corporate websites',
      'Headless CMS websites',
      'WordPress and WooCommerce',
      'Website redesign and performance optimization',
    ],
  },
  {
    path: '/services/web-platforms',
    name: 'Web Platform Development',
    serviceType: 'Application Development',
    description:
      'Product-grade web applications and platforms built for complexity, scale and long-term use — from internal tools and dashboards to business-critical systems.',
    offers: [
      'Custom web applications',
      'Dashboards and internal tools',
      'API and third-party integrations',
      'Cloud infrastructure, CI/CD and observability',
    ],
  },
  {
    path: '/services/ai',
    name: 'AI & Automations',
    serviceType: 'AI Automation',
    description:
      'AI-powered automations integrated into digital products and business workflows — chatbots, assistants, document processing and data pipelines that cut manual work.',
    offers: [
      'AI chatbots and assistants',
      'OpenAI and Anthropic API integration',
      'RAG pipelines and vector databases',
      'Workflow automation with n8n and custom pipelines',
      'Document processing and data extraction',
    ],
  },
  {
    path: '/services/consulting',
    name: 'Digital Consulting',
    serviceType: 'Consulting',
    description:
      'Strategic consulting for payment systems, fintech solutions, web and app development, AI integration and project planning.',
    offers: [
      'Payment systems and checkout consulting',
      'Fintech architecture and compliance',
      'Technology selection and roadmaps',
      'Technical audits and feasibility studies',
    ],
  },
];

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

export function FaqJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
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
  const sameAs = [
    project.link,
    project.facebook,
    project.instagram,
    project.linkedin,
    project.tiktok,
    project.youtube,
    project.googlePlay,
  ].filter(Boolean);

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
        ...(project.services?.length
          ? {
              about: project.services.map((key) => ({
                '@type': 'Service',
                '@id': `${SITE_URL}/services/${key}#service`,
              })),
            }
          : {}),
        creator: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        ...(sameAs.length ? { sameAs } : {}),
        ...(project.logo
          ? { thumbnailUrl: `${SITE_URL}${project.logo}` }
          : {}),
        isPartOf: { '@id': SITE_ID },
      }}
    />
  );
}
