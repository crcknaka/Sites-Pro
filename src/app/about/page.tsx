import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Gauge,
  Layers,
  Rocket,
  Search,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import { projects, SERVICE_LABELS, type ServiceKey } from '@/data/projects';

export const metadata: Metadata = {
  title: 'About — How We Build Digital Products',
  description:
    'How Sites Pro works: a Riga-based studio that builds websites, web platforms and AI automations the way a product team would — and runs its own products on the same stack.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: '/about',
    title: 'About Sites Pro — How We Build Digital Products',
    description:
      'A Riga-based studio that builds websites, web platforms and AI automations the way a product team would — and runs its own products on the same stack.',
  },
};

const ownProducts = projects.filter((p) => ['vadi', 'agency-crm', 'liquid-silk'].includes(p.slug));

const facts = [
  { value: 'Riga', label: 'Latvia — working across the EU and worldwide' },
  { value: String(projects.length), label: 'case studies in the portfolio' },
  { value: String(ownProducts.length), label: 'products of our own in daily use' },
  { value: 'EN · RU', label: 'working languages, Latvian on request' },
];

const steps = [
  {
    step: 1,
    title: 'Discovery & strategy',
    icon: Search,
    text: 'One call to understand the business, then a short written brief we both sign off on: goals, constraints, what already exists, what "done" looks like. For anything bigger than a brochure site we map the data and the integrations before a single screen is designed.',
    delivers: 'Brief · scope · fixed price and timeline',
  },
  {
    step: 2,
    title: 'Design & build',
    icon: Code,
    text: 'Design and engineering run together, not in sequence. You see a working version early and often — a staging link you can click, not a slide deck. Content, SEO structure and performance budgets are part of the build from the first week.',
    delivers: 'Staging site · weekly check-ins · content and SEO in place',
  },
  {
    step: 3,
    title: 'Test, launch & scale',
    icon: Rocket,
    text: 'Cross-device testing, Core Web Vitals, accessibility and security checks before launch; DNS, hosting and monitoring handled by us. After launch the same team stays on for support, new features and the next version.',
    delivers: 'Launch checklist · handover · support plan',
  },
];

const principles = [
  {
    icon: Layers,
    title: 'Product-first UX',
    text: 'Every decision is driven by clarity, structure and predictable user behaviour — not by what is fashionable this quarter.',
  },
  {
    icon: Gauge,
    title: 'Performance by default',
    text: 'Minimal JavaScript, native browser features and fast-loading interfaces. Speed is a feature the client feels every day.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-ready',
    text: 'Security, scalability and clean architecture from day one, so the site you launch is the site you can grow.',
  },
  {
    icon: Wrench,
    title: 'We run what we build',
    text: 'Our own accounting SaaS and CRM run on the same stack and practices we sell. If something is painful, we feel it first.',
  },
];

const services: ServiceKey[] = ['web', 'web-platforms', 'ai', 'consulting'];

export default function AboutPage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-32 pb-14 sm:pb-20">
        <span className="section-eyebrow">About Sites Pro</span>

        <h1 className="font-display mt-4 max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          A small studio that builds{' '}
          <span className="text-gradient">like a product team</span>
        </h1>

        <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
          Sites Pro is SIA SitesPro, a web development studio in Riga. We design and
          build websites, web platforms and AI automations for companies in Latvia,
          the EU and beyond — and we run our own products on the same stack, which
          keeps us honest about what actually works.
        </p>

        {/* FACTS */}
        <dl className="mt-10 sm:mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-[var(--bg)] px-5 py-5 sm:px-6 sm:py-6">
              <dt className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{f.value}</dt>
              <dd className="mt-1 text-sm text-[var(--text-muted)]">{f.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="max-w-2xl">
          <span className="section-eyebrow">How we work</span>
          <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
            Three stages, no surprises
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
            The same process for a five-page site and a multi-year platform — what changes
            is the depth of each stage, not the order.
          </p>
        </div>

        <ol className="mt-10 sm:mt-14 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.step} className="card-premium card-topline flex flex-col rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)]">
                    <Icon className="h-5 w-5" style={{ color: ACCENT_1 }} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
                    Stage {s.step}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{s.text}</p>
                <p className="mt-auto pt-5 text-xs font-medium" style={{ color: ACCENT_1 }}>
                  {s.delivers}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <span className="section-eyebrow">Principles</span>
        <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
          What we optimise for
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)]">
                  <Icon className="h-5 w-5" style={{ color: ACCENT_1 }} />
                </span>
                <div>
                  <h3 className="text-base font-semibold sm:text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{p.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OWN PRODUCTS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <span className="section-eyebrow">Our own products</span>
        <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
          Built for ourselves, run every day
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {ownProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="card-premium group flex flex-col rounded-2xl p-5 sm:p-6"
            >
              <span className="font-display text-lg font-semibold">{p.title}</span>
              <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {p.description}
              </span>
              <span
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium opacity-70 transition-opacity group-hover:opacity-100"
                style={{ color: ACCENT_1 }}
              >
                Case study
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
            What we build
          </span>
          {services.map((key) => (
            <Link
              key={key}
              href={`/services/${key}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent-1)]/50 hover:bg-[var(--surface-strong)]"
            >
              {SERVICE_LABELS[key]}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </Link>
          ))}
        </div>
      </section>

      {/* CLOSING + CTA */}
      <section className="px-4 sm:px-6 pb-24 sm:pb-32">
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[var(--border)] px-6 py-12 sm:px-12 sm:py-16"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, ${ACCENT_1} 10%, var(--surface)), color-mix(in srgb, ${ACCENT_2} 6%, var(--surface)))`,
          }}
        >
          <p className="max-w-3xl text-lg leading-relaxed sm:text-xl">
            Sites Pro is built for founders, companies and teams who value quality, clarity
            and long-term growth. We don’t chase trends — we design systems that last, and
            we stay around to run them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className="btn-primary group text-sm">
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/portfolio" className="btn-secondary text-sm">
              See the work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
