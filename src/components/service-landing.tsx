import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, X } from 'lucide-react';

import ContactForm from '@/components/contact/contact-form';
import ServiceCases from '@/components/service-cases';
import Reveal from '@/components/reveal';
import { ILLUSTRATIONS } from '@/components/illustrations';
import type { IllustrationKey } from '@/components/illustrations/types';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from '@/components/json-ld';
import { projectsFor, type Project } from '@/data/projects';
import { findService, servicesFor, type ServiceKey } from '@/data/services';
import type { Faq } from '@/data/faqs';
import { localizePath } from '@/i18n';
import { getI18n } from '@/i18n/server';

/* ======================================================
   SERVICE LANDING — the service pages on both sites (and the Riga page)
   share one layout. English pages lean on proof: every claim points at a
   case study. Latvian pages, which are sent to clients who have never
   bought the service, add the plain-language blocks — why it matters,
   a comparison, who it is for and what is delivered.
====================================================== */

export interface ServiceLandingConfig {
  /** Service this page sells — Service schema and the related-services strip. */
  service?: ServiceKey;
  /** Breadcrumb trail after "Home" (internal paths). */
  breadcrumb: { name: string; path: string }[];
  eyebrow: string;
  title: string;
  /** Trailing words of the H1, set in the brand gradient. */
  titleAccent?: string;
  /** One paragraph, or several — the first one is the answer-first lead. */
  intro: string | string[];
  /** Case shown in the hero. */
  flagship?: string;
  /** Drawn explainer shown in the hero instead of a case. */
  illustration?: IllustrationKey;
  /** Second hero button; defaults to the flagship case. */
  secondaryCta?: { label: string; href: string };

  why?: {
    title: string;
    points: { title: string; text: string }[];
    illustration?: IllustrationKey;
  };

  pointsTitle: string;
  pointsIntro?: string;
  points: { title: string; text: string }[];

  comparison?: {
    title: string;
    eyebrow: string;
    columns: { label: string; tone: 'negative' | 'positive' | 'neutral'; items: string[] }[];
  };

  proofTitle?: string;
  proofIntro?: string;
  proof?: { slug: string; facts: string[] }[];

  approachTitle?: string;
  approach?: { title: string; text: string }[];

  forWhom?: string[];
  deliverables?: string[];
  tech?: string[];

  faqs: Faq[];

  cases?: { services?: ServiceKey[]; slugs?: string[]; title?: string };

  contactTitle: string;
  contactText: string;
}

