/**
 * Every service page on the site, in one place. Drives the services hub,
 * the footer, the Service structured data, the sitemap, hreflang pairs with
 * sitespro.lv and the case ↔ service cross-links (Project.services).
 */

export type ServiceKey =
  | 'web'
  | 'web-platforms'
  | 'ai'
  | 'consulting'
  | 'ecommerce'
  | 'payments'
  | 'crm'
  | 'multilingual';

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
  /** Matching page on sitespro.lv — becomes a reciprocal hreflang pair. */
  lv?: string;
  /** Content date for the sitemap — bump when the page copy changes. */
  updated: string;
}

export const SERVICES: ServiceDefinition[] = [
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
    lv: 'https://sitespro.lv/pakalpojumi/majas-lapas-izstrade',
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
    lv: 'https://sitespro.lv/pakalpojumi/web-aplikaciju-izstrade',
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
    lv: 'https://sitespro.lv/pakalpojumi/ai-automatizacija',
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
    lv: 'https://sitespro.lv/pakalpojumi/interneta-veikala-izstrade',
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
    lv: 'https://sitespro.lv/pakalpojumi/crm-sistemas-izstrade',
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

export const SERVICE_LABELS = Object.fromEntries(
  SERVICES.map((s) => [s.key, s.name])
) as Record<ServiceKey, string>;

export function getService(key: ServiceKey): ServiceDefinition {
  return SERVICES.find((s) => s.key === key)!;
}

/** The services hub has a counterpart on sitespro.lv too. */
export const SERVICES_HUB_LV = 'https://sitespro.lv/pakalpojumi';
