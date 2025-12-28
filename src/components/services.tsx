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
      {/* Semi-transparent background overlay */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${ACCENT_1}15 0%, transparent 70%), radial-gradient(circle at 30% 70%, ${ACCENT_2}15 0%, transparent 60%)`,
        }}
      />
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
   INFOGRAPHICS — Modern & Interactive
====================================================== */

function ServiceInfographic({ type }: { type: string }) {
  if (type === 'web') return <WebInfographic />;
  if (type === 'apps') return <AppsInfographic />;
  if (type === 'ai') return <AIInfographic />;
  if (type === 'consulting') return <ConsultingInfographic />;
  return null;
}

/* ------------------------------------------------------
   Websites — Modern Browser with Live Content
------------------------------------------------------ */
function WebInfographic() {
  return (
    <div className="relative h-32 w-36 select-none group">
      {/* Glow effect */}
      <div
        className="absolute -inset-4 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"
        style={{ background: `radial-gradient(circle, ${ACCENT_1}40, transparent)` }}
      />
      
      {/* Browser window */}
      <div
        className="absolute inset-0 rounded-2xl border border-[var(--border)] overflow-hidden shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--accent-1)]/40 group-hover:scale-105"
        style={{
          background: 'color-mix(in srgb, var(--surface-strong) 95%, transparent)',
        }}
      >
        {/* Browser top bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)]/50 bg-[var(--surface)]/30">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
          <div className="ml-2 h-1.5 flex-1 rounded-full bg-[var(--border)]/40" />
        </div>

        {/* Browser content with animations */}
        <div className="p-2.5 space-y-2">
          {/* Hero section */}
          <div className="h-2.5 w-3/4 rounded bg-gradient-to-r from-[var(--accent-1)]/40 to-[var(--accent-2)]/30 animate-pulse-slow" />
          <div className="h-1 w-full rounded bg-[var(--border)]/40" />
          <div className="h-1 w-5/6 rounded bg-[var(--border)]/30" />

          {/* Card grid */}
          <div className="flex gap-1.5 pt-2">
            <span className="h-7 w-7 rounded-lg bg-[var(--accent-1)]/25 border border-[var(--accent-1)]/30 transition-transform hover:scale-110" />
            <span className="h-7 w-7 rounded-lg bg-[var(--accent-2)]/25 border border-[var(--accent-2)]/30 transition-transform hover:scale-110" />
            <span className="h-7 w-7 rounded-lg bg-[var(--border)]/20 border border-[var(--border)]/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------
   Applications — Simplified Mobile Phone
------------------------------------------------------ */
function AppsInfographic() {
  return (
    <div className="relative h-32 w-20 select-none group">
      {/* Glow effect */}
      <div
        className="absolute -inset-4 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"
        style={{ background: `radial-gradient(circle, ${ACCENT_2}40, transparent)` }}
      />
      
      {/* Phone device - simplified */}
      <div
        className="absolute inset-0 rounded-2xl border border-[var(--border)] overflow-hidden shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--accent-1)]/40 group-hover:scale-105"
        style={{
          background: 'color-mix(in srgb, var(--surface-strong) 95%, transparent)',
        }}
      >
        {/* Screen content - without solid background */}
        <div className="absolute inset-1 rounded-xl overflow-hidden p-1.5 space-y-1.5">
          {/* Header */}
          <div className="flex items-center gap-1.5">
            <div
              className="h-4 w-4 rounded-lg shadow-md"
              style={{ background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})` }}
            />
            <div className="flex-1 space-y-1">
              <div className="h-1 w-full rounded-full bg-[var(--border)]/50" />
              <div className="h-0.5 w-2/3 rounded-full bg-[var(--border)]/40" />
            </div>
          </div>

          {/* Content cards */}
          <div className="space-y-1.5">
            <div className="h-6 rounded-lg border border-[var(--accent-1)]/30" style={{ background: `${ACCENT_1}20` }} />
            <div className="h-5 rounded-lg bg-[var(--surface)]/60 border border-[var(--border)]/30" />
            <div className="h-5 rounded-lg bg-[var(--surface)]/50 border border-[var(--border)]/20" />
            <div className="h-5 rounded-lg bg-[var(--surface)]/40 border border-[var(--border)]/15" />
            <div className="h-5 rounded-lg bg-[var(--surface)]/30 border border-[var(--border)]/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------
   AI & Automations — Brain with Neural Network
