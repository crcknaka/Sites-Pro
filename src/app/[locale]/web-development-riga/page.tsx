import type { Metadata } from 'next';
import ServiceLanding, { type ServiceLandingConfig } from '@/components/service-landing';
import { pageMetadata } from '@/lib/metadata';
import { onlyOn } from '@/i18n/only';

const PATH = '/web-development-riga';

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  // the Latvian site is itself the Riga page — no counterpart
  alternate: null,
  title: 'Web Development Company in Riga, Latvia',
  description:
    'Sites Pro is a Riga web development studio: websites, online shops, web platforms and AI automations for Latvian companies and international teams — in English, Latvian or Russian.',
  path: PATH,
  image: false, // opengraph-image.tsx in this folder
});

const config: ServiceLandingConfig = {
  breadcrumb: [{ name: 'Web development in Riga', path: PATH }],
  eyebrow: 'Riga, Latvia',
  title: 'Web development company',
  titleAccent: 'in Riga',
  intro:
    'Sites Pro is SIA SitesPro, a web development studio based in Riga. We build websites, online shops, web platforms and AI automations for Latvian companies and for international teams working in the Baltics — in English, Latvian or Russian.',
  flagship: 'vadi',

  pointsTitle: 'What building for Latvia takes',
  pointsIntro:
    'Local knowledge that shows up in the product, not just in the address.',
  points: [
    {
      title: 'Latvian tax and accounting',
      text: 'We built Vadi, an accounting SaaS that generates VID EDS declarations and files MUN through the EDS API — PVN, payroll taxes and CIT are domain knowledge for us, not research.',
    },
    {
      title: 'Business register and VAT checks',
      text: 'Company details pulled from the Latvian business register, and EU VAT numbers checked against VIES before a reverse-charge invoice goes out.',
    },
    {
      title: 'Three languages by default',
      text: 'Latvian, Russian and English are normal here, so multilingual structure and hreflang are part of the plan from the first day.',
    },
    {
      title: 'Hosting in the EU',
      text: 'Sites and data on EU servers, with contact forms and data handling that follow GDPR.',
    },
    {
      title: 'Websites to platforms',
      text: 'Company websites, WooCommerce and custom shops, internal tools and SaaS — one studio from the first page to the platform behind it.',
    },
    {
      title: 'Clients beyond Latvia too',
      text: 'We also build for clients in France, the UAE, Canada and the US — so local work gets an international standard.',
    },
  ],

  proofTitle: 'Built in Riga',
  proof: [
    {
      slug: 'vadi',
      facts: [
        'Our own accounting SaaS for Latvian businesses',
        'VID EDS declarations and MUN filing through the EDS API',
        'Latvian, English and Russian',
      ],
    },
    {
      slug: 'overline-baltics',
      facts: [
        'B2B shop for the Overline distributor in Latvia and Lithuania',
        'Partner-only prices, stock and VIES-checked EU invoices',
        'Latvian, Russian and English',
      ],
    },
    {
      slug: 'wellton',
      facts: [
        'Gift card shop for Wellton Hotels & Spa in Riga',
        'SPA zones, massages and memberships sold as vouchers',
        'A purchase flow that still feels like giving a gift',
      ],
    },
  ],

  faqs: [
    {
      q: 'Do you work in English?',
      a: 'Yes — English is our working language on this site, alongside Russian. Companies that prefer to work in Latvian can reach us through sitespro.lv.',
    },
    {
      q: 'Do you only work with Latvian companies?',
      a: 'No. Alongside Latvian clients we build for companies in France, the UAE, Canada and the US — being in Riga simply means we know the local market, taxes and languages first-hand.',
    },
    {
      q: 'Can you take over an existing website or shop?',
      a: 'Yes. We start with an audit of the code, hosting and SEO, fix what is urgent, and then agree on a plan — whether that is continued support, a redesign or a rebuild.',
    },
  ],

  cases: {
    slugs: [
      'vadi',
      'overline-baltics',
      'bodybar',
      'wellton',
      'goldberg',
      'bullu-laivas',
      'ekobaltika',
      'balticaqua',
    ],
    title: 'Projects for companies in Latvia',
  },

  contactTitle: 'Working in Riga or the Baltics?',
  contactText:
    'Tell us what you are building. We reply within a day — in English, Latvian or Russian.',
};

export default async function RigaPage() {
  await onlyOn('en');
  return <ServiceLanding config={config} />;
}
