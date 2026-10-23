import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  Workflow,
  MessageSquare,
  Eye,
  Database,
  Sparkles,
  Bot,
} from 'lucide-react';
import type { Metadata } from 'next';
import { onlyOn } from '@/i18n/only';
import { pageMetadata } from '@/lib/metadata';
import { ACCENT_1 } from '@/lib';
import { AIInfographic } from '@/components/service-infographic';
import ServiceCases from '@/components/service-cases';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/json-ld';
import { getService } from '@/data/services';


const service = getService('ai');

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  alternate: getService('ai', 'lv').path,
  title: 'AI Automation & AI Integration Services',
  description:
    'AI built into real products: document recognition, LLM features inside business tools, assistants, RAG pipelines and workflow automation — with validation built in.',
  path: '/services/ai',
  socialDescription:
    'Document recognition, LLM features, assistants and automation pipelines integrated into your products and processes.',
  image: false, // opengraph-image.tsx in this folder
});

/* ======================================================
   DATA
====================================================== */

const techStack = [
  {
    name: 'Conversational AI & chatbots',
    description: 'Chatbots of any complexity — from FAQ assistants to advanced agents integrated with your systems.',
  },
  {
    name: 'LLM integrations',
    description: 'OpenAI and Anthropic APIs for intelligent assistants, automation and data processing.',
  },
  {
    name: 'Knowledge & retrieval systems',
    description: 'RAG pipelines, vector databases and structured knowledge layers.',
  },
  {
    name: 'Workflow automation',
    description: 'n8n, Zapier and custom pipelines for reliable process automation.',
  },
  {
    name: 'Document & data processing',
    description: 'Extraction, classification and transformation of structured and unstructured data.',
  },
  {
    name: 'Guardrails around the model',
    description: 'Model output validated field by field, a person confirming before anything is posted, and rules — not the model — doing the arithmetic.',
  },
];

/** AI features we run in production — each one is part of a case study. */
const shipped = [
  {
    title: 'Receipt and invoice recognition',
    product: 'Vadi — accounting SaaS',
    slug: 'vadi',
    description:
      'Mistral OCR reads a photo or PDF, a language model turns the text into JSON that is validated field by field, and the app pre-fills a draft expense — date, number, supplier, total, printed VAT — for the user to check before it is posted.',
  },
  {
    title: 'AI news editor for a Telegram channel',
    product: 'TEAHOUSE News Bot',
    slug: 'teahouse-news-bot',
    description:
      'Collects the week’s fintech news, scores every article 0–100 with a reason against the client’s editorial criteria, writes the digest and makes a cover — the model cites stories by id, so it cannot invent a link, and the editor publishes with one tap.',
  },
  {
    title: 'AI writing helper inside a CRM',
    product: 'Web Studio CRM',
    slug: 'agency-crm',
    description:
      'Improves, formalises, shortens or translates notes, call logs and task descriptions on the user’s own API key — Gemini, Claude, GPT or Llama on Groq — with a custom tone prompt and the formatting kept intact.',
  },
];

const useCases = [
  {
    icon: Bot,
    title: 'Chatbots and assistants',
    description: 'From FAQ bots to assistants connected to your own data and systems',
  },
  {
    icon: MessageSquare,
    title: 'Internal assistants & tools',
    description: 'AI features inside dashboards and platforms',
  },
  {
    icon: Workflow,
    title: 'Workflow automation',
    description: 'Removing repetitive tasks and operational bottlenecks',
  },
  {
    icon: Eye,
    title: 'Document processing',
    description: 'Invoices, contracts, forms and reports',
  },
  {
    icon: Database,
    title: 'Data analysis & insights',
    description: 'Turning raw data into actionable information',
  },
  {
    icon: Sparkles,
    title: 'Reporting & summarization',
    description: 'Automated summaries, reports and internal documentation',
  },
];

/* ======================================================
   PAGE
====================================================== */

export default async function AIPage() {
  await onlyOn('en');
  return (
    <div className="bg-[var(--bg)] text-[var(--fg)]">
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[{ name: 'Services', path: '/services' }, { name: 'AI & Automations', path: '/services/ai' }]}
      />
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-4 sm:px-6 pt-24 sm:pt-40 pb-16 sm:pb-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-10 sm:gap-16 items-center">
          {/* TEXT */}
          <div>
            <span
              className="block text-xs sm:text-sm uppercase tracking-widest font-medium"
              style={{ color: 'var(--accent-text)' }}
            >
              AI & Automations
            </span>

            <h1 className="font-display mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
              Intelligent automation{' '}
              <br />
              <span
                className="text-gradient"
              >
                built into real systems
              </span>
            </h1>

            <p className="mt-5 sm:mt-8 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              We design and implement AI-powered automations integrated into digital products and business workflows.
              Focused on reducing manual work, improving efficiency and enabling smarter decision-making.
            </p>

            <Link
              href="#contact"
              className="btn-primary mt-6 sm:mt-10 !text-sm"
            >
              Start your project
            </Link>
          </div>

          {/* INFOGRAPHIC - hidden on mobile */}
          <div className="hidden lg:flex justify-end">
            <AIInfographic />
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-center">
            Technology & approach
          </h2>

          <p className="mt-4 sm:mt-6 text-center text-sm sm:text-base text-[var(--text-muted)] max-w-3xl mx-auto">
            We use AI where it creates real operational value, not for experimentation or hype.
          </p>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[var(--border)] bg-[var(--bg)]"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1.5 sm:mt-2 h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: ACCENT_1 }}
                  />
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">{tech.name}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)]">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <span
              className="text-xs sm:text-sm uppercase tracking-widest font-medium"
              style={{ color: 'var(--accent-text)' }}
            >
              Use Cases
            </span>

            <h2 className="font-display mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Use cases
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto">
              AI is most effective when embedded into existing systems and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[var(--border)] bg-[var(--surface)]"
              >
                <div
                  className="
                    h-10 w-10 sm:h-12 sm:w-12 mb-4 sm:mb-6
                    rounded-lg sm:rounded-xl
                    flex items-center justify-center
                    border border-[var(--border)]
                    bg-[var(--bg)]
                  "
                >
                  <item.icon size={18} className="sm:hidden" style={{ color: 'var(--accent-text)' }} />
                  <item.icon size={22} className="hidden sm:block" style={{ color: 'var(--accent-text)' }} />
                </div>

                <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SHIPPED
      ====================================================== */}
      <section className="px-4 sm:px-6 pb-4 sm:pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-14">
            <span className="section-eyebrow">In production</span>
            <h2 className="font-display mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
              AI features we have shipped
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto">
              Not demos: each one runs in production, inside products people use every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {shipped.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="card-premium group block rounded-xl sm:rounded-2xl p-5 sm:p-7"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-subtle)]">
                  {item.product}
                </p>
                <h3 className="mt-2 font-display text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent-text)]">
                  Read the case study
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCases service="ai" />

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section
        id="contact"
        className="px-4 sm:px-6 py-20 sm:py-40 bg-[var(--surface-strong)] border-t border-[var(--border)]"
      >
        <div className="mx-auto max-w-4xl text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold">
            Ready to automate your business?
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            Let's explore how AI can transform your operations.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <ContactForm locale="en" />
        </div>
      </section>

    </div>
  );
}

