import Link from 'next/link';
import {
  CreditCard,
  Smartphone,
  Wallet,
  Building2,
  Coins,
  Bitcoin,
  ArrowUpRight,
  Brain,
  Sparkles,
  Workflow,
  Database,
} from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import SectionHeader from './section-header';
import Reveal from './reveal';

const services = [
  {
    title: 'Websites',
    description:
      'High-performance websites built for growth. Scalable, fast and product-ready.',
    type: 'web',
  },
  {
    title: 'Web Platforms',
    description:
      'Product-grade web applications and platforms. Built for complexity, scale and long-term use.',
    type: 'web-platforms',
  },
  {
    title: 'AI & Automations',
    description:
      'AI-powered automations for digital products and workflows. Reduce manual work and improve efficiency.',
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
        py-20 sm:py-32 px-4 sm:px-6
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
        <SectionHeader
          eyebrow="What we do"
          title="Our"
          highlight="Services"
          subtitle="We design and build digital products — from high-performance websites to complex web platforms and automations."
        />

        {/* CARDS */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.type} delay={i * 90}>
              <Link href={`/services/${service.type}`} className="group block h-full">
                <div
                  className="
                    card-premium card-topline
                    h-full min-h-[220px] sm:min-h-0
                    rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7
                    overflow-hidden
                    flex flex-col
                  "
                >
                  {/* INFOGRAPHIC */}
                  <div className="mb-6 sm:mb-8 flex h-32 items-center justify-center lg:animate-[slow-float_6s_ease-in-out_infinite]">
                    <ServiceInfographic type={service.type} />
                  </div>

                  {/* TEXT */}
                  <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div
                    className="mt-auto pt-4 flex items-center gap-1 text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: 'var(--accent-1)' }}
                  >
                    Learn more{' '}
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* PAYMENTS */}
        <Reveal className="mt-16 sm:mt-20 text-center">
          <p className="text-sm text-[var(--text-muted)]">
            Flexible payment options for your convenience
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {payments.map((method) => {
              const Icon = method.icon;
              return (
                <span
                  key={method.name}
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    px-4 sm:px-5 py-2
                    text-xs sm:text-sm
                    bg-[var(--surface)]
                    border border-[var(--border-soft)]
                    text-[var(--text-muted)]
                    transition-all duration-300
                    cursor-default
                    hover:text-[var(--fg)]
                    hover:bg-[var(--surface-strong)]
                    hover:border-[color-mix(in_srgb,var(--accent-1)_25%,var(--border))]
                  "
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {method.name}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================================================
   INFOGRAPHICS — one shared window-frame language
====================================================== */

function ServiceInfographic({ type }: { type: string }) {
  if (type === 'web') return <WebInfographic />;
  if (type === 'web-platforms') return <AppsInfographic />;
  if (type === 'ai') return <AIInfographic />;
  if (type === 'consulting') return <ConsultingInfographic />;
  return null;
}

/* Shared window frame: every card infographic lives in the same
   browser-style container so the section reads as one system. */
function MiniWindow({
  glow,
  children,
}: {
  glow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-32 w-40 select-none">
      {/* Glow effect */}
      <div
        className="absolute -inset-4 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"
        style={{ background: `radial-gradient(circle, ${glow}, transparent)` }}
      />

      {/* Window */}
      <div
        className="absolute inset-0 rounded-xl border border-[var(--border)] overflow-hidden shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--accent-1)]/40 group-hover:scale-[1.04]"
        style={{
          background: 'color-mix(in srgb, var(--surface-strong) 95%, transparent)',
        }}
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-[var(--border)]/50 bg-[var(--surface)]/30">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]/70" />
          <div className="ml-2 h-1.5 flex-1 rounded-full bg-[var(--border)]/40" />
        </div>

        {/* Content */}
        <div className="relative h-[calc(100%-21px)]">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------
   Websites — landing page layout
------------------------------------------------------ */
function WebInfographic() {
  return (
    <MiniWindow glow={`${ACCENT_1}40`}>
      <div className="p-2.5 space-y-2">
        {/* Hero block */}
        <div
          className="rounded-md p-1.5 space-y-1"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_1}12, ${ACCENT_2}08)`,
            border: `1px solid ${ACCENT_1}25`,
          }}
        >
          <div
            className="h-1.5 w-3/4 rounded-full"
            style={{ background: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})` }}
          />
          <div className="h-1 w-full rounded-full bg-[var(--border)]/40" />
        </div>

        {/* Card grid */}
        <div className="flex gap-1.5">
          <span
            className="h-7 flex-1 rounded-md border transition-transform"
            style={{ background: `${ACCENT_1}18`, borderColor: `${ACCENT_1}30` }}
          />
          <span
            className="h-7 flex-1 rounded-md border transition-transform"
            style={{ background: `${ACCENT_2}18`, borderColor: `${ACCENT_2}30` }}
          />
          <span className="h-7 flex-1 rounded-md bg-[var(--border)]/15 border border-[var(--border)]/30" />
        </div>

        {/* Text lines + CTA */}
        <div className="space-y-1">
          <div className="h-1 w-full rounded-full bg-[var(--border)]/40" />
          <div className="h-1 w-5/6 rounded-full bg-[var(--border)]/30" />
        </div>
        <div className="flex gap-1.5">
          <div
            className="h-3.5 w-12 rounded-md"
            style={{ background: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})` }}
          />
          <div className="h-3.5 w-3.5 rounded-md border border-[var(--border)]/50 bg-[var(--surface)]/50" />
        </div>
      </div>
    </MiniWindow>
  );
}

/* ------------------------------------------------------
   Web Platforms — dashboard layout
------------------------------------------------------ */
function AppsInfographic() {
  return (
    <MiniWindow glow={`${ACCENT_2}40`}>
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-6 border-r border-[var(--border)]/40 p-1 space-y-1">
          <div
            className="h-4 w-full rounded"
            style={{ background: `${ACCENT_1}20`, border: `1px solid ${ACCENT_1}35` }}
          />
          <div className="h-4 w-full rounded bg-[var(--surface)]/60 border border-[var(--border)]/30" />
          <div className="h-4 w-full rounded bg-[var(--surface)]/60 border border-[var(--border)]/20" />
        </div>

        {/* Main */}
        <div className="flex-1 p-1.5 space-y-1.5">
          {/* Metric cards */}
          <div className="grid grid-cols-2 gap-1">
            <div
              className="h-4 rounded-md border"
              style={{ background: `${ACCENT_1}15`, borderColor: `${ACCENT_1}30` }}
            />
            <div
              className="h-4 rounded-md border"
              style={{ background: `${ACCENT_2}15`, borderColor: `${ACCENT_2}30` }}
            />
          </div>

          {/* Bar chart */}
          <div
            className="h-9 rounded-md px-1.5 pt-1.5 flex items-end gap-0.5"
            style={{ border: `1px solid ${ACCENT_1}15`, background: `linear-gradient(180deg, ${ACCENT_1}06, transparent)` }}
          >
            {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(180deg, ${i % 2 === 0 ? ACCENT_1 : ACCENT_2}70, ${i % 2 === 0 ? ACCENT_1 : ACCENT_2}20)`,
                }}
              />
            ))}
          </div>

          {/* Table rows */}
          <div className="space-y-0.5">
            <div className="h-1.5 rounded-sm bg-[var(--surface)]/60 border border-[var(--border)]/20" />
            <div className="h-1.5 rounded-sm bg-[var(--surface)]/50 border border-[var(--border)]/15" />
          </div>
        </div>
      </div>
    </MiniWindow>
  );
}

