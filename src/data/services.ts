import type { Locale } from '@/i18n';

/**
 * Every service page on both sites, in one place. Drives the services hub,
 * the footer, the Service structured data, the sitemap, the hreflang pairs
 * between sitespro.org and sitespro.lv and the case ↔ service cross-links
 * (Project.services).
 *
 * A key is the same service on both sites; a site only lists the services it
 * has a page for. Paths are internal (/services/…) — localizePath() turns
 * them into /pakalpojumi/… on sitespro.lv.
 */

export type ServiceKey =
  | 'web'
  | 'web-platforms'
  | 'ai'
  | 'consulting'
  | 'ecommerce'
  | 'payments'
  | 'crm'
  | 'multilingual'
  | 'maintenance'
  | 'seo-geo';

export interface ServiceDefinition {
  key: ServiceKey;
  path: string;
  /** Full name — headings, structured data. */
  name: string;
  /** Short label for navigation and chips. */
  short: string;
  serviceType: string;
  description: string;
  offers: string[];
  /** The four core services get a card on the home page; the rest are specialisations. */
  core: boolean;
  /** Content date for the sitemap — bump when the page copy changes. */
  updated: string;
}

const SERVICES_EN: ServiceDefinition[] = [
  {
    key: 'web',
    path: '/services/web',
    name: 'Website Development',
    short: 'Websites',
    serviceType: 'Web Development',
    description:
      'High-performance websites built for growth. Scalable, fast and product-ready, with Core Web Vitals, accessibility and search visibility built in from day one.',
    offers: [
      'Marketing and corporate websites',
      'Headless CMS websites',
      'WordPress and WooCommerce',
      'Website redesign and performance optimization',
    ],
    core: true,
    updated: '2026-07-31',
  },
  {
    key: 'web-platforms',
    path: '/services/web-platforms',
    name: 'Web Platform Development',
    short: 'Web Platforms',
    serviceType: 'Application Development',
    description:
      'Product-grade web applications and platforms built for complexity, scale and long-term use — from internal tools and dashboards to business-critical systems.',
    offers: [
      'Custom web applications',
      'Dashboards and internal tools',
      'API and third-party integrations',
      'Cloud infrastructure, CI/CD and observability',
    ],
    core: true,
    updated: '2026-07-31',
  },
  {
    key: 'ai',
    path: '/services/ai',
    name: 'AI & Automations',
    short: 'AI & Automations',
    serviceType: 'AI Automation',
    description:
      'AI built into real products and workflows — document recognition, LLM features inside business tools, assistants and automation pipelines, with validation and a person in the loop where it matters.',
    offers: [
      'AI document recognition and data extraction',
      'LLM features inside existing products (OpenAI, Anthropic, Gemini, Mistral)',
      'AI chatbots and assistants',
      'RAG pipelines and vector databases',
      'Workflow automation with n8n and custom pipelines',
    ],
    core: true,
    updated: '2026-10-02',
  },
  {
    key: 'consulting',
    path: '/services/consulting',
    name: 'Digital Consulting',
    short: 'Consulting',
    serviceType: 'Consulting',
    description:
      'Strategic consulting for payment systems, fintech solutions, web and app development, AI integration and project planning.',
    offers: [
      'Payment systems and checkout consulting',
      'Fintech architecture and compliance',
      'Technology selection and roadmaps',
      'Technical audits and feasibility studies',
    ],
    core: true,
    updated: '2026-07-31',
  },
  {
    key: 'ecommerce',
    path: '/services/ecommerce',
    name: 'E-commerce & B2B Shop Development',
    short: 'E-commerce & B2B shops',
    serviceType: 'E-commerce Development',
    description:
      'Online stores and B2B partner shops: catalogues that stay fast with thousands of products, partner-only pricing, stock, VAT-correct invoices and a back office the client runs alone — on WooCommerce or a custom Next.js build.',
    offers: [
      'WooCommerce stores',
      'Custom Next.js shops with their own admin',
      'B2B partner shops with approval-based pricing',
      'Invoices, VAT and EU reverse charge',
      'Multilingual and multi-region catalogues',
    ],
    core: false,
    updated: '2026-10-02',
  },
  {
    key: 'payments',
    path: '/services/payments',
    name: 'Payment Systems & Fintech Development',
    short: 'Payments & fintech',
    serviceType: 'Fintech Software Development',
    description:
      'Payment gateways, ledgers and accounting software built by a team that has shipped them: payment state machines, double-entry ledgers, acquirer routing, checkout integrations and tax filings that leave the system in the format the tax office expects.',
    offers: [
      'Payment gateway and orchestration cores',
      'Double-entry ledgers, settlements and reconciliation',
      'Checkout and payment provider integration',
      'Accounting, invoicing and tax software',
      'Fintech architecture consulting',
    ],
    core: false,
    updated: '2026-10-02',
  },
  {
    key: 'crm',
    path: '/services/crm',
    name: 'Custom CRM Development',
    short: 'CRM development',
    serviceType: 'CRM Development',
    description:
      'CRMs built around the way a team actually sells and delivers: pipelines with stage guides, call logs, client portals, documents generated as PDF, recurring invoicing, email tracking and AI writing help.',
    offers: [
      'Sales pipelines and lead management',
      'Client portals',
      'Agreements, acceptance acts and invoices as PDF',
      'Email tracking and calendar sync',
      'Integration with accounting and billing',
    ],
    core: false,
    updated: '2026-10-02',
  },
  {
    key: 'multilingual',
    path: '/services/multilingual',
    name: 'Multilingual & RTL Website Development',
    short: 'Multilingual & RTL sites',
    serviceType: 'Multilingual Web Development',
    description:
      'Websites and shops in several languages — Arabic right-to-left included — with hreflang, per-language SEO, translated catalogues, emails and legal texts, and regional sites run from one codebase.',
    offers: [
      'Multilingual websites with hreflang',
      'Arabic and other right-to-left layouts',
      'Regional sites from one codebase',
      'Translated catalogues, emails and legal texts',
      'Per-language SEO',
    ],
    core: false,
    updated: '2026-10-02',
  },
];

