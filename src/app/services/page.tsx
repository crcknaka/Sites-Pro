import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { BreadcrumbJsonLd } from '@/components/json-ld';
import { projects } from '@/data/projects';
import { SERVICES, SERVICES_HUB_LV, type ServiceDefinition } from '@/data/services';
import { pageMetadata, withLatvian } from '@/lib/metadata';
import { SITE_URL } from '@/lib';

export const metadata: Metadata = pageMetadata({
  title: 'Services — Websites, Platforms, E-commerce, Fintech & AI',
  description:
    'What Sites Pro builds: websites, web platforms, e-commerce and B2B shops, payment systems and fintech, custom CRMs, multilingual and RTL sites, AI automations and consulting.',
  path: '/services',
  image: false, // opengraph-image.tsx in this folder
  languages: withLatvian(`${SITE_URL}/services`, SERVICES_HUB_LV),
});

const core = SERVICES.filter((s) => s.core);
const specialised = SERVICES.filter((s) => !s.core);

const caseCount = (s: ServiceDefinition) =>
  projects.filter((p) => p.services?.includes(s.key)).length;

export default function ServicesPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--fg)]">
      <BreadcrumbJsonLd items={[{ name: 'Services', path: '/services' }]} />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-36 pb-12 sm:pb-16">
        <span className="section-eyebrow">Services</span>
        <h1 className="font-display mt-4 max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          What we build — <span className="text-gradient">and the work behind each claim</span>
        </h1>
        <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
          Four core services and four specialisations. Every page links to the case studies
          it is based on, so you can check the work before you write to us.
        </p>
      </section>

      <ServiceGroup title="Core services" items={core} />
      <ServiceGroup title="Specialisations" items={specialised} />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="flex flex-col gap-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-semibold">Based in Riga, working worldwide</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              Latvian taxes, languages and business registers are home ground for us.{' '}
              <Link href="/web-development-riga" className="text-[var(--accent-text)] hover:underline">
                Web development in Riga
              </Link>
              .
            </p>
          </div>
          <Link href="/#contact" className="btn-primary group shrink-0 !text-sm">
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceGroup({ title, items }: { title: string; items: ServiceDefinition[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-20">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">{title}</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {items.map((s) => {
          const count = caseCount(s);
          return (
            <Link
              key={s.key}
              href={s.path}
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
                {count > 0 ? `${count} case ${count === 1 ? 'study' : 'studies'}` : 'Learn more'}
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
