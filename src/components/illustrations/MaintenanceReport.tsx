import { Check, ShieldCheck, DatabaseBackup, Gauge, Lock, FileText } from 'lucide-react';

// One day per bar. A single short outage is shown on purpose: the point of
// monitoring is that incidents get caught, not that they never happen.
const UPTIME = Array.from({ length: 30 }, (_, i) => (i === 17 ? "incident" : "ok"));

const STATS = [
  { label: "Pieejamība", value: "99,98%" },
  { label: "Ielāde", value: "0,9 s" },
  { label: "Kopijas", value: "30/30" },
];

const CHECKS = [
  { icon: ShieldCheck, label: "Drošības atjauninājumi", value: "12 uzstādīti" },
  { icon: DatabaseBackup, label: "Rezerves kopija", value: "šodien 03:00" },
  { icon: Lock, label: "SSL sertifikāts", value: "derīgs 74 d." },
  { icon: Gauge, label: "Ātruma pārbaude", value: "96 / 100" },
  { icon: FileText, label: "Satura izmaiņas", value: "5 paveiktas" },
];

/** Mock monthly maintenance report — what the client actually receives. */
export default function MaintenanceReport() {
  return (
    <figure
      role="img"
      aria-label="Mēneša uzturēšanas atskaites piemērs: pieejamība 99,98%, rezerves kopijas katru dienu, drošības atjauninājumi uzstādīti, SSL derīgs, viens īss pārtraukums novērsts 6 minūšu laikā."
      className="relative"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[var(--accent-1)]/10 blur-3xl" />

      <div
        aria-hidden="true"
        className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)] shadow-2xl shadow-black/10 dark:shadow-black/40"
      >
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]/25" />
          <span className="ml-2 text-xs font-medium text-[var(--text-muted)]">
            Uzturēšanas atskaite · oktobris
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-1)]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[var(--accent-text)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-1)]" />
            Viss kārtībā
          </span>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <div className="grid grid-cols-3 gap-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-[var(--surface-strong)] p-3">
                <p className="text-[11px] text-[var(--text-muted)]">{stat.label}</p>
                <p className="mt-1 font-display text-lg font-bold text-[var(--fg)] sm:text-xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-[11px] text-[var(--text-muted)]">
              <span>Pieejamība pa dienām</span>
              <span>30 dienas</span>
            </div>
            <div className="flex h-8 items-end gap-[3px]">
              {UPTIME.map((day, i) => (
                <span
                  key={i}
                  className={`flex-1 rounded-sm ${
                    day === "ok" ? "h-full bg-[var(--accent-1)]/70" : "h-1/2 bg-amber-500"
                  }`}
                />
              ))}
            </div>
            <p className="mt-2 flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              18. okt. serveris nereaģēja - pamanīts un novērsts 6 min laikā
            </p>
          </div>

          <ul className="divide-y divide-[var(--border)] rounded-xl border border-[var(--border)]">
            {CHECKS.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-3 px-3.5 py-2.5 text-sm">
                <Icon size={15} className="shrink-0 text-[var(--text-muted)]" />
                <span className="text-[var(--fg)]">{label}</span>
                <span className="ml-auto hidden text-xs text-[var(--text-muted)] sm:inline">
                  {value}
                </span>
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-1)]/15">
                  <Check size={12} className="text-[var(--accent-text)]" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="relative mt-4 text-center text-xs text-[var(--text-muted)]">
        Šādu pārskatu saņemat katru mēnesi (piemērs)
      </figcaption>
    </figure>
  );
}
