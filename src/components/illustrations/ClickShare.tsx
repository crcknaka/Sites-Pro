// Backlinko's Google CTR study (backlinko.com/google-ctr-stats): #1 gets 27.6%
// of clicks and ~10x the CTR of #10; 0.63% of searchers click anything on
// page two. Only these three published figures are drawn — no interpolated bars.
const BARS = [
  { label: "1. vieta", value: 27.6, display: "27,6%", highlight: true },
  { label: "10. vieta", value: 2.76, display: "~2,8%", highlight: false },
  { label: "2. lapa (visa)", value: 0.63, display: "0,63%", highlight: false },
];

const MAX = BARS[0].value;

/** How Google clicks split between the top result and everything below it. */
export default function ClickShare() {
  return (
    <figure className="relative">
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-7 shadow-xl shadow-black/5 sm:p-9 dark:shadow-black/20">
        <p className="font-display text-lg font-semibold text-[var(--fg)]">
          Kur nonāk klikšķi Google meklēšanā
        </p>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Cik procentu meklētāju noklikšķina uz rezultāta
        </p>

        <dl className="mt-8 space-y-6">
          {BARS.map((bar) => (
            <div key={bar.label}>
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <dt className="text-sm text-[var(--fg)]">{bar.label}</dt>
                <dd
                  className={`font-display text-xl font-bold ${
                    bar.highlight ? "text-[var(--accent-text)]" : "text-[var(--text-muted)]"
                  }`}
                >
                  {bar.display}
                </dd>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[var(--surface-strong)]" aria-hidden="true">
                <div
                  className={`h-full rounded-full ${
                    bar.highlight ? "bg-[var(--accent-1)]" : "bg-[var(--text-muted)]/40"
                  }`}
                  style={{ width: `${Math.max((bar.value / MAX) * 100, 1.5)}%` }}
                />
              </div>
            </div>
          ))}
        </dl>

        <p className="mt-8 rounded-xl bg-[var(--accent-1)]/10 px-4 py-3 text-sm text-[var(--fg)]">
          Pirmā vieta saņem <strong>10 reizes</strong> vairāk klikšķu nekā desmitā.
          Otro lapu gandrīz neviens neatver.
        </p>
      </div>
      <figcaption className="mt-3 text-center text-xs text-[var(--text-muted)]">
        Avots:{" "}
        <a
          href="https://backlinko.com/google-ctr-stats"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[var(--text-muted)]/40 underline-offset-2 hover:text-[var(--accent-text)]"
        >
          Backlinko, Google CTR pētījums
        </a>{" "}
        (12 milj. meklējumu)
      </figcaption>
    </figure>
  );
}
