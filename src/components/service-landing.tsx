import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';

import ContactForm from '@/components/contact/contact-form';
import ServiceCases from '@/components/service-cases';
import Reveal from '@/components/reveal';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from '@/components/json-ld';
import { projects } from '@/data/projects';
import { SERVICES, getService, type ServiceKey } from '@/data/services';
import type { Faq } from '@/data/faqs';

/* ======================================================
   SERVICE LANDING — the specialised service pages (and the Riga page)
   share one layout: every claim on them points at a case study.
====================================================== */

export interface ServiceLandingConfig {
  /** Service this page sells — Service schema and the related-services strip. */
  service?: ServiceKey;
  /** Breadcrumb trail after "Home". */
  breadcrumb: { name: string; path: string }[];
  eyebrow: string;
  title: string;
  /** Trailing words of the H1, set in the brand gradient. */
  titleAccent: string;
  intro: string;
  /** Case shown in the hero. */
  flagship: string;

  pointsTitle: string;
  pointsIntro?: string;
  points: { title: string; text: string }[];

  proofTitle: string;
  proofIntro?: string;
  proof: { slug: string; facts: string[] }[];

  approachTitle?: string;
  approach?: { title: string; text: string }[];

  faqs: Faq[];

  cases: { services?: ServiceKey[]; slugs?: string[]; title?: string };

  contactTitle: string;
  contactText: string;
}

const bySlug = (slug: string) => {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown case study: ${slug}`);
  return project;
};

export default function ServiceLanding({ config }: { config: ServiceLandingConfig }) {
  const flagship = bySlug(config.flagship);
  const service = config.service ? getService(config.service) : null;
  const otherServices = SERVICES.filter((s) => s.key !== config.service);

  return (
    <div className="bg-[var(--bg)] text-[var(--fg)]">
      {service && <ServiceJsonLd service={service} />}
      <BreadcrumbJsonLd items={config.breadcrumb} />
      <FaqJsonLd items={config.faqs} />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-4 sm:px-6 pt-24 sm:pt-40 pb-16 sm:pb-28">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-10 sm:gap-16 items-center">
          <div>
            <span className="section-eyebrow">{config.eyebrow}</span>

            <h1 className="font-display mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              {config.title} <span className="text-gradient">{config.titleAccent}</span>
            </h1>

            <p className="mt-5 sm:mt-8 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              {config.intro}
            </p>

            <div className="mt-6 sm:mt-10 flex flex-wrap gap-3">
              <Link href="#contact" className="btn-primary group !text-sm">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link href={`/portfolio/${flagship.slug}`} className="btn-secondary !text-sm">
                {flagship.title} case study
              </Link>
            </div>
          </div>

          <Link
            href={`/portfolio/${flagship.slug}`}
            className="group block"
            aria-label={`${flagship.title} — case study`}
          >
            <Image
              src={flagship.image}
              alt={`${flagship.title} — ${flagship.seoTitle ?? 'case study'}`}
              width={1200}
              height={900}
              preload
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 640px"
              className="h-auto w-full transition-transform duration-500 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      {/* =====================================================
          WHAT WE BUILD
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-28 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            {config.pointsTitle}
          </h2>
          {config.pointsIntro && (
            <p className="mt-4 sm:mt-6 text-center text-sm sm:text-base text-[var(--text-muted)] max-w-3xl mx-auto">
              {config.pointsIntro}
            </p>
          )}

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {config.points.map((point) => (
              <div
                key={point.title}
                className="rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-[var(--border)] bg-[var(--bg)]"
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--accent-1)' }}
                  />
                  <div>
                    <h3 className="font-medium text-base">{point.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">{point.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROOF — specific cases, specific facts
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Proof</span>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">
              {config.proofTitle}
            </h2>
            {config.proofIntro && (
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                {config.proofIntro}
              </p>
            )}
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {config.proof.map((item, i) => {
              const project = bySlug(item.slug);
              return (
                <Reveal key={item.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="card-premium group flex h-full flex-col overflow-hidden rounded-2xl"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface)]">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                      {project.status && (
                        <p className="mt-1 text-xs text-[var(--text-subtle)]">{project.status}</p>
                      )}
                      <ul className="mt-3 space-y-2">
                        {item.facts.map((fact) => (
                          <li key={fact} className="flex gap-2 text-sm leading-relaxed text-[var(--text-muted)]">
                            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-1)]" />
                            {fact}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-medium text-[var(--accent-text)]">
                        Read the case study
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ====================================================== */}
      {config.approach && config.approach.length > 0 && (
        <section className="px-4 sm:px-6 pb-16 sm:pb-28">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 sm:gap-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold">
              {config.approachTitle ?? 'How we approach it'}
            </h2>
            <ol className="space-y-6">
              {config.approach.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--border)] text-xs font-semibold text-[var(--accent-text)]"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-medium text-base">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* =====================================================
          CASES
      ====================================================== */}
      <LandingCases cases={config.cases} />

      {/* =====================================================
          FAQ — native <details>: no JavaScript, answers always in the HTML
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            Questions we get asked
          </h2>
          <div className="mt-10 flex flex-col gap-3">
            {config.faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] open:border-[var(--accent-1)]/30 open:bg-[var(--surface-strong)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-[var(--text-muted)]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OTHER SERVICES
      ====================================================== */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
            Other services
          </span>
          {otherServices.map((s) => (
            <Link
              key={s.key}
              href={s.path}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent-1)]/50 hover:bg-[var(--surface-strong)]"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section
        id="contact"
        className="px-4 sm:px-6 py-20 sm:py-32 bg-[var(--surface-strong)] border-t border-[var(--border)] scroll-mt-24"
      >
        <div className="mx-auto max-w-4xl text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold">
            {config.contactTitle}
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {config.contactText}
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function LandingCases({ cases }: { cases: ServiceLandingConfig['cases'] }) {
  if (cases.services?.length) {
    return <ServiceCases service={cases.services} title={cases.title} />;
  }
  if (cases.slugs?.length) {
    return <ServiceCases slugs={cases.slugs} title={cases.title} />;
  }
  return null;
}
