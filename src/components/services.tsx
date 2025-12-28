import Link from 'next/link';
import { 
  CreditCard, 
  Smartphone, 
  Wallet, 
  Building2, 
  Coins, 
  Bitcoin 
} from 'lucide-react';

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

const payments = [
  { name: 'Visa', icon: CreditCard },
  { name: 'Mastercard', icon: CreditCard },
  { name: 'Apple Pay', icon: Smartphone },
  { name: 'Google Pay', icon: Smartphone },
  { name: 'PayPal', icon: Wallet },
  { name: 'SEPA', icon: Building2 },
  { name: 'Bank Transfer', icon: Building2 },
  { name: 'Wise', icon: Coins },
  { name: 'Revolut', icon: Wallet },
  { name: 'Stripe', icon: CreditCard },
  { name: 'Crypto', icon: Bitcoin },
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

        {/* PAYMENTS */}
        <div className="mt-20 text-center">
          <p className="text-sm text-[var(--text-subtle)]">
            Flexible payment options for your convenience
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {payments.map((method) => {
              const Icon = method.icon;
              return (
                <span
                  key={method.name}
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    px-5 py-2
                    text-sm
                    bg-[var(--surface)]
                    border border-[var(--border)]
                    text-[var(--text-muted)]
                    opacity-75
                    transition-all duration-300
                    cursor-default
                    hover:opacity-100
                    hover:text-[var(--fg)]
                    hover:bg-[var(--surface-strong)]
                    hover:border-[color-mix(in_srgb,var(--accent-1)_20%,var(--border))]
                    hover:shadow-lg
                    hover:shadow-[var(--accent-1)]/5
                    hover:scale-105
                  "
                >
                  <Icon className="h-4 w-4" />
                  {method.name}
                </span>
              );
            })}
          </div>
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
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-3 flex items-center justify-between px-2 bg-[var(--surface)]/20">
          <div className="text-[6px] opacity-60">9:41</div>
          <div className="text-[6px] opacity-60">100%</div>
        </div>

        {/* Front camera (hole punch) */}
        <div 
          className="absolute top-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full z-20"
          style={{ background: '#000' }}
        />

        {/* Screen content - starts below camera */}
        <div className="absolute inset-1 rounded-xl overflow-hidden pt-4 px-1.5 pb-1.5 space-y-1.5">
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
        {/* Central pulsing node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className="h-6 w-6 rounded-full animate-pulse-slow"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
              boxShadow: `0 0 20px ${ACCENT_1}80`,
            }}
          />
        </div>

        {/* Animated neural connections with visible lines to center */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div key={deg}>
            {/* Connection line from node to center */}
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${deg}deg)`,
                transformOrigin: 'center',
              }}
            >
              {/* Thin dashed line connecting to center */}
              <div
                className="absolute h-px w-[25px] origin-left"
                style={{
                  transform: 'translateX(12px)',
                  background: `repeating-linear-gradient(
                    to right,
                    ${i % 2 === 0 ? ACCENT_1 : ACCENT_2} 0px,
                    ${i % 2 === 0 ? ACCENT_1 : ACCENT_2} 3px,
                    transparent 3px,
                    transparent 6px
                  )`,
                  opacity: 0.4,
                  animation: `neural-pulse ${2.0 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
              
              {/* Outer node */}
              <div
                className="absolute h-3 w-3 rounded-full border-2"
                style={{
                  transform: 'translateX(37px) translateY(-6px)',
                  background: i % 2 === 0 ? ACCENT_1 : ACCENT_2,
                  borderColor: i % 2 === 0 ? ACCENT_1 : ACCENT_2,
                  boxShadow: `0 0 10px ${i % 2 === 0 ? ACCENT_1 : ACCENT_2}`,
                  animation: `neural-pulse ${2.0 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            </div>
          </div>
        ))}
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
        <div className="absolute inset-3 flex items-center justify-between gap-2">
          {/* Start node */}
          <div
            className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_1}50, ${ACCENT_1}30)`,
              border: `2px solid ${ACCENT_1}60`,
              boxShadow: `0 0 8px ${ACCENT_1}40`,
            }}
          >
            <div className="h-3 w-3 rounded-full" style={{ background: ACCENT_1 }} />
          </div>

          {/* Arrow 1 - thinner dashed */}
          <div 
            className="relative flex-1 h-px" 
            style={{ 
              background: `repeating-linear-gradient(
                to right,
                ${ACCENT_1} 0px,
                ${ACCENT_1} 3px,
                transparent 3px,
                transparent 6px
              )`, 
              opacity: 0.5 
            }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[3px] border-l-[var(--accent-1)] border-y-[2px] border-y-transparent opacity-50" />
          </div>

          {/* Question node with icon */}
          <div
            className="h-16 w-16 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_1}40, ${ACCENT_2}30)`,
              border: `2px solid ${ACCENT_1}50`,
              boxShadow: `0 0 12px ${ACCENT_1}50`,
            }}
          >
            {/* Question mark icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
                fill={ACCENT_1}
                fillOpacity="0.9"
              />
            </svg>
          </div>

          {/* Arrow 2 - thinner dashed */}
          <div 
            className="relative flex-1 h-px" 
            style={{ 
              background: `repeating-linear-gradient(
                to right,
                ${ACCENT_2} 0px,
                ${ACCENT_2} 3px,
                transparent 3px,
                transparent 6px
              )`, 
              opacity: 0.5 
            }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[3px] border-l-[var(--accent-2)] border-y-[2px] border-y-transparent opacity-50" />
          </div>

          {/* End node */}
          <div
            className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_2}50, ${ACCENT_2}30)`,
              border: `2px solid ${ACCENT_2}60`,
              boxShadow: `0 0 8px ${ACCENT_2}40`,
            }}
          >
            <div className="h-3 w-3 rounded-full" style={{ background: ACCENT_2 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
