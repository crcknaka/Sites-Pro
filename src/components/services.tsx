import Link from 'next/link';

/* brand accents via CSS vars */
const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

const services = [
  {
    title: 'Websites',
    description:
      'Modern, responsive websites that captivate your audience and drive conversions. From landing pages to complex web platforms.',
    type: 'web',
  },
  {
    title: 'Applications',
    description:
      'Custom web and mobile applications built with cutting-edge technology. Scalable solutions for your business needs.',
    type: 'apps',
  },
  {
    title: 'AI & Automations',
    description:
      'Intelligent automation solutions powered by AI. Streamline workflows and enhance productivity with smart systems.',
    type: 'ai',
  },
  {
    title: 'Consulting',
    description:
      'Strategic digital consulting to guide your transformation. We help you design, validate and scale digital solutions.',
    type: 'consulting',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        scroll-mt-24 relative
        py-32 px-6
        bg-transparent
        text-[var(--fg)]
        select-none
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: ACCENT_1 }}
          >
            What we do
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Our{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
              }}
            >
              Services
            </span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
            We deliver comprehensive digital solutions tailored to your unique
            needs. From concept to launch, we’ve got you covered.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.type}
              href={`/services/${service.type}`}
              className="group block"
            >
              <div
                className="
                  relative h-full rounded-3xl p-8
                  bg-[var(--surface)]
                  border border-[var(--border)]
                  overflow-hidden
                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5
                  hover:bg-[var(--surface-strong)]
                  hover:border-[color-mix(in_srgb,var(--accent-1)_25%,var(--border))]
                "
              >
                {/* Accent line */}
                <span
                  className="
                    absolute top-6 bottom-6 left-0 w-px
                    opacity-40 transition-opacity duration-300
                    group-hover:opacity-80
                  "
                  style={{
                    background:
                      'linear-gradient(180deg, transparent, var(--accent-1), transparent)',
                  }}
                />

                {/* INFOGRAPHIC */}
                <div className="mb-10 flex h-28 items-center justify-center animate-[slow-float_6s_ease-in-out_infinite]">
                  <ServiceInfographic type={service.type} />
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   INFOGRAPHICS — Product / Linear-inspired
====================================================== */

function ServiceInfographic({ type }: { type: string }) {
  if (type === 'web') return <WebInfographic />;
  if (type === 'apps') return <AppsInfographic />;
  if (type === 'ai') return <AIInfographic />;
  if (type === 'consulting') return <ConsultingInfographic />;
  return null;
}

/* ------------------------------------------------------
   Websites — Browser / layout / content hierarchy
------------------------------------------------------ */
function WebInfographic() {
  return (
    <div className="relative h-28 w-36 select-none" style={{ userSelect: 'none' }}>
      <div className="absolute inset-0 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] overflow-hidden select-none" style={{ userSelect: 'none' }}>
        {/* top bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)] select-none">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-1)]/70 select-none" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)] select-none" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)] select-none" />
          <div className="ml-2 h-1.5 flex-1 rounded bg-[var(--border)]/60 select-none" />
        </div>

        {/* content */}
        <div className="p-2 space-y-2 select-none">
          <div className="h-2 w-2/3 rounded bg-[var(--accent-1)]/30 select-none" />
          <div className="h-1.5 w-full rounded bg-[var(--border)]/50 select-none" />
          <div className="h-1.5 w-5/6 rounded bg-[var(--border)]/40 select-none" />

          <div className="flex gap-1.5 pt-1 select-none">
            <span className="h-6 w-6 rounded bg-[var(--accent-1)]/20 select-none" />
            <span className="h-6 w-6 rounded bg-[var(--accent-2)]/20 select-none" />
            <span className="h-6 w-6 rounded bg-[var(--border)]/30 select-none" />
          </div>
        </div>
      </div>

      <div className="absolute -inset-3 rounded-full bg-[var(--accent-1)]/5 blur-xl -z-10 select-none" />
    </div>
  );
}

