import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  Search,
  Code,
  Rocket,
  ShieldCheck,
  Gauge,
  Layers,
  Mail,
  MapPin,
  Clock,
  Briefcase,
  FolderOpen,
  ArrowRight,
} from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';

export const metadata: Metadata = {
  title: 'About — Sites Pro',
  description:
    'Learn how Sites Pro works, our process, principles, and why we build product-grade websites.',
};

const steps = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description:
      'We align on goals, constraints and technical direction to define scope and priorities.',
    icon: Search,
  },
  {
    step: 2,
    title: 'Design & Build',
    description:
      'We design and build scalable products with a focus on architecture, performance and usability.',
    icon: Code,
  },
  {
    step: 3,
    title: 'Test, Launch & Scale',
    description:
      'We prepare products for production, launch reliably and support long-term growth.',
    icon: Rocket,
  },
];

const principles = [
  {
    title: 'Product-first UX',
    description:
      'Every decision is driven by clarity, structure and predictable user behavior.',
    icon: Layers,
  },
  {
    title: 'Performance by default',
    description:
      'Minimal JavaScript, native browser features and fast-loading interfaces by default.',
    icon: Gauge,
  },
  {
    title: 'Production-ready',
    description:
      'Security, scalability, and clean architecture from day one.',
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
        <span
          className="block text-xs sm:text-sm font-medium tracking-widest uppercase"
          style={{ color: ACCENT_1 }}
        >
          About Sites Pro
        </span>

        <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          How we build{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
            }}
          >
            product-grade websites
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
          We design and develop calm, scalable, and conversion-focused digital
          products — where UX, performance, and engineering work as one system.
        </p>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20 sm:pb-32">
        {/* Mobile version - compact vertical cards */}
        <div className="md:hidden space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="
                  flex items-start gap-4 p-4
                  rounded-xl
                  bg-[var(--surface)]
                  border border-[var(--border)]
                "
              >
                <div
                  className="
                    relative shrink-0 h-12 w-12 rounded-lg
                    flex items-center justify-center
                    bg-[var(--surface-strong)]
                    border border-[var(--border)]
                    text-[var(--text-muted)]
                  "
                >
                  <Icon className="h-5 w-5" />
                  <span
                    className="
                      absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full
                      flex items-center justify-center
                      text-xs font-semibold text-black
                    "
                    style={{ background: ACCENT_1 }}
                  >
                    {step.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[var(--fg)] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop version - horizontal grid with connector */}
        <div className="hidden md:block">
          <div className="relative grid grid-cols-3 gap-12">
            <div
              className="absolute top-12 left-[10%] right-[10%] h-px"
              style={{
                background: `linear-gradient(
                  90deg,
                  transparent,
                  ${ACCENT_1}33,
                  ${ACCENT_1}22,
                  ${ACCENT_1}33,
                  transparent
                )`,
              }}
            />

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.step} className="relative px-6 text-center">
                  <div
                    className="
                      relative z-10 mx-auto mb-8 h-24 w-24 rounded-xl
                      flex items-center justify-center
                      bg-[var(--surface-strong)] backdrop-blur-sm
                      border border-[var(--border)]
                      text-[var(--text-muted)]
                      hover:text-[var(--fg)]
                      hover:border-[var(--accent-1)]
                      hover:bg-[var(--surface-strong)]
                      transition-all duration-300
                    "
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--bg) 95%, var(--surface-strong))',
                    }}
                  >
                    <Icon className="h-10 w-10" />

                    <span
                      className="
                        absolute -top-2 -right-2
                        flex h-8 w-8 items-center justify-center
                        rounded-full
                        text-sm font-semibold text-black
                      "
                      style={{ background: ACCENT_1 }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--fg)]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-32">
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--fg)]">
        Principles & Approach
        </h2>

        {/* Mobile version - compact cards */}
        <div className="md:hidden mt-8 space-y-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex items-start gap-4 p-4
                  rounded-xl
                  bg-[var(--surface)]
                  border border-[var(--border)]
                "
              >
                <div
                  className="
                    shrink-0 h-10 w-10 rounded-lg
                    flex items-center justify-center
                    bg-[var(--surface-strong)]
                    border border-[var(--border)]
                  "
                >
                  <Icon className="h-5 w-5" style={{ color: ACCENT_1 }} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[var(--fg)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop version - grid */}
        <div className="hidden md:grid mt-12 grid-cols-3 gap-8">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl p-6
                  bg-[var(--surface)]
                  border border-[var(--border)]
                "
              >
                <Icon className="h-6 w-6 text-[var(--accent-1)]" />

                <h3 className="mt-4 text-lg font-semibold text-[var(--fg)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-20 sm:pb-40">
        <div className="mb-12 sm:mb-20 h-px bg-[var(--border)]" />

        <p className="text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
        Sites Pro is built for founders, startups and teams who value quality, clarity and long-term growth. We don't chase trends — we design systems that last.
        </p>

        {/* EXPLORE MORE SECTION */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* Services Card */}
          <div
            className="
              group relative overflow-hidden
              rounded-2xl sm:rounded-3xl p-5 sm:p-8
              bg-[var(--surface)]
              border border-[var(--border)]
              hover:border-[var(--accent-1)]/40
              transition-all duration-500
              hover:shadow-2xl
              hover:shadow-[var(--accent-1)]/10
            "
          >
            {/* Accent gradient overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at top left, ${ACCENT_1}08, transparent 60%)`,
              }}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className="
                  inline-flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center
                  rounded-xl sm:rounded-2xl
                  bg-gradient-to-br
                  transition-all duration-500
                  group-hover:scale-110
                "
                style={{
                  background: `linear-gradient(135deg, ${ACCENT_1}20, ${ACCENT_1}10)`,
                }}
              >
                <Briefcase className="h-5 w-5 sm:h-7 sm:w-7" style={{ color: ACCENT_1 }} />
              </div>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-[var(--fg)]">
                Explore Our Services
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Explore our services — from websites to web platforms and AI automations.
              </p>

              <Link
                href="/#services"
                className="
                  mt-5 sm:mt-8 inline-flex items-center gap-2
                  rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium
                  text-[var(--fg)]
                  bg-[var(--surface-strong)]
                  border border-[var(--border)]
                  hover:border-[var(--accent-1)]/60
                  hover:shadow-lg
                  hover:shadow-[var(--accent-1)]/20
                  hover:scale-105
                  active:scale-[0.98]
                  transition-all duration-300
                "
              >
                View Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Portfolio Card */}
          <div
            className="
              group relative overflow-hidden
              rounded-2xl sm:rounded-3xl p-5 sm:p-8
              bg-[var(--surface)]
              border border-[var(--border)]
              hover:border-[var(--accent-2)]/40
              transition-all duration-500
              hover:shadow-2xl
              hover:shadow-[var(--accent-2)]/10
            "
          >
            {/* Accent gradient overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at top right, ${ACCENT_2}08, transparent 60%)`,
              }}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className="
                  inline-flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center
                  rounded-xl sm:rounded-2xl
                  bg-gradient-to-br
                  transition-all duration-500
                  group-hover:scale-110
                "
                style={{
                  background: `linear-gradient(135deg, ${ACCENT_2}20, ${ACCENT_2}10)`,
                }}
              >
                <FolderOpen className="h-5 w-5 sm:h-7 sm:w-7" style={{ color: ACCENT_2 }} />
              </div>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-[var(--fg)]">
                Browse Our Work
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                Check out our portfolio — real projects, real results, real impact.
              </p>

              <Link
                href="/#portfolio"
                className="
                  mt-5 sm:mt-8 inline-flex items-center gap-2
                  rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium
                  text-[var(--fg)]
                  bg-[var(--surface-strong)]
                  border border-[var(--border)]
                  hover:border-[var(--accent-2)]/60
                  hover:shadow-lg
                  hover:shadow-[var(--accent-2)]/20
                  hover:scale-105
                  active:scale-[0.98]
                  transition-all duration-300
                "
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20 sm:pb-32">
        <div className="mb-10 sm:mb-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--fg)]">
          Ready to start a project?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[var(--text-muted)]">
          Get in touch and let's discuss your idea.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
          {/* LEFT INFO (on desktop, second on mobile) */}
          <div className="space-y-6 sm:space-y-10 order-2 lg:order-1">
            <InfoItem
              icon={Mail}
              title="Email"
              value="info@sitespro.org"
              selectable
            />
            <InfoItem
              icon={MapPin}
              title="Location"
              value="Europe — working globally"
            />
            <InfoItem
              icon={Clock}
              title="Response time"
              value="Usually within 24 hours"
            />

            {/* QUOTE */}
            <blockquote
              className="
                mt-8 sm:mt-12 border-l pl-4 sm:pl-6 text-sm
                border-[var(--border)]
                text-[var(--text-muted)]
              "
            >
              Tell us about your project or challenge.
              We’ll help define the right direction and next steps..

              <div
                className="mt-4 font-medium not-italic"
                style={{ color: ACCENT_1 }}
              >
                — The Sites Pro Team
              </div>
            </blockquote>
          </div>

          {/* RIGHT: FORM + TRUST (on desktop, first on mobile) */}
          <div className="flex flex-col order-1 lg:order-2">
            <ContactForm />

            {/* TRUST NOTE */}
            <div className="mt-6 flex max-w-md items-start gap-3 text-xs text-[var(--text-muted)]">
              <ShieldCheck
                className="h-4 w-4 flex-shrink-0"
                style={{ color: ACCENT_1 }}
              />
              <p className="leading-relaxed">
                Your information is used solely to respond to your inquiry.
                We do not share your data with third parties and handle all
                submissions in accordance with GDPR and privacy best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BACK HOME */}
      <section className="px-4 sm:px-6 py-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <Link
              href="/"
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
              <span>Back Home</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoItem({
  icon: Icon,
  title,
  value,
  selectable,
}: {
  icon: any;
  title: string;
  value: string;
  selectable?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="
          flex h-11 w-11 items-center justify-center
          rounded-xl
          bg-[var(--surface)]
          border border-[var(--border)]
        "
      >
        <Icon className="h-5 w-5" style={{ color: ACCENT_1 }} />
      </div>

      <div>
        <p className="font-medium text-[var(--fg)]">
          {title}
        </p>
        <p
          className={`mt-1 text-sm text-[var(--text-muted)]${selectable ? ' select-text' : ''}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
