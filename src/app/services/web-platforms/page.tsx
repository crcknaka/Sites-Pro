import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  Layers,
  Server,
  Database,
  Plug,
  ShieldCheck,
  Headphones,
} from 'lucide-react';
import type { Metadata } from 'next';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import { WebPlatformInfographic } from '@/components/service-infographic';
import ServiceCases from '@/components/service-cases';
import {
  ServiceJsonLd,
  BreadcrumbJsonLd,
  SERVICE_DEFINITIONS,
} from '@/components/json-ld';

const service = SERVICE_DEFINITIONS.find(
  (s) => s.path === '/services/web-platforms',
)!;

export const metadata: Metadata = {
  title: 'Web Platform & Custom Application Development',
  description:
    'Custom web platforms and applications built as systems: React and Next.js frontends, Node.js APIs, scalable databases, integrations and cloud infrastructure.',
  alternates: {
    canonical: '/services/web-platforms',
  },
  openGraph: {
    url: '/services/web-platforms',
    title: 'Web Platform & Custom Application Development | Sites Pro',
    description:
      'From internal tools and dashboards to business-critical platforms — architected for performance and long-term scale.',
  },
};

/* ======================================================
   DATA
====================================================== */

const techStack = [
  {
    name: 'Frontend platforms',
    description: 'Modern web interfaces built with React, Next.js and scalable UI architectures.',
  },
  {
    name: 'Backend systems',
    description: 'Node.js APIs, business logic, integrations and service-oriented backends.',
  },
  {
    name: 'Databases & storage',
    description: 'PostgreSQL, MySQL, Redis and scalable data layers designed for growth.',
  },
  {
    name: 'Integrations & APIs',
    description: 'Payment providers, third-party services and internal APIs.',
  },
  {
    name: 'Security & reliability',
    description: 'Authentication, access control, data protection and system stability.',
  },
  {
    name: 'Infrastructure & monitoring',
    description: 'Cloud hosting, CI/CD pipelines and observability for production systems.',
  },
];

const additionalServices = [
  { icon: Layers, label: 'System architecture & planning' },
  { icon: Server, label: 'Frontend, backend & API development' },
  { icon: Database, label: 'Database design & optimization' },
  { icon: Plug, label: 'Third-party integrations' },
  { icon: ShieldCheck, label: 'Security & access control' },
  { icon: Headphones, label: 'Support, scaling & improvements' },
];

/* ======================================================
   PAGE
====================================================== */

export default function WebPlatformsPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Web Platform Development', path: '/services/web-platforms' },
        ]}
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
              Web Platforms
            </span>

            <h1 className="font-display mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
              Scalable platforms
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
                }}
              >
                built as systems
              </span>
            </h1>

            <p className="mt-5 sm:mt-8 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              We design and build custom web platforms and applications focused on architecture, performance and long-term scalability.
              From internal tools and dashboards to complex, business-critical platforms — built to grow with your product and processes.
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
            <WebPlatformInfographic />
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY & ARCHITECTURE
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-center">
            Architecture & technology
          </h2>

          <p className="mt-4 sm:mt-6 text-center text-sm sm:text-base text-[var(--text-muted)] max-w-3xl mx-auto">
            We approach platforms as systems, not standalone features — with clear architecture, reliable infrastructure and room for future evolution.
          </p>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
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
                      {tech.name}
                    </h3>
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
          WHAT WE DO
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              More than just development
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Web platforms require product thinking, solid foundations and continuous iteration.
              We support platforms from early architectural decisions to long-term scaling and maintenance.
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

      <ServiceCases service="web-platforms" />

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
            Let's build your platform
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            Tell us about your idea or existing system.
            We'll help design the right architecture
            and turn it into a reliable, scalable platform.
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