/* ------------------------------------------------------
   Applications — App / system / cards
------------------------------------------------------ */
function AppsInfographic() {
  return (
    <div className="relative h-28 w-20 select-none" style={{ userSelect: 'none' }}>
      <div className="absolute inset-0 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] overflow-hidden select-none" style={{ userSelect: 'none' }}>
        <div className="absolute top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded bg-[var(--border)]/70 select-none" />

        <div className="absolute inset-x-2 top-6 bottom-2 space-y-2 select-none">
          <div className="flex items-center gap-1.5 select-none">
            <span className="h-3 w-3 rounded-full bg-[var(--accent-1)]/40 select-none" />
            <span className="h-1.5 flex-1 rounded bg-[var(--border)]/60 select-none" />
          </div>

          <div className="space-y-1.5 select-none">
            <div className="h-5 rounded-md bg-[var(--accent-1)]/20 border border-[var(--accent-1)]/20 select-none" />
            <div className="h-5 rounded-md bg-[var(--border)]/30 select-none" />
            <div className="h-5 rounded-md bg-[var(--border)]/20 select-none" />
          </div>
        </div>
      </div>

      <div className="absolute -inset-3 rounded-full bg-[var(--accent-2)]/5 blur-xl -z-10 select-none" />
    </div>
  );
}

/* ------------------------------------------------------
   AI & Automations — Intelligence network / signals
------------------------------------------------------ */
function AIInfographic() {
  return (
    <div className="relative h-28 w-28 select-none" style={{ userSelect: 'none' }}>
      <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[var(--accent-1)]/25 border border-[var(--accent-1)]/40 flex items-center justify-center select-none" style={{ userSelect: 'none' }}>
        <span className="h-4 w-4 rounded bg-[var(--accent-1)]/70 select-none" />
      </div>

      {[0, 72, 144, 216, 288].map((deg, i) => (
        <div
          key={deg}
          className="absolute left-1/2 top-1/2 select-none"
          style={{ 
            transform: `rotate(${deg}deg)`,
            userSelect: 'none',
          }}
        >
          <div className="absolute h-px w-8 bg-gradient-to-r from-[var(--accent-1)]/40 to-transparent select-none" />
          <span
            className="absolute h-2.5 w-2.5 rounded-full border border-[var(--accent-1)]/40 select-none"
            style={{
              transform: 'translateX(36px) translateY(-5px)',
              background:
                i === 0
                  ? 'color-mix(in srgb, var(--accent-1) 60%, transparent)'
                  : 'color-mix(in srgb, var(--accent-1) 30%, transparent)',
              userSelect: 'none',
            }}
          />
        </div>
      ))}

      <div className="absolute inset-1 rounded-full border border-dashed border-[var(--accent-1)]/30 select-none" />
      <div className="absolute inset-4 rounded-full bg-[var(--accent-1)]/10 blur-xl -z-10 select-none" />
    </div>
  );
}

/* ------------------------------------------------------
   Consulting — Strategy / decision flow
------------------------------------------------------ */
function ConsultingInfographic() {
  return (
    <div className="relative h-24 w-36 select-none" style={{ userSelect: 'none' }}>
      <div className="absolute inset-0 flex items-center justify-center gap-3 select-none">
        <div className="h-6 w-6 rounded-lg bg-[var(--accent-1)]/30 border border-[var(--accent-1)]/40 flex items-center justify-center select-none" style={{ userSelect: 'none' }}>
          <span className="h-2 w-2 rounded bg-[var(--accent-1)]/80 select-none" />
        </div>

        <div className="relative h-px w-6 bg-gradient-to-r from-[var(--accent-1)]/40 to-[var(--accent-1)]/20 select-none">
          <span className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[4px] border-l-[var(--accent-1)]/40 border-y-[3px] border-y-transparent select-none" />
        </div>

        <div className="h-7 w-7 rotate-45 rounded-sm bg-[var(--surface-strong)] border border-[var(--accent-1)]/40 flex items-center justify-center select-none" style={{ userSelect: 'none' }}>
          <span className="-rotate-45 text-xs text-[var(--accent-1)]/80 select-none">?</span>
        </div>

        <div className="relative h-px w-6 bg-gradient-to-r from-[var(--accent-1)]/20 to-[var(--accent-2)]/40 select-none">
          <span className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[4px] border-l-[var(--accent-2)]/40 border-y-[3px] border-y-transparent select-none" />
        </div>

        <div className="h-6 w-6 rounded-full bg-[var(--accent-2)]/40 border border-[var(--accent-2)]/50 flex items-center justify-center select-none" style={{ userSelect: 'none' }}>
          <span className="h-2 w-2 rounded-full bg-[var(--accent-2)]/90 select-none" />
        </div>
      </div>

      <div className="absolute left-1/2 top-3 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-[var(--border)]/40 select-none" />
      <div className="absolute left-1/2 bottom-3 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--border)]/40 to-transparent select-none" />
    </div>
  );
}