export default async function ServiceLanding({ config }: { config: ServiceLandingConfig }) {
  const { locale, t } = await getI18n();
  const l = t.landing;
  const projects = projectsFor(locale);
  const bySlug = (slug: string): Project => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) throw new Error(`Unknown case study: ${slug}`);
    return project;
  };

  const flagship = config.flagship ? bySlug(config.flagship) : null;
  const service = config.service ? findService(locale, config.service) : undefined;
  const otherServices = servicesFor(locale).filter((s) => s.key !== config.service);
  const intro = Array.isArray(config.intro) ? config.intro : [config.intro];
  const HeroIllustration = config.illustration ? ILLUSTRATIONS[config.illustration] : null;
  const WhyIllustration = config.why?.illustration ? ILLUSTRATIONS[config.why.illustration] : null;
  const secondary =
    config.secondaryCta ??
    (flagship ? { label: l.caseStudy(flagship.title), href: `/portfolio/${flagship.slug}` } : null);

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
              {config.title}
              {config.titleAccent && (
                <>
                  {' '}
                  <span className="text-gradient">{config.titleAccent}</span>
                </>
              )}
            </h1>

            {intro.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'mt-5 sm:mt-8 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl'
                    : 'mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-xl'
                }
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-6 sm:mt-10 flex flex-wrap gap-3">
              <Link href="#contact" className="btn-primary group !text-sm">
                {l.start}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              {secondary && (
                <Link href={secondary.href} className="btn-secondary !text-sm">
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>

          {HeroIllustration ? (
            <div className="mx-auto w-full max-w-xl">
              <HeroIllustration />
            </div>
          ) : (
            flagship && (
              <Link
                href={`/portfolio/${flagship.slug}`}
                className="group block"
                aria-label={l.caseStudy(flagship.title)}
              >
                <Image
                  src={flagship.image}
                  alt={`${flagship.title} — ${flagship.seoTitle ?? l.caseStudy(flagship.title)}`}
                  width={1200}
                  height={900}
                  preload
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="h-auto w-full transition-transform duration-500 group-hover:-translate-y-1"
                />
              </Link>
            )
          )}
        </div>
      </section>

      {/* =====================================================
          WHY IT MATTERS
      ====================================================== */}
      {config.why && (
        <section className="px-4 sm:px-6 py-16 sm:py-28 bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <span className="section-eyebrow">{l.whyEyebrow}</span>
              <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">
                {config.why.title}
              </h2>
            </div>

            {WhyIllustration ? (
              <div className="mt-10 sm:mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <ol className="space-y-7">
                  {config.why.points.map((point, i) => (
                    <li key={point.title} className="flex gap-4">
                      <StepNumber n={i + 1} />
                      <div>
                        <h3 className="font-medium text-base sm:text-lg">{point.title}</h3>
                        <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                          {point.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Reveal delay={120}>
                  <WhyIllustration />
                </Reveal>
              </div>
            ) : (
              <ol className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {config.why.points.map((point, i) => (
                  <li
                    key={point.title}
                    className="rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-[var(--border)] bg-[var(--bg)]"
                  >
                    <StepNumber n={i + 1} />
                    <h3 className="mt-4 font-medium text-base">{point.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">{point.text}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>
      )}

      {/* =====================================================
          WHAT WE BUILD / WHAT IS INCLUDED
      ====================================================== */}
      <section
        className={`px-4 sm:px-6 py-16 sm:py-28 ${config.why ? '' : 'bg-[var(--surface)]'}`}
      >
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
          COMPARISON
      ====================================================== */}
      {config.comparison && (
        <section className="px-4 sm:px-6 py-16 sm:py-28 bg-[var(--surface)]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="section-eyebrow">{config.comparison.eyebrow}</span>
              <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">
                {config.comparison.title}
              </h2>
            </div>
            <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 md:grid-cols-2">
              {config.comparison.columns.map((column, i) => {
                const negative = column.tone === 'negative';
                return (
                  <Reveal key={column.label} delay={i * 100}>
                    <div
                      className={`h-full rounded-2xl sm:rounded-3xl border p-6 sm:p-8 bg-[var(--bg)] ${
                        column.tone === 'positive'
                          ? 'border-[var(--accent-1)]/40'
                          : negative
                            ? 'border-[var(--danger)]/30'
                            : 'border-[var(--border)]'
                      }`}
                      style={
                        column.tone === 'positive'
                          ? { boxShadow: '0 24px 48px -24px var(--glow-soft)' }
                          : undefined
                      }
                    >
                      <h3
                        className={`font-display text-lg sm:text-xl font-semibold ${
                          negative ? 'text-[var(--danger)]' : ''
                        }`}
                      >
                        {column.label}
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {column.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm">
                            <span
                              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                                negative ? 'bg-[var(--danger)]/12' : 'bg-[var(--accent-1)]/15'
                              }`}
                            >
                              {negative ? (
                                <X className="h-3 w-3 text-[var(--danger)]" aria-hidden="true" />
                              ) : (
                                <Check className="h-3 w-3 text-[var(--accent-text)]" aria-hidden="true" />
                              )}
                            </span>
                            <span className="leading-relaxed text-[var(--text-muted)]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          PROOF — specific cases, specific facts
      ====================================================== */}
      {config.proof && config.proof.length > 0 && (
        <section className="px-4 sm:px-6 py-16 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <span className="section-eyebrow">{l.proofEyebrow}</span>
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
                          {l.readCase}
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
      )}

      {/* =====================================================
          APPROACH
      ====================================================== */}
      {config.approach && config.approach.length > 0 && (
        <section className={`px-4 sm:px-6 ${config.proof?.length ? 'pb-16 sm:pb-28' : 'py-16 sm:py-28'}`}>
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 sm:gap-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold">
              {config.approachTitle ?? l.approachDefault}
            </h2>
            <ol className="space-y-6">
              {config.approach.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <StepNumber n={i + 1} />
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
          WHO IT IS FOR / WHAT YOU GET
      ====================================================== */}
      {(config.forWhom || config.deliverables) && (
        <section className="px-4 sm:px-6 py-16 sm:py-28 bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:gap-16">
            {config.forWhom && (
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">{l.forWhom}</h2>
                <ul className="mt-6 space-y-3">
                  {config.forWhom.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
                {config.tech && (
                  <div className="mt-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
                      {l.tech}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {config.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--text-muted)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            {config.deliverables && (
              <div className="card-premium rounded-2xl sm:rounded-3xl p-6 sm:p-9">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">{l.deliverables}</h2>
                <ul className="mt-6 space-y-3">
                  {config.deliverables.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* =====================================================
          CASES
      ====================================================== */}
      {config.cases?.services?.length ? (
        <ServiceCases service={config.cases.services} title={config.cases.title} />
      ) : config.cases?.slugs?.length ? (
        <ServiceCases slugs={config.cases.slugs} title={config.cases.title} />
      ) : null}

      {/* =====================================================
          FAQ — native <details>: no JavaScript, answers always in the HTML
      ====================================================== */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            {l.faqTitle}
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
            {l.otherServices}
          </span>
          {otherServices.map((s) => (
            <Link
              key={s.key}
              href={localizePath(locale, s.path)}
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
          <ContactForm locale={locale} />
        </div>
      </section>
    </div>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--border)] text-xs font-semibold text-[var(--accent-text)]">
      {n}
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent-1)]/15">
        <Check className="h-3 w-3 text-[var(--accent-text)]" aria-hidden="true" />
      </span>
      <span className="leading-relaxed text-[var(--text-muted)]">{children}</span>
    </li>
  );
}
