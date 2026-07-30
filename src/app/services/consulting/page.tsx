import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  CreditCard,
  TrendingUp,
  Code,
  Brain,
  Globe,
  BarChart3,
  ShieldCheck,
  Zap,
  Target,
  Users,
  FileCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import { ConsultingInfographic } from '@/components/service-infographic';
import ServiceCases from '@/components/service-cases';
import {
  ServiceJsonLd,
  BreadcrumbJsonLd,
  SERVICE_DEFINITIONS,
} from '@/components/json-ld';

const service = SERVICE_DEFINITIONS.find(
  (s) => s.path === '/services/consulting',
)!;

export const metadata: Metadata = {
  title: 'Digital & Fintech Consulting',
  description:
    'Strategic consulting for payment systems, fintech architecture, web and app development, AI integration and technical audits. Expert guidance for the right technical decisions.',
  alternates: {
    canonical: '/services/consulting',
  },
  openGraph: {
    url: '/services/consulting',
    title: 'Digital & Fintech Consulting | Sites Pro',
    description:
      'Payment systems, fintech architecture, technology selection, AI strategy and technical audits.',
  },
};

/* ======================================================
   DATA
====================================================== */

const consultingAreas = [
  {
    name: 'Payment system integration',
    description: 'Stripe, PayPal, Square and custom payment gateways. Secure, compliant and optimized checkout flows.',
  },
  {
    name: 'Fintech solutions',
    description: 'Financial technology architecture, compliance, security and scalable fintech platforms.',
  },
  {
    name: 'Website development strategy',
    description: 'Architecture planning, technology selection and roadmap for web projects.',
  },
  {
    name: 'Application development',
    description: 'System design, scalability planning and technical architecture for custom applications.',
  },
  {
    name: 'AI & automation consulting',
    description: 'AI integration strategies, automation workflows and intelligent system design.',
  },
  {
    name: 'Project assessment & planning',
    description: 'Technical audits, feasibility studies and development roadmaps.',
  },
];

const additionalServices = [
  { icon: Target, label: 'Technical strategy & planning' },
  { icon: BarChart3, label: 'Architecture & system design' },
  { icon: ShieldCheck, label: 'Security & compliance review' },
  { icon: Zap, label: 'Performance optimization' },
  { icon: Code, label: 'Technology stack selection' },
  { icon: Users, label: 'Team guidance & mentoring' },
  { icon: FileCheck, label: 'Code review & audits' },
  { icon: TrendingUp, label: 'Scalability planning' },
];

/* ======================================================
   PAGE
====================================================== */

export default function ConsultingPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[{ name: 'Digital Consulting', path: '/services/consulting' }]}
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
              Consulting
            </span>

            <h1 className="font-display mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
              Expert guidance for
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
                }}
              >
                your digital projects
              </span>
            </h1>

            <p className="mt-5 sm:mt-8 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              Strategic consulting for payment systems, fintech solutions,
              website and app development, AI integration, and project planning.
              Get expert guidance to make the right technical decisions.
            </p>

            <Link
              href="/#contact"
              className="btn-primary mt-6 sm:mt-10 !text-sm"
            >
              Start consulting
            </Link>
          </div>

          {/* INFOGRAPHIC - hidden on mobile */}
          <div className="hidden lg:flex justify-center">
            <ConsultingInfographic />
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTING AREAS
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-center">
            Consulting areas
          </h2>

          <p className="mt-4 sm:mt-6 text-center text-sm sm:text-base text-[var(--text-muted)] max-w-3xl mx-auto">
            We provide expert guidance across multiple domains — from payment
            integrations and fintech to web development, applications, AI and project planning.
          </p>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {consultingAreas.map((area) => (
              <div
                key={area.name}
                className="
                  rounded-xl sm:rounded-2xl p-4 sm:p-6
                  border border-[var(--border)]
                  bg-[var(--bg)]
                "
              >
                <div className="flex items-start gap-3">
                  {/* DOT */}
                  <span
                    className="mt-1.5 sm:mt-2 h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: ACCENT_1 }}
                  />

                  <div>
                    <h3 className="font-medium text-sm sm:text-base">
                      {area.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)]">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              Strategic technical guidance
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Whether you're planning a new project, integrating payment systems,
              building fintech solutions, or need guidance on web/app/AI development,
              we provide expert consulting to help you make informed decisions
              and avoid costly mistakes.
            </p>
          </div>

          {/* SERVICES WITH ICONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.label}
                className="
                  flex items-center gap-3 sm:gap-4
                  rounded-xl sm:rounded-2xl p-4 sm:p-6
                  border border-[var(--border)]
                  bg-[var(--surface)]
                "
              >
                <div
                  className="
                    h-9 w-9 sm:h-10 sm:w-10 shrink-0
                    rounded-lg sm:rounded-xl
                    flex items-center justify-center
                    border border-[var(--border)]
                    bg-[var(--bg)]
                  "
                >
                  <service.icon
                    size={16}
                    className="sm:hidden"
                    style={{ color: ACCENT_1 }}
                  />
                  <service.icon
                    size={18}
                    className="hidden sm:block"
                    style={{ color: ACCENT_1 }}
                  />
                </div>

                <p className="text-xs sm:text-sm font-medium">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCases service="consulting" />

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section
        id="contact"
        className="
          px-4 sm:px-6 py-20 sm:py-40
          bg-[var(--surface-strong)]
          border-t border-[var(--border)]
        "
      >
        <div className="mx-auto max-w-4xl text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold">
            Let's discuss your project
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            Tell us about your project, challenges or goals.
            We'll provide expert guidance on payment systems, fintech solutions,
            development strategies, AI integration, or any technical consulting needs.
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

