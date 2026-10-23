import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Calculator, FileCheck2, Languages } from 'lucide-react';
import Reveal from './reveal';
import { getI18n } from '@/i18n/server';

/* ======================================================
   SPOTLIGHT — one case, told large. Breaks the grid rhythm of the
   page with an asymmetric, editorial block: a big product frame on
   one side, the story on the other.
====================================================== */

const FACT_ICONS = [Calculator, FileCheck2, Languages];

export default async function Spotlight() {
  const { t } = await getI18n();
  const s = t.spotlight;
  const facts = s.facts.map((f, i) => ({ ...f, icon: FACT_ICONS[i] }));

  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* FRAME */}
        <Reveal className="lg:col-span-7">
          <Link
            href="/portfolio/vadi"
            className="group relative block overflow-hidden rounded-2xl border border-[var(--border)]"
            style={{ boxShadow: 'var(--shadow-card-hover)' }}
            aria-label={s.caseLabel}
          >
            <Image
              src="/projects/spotlight/vadi-overview.jpg"
              alt={s.imageAlt}
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
          <span className="section-eyebrow">{s.eyebrow}</span>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
            {s.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            {s.text}
          </p>

          <ul className="mt-8 space-y-4">
            {facts.map(({ icon: Icon, label, sub }) => (
              <li key={label} className="flex items-start gap-3.5">
                <span
                  className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <Icon className="h-4 w-4" style={{ color: 'var(--accent-text)' }} />
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
              {s.read}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://vadi.lv/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm"
            >
              {s.open}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
