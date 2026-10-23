import type { Metadata } from 'next';
import { onlyOn } from '@/i18n/only';
import ServiceLanding, { type ServiceLandingConfig } from '@/components/service-landing';
import { getService } from '@/data/services';
import { pageMetadata } from '@/lib/metadata';

const service = getService('payments');

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  alternate: null,
  title: 'Payment Systems & Fintech Development',
  description:
    'Payment gateway cores, double-entry ledgers, checkout integration and accounting software — built by a team that has shipped a gateway prototype and runs its own accounting SaaS.',
  path: service.path,
  image: false, // opengraph-image.tsx in this folder
});

const config: ServiceLandingConfig = {
  service: 'payments',
  breadcrumb: [
    { name: 'Services', path: '/services' },
    { name: service.name, path: service.path },
  ],
  eyebrow: 'Payments & fintech',
  title: 'Payment systems and fintech products',
  titleAccent: 'from people who have built them',
  intro:
    'We built the core of a white-label payment gateway — state machine, double-entry ledger, acquirer routing, settlements — and we run our own accounting SaaS that files tax returns with the Latvian tax office. That is the experience we bring to your payment flow, ledger or fintech product.',
  flagship: 'payment-gateway',

  pointsTitle: 'What we build',
  pointsIntro:
    'Money software has to be right before it is pretty. These are the parts we have designed and shipped.',
  points: [
    {
      title: 'Payment gateway cores',
      text: 'A merchant API with idempotency keys and signed requests, a payment state machine with enforced transitions, cascading acquirer routing and signed webhooks with retries.',
    },
    {
      title: 'Ledgers and settlements',
      text: 'Double-entry ledgers in integer minor units, client funds kept apart from fee revenue, settlements with rolling reserve and reconciliation against acquirer statements.',
    },
    {
      title: 'Checkout and provider integration',
      text: 'Stripe, PayPal and other payment providers wired into your product: checkout, webhooks, refunds, payouts — and the edge cases that come with them.',
    },
    {
      title: 'Accounting, invoicing and tax',
      text: 'Invoices with VAT, payroll with a full gross-to-net breakdown, VAT and corporate tax declarations generated in the tax office’s XML format.',
    },
    {
      title: 'Compliance-aware architecture',
      text: 'Card data kept out of your systems from the first commit, audit logs, role-based access and data stored in the EU.',
    },
    {
      title: 'Fintech product sites',
      text: 'Marketing sites for payment providers that speak to merchants — open banking, acquiring, alternative payment methods and payouts — in a compliance-first tone.',
    },
  ],

  proofTitle: 'Fintech we have shipped',
  proof: [
    {
      slug: 'payment-gateway',
      facts: [
        'Payment state machine, double-entry ledger and adaptive acquirer routing',
        'Settlements with rolling reserve; chargebacks modelled end to end',
        'Hosted checkout with zero JavaScript and an empty PCI script inventory',
      ],
    },
    {
      slug: 'vadi',
      facts: [
        'Tax calendar with every amount already calculated',
        'VAT, employer report and CIT as VID EDS XML; MUN filed through the EDS API',
        'Bank statement import matched to invoices and expenses by explicit rules',
      ],
    },
    {
      slug: 'imun',
      facts: [
        'Product site for a payment gateway provider',
        'Open banking, acquiring, alternative methods and payouts as the four products merchants buy',
        'Compliance-first tone and structure that scales into documentation',
      ],
    },
  ],

  approachTitle: 'How we build money software',
  approach: [
    {
      title: 'Money in integers, never floats',
      text: 'Amounts are stored in minor units and every balance comes from a double-entry ledger, so the books always reconcile.',
    },
    {
      title: 'Every state change is explicit',
      text: 'Payments, refunds and payouts move through state machines with enforced transitions — an impossible state cannot be written.',
    },
    {
      title: 'Honest about scope',
      text: 'Where an acquirer contract, a licence or a PCI audit is needed, we say so up front and design the seams for it instead of pretending a prototype is production.',
    },
  ],

  faqs: [
    {
      q: 'Can you build a payment gateway?',
      a: 'We have built the core of one for a fintech client — merchant API, payment state machine, double-entry ledger, acquirer routing, settlements and a hosted checkout — as a working prototype with simulated acquirers. Going live also needs acquirer contracts, KYB and AML onboarding and the right licence, which we plan for from the start.',
    },
    {
      q: 'Do you integrate Stripe, PayPal or other providers?',
      a: 'Yes — checkout, webhooks, refunds and reconciliation for the providers your business uses. If you are still choosing, we compare fees, payout times and supported payment methods for your markets first.',
    },
    {
      q: 'Will card data touch our servers?',
      a: 'Not if we can help it. A hosted checkout or the provider’s hosted fields keep card data with the provider, which keeps your PCI scope as small as possible.',
    },
  ],

  cases: { services: ['payments', 'consulting'], title: 'Payments and fintech projects' },

  contactTitle: 'Tell us about your payment flow',
  contactText:
    'What moves money in your product today, what has to change and which providers or regulators are involved. We reply within a day.',
};

export default async function PaymentsPage() {
  await onlyOn('en');
  return <ServiceLanding config={config} />;
}
