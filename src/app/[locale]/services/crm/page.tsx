import type { Metadata } from 'next';
import { onlyOn } from '@/i18n/only';
import ServiceLanding, { type ServiceLandingConfig } from '@/components/service-landing';
import { getService } from '@/data/services';
import { pageMetadata } from '@/lib/metadata';

const service = getService('crm');

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  alternate: getService('crm', 'lv').path,
  title: 'Custom CRM Development',
  description:
    'CRMs built around how your team sells and delivers: stage-guided pipelines, call logs, client portals, PDF agreements, recurring invoicing, email tracking and AI writing help.',
  path: service.path,
  image: false, // opengraph-image.tsx in this folder
});

const config: ServiceLandingConfig = {
  service: 'crm',
  breadcrumb: [
    { name: 'Services', path: '/services' },
    { name: service.name, path: service.path },
  ],
  eyebrow: 'CRM development',
  title: 'A CRM that follows',
  titleAccent: 'how your team actually works',
  intro:
    'Off-the-shelf CRMs make you bend the process to the tool. We build CRMs around the way your team finds, sells, delivers and bills — the same way we built the CRM our own studio runs on every day.',
  flagship: 'agency-crm',

  pointsTitle: 'What goes into it',
  points: [
    {
      title: 'Pipeline with stage guides',
      text: 'Stages with enforced transitions, scripts and checklists shown where they apply, and a reason required whenever a deal is lost.',
    },
    {
      title: 'Leads, calls and follow-ups',
      text: 'Contacts with several phones, call logs with outcomes, follow-ups and a requirements questionnaire the client fills in through a signed link.',
    },
    {
      title: 'Projects and a client portal',
      text: 'Kanban, checklists, comments with mentions and files — plus a client-facing view of the same project, and a preview of exactly what the client sees.',
    },
    {
      title: 'Documents as PDF',
      text: 'Agreements and acceptance acts generated from templates; invoices drafted in the CRM and issued through your accounting system.',
    },
    {
      title: 'Email and calendar',
      text: 'Templates, scheduled sends, open and reply tracking, unsubscribe handling, and a shared calendar synced with Google.',
    },
    {
      title: 'AI writing help',
      text: 'Notes, call logs and task descriptions improved, shortened or translated on the user’s own API key — Gemini, Claude, GPT or Llama on Groq.',
    },
  ],

  proofTitle: 'CRMs we have built',
  proofIntro:
    'Our studio’s whole operating loop — find, call, qualify, build, bill, support — lives in a CRM we designed and built ourselves, and the same approach runs a client’s shop end to end, from the till to the accountant’s report.',
  proof: [
    {
      slug: 'agency-crm',
      facts: [
        'Monthly billing plans issue and email recurring invoices unattended',
        'Multi-tenant from day one, with row-level security on every table',
        'In daily use by our own team',
      ],
    },
    {
      slug: 'vinylera',
      facts: [
        'Clients with statuses, standing discounts and purchase history',
        'Wish lists tracked from request to fulfilled',
        'Orders, invoices, till and stock in one back office',
      ],
    },
  ],

  approachTitle: 'How we build a CRM',
  approach: [
    {
      title: 'Process first, screens second',
      text: 'We map how a lead becomes a paying client in your company — every stage, document and hand-over — before designing a single form.',
    },
    {
      title: 'Integrate instead of re-typing',
      text: 'Accounting, email and calendar connected, so nobody copies the same data between tools.',
    },
    {
      title: 'Secure by default',
      text: 'Roles and row-level security from the first table, and secrets encrypted at rest.',
    },
  ],

  faqs: [
    {
      q: 'Why not just use HubSpot or Pipedrive?',
      a: 'If your process fits them, use them — they are good products. A custom CRM pays off when the process is your advantage: a specific sales method, documents in a local legal format, billing tied to your accounting, a client portal. Teams often start by integrating an existing CRM and move to their own later.',
    },
    {
      q: 'Can the CRM issue invoices?',
      a: 'Yes. In our own CRM invoices are drafted in the CRM and issued through the accounting platform, which owns numbering, VAT and payment status; monthly plans bill on their own.',
    },
    {
      q: 'Can our clients see their project?',
      a: 'Yes — a client portal shows the project, tasks and files you choose to share, and an owner-only preview shows exactly what the client will see.',
    },
  ],

  cases: { services: ['crm', 'web-platforms'], title: 'CRM and platform projects' },

  contactTitle: 'Tell us how your team works',
  contactText:
    'How leads come in, how deals close, what gets billed and which tools are already in place. We reply within a day.',
};

export default async function CrmPage() {
  await onlyOn('en');
  return <ServiceLanding config={config} />;
}