const SERVICES_LV: ServiceDefinition[] = [
  {
    key: 'web',
    path: '/services/majas-lapas-izstrade',
    name: 'Mājas lapas izstrāde',
    short: 'Mājas lapas',
    serviceType: 'Web Development',
    description:
      'Mājas lapas izstrāde Latvijā no 2-5 dienām. Individuāls dizains, administrācijas panelis, SEO un GEO optimizācija. Bezmaksas demo versija pirms samaksas.',
    offers: [
      'Vizītkaršu un korporatīvās mājas lapas',
      'Individuāls dizains',
      'Pielāgots administrācijas panelis',
      'Daudzvalodu mājas lapas',
    ],
    core: true,
    updated: '2026-10-23',
  },
  {
    key: 'ecommerce',
    path: '/services/interneta-veikala-izstrade',
    name: 'Interneta veikala izstrāde',
    short: 'Interneta veikali',
    serviceType: 'E-commerce Development',
    description:
      'Interneta veikali ar pielāgotu administrācijas paneli, drošiem maksājumiem, loģistikas un grāmatvedības integrācijām.',
    offers: [
      'WooCommerce veikali',
      'Individuāli Next.js veikali',
      'Maksājumu un loģistikas integrācijas',
      'Rēķini un PVN',
    ],
    core: true,
    updated: '2026-10-23',
  },
  {
    key: 'web-platforms',
    path: '/services/web-aplikaciju-izstrade',
    name: 'Web aplikāciju izstrāde',
    short: 'Web aplikācijas',
    serviceType: 'Application Development',
    description:
      'Web aplikācijas un portāli jebkurai sarežģītībai - lietotāju pārvaldība, individuāla administrācijas sistēma, atskaites un API integrācijas.',
    offers: [
      'Biznesa aplikācijas un portāli',
      'Lietotāji, lomas un tiesības',
      'Atskaites un datu vizualizācija',
      'API integrācijas',
    ],
    core: true,
    updated: '2026-10-23',
  },
  {
    key: 'ai',
    path: '/services/ai-automatizacija',
    name: 'AI automatizācija',
    short: 'AI automatizācija',
    serviceType: 'AI Automation',
    description:
      'Mākslīgā intelekta ieviešana biznesa procesos - čatboti, dokumentu apstrāde, satura ģenerēšana un datu analīze jūsu esošajās sistēmās.',
    offers: [
      'Klientu atbalsta čatboti',
      'Dokumentu un rēķinu apstrāde',
      'Satura ģenerēšana',
      'Procesu automatizācija',
    ],
    core: true,
    updated: '2026-10-23',
  },
  {
    key: 'crm',
    path: '/services/crm-sistemas-izstrade',
    name: 'CRM sistēmas izstrāde',
    short: 'CRM sistēmas',
    serviceType: 'CRM Development',
    description:
      'Individuālas CRM sistēmas - klientu bāze, darījumu vadība, uzdevumi un atskaites, pielāgotas tieši jūsu darba procesiem.',
    offers: [
      'Klientu bāze un vēsture',
      'Darījumu piltuve',
      'Dokumenti un rēķini PDF formātā',
      'Integrācija ar grāmatvedību',
    ],
    core: false,
    updated: '2026-10-23',
  },
  {
    key: 'maintenance',
    path: '/services/majas-lapas-uzturesana',
    name: 'Mājas lapas uzturēšana un administrēšana',
    short: 'Uzturēšana',
    serviceType: 'Website Maintenance',
    description:
      'Mājas lapas uzturēšana par fiksētu mēneša maksu: drošības atjauninājumi, rezerves kopijas, uzraudzība 24/7, satura izmaiņas un mēneša atskaite. Arī citu izstrādātāju vietnēm.',
    offers: [
      'Drošības atjauninājumi',
      'Ikdienas rezerves kopijas',
      'Uzraudzība 24/7',
      'Satura administrēšana',
      'Mēneša atskaite',
    ],
    core: false,
    updated: '2026-10-23',
  },
  {
    key: 'seo-geo',
    path: '/services/seo-geo-optimizacija',
    name: 'SEO un GEO optimizācija',
    short: 'SEO un GEO',
    serviceType: 'Search Engine Optimization',
    description:
      'Augstākas pozīcijas Google meklētājā un ieteikumi ChatGPT, Gemini un Perplexity atbildēs: audits, tehniskie labojumi, saturs un atskaites.',
    offers: [
      'SEO un GEO audits',
      'Tehniskā optimizācija',
      'Strukturētie dati (Schema.org)',
      'Google uzņēmuma profils',
      'Ikmēneša atskaites',
    ],
    core: false,
    updated: '2026-10-23',
  },
];

