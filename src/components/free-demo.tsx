import Link from 'next/link';
import { ArrowRight, Check, Gift } from 'lucide-react';
import Reveal from './reveal';

/* ======================================================
   FREE DEMO — the sitespro.lv offer: a working draft of a small
   informational site before any payment. Latvian only, so the copy
   lives here rather than in the dictionaries.
====================================================== */

const POINTS = [
  'Izveidosim demo versiju pilnīgi bez maksas',
  'Ja jums patīk - turpinām sadarbību un pielāgojam jūsu vēlmēm',
  'Ja nē - nekādu maksājumu',
];

export default function FreeDemo() {
  return (
    <section id="demo" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="card-premium card-topline relative overflow-hidden rounded-3xl p-8 sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'color-mix(in srgb, var(--accent-1) 18%, transparent)' }}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <Gift className="h-7 w-7" style={{ color: 'var(--accent-text)' }} aria-hidden="true" />
            </span>

            <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Izmēģiniet <span className="text-gradient">bez maksas</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)] leading-relaxed">
              Informatīvajām mājas lapām piedāvājam bezmaksas demo versiju - sagatavosim
              praktiski gatavu vietni vai sākumpunktu, no kura turpināt izstrādi pēc jūsu
              vēlmēm.
            </p>

            <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm text-[var(--text-muted)]">
              {POINTS.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[var(--accent-1)]/30 bg-[var(--accent-1)]/10">
                    <Check className="h-3.5 w-3.5 text-[var(--accent-text)]" aria-hidden="true" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-[var(--text-subtle)]">
              * Attiecas uz nelielām informatīvām mājas lapām
            </p>

            <Link href="#contact" className="btn-primary group mt-8 inline-flex">
              Pieteikt bezmaksas demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
