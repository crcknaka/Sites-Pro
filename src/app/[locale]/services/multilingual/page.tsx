import type { Metadata } from 'next';
import { onlyOn } from '@/i18n/only';
import ServiceLanding, { type ServiceLandingConfig } from '@/components/service-landing';
import { getService } from '@/data/services';
import { pageMetadata } from '@/lib/metadata';

const service = getService('multilingual');

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  alternate: null,
  title: 'Multilingual & Arabic RTL Website Development',
  description:
    'Multilingual websites and shops — Arabic right-to-left included — with hreflang, per-language SEO, translated catalogues, emails and legal texts, and regional sites from one codebase.',
  path: service.path,
  image: false, // opengraph-image.tsx in this folder
});

const config: ServiceLandingConfig = {
  service: 'multilingual',
  breadcrumb: [
    { name: 'Services', path: '/services' },
    { name: service.name, path: service.path },
  ],
  eyebrow: 'Multilingual & RTL websites',
  title: 'Websites that speak',
  titleAccent: 'every language your clients do',
  intro:
    'Six languages for a French school, Latvian, Russian and English for Baltic businesses, Arabic right-to-left for a distributor in Dubai. Multilingual is more than translated strings: it is hreflang, per-language SEO, translated catalogues and emails, legal texts per market — and layouts that hold up in both directions.',
  flagship: 'overline-gcc',

  pointsTitle: 'What multilingual takes',
  points: [
    {
      title: 'Arabic and right-to-left layouts',
      text: 'Logical CSS properties instead of mirrored hacks, mirrored arrows and menus, Arabic typefaces — and phone numbers, prices and Latin names that keep their own direction inside Arabic text.',
    },
    {
      title: 'Regional sites from one codebase',
      text: 'A region preset switches company, currency, VAT, languages and legal texts, so a second market is a deploy, not a fork.',
    },
    {
      title: 'hreflang and per-language SEO',
      text: 'Canonical and hreflang on every page, sitemaps with language alternates, and titles and descriptions written for each language.',
    },
    {
      title: 'Translated end to end',
      text: 'Catalogue texts, transactional emails, invoices and legal pages in each language — not just the menu.',
    },
    {
      title: 'Every language edited in one place',
      text: 'All language versions of a product or page side by side in the admin, with a fallback language while a translation is still missing.',
    },
    {
      title: 'Language detection that respects choice',
      text: 'Visitors land on their browser’s language, and the language they pick is remembered on their next visit.',
    },
  ],

  proofTitle: 'Multilingual sites we have built',
  proof: [
    {
      slug: 'overline-gcc',
      facts: [
        'Arabic, English and Russian with a full right-to-left layout',
        'UAE legal texts and tax invoices, prices in AED',
        'Same codebase as the Baltic site, switched by a region preset',
      ],
    },
    {
      slug: 'institut-de-francais-villefranche',
      facts: [
        'English, Russian, Ukrainian, German, Italian and Spanish',
        'hreflang so each market lands on its own version',
        'Online enrolment in every language',
      ],
    },
    {
      slug: 'vadi',
      facts: [
        'Accounting product and marketing site in Latvian, English and Russian',
        'Help and documentation portal alongside the product',
        'Industry landing pages for a dozen professions',
      ],
    },
  ],

  approachTitle: 'How we build for several languages',
  approach: [
    {
      title: 'Language is part of the data model',
      text: 'Every translatable field is planned from the start, so adding a language later is content work, not a rewrite.',
    },
    {
      title: 'Direction-aware from the first component',
      text: 'Spacing, icons and animations are defined in logical terms, so the right-to-left version is designed, not patched.',
    },
    {
      title: 'Each market gets its own rules',
      text: 'Currency, tax, legal texts and contact details belong to the market, not to the language — Russian in Dubai is not Russian in Riga.',
    },
  ],

  faqs: [
    {
      q: 'Do you translate the content?',
      a: 'We can prepare translations as part of the project or work with yours; either way a native speaker should review them before launch. Around the text we handle everything: structure, hreflang, SEO per language and the parts that get forgotten — emails, invoices, error messages and legal pages.',
    },
    {
      q: 'Can you add an Arabic version to an existing site?',
      a: 'Yes. A right-to-left version is more than flipping the layout: typography, mirrored icons, bidirectional text in forms and numbers, and often a different market with its own currency, taxes and legal pages. We did all of that for Overline’s Dubai site.',
    },
    {
      q: 'One domain with language folders, or separate domains?',
      a: 'Language folders (/en, /lv) on one domain are the simplest for SEO and maintenance. Separate domains make sense when each market is run by a different company, as with Overline’s Baltic and Gulf sites. Either way hreflang ties the versions together.',
    },
  ],

  cases: { services: ['multilingual'], title: 'Multilingual projects' },

  contactTitle: 'Which languages and markets?',
  contactText:
    'Tell us where your clients are and what the site has to do in each market. We reply within a day.',
};

export default async function MultilingualPage() {
  await onlyOn('en');
  return <ServiceLanding config={config} />;
}
