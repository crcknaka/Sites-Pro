import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  Palette,
  Brush,
  FileText,
  BarChart3,
  Headphones,
} from 'lucide-react';
import type { Metadata } from 'next';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import { WebsiteInfographic } from '@/components/service-infographic';
import {
  ServiceJsonLd,
  BreadcrumbJsonLd,
  SERVICE_DEFINITIONS,
} from '@/components/json-ld';

const service = SERVICE_DEFINITIONS.find((s) => s.path === '/services/web')!;

export const metadata: Metadata = {
  title: 'Website Development Services',
  description:
    'High-performance website development with Next.js, React and headless CMS. Fast, accessible and SEO-ready websites built as a foundation for long-term growth.',
  alternates: {
    canonical: '/services/web',
  },
  openGraph: {
    url: '/services/web',
    title: 'Website Development Services | Sites Pro',
    description:
      'Websites that perform, scale and convert — built with Next.js, React and modern CMS platforms.',
  },
};

/* ======================================================
   DATA
====================================================== */

const techStack = [
  {
    name: 'Node.js / Next.js / React',
    description: 'Modern frameworks for fast, scalable and future-proof web products.',
  },
  {
    name: 'TypeScript & modern tooling',
    description: 'Reliable, maintainable and type-safe codebases.',
  },
  {
    name: 'WordPress & WooCommerce',
    description: 'Optimized CMS and commerce solutions for projects where flexibility and budget matter.',
  },
  {
    name: 'Headless CMS',
    description: 'Flexible content management with modern, scalable frontends.',
  },
  {
    name: 'SEO & performance optimization',
    description: 'Core Web Vitals, accessibility and search visibility built in from day one.',
  },
  {
    name: 'Hosting, CI/CD & monitoring',
    description: 'Stable infrastructure, smooth deployments and ongoing reliability.',
  },
];

const additionalServices = [
  { icon: Palette, label: 'UI / UX design focused on clarity and usability' },
  { icon: Brush, label: 'Branding & visual identity aligned with product goals' },
  { icon: FileText, label: 'Content & copywriting that supports conversion' },
  { icon: BarChart3, label: 'Analytics & tracking for informed decisions' },
  { icon: Headphones, label: 'Ongoing support & improvements as your product grows' },
];

/* ======================================================
   PAGE
====================================================== */

export default function WebsitesPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[{ name: 'Website Development', path: '/services/web' }]}
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
              Websites
            </span>

            <h1 className="font-display mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
              Websites that perform,
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
                }}
              >
                scale and convert
              </span>
            </h1>

            <p className="mt-5 sm:mt-8 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              We design and build high-performance websites as a foundation for long-term growth.
              From marketing and corporate websites to product-ready platforms — always focused on speed, clarity and real business outcomes.
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
            <WebsiteInfographic />
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-center">
            Technology stack
          </h2>

          <p className="mt-4 sm:mt-6 text-center text-sm sm:text-base text-[var(--text-muted)] max-w-3xl mx-auto">
            We choose technologies based on product complexity, scalability needs and long-term maintainability — not trends.
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
          MORE THAN DEVELOPMENT
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              More than just development
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              A website is not a one-off deliverable — it's a living product.
              We support the full lifecycle, from initial launch to continuous improvement.
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
            Let's build your website
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            Tell us about your project — whether it's a high-end custom platform
            or a clean, efficient CMS website.
            We'll help you choose the right approach.
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