const SERVICES: Record<Locale, ServiceDefinition[]> = { en: SERVICES_EN, lv: SERVICES_LV };

/** The services a site has a page for, in display order. */
export function servicesFor(locale: Locale): ServiceDefinition[] {
  return SERVICES[locale];
}

/** A service's page on the given site — undefined when that site has none. */
export function findService(locale: Locale, key: ServiceKey): ServiceDefinition | undefined {
  return SERVICES[locale].find((s) => s.key === key);
}

/** For pages that only exist on one site and know their key is there. */
export function getService(key: ServiceKey, locale: Locale = 'en'): ServiceDefinition {
  return findService(locale, key)!;
}

/**
 * Names for every key, including services a site has no page for — a case
 * tagged "payments" still shows the chip on sitespro.lv, just without a link.
 */
const LABELS: Record<Locale, Record<ServiceKey, string>> = {
  en: {
    ...(Object.fromEntries(SERVICES_EN.map((s) => [s.key, s.name])) as Record<ServiceKey, string>),
    maintenance: 'Website Maintenance',
    'seo-geo': 'SEO & GEO',
  },
  lv: {
    ...(Object.fromEntries(SERVICES_LV.map((s) => [s.key, s.name])) as Record<ServiceKey, string>),
    consulting: 'Konsultācijas',
    payments: 'Maksājumu sistēmas un fintech',
    multilingual: 'Daudzvalodu vietnes',
  },
};

export function serviceLabel(locale: Locale, key: ServiceKey): string {
  return LABELS[locale][key];
}
