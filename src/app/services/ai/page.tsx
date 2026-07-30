import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  Brain,
  Workflow,
  MessageSquare,
  Eye,
  Database,
  Sparkles,
  Bot,
} from 'lucide-react';
import type { Metadata } from 'next';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import { AIInfographic } from '@/components/service-infographic';
import ServiceCases from '@/components/service-cases';
import {
  ServiceJsonLd,
  BreadcrumbJsonLd,
  SERVICE_DEFINITIONS,
} from '@/components/json-ld';

const service = SERVICE_DEFINITIONS.find((s) => s.path === '/services/ai')!;

export const metadata: Metadata = {
  title: 'AI Automation & AI Integration Services',
  description:
    'AI automations built into real systems: chatbots and assistants, OpenAI and Anthropic API integration, RAG pipelines, document processing and workflow automation.',
  alternates: {
    canonical: '/services/ai',
  },
  openGraph: {
    url: '/services/ai',
    title: 'AI Automation & AI Integration Services | Sites Pro',
    description:
      'Chatbots, AI assistants, RAG pipelines and workflow automation integrated into your products and processes.',
  },
};

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
    name: 'Custom ML solutions',
    description: 'Tailored models and logic for domain-specific problems.',
  },
  {
    name: 'Real-time data handling',
    description: 'Streaming data, analysis and system-level insights.',
  },
];

const useCases = [
  {
    icon: Bot,
    title: 'Chatbots of any complexity',
    description: 'From simple FAQ bots to advanced AI assistants with custom logic and integrations',
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

export default function AIPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[{ name: 'AI & Automations', path: '/services/ai' }]}
      />
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-4 sm:px-6 pt-24 sm:pt-40 pb-16 sm:pb-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20 items-center">
          {/* TEXT */}
          <div>
            <span
              className="block text-xs sm:text-sm uppercase tracking-widest font-medium"
              style={{ color: ACCENT_1 }}
            >
              AI & Automations
            </span>

            <h1 className="font-display mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
              Intelligent automation
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
                }}
              >
                built into real systems
              </span>
            </h1>

            <p className="mt-5 sm:mt-8 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              We design and implement AI-powered automations integrated into digital products and business workflows.
              Focused on reducing manual work, improving efficiency and enabling smarter decision-making.
            </p>

            <Link
              href="/#contact"
              className="btn-primary mt-6 sm:mt-10 !text-sm"
            >
              Start your project
            </Link>
          </div>

          {/* INFOGRAPHIC - hidden on mobile */}
          <div className="hidden lg:flex justify-center">
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
              style={{ color: ACCENT_1 }}
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
                  <item.icon size={18} className="sm:hidden" style={{ color: ACCENT_1 }} />
                  <item.icon size={22} className="hidden sm:block" style={{ color: ACCENT_1 }} />
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
          <ContactForm />
        </div>
      </section>

      {/* BACK TO SERVICES */}
      <section className="px-4 sm:px-6 py-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <Link
              href="/#services"
              className="
                group
                flex items-center justify-center gap-2
                px-5 sm:px-6 py-3 sm:py-4
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                text-sm font-medium
                text-[var(--text-muted)]
                hover:text-[var(--fg)]
                hover:border-[var(--accent-1)]
                transition-all
                cursor-pointer select-none
              "
            >
              <span>←</span>
              <span>Back to services</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

