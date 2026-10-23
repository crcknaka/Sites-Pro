import { Search, Sparkles, ExternalLink } from 'lucide-react';

/** Grey placeholder line standing in for a competitor's text. */
function Skeleton({ className = "" }: { className?: string }) {
  return <span className={`block h-2 rounded-full bg-[var(--text-muted)]/15 ${className}`} />;
}

/**
 * The same customer need, asked in Google and in an AI assistant — with the
 * client's company on top of both. The example business is deliberately
 * generic so the picture works for any industry.
 */
export default function SearchVsAi() {
  return (
    <figure
      role="img"
      aria-label="Piemērs: Google meklēšanā jūsu uzņēmums ir pirmajā vietā, un AI asistents atbildē iesaka jūsu uzņēmumu ar saiti uz jūsu mājaslapu."
      className="relative"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[var(--accent-1)]/10 blur-3xl" />

      <div aria-hidden="true" className="relative space-y-4">
        {/* Google */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-xl shadow-black/5 dark:shadow-black/30">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              SEO · Google meklētājs
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2.5">
            <Search size={15} className="shrink-0 text-[var(--text-muted)]" />
            <span className="truncate text-sm text-[var(--fg)]">auto serviss Rīgā</span>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-[var(--accent-1)]/40 bg-[var(--accent-1)]/10 p-3">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-1)] text-[10px] font-bold text-[#0e1626]">
                  1
                </span>
                <span className="text-[11px] text-[var(--text-muted)]">jusu-uznemums.lv</span>
              </div>
              <p className="mt-1.5 text-sm font-semibold text-[var(--accent-text)]">
                Jūsu uzņēmums - auto serviss Rīgā
              </p>
              <Skeleton className="mt-2 w-11/12" />
            </div>
            {[2, 3].map((n) => (
              <div key={n} className="flex items-start gap-2 px-3 opacity-70">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--text-muted)]/15 text-[10px] font-bold text-[var(--text-muted)]">
                  {n}
                </span>
                <div className="flex-1 space-y-1.5 pt-1.5">
                  <Skeleton className="w-1/2" />
                  <Skeleton className="w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI assistant */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-xl shadow-black/5 sm:ml-10 dark:shadow-black/30">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            GEO · AI asistents
          </span>

          <div className="mt-3 flex justify-end">
            <p className="max-w-[85%] rounded-2xl rounded-br-md bg-[var(--surface-strong)] px-4 py-2.5 text-sm text-[var(--fg)]">
              Kur Rīgā var uzticami salabot auto?
            </p>
          </div>

          <div className="mt-3 flex gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-1)]/15 text-[var(--accent-text)]">
              <Sparkles size={14} />
            </span>
            <div className="flex-1 rounded-2xl rounded-tl-md border border-[var(--border)] px-4 py-3 text-sm leading-relaxed text-[var(--text-muted)]">
              Iesaku šos servisus:
              <span className="mt-2 block">
                1.{" "}
                <span className="rounded bg-[var(--accent-1)]/15 px-1 font-semibold text-[var(--accent-text)]">
                  Jūsu uzņēmums
                </span>{" "}
                - labas atsauksmes, skaidras cenas, pieraksts tiešsaistē.
                <span className="ml-1 inline-flex translate-y-0.5 items-center gap-0.5 rounded-full border border-[var(--border)] px-1.5 text-[10px]">
                  <ExternalLink size={9} />
                  jusu-uznemums.lv
                </span>
              </span>
              <span className="mt-2 flex items-center gap-1.5">
                2. <Skeleton className="w-2/3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