------------------------------------------------------ */
function AIInfographic() {
  return (
    <div className="relative h-28 w-28 select-none group">
      {/* Glow effect */}
      <div
        className="absolute -inset-4 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"
        style={{ background: `radial-gradient(circle, ${ACCENT_1}40, ${ACCENT_2}30, transparent)` }}
      />

      {/* Container */}
      <div
        className="absolute inset-0 rounded-2xl border border-[var(--border)] overflow-visible shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--accent-1)]/40 group-hover:scale-105"
        style={{
          background: 'color-mix(in srgb, var(--surface-strong) 95%, transparent)',
        }}
      >

      {/* Brain icon in center */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-pulse-slow"
        >
          {/* Brain icon */}
          <path
            d="M12 2C10.5 2 9.2 2.6 8.3 3.5C7.3 2.9 6.2 2.5 5 2.5C2.2 2.5 0 4.7 0 7.5C0 8.4 0.3 9.2 0.7 10C0.3 10.8 0 11.7 0 12.5C0 15.3 2.2 17.5 5 17.5C5.8 17.5 6.6 17.3 7.2 16.9C8 19.2 10.2 21 12.8 21C15.4 21 17.6 19.2 18.4 16.9C19 17.3 19.8 17.5 20.6 17.5C23.4 17.5 25.6 15.3 25.6 12.5C25.6 11.7 25.3 10.8 24.9 10C25.3 9.2 25.6 8.4 25.6 7.5C25.6 4.7 23.4 2.5 20.6 2.5C19.4 2.5 18.3 2.9 17.3 3.5C16.4 2.6 15.1 2 13.6 2H12Z"
            fill={ACCENT_1}
            fillOpacity="0.2"
          />
          <circle cx="8" cy="8" r="1.5" fill={ACCENT_1} />
          <circle cx="16" cy="8" r="1.5" fill={ACCENT_1} />
          <circle cx="12" cy="12" r="2" fill={ACCENT_2} />
          <circle cx="8" cy="16" r="1.5" fill={ACCENT_2} />
          <circle cx="16" cy="16" r="1.5" fill={ACCENT_2} />
          
          {/* Neural connections */}
          <path d="M8 8 L12 12" stroke={ACCENT_1} strokeWidth="1" strokeOpacity="0.4" />
          <path d="M16 8 L12 12" stroke={ACCENT_1} strokeWidth="1" strokeOpacity="0.4" />
          <path d="M12 12 L8 16" stroke={ACCENT_2} strokeWidth="1" strokeOpacity="0.4" />
          <path d="M12 12 L16 16" stroke={ACCENT_2} strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      </div>

      {/* Animated neural connections around the circle */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div
          key={deg}
          className="absolute left-1/2 top-1/2 neural-connection"
          style={{
            transform: `rotate(${deg}deg)`,
            animation: `neural-pulse ${1.5 + i * 0.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {/* Connection line */}
          <div
            className="absolute h-px w-12 origin-left transition-all duration-300"
            style={{
              background: `linear-gradient(to right, ${i % 2 === 0 ? ACCENT_1 : ACCENT_2}60, transparent)`,
            }}
          />
          
          {/* Pulsing node */}
          <div
            className="absolute h-2.5 w-2.5 rounded-full border transition-all duration-300"
            style={{
              transform: 'translateX(44px) translateY(-5px)',
              background: i % 2 === 0 ? `${ACCENT_1}` : `${ACCENT_2}`,
              borderColor: i % 2 === 0 ? `${ACCENT_1}` : `${ACCENT_2}`,
              opacity: 0.7,
              boxShadow: `0 0 8px ${i % 2 === 0 ? ACCENT_1 : ACCENT_2}`,
            }}
          />
        </div>
      ))}

      {/* Orbital rings */}
      <div className="absolute inset-3 rounded-full border border-dashed border-[var(--accent-1)]/20 animate-spin-slow" />
      <div className="absolute inset-6 rounded-full border border-dashed border-[var(--accent-2)]/15 animate-spin-reverse" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------
   Consulting — Strategic Flow Diagram
------------------------------------------------------ */
function ConsultingInfographic() {
  return (
    <div className="relative h-28 w-36 select-none group">
      {/* Glow effect */}
      <div
        className="absolute -inset-4 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"
        style={{ background: `linear-gradient(90deg, ${ACCENT_1}40, ${ACCENT_2}40)` }}
      />

      {/* Container */}
      <div
        className="absolute inset-0 rounded-2xl border border-[var(--border)] overflow-hidden shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--accent-1)]/40 group-hover:scale-105"
        style={{
          background: 'color-mix(in srgb, var(--surface-strong) 95%, transparent)',
        }}
      >

      {/* Flow diagram */}
      <div className="absolute inset-2 flex items-center justify-between gap-2">
        {/* Start node */}
        <div
          className="h-8 w-8 rounded-xl border border-[var(--accent-1)]/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, ${ACCENT_1} 40%, transparent), color-mix(in srgb, ${ACCENT_1} 20%, transparent))`,
          }}
        >
          <div className="h-3 w-3 rounded-lg" style={{ background: ACCENT_1 }} />
        </div>

        {/* Arrow 1 */}
        <div className="relative flex-1 h-px" style={{ background: `linear-gradient(to right, ${ACCENT_1}60, ${ACCENT_1}40)` }}>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[4px] border-l-[var(--accent-1)] border-y-[3px] border-y-transparent" />
        </div>

        {/* Decision node (diamond) */}
        <div
          className="h-9 w-9 rotate-45 rounded-lg border border-[var(--accent-1)]/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, var(--surface-strong), var(--surface))',
          }}
        >
          <span className="-rotate-45 text-[0.65rem] font-bold" style={{ color: ACCENT_1 }}>?</span>
        </div>

        {/* Arrow 2 */}
        <div className="relative flex-1 h-px" style={{ background: `linear-gradient(to right, ${ACCENT_1}40, ${ACCENT_2}60)` }}>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[4px] border-l-[var(--accent-2)] border-y-[3px] border-y-transparent" />
        </div>

        {/* End node */}
        <div
          className="h-8 w-8 rounded-full border border-[var(--accent-2)]/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, ${ACCENT_2} 50%, transparent), color-mix(in srgb, ${ACCENT_2} 25%, transparent))`,
          }}
        >
          <div className="h-3 w-3 rounded-full" style={{ background: ACCENT_2 }} />
        </div>
      </div>

      {/* Vertical connectors */}
      <div className="absolute left-1/2 top-2 h-3 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-[var(--border)]/30" />
      <div className="absolute left-1/2 bottom-2 h-3 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--border)]/30 to-transparent" />
      </div>
    </div>
  );
}
