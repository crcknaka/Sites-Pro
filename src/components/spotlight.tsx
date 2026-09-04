import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Calculator, FileCheck2, Languages } from 'lucide-react';
import { ACCENT_1 } from '@/lib';
import Reveal from './reveal';

/* ======================================================
   SPOTLIGHT — one case, told large. Breaks the grid rhythm of the
   page with an asymmetric, editorial block: a big product frame on
   one side, the story on the other.
====================================================== */

const FACTS = [
  { icon: Calculator, label: 'Eight free tax calculators', sub: 'on current-year rates' },
  { icon: FileCheck2, label: 'Declarations in VID EDS format', sub: 'MUN filed straight from the app' },
  { icon: Languages, label: 'LV · EN · RU', sub: 'product and marketing site' },
];

export default function Spotlight() {
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28 select-none">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* FRAME */}
        <Reveal className="lg:col-span-7">
          <Link
            href="/portfolio/vadi"
            className="group relative block overflow-hidden rounded-2xl border border-[var(--border)]"
            style={{ boxShadow: 'var(--shadow-card-hover)' }}
            aria-label="Vadi case study"
          >
            <Image
              src="/projects/spotlight/vadi.jpg"
              alt="Vadi — accounting platform for Latvian sole traders and companies"
              width={1440}
              height={900}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
            <span
              className="
                absolute bottom-4 right-4 inline-flex items-center gap-1.5
                rounded-full border border-[var(--border)] px-3 py-1.5
                text-xs font-medium text-[var(--fg)] backdrop-blur-md
              "
              style={{ background: 'color-mix(in srgb, var(--bg) 78%, transparent)' }}
            >
              vadi.lv
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </Reveal>

        {/* STORY */}
        <Reveal className="lg:col-span-5" delay={120}>
          <span className="section-eyebrow">Case study · own product</span>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
            Accounting that tells you what to do
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Vadi is our own SaaS for Latvian sole traders and small companies: a tax
            calendar with the amounts already calculated, payroll with a full
            gross-to-net breakdown, bank statement matching and declarations that leave
            the system in the exact format the tax office expects.
          </p>

          <ul className="mt-8 space-y-4">
            {FACTS.map(({ icon: Icon, label, sub }) => (
              <li key={label} className="flex items-start gap-3.5">
                <span
                  className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <Icon className="h-4 w-4" style={{ color: ACCENT_1 }} />
                </span>
                <span>
                  <span className="block font-medium text-[var(--fg)]">{label}</span>
                  <span className="block text-sm text-[var(--text-muted)]">{sub}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/portfolio/vadi" className="btn-primary group text-sm">
              Read the case study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://vadi.lv/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm"
            >
              Open vadi.lv
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
