import type { Metadata } from 'next';
import ServiceLanding, { type ServiceLandingConfig } from '@/components/service-landing';
import { getService } from '@/data/services';
import { pageMetadata, withLatvian } from '@/lib/metadata';
import { SITE_URL } from '@/lib';

const service = getService('ecommerce');

export const metadata: Metadata = pageMetadata({
  title: 'E-commerce & B2B Shop Development',
  description:
    'Online stores and B2B partner shops on WooCommerce or custom Next.js: partner-only pricing, stock, EU reverse-charge invoices and a back office your team runs alone.',
  path: service.path,
  image: false, // opengraph-image.tsx in this folder
  languages: withLatvian(`${SITE_URL}${service.path}`, service.lv!),
});

const config: ServiceLandingConfig = {
  service: 'ecommerce',
  breadcrumb: [
    { name: 'Services', path: '/services' },
    { name: service.name, path: service.path },
  ],
  eyebrow: 'E-commerce & B2B shops',
  title: 'Online stores and B2B shops',
  titleAccent: 'your team can run alone',
  intro:
    'From WooCommerce boutiques with thousands of products to custom B2B partner shops with approval-based pricing, stock and VAT-correct invoices — built so prices, products and campaigns change in the back office, not in a ticket to us.',
  flagship: 'overline-baltics',

  pointsTitle: 'What we build',
  pointsIntro:
    'WooCommerce when a standard store fits, a custom Next.js shop when the rules are your own. Either way the catalogue stays fast and the team stays in control.',
  points: [
    {
      title: 'B2B partner shops',
      text: 'Guests see the catalogue; approved partners see prices, a cart and their orders. Registration, approval and revoking access are a click in the admin.',
    },
    {
      title: 'Custom shops with their own admin',
      text: 'Next.js and PostgreSQL when the rules are yours: stock reserved per order, volume discounts, brands, product texts in several languages, PDF brochures.',
    },
    {
      title: 'WooCommerce stores',
      text: 'For catalogues that want proven plugins and a familiar back office: brand-led navigation, wishlists, loyalty points, gift cards and country-specific delivery rules.',
    },
    {
      title: 'Invoices and VAT done properly',
      text: 'PDF invoices with yearly numbering, EU reverse charge after a VIES check of the buyer’s VAT number, UAE tax invoices with a TRN — and a cart that matches the invoice to the cent.',
    },
    {
      title: 'Memberships, vouchers and payments',
      text: 'Online payments for memberships and protected video courses, and gift vouchers sold so that buying one still feels like giving a gift.',
    },
    {
      title: 'Several markets, one codebase',
      text: 'Each market with its own currency, VAT, languages and legal texts — Latvian, Russian and English in the Baltics, Arabic right-to-left in Dubai.',
    },
  ],

  proofTitle: 'Shops we have built',
  proof: [
    {
      slug: 'overline-baltics',
      facts: [
        '52 devices in six lines, filterable by line and application',
        'Cosmetics prices and ordering only for approved partners',
        'EU reverse-charge invoices after a VIES check',
      ],
    },
    {
      slug: 'vinylera',
      facts: [
        'Shop till, sales ledger and online store on one stock',
        'Discogs import fills a record card from one link',
        'Second-hand margin VAT and Z-report reconciliation built in',
      ],
    },
    {
      slug: 'lepicur',
      facts: [
        'Baccarat, Christofle, Lalique and more, browsed brand-first',
        'Wishlist and comparison for considered purchases',
        'A catalogue of thousands of pieces that stays fast',
      ],
    },
  ],

  approachTitle: 'How we approach a shop',
  approach: [
    {
      title: 'The back office is a product too',
      text: 'The people who change prices and stock every week are users as well. We design the admin with the same care as the storefront, in the languages the team works in.',
    },
    {
      title: 'Numbers that add up',
      text: 'VAT is calculated one way in the cart and on the invoice, and every invoice is frozen at issue time, so a later price change never rewrites an old document.',
    },
    {
      title: 'Fast with big catalogues',
      text: 'Filterable, paginated categories and optimised images keep pages quick even with thousands of products — and the search engines see every product page.',
    },
  ],

  faqs: [
    {
      q: 'WooCommerce or a custom shop?',
      a: 'WooCommerce when a standard store fits: products, cart, checkout, delivery rules and a large plugin ecosystem. A custom build when the rules are yours — partner approval, B2B pricing, regional sites, invoices that follow a specific tax regime. We say which one fits after the first call.',
    },
    {
      q: 'Can partners see different prices from regular visitors?',
      a: 'Yes. On the Overline shops guests see the catalogue but not the cosmetics prices; a salon registers, the team approves it, and only then do prices, cart and checkout open.',
    },
    {
      q: 'Do you handle EU VAT and reverse charge?',
      a: 'Yes. For B2B sales across EU borders the buyer’s VAT number is checked against the European Commission’s VIES service and the invoice is zero-rated with a reverse-charge note; domestic sales carry regular VAT. The cart’s VAT breakdown matches the invoice to the cent.',
    },
  ],

  cases: { services: ['ecommerce'], title: 'E-commerce projects' },

  contactTitle: 'Tell us about your shop',
  contactText:
    'What you sell, to whom and in which markets — and what has to change. We reply within a day with how we would build it.',
};

export default function EcommercePage() {
  return <ServiceLanding config={config} />;
}