/* ------------------------------------------------------
   AI & Automations — neural hub
------------------------------------------------------ */
function AIInfographic() {
  const nodes = [
    { Icon: Sparkles, x: '16%', y: '22%' },
    { Icon: Workflow, x: '84%', y: '22%' },
    { Icon: Database, x: '16%', y: '78%' },
    { Icon: Smartphone, x: '84%', y: '78%' },
  ];

  return (
    <MiniWindow glow={`${ACCENT_1}40`}>
      <div className="relative h-full w-full">
        {/* Connection lines */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[
            { x2: 16, y2: 22 },
            { x2: 84, y2: 22 },
            { x2: 16, y2: 78 },
            { x2: 84, y2: 78 },
          ].map((line, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={line.x2}
              y2={line.y2}
              stroke={i % 2 === 0 ? ACCENT_1 : ACCENT_2}
              strokeWidth="0.8"
              strokeOpacity="0.35"
              strokeDasharray="3 3"
              style={{
                animation: `neural-pulse ${2 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </svg>

        {/* Central node */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 rounded-xl flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
            boxShadow: `0 0 16px ${ACCENT_1}60`,
          }}
        >
          <Brain className="h-5 w-5 text-white" />
        </div>

        {/* Satellite nodes */}
        {nodes.map(({ Icon, x, y }, i) => (
          <div
            key={i}
            className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-lg border flex items-center justify-center"
            style={{
              left: x,
              top: y,
              background: i % 2 === 0 ? `${ACCENT_1}15` : `${ACCENT_2}15`,
              borderColor: i % 2 === 0 ? `${ACCENT_1}35` : `${ACCENT_2}35`,
            }}
          >
            <Icon className="h-3 w-3" style={{ color: i % 2 === 0 ? ACCENT_1 : ACCENT_2 }} />
          </div>
        ))}
      </div>
    </MiniWindow>
  );
}

/* ------------------------------------------------------
   Consulting — strategy flow
------------------------------------------------------ */
function ConsultingInfographic() {
  return (
    <MiniWindow glow={`${ACCENT_2}40`}>
      <div className="absolute inset-2.5 flex items-center justify-between gap-1.5">
        {/* Start node */}
        <div
          className="h-7 w-7 shrink-0 rounded-full flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_1}40, ${ACCENT_1}20)`,
            border: `1.5px solid ${ACCENT_1}55`,
          }}
        >
          <div className="h-2 w-2 rounded-full" style={{ background: ACCENT_1 }} />
        </div>

        {/* Dashed connector */}
        <Connector color={ACCENT_1} />

        {/* Question node */}
        <div
          className="h-11 w-11 shrink-0 rounded-xl flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_1}30, ${ACCENT_2}20)`,
            border: `1.5px solid ${ACCENT_1}45`,
            boxShadow: `0 0 12px ${ACCENT_1}35`,
          }}
        >
          <span
            className="font-display text-lg font-bold text-gradient"
          >
            ?
          </span>
        </div>

        {/* Dashed connector */}
        <Connector color={ACCENT_2} />

        {/* End node */}
        <div
          className="h-7 w-7 shrink-0 rounded-full flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_2}40, ${ACCENT_2}20)`,
            border: `1.5px solid ${ACCENT_2}55`,
          }}
        >
          <div className="h-2 w-2 rounded-full" style={{ background: ACCENT_2 }} />
        </div>
      </div>
    </MiniWindow>
  );
}

function Connector({ color }: { color: string }) {
  return (
    <div
      className="relative flex-1 h-px"
      style={{
        background: `repeating-linear-gradient(to right, ${color} 0px, ${color} 3px, transparent 3px, transparent 6px)`,
        opacity: 0.5,
      }}
    >
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[2px] border-y-transparent border-l-[3px]"
        style={{ borderLeftColor: color, opacity: 0.7 }}
      />
    </div>
  );
}
