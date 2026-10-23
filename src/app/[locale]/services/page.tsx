import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { BreadcrumbJsonLd } from '@/components/json-ld';
import { projects } from '@/data/projects';
import { servicesFor, type ServiceDefinition } from '@/data/services';
import { pageMetadata } from '@/lib/metadata';
import { isLocale, localizePath, type Locale } from '@/i18n';
import { getI18n } from '@/i18n/server';

const COPY = {
  en: {
    title: 'Services — Websites, Platforms, E-commerce, Fintech & AI',
    description:
      'What Sites Pro builds: websites, web platforms, e-commerce and B2B shops, payment systems and fintech, custom CRMs, multilingual and RTL sites, AI automations and consulting.',
    eyebrow: 'Services',
    h1: 'What we build —',
    h1Accent: 'and the work behind each claim',
    intro:
      'Four core services and four specialisations. Every page links to the case studies it is based on, so you can check the work before you write to us.',
    core: 'Core services',
    specialised: 'Specialisations',
    learnMore: 'Learn more',
    cases: (n: number) => `${n} case ${n === 1 ? 'study' : 'studies'}`,
    bandTitle: 'Based in Riga, working worldwide',
    bandText: 'Latvian taxes, languages and business registers are home ground for us.',
    bandLink: { label: 'Web development in Riga', href: '/web-development-riga' },
    start: 'Start a project',
  },
  lv: {
    title: 'Web izstrādes pakalpojumi Latvijā',
    description:
      'SitesPro pakalpojumi: mājas lapas izstrāde, interneta veikali, web aplikācijas, CRM sistēmas, AI automatizācija, mājas lapu uzturēšana un SEO/GEO optimizācija.',
    eyebrow: 'Pakalpojumi',
    h1: 'Ko mēs darām -',
    h1Accent: 'un darbi, kas to pierāda',
    intro:
      'Izstrādājam jaunas vietnes un sistēmas, uzturam jau esošās un palīdzam tās atrast Google un AI asistentos. Katra pakalpojuma lapā - projekti, uz kuriem tā balstās.',
    core: 'Izstrāde',
    specialised: 'Atbalsts un izaugsme',
    learnMore: 'Uzzināt vairāk',
    cases: (n: number) => `${n} ${n % 10 === 1 && n % 100 !== 11 ? 'projekts' : 'projekti'}`,
    bandTitle: 'Rīgā, latviski un ar vietējo pieredzi',
    bandText:
      'Latvijas nodokļi, valodas un uzņēmumu reģistri mums ir ikdiena. Konsultācija un cenas piedāvājums - bez maksas.',
    bandLink: null,
    start: 'Sākt projektu',
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: PageProps<'/[locale]/services'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({
    locale,
    title: COPY[locale].title,
    description: COPY[locale].description,
    path: '/services',
    image: false, // opengraph-image.tsx in this folder
  });
}

export default async function ServicesPage() {
  const { locale, t } = await getI18n();
  const c = COPY[locale];
  const all = servicesFor(locale);
  const core = all.filter((s) => s.core);
  const specialised = all.filter((s) => !s.core);

  return (
    <div className="bg-[var(--bg)] text-[var(--fg)]">
      <BreadcrumbJsonLd items={[{ name: t.nav.services, path: '/services' }]} />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-36 pb-12 sm:pb-16">
        <span className="section-eyebrow">{c.eyebrow}</span>
        <h1 className="font-display mt-4 max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          {c.h1} <span className="text-gradient">{c.h1Accent}</span>
        </h1>
        <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
          {c.intro}
        </p>
      </section>

      <ServiceGroup locale={locale} title={c.core} items={core} />
      <ServiceGroup locale={locale} title={c.specialised} items={specialised} />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="flex flex-col gap-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-semibold">{c.bandTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              {c.bandText}
              {c.bandLink && (
                <>
                  {' '}
                  <Link href={c.bandLink.href} className="text-[var(--accent-text)] hover:underline">
                    {c.bandLink.label}
                  </Link>
                  .
                </>
              )}
            </p>
          </div>
          <Link href="/#contact" className="btn-primary group shrink-0 !text-sm">
            {c.start}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceGroup({
  locale,
  title,
  items,
}: {
  locale: Locale;
  title: string;
  items: ServiceDefinition[];
}) {
  const c = COPY[locale];
  const caseCount = (s: ServiceDefinition) =>
    projects.filter((p) => p.services?.includes(s.key)).length;

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-20">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">{title}</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {items.map((s) => {
          const count = caseCount(s);
          return (
            <Link
              key={s.key}
              href={localizePath(locale, s.path)}
              className="card-premium card-topline group flex flex-col rounded-2xl p-6 sm:p-7"
            >
              <h3 className="font-display text-xl font-semibold">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{s.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.offers.slice(0, 3).map((offer) => (
                  <li
                    key={offer}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--text-muted)]"
                  >
                    {offer}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-[var(--accent-text)]">
                {count > 0 ? c.cases(count) : c.learnMore}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
