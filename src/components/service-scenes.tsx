'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  Check,
  CreditCard,
  Database,
  FileText,
  Gauge,
  LayoutDashboard,
  Mail,
  Package,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';

/* ======================================================
   SERVICE SCENES — one visual system for every service

   Every scene is a real-looking product window drawn at a fixed
   design size and scaled to whatever box it sits in, so the hero
   on a service page and the small card on the home page are the
   same drawing. Theme comes from the CSS variables; the two accent
   colours are the only brand colours used.
====================================================== */

export type SceneType = 'web' | 'web-platforms' | 'ai' | 'consulting';

export const SCENE_W = 560;
export const SCENE_H = 380;

/* ------------------------------------------------------
   Scaler — measures its box and scales the fixed drawing
------------------------------------------------------ */

export function ScaledScene({
  type,
  className = '',
  float = true,
}: {
  type: SceneType;
  className?: string;
  /** true = gentle idle float, used in the service heroes */
  float?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / SCENE_W);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full select-none ${className}`}
      style={{ aspectRatio: `${SCENE_W} / ${SCENE_H}` }}
      aria-hidden="true"
    >
      <div
        className={`absolute left-0 top-0 ${float ? 'lg:animate-[slow-float_7s_ease-in-out_infinite]' : ''}`}
        style={{
          width: SCENE_W,
          height: SCENE_H,
          transform: `scale(${scale ?? 1})`,
          transformOrigin: 'top left',
          opacity: scale === null ? 0 : 1,
          transition: 'opacity 0.6s ease-out',
        }}
      >
        <Scene type={type} />
      </div>
    </div>
  );
}

function Scene({ type }: { type: SceneType }) {
  switch (type) {
    case 'web':
      return <WebsiteScene />;
    case 'web-platforms':
      return <PlatformScene />;
    case 'ai':
      return <AiScene />;
    case 'consulting':
      return <ConsultingScene />;
  }
}

/* ------------------------------------------------------
   Shared window frame
------------------------------------------------------ */

function Window({
  title,
  children,
  bodyClassName = '',
}: {
  title: string;
  children: React.ReactNode;
  bodyClassName?: string;
}) {
  return (
    <div
      className="absolute left-0 top-0 h-[340px] w-[520px] overflow-hidden rounded-2xl border border-[var(--border)]"
      style={{
        background: 'color-mix(in srgb, var(--bg) 95%, var(--fg) 5%)',
        boxShadow: '0 30px 60px -20px rgba(8,12,20,0.45), 0 12px 24px -12px rgba(8,12,20,0.3)',
      }}
    >
      {/* chrome */}
      <div
        className="flex h-9 items-center gap-2 border-b border-[var(--border)] px-3.5"
        style={{ background: 'color-mix(in srgb, var(--bg) 90%, var(--fg) 10%)' }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="mx-auto flex h-5 w-56 items-center justify-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[9px] text-[var(--text-muted)]">
          <ShieldCheck className="h-2.5 w-2.5" style={{ color: ACCENT_1 }} />
          {title}
        </div>
        <span className="h-2.5 w-2.5" />
        <span className="h-2.5 w-2.5" />
        <span className="h-2.5 w-2.5" />
      </div>
      <div className={`relative h-[calc(100%-36px)] ${bodyClassName}`}>{children}</div>
    </div>
  );
}

/** A small card floating over the window corner — gives every scene the same depth. */
function Floating({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-10 rounded-xl border border-[var(--border)] p-3 ${className}`}
      style={{
        background: 'color-mix(in srgb, var(--bg) 92%, var(--fg) 8%)',
        boxShadow: '0 20px 40px -16px rgba(8,12,20,0.5)',
      }}
    >
      {children}
    </div>
  );
}

const Label = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`text-[9px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)] ${className}`}>
    {children}
  </span>
);

const Pill = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <span
    className="inline-flex items-center gap-1 rounded-full px-1.5 py-[2px] text-[9px] font-medium"
    style={{ background: `${color}1f`, color }}
  >
    {children}
  </span>
);

/* ------------------------------------------------------
   1 · Websites — a landing page in the browser
------------------------------------------------------ */

function WebsiteScene() {
  return (
    <>
      <Window title="yourbrand.com">
        <div className="px-6 pt-4">
          {/* nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-5 w-5 rounded-md"
                style={{ background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})` }}
              />
              <span className="text-[11px] font-semibold text-[var(--fg)]">Northwind</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-[var(--text-muted)]">
              <span>Product</span>
              <span>Pricing</span>
              <span>Stories</span>
              <span
                className="rounded-md px-2 py-1 text-[10px] font-semibold text-[#0b1a06]"
                style={{ background: ACCENT_1 }}
              >
                Get a quote
              </span>
            </div>
          </div>

          {/* hero */}
          <div className="mt-5 grid grid-cols-[1.15fr_1fr] gap-6">
            <div>
              <Pill color={ACCENT_1}>
                <Zap className="h-2.5 w-2.5" /> New season
              </Pill>
              <div className="mt-2 font-display text-[20px] font-semibold leading-[1.1] tracking-tight text-[var(--fg)]">
                Faster sites.
                <br />
                More enquiries.
              </div>
              <p className="mt-1.5 max-w-[210px] text-[10px] leading-snug text-[var(--text-muted)]">
                A website that loads in under a second and turns visitors into calls, bookings and orders.
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[10px] font-semibold text-[#0b1a06]"
                  style={{ background: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})` }}
                >
                  Start a project <ArrowRight className="h-2.5 w-2.5" />
                </span>
                <span className="rounded-md border border-[var(--border)] px-2.5 py-1.5 text-[10px] font-medium text-[var(--fg)]">
                  See work
                </span>
              </div>
            </div>

            {/* hero visual */}
            <div
              className="relative h-[104px] overflow-hidden rounded-xl border border-[var(--border)]"
              style={{ background: `linear-gradient(135deg, ${ACCENT_1}22, ${ACCENT_2}18)` }}
            >
              <div
                className="absolute -right-6 -top-8 h-24 w-24 rounded-full blur-2xl"
                style={{ background: `${ACCENT_2}55` }}
              />
              <div className="absolute inset-x-4 bottom-4 space-y-1.5">
                <div className="h-1.5 w-3/4 rounded-full bg-[var(--fg)]/70" />
                <div className="h-1.5 w-1/2 rounded-full bg-[var(--fg)]/35" />
              </div>
              <div className="absolute left-4 top-4 flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-6 w-6 rounded-md bg-[var(--surface)]/80" />
                ))}
              </div>
            </div>
          </div>

          {/* feature row */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { Icon: Gauge, t: 'Performance', s: 'LCP under 1 s', c: ACCENT_1 },
              { Icon: Search, t: 'Search-ready', s: 'Schema, sitemaps', c: ACCENT_2 },
              { Icon: FileText, t: 'Your CMS', s: 'Edit without us', c: ACCENT_1 },
            ].map(({ Icon, t, s, c }) => (
              <div key={t} className="rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] p-2.5">
                <Icon className="h-3.5 w-3.5" style={{ color: c }} />
                <div className="mt-1.5 text-[10px] font-semibold text-[var(--fg)]">{t}</div>
                <div className="text-[9px] text-[var(--text-muted)]">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </Window>

      {/* floating: Core Web Vitals score */}
      <Floating className="left-[430px] top-[200px] w-[124px]">
        <Label>Core Web Vitals</Label>
        <div className="mt-1.5 flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center">
            <svg viewBox="0 0 36 36" className="absolute inset-0 h-9 w-9 -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="var(--border)" strokeWidth="3" />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke={ACCENT_1}
                strokeWidth="3"
                strokeDasharray="94.2"
                strokeDashoffset="1.9"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[11px] font-semibold text-[var(--fg)]">98</span>
          </span>
          <div className="text-[9px] leading-tight text-[var(--text-muted)]">
            LCP <b className="text-[var(--fg)]">0.8 s</b>
            <br />
            CLS <b className="text-[var(--fg)]">0.00</b>
          </div>
        </div>
      </Floating>
    </>
  );
}

/* ------------------------------------------------------
   2 · Web platforms — an operations dashboard
------------------------------------------------------ */

function PlatformScene() {
  const nav = [
    { Icon: LayoutDashboard, t: 'Overview', on: true },
    { Icon: Package, t: 'Orders' },
    { Icon: Users, t: 'Customers' },
    { Icon: BarChart3, t: 'Reports' },
    { Icon: Settings, t: 'Settings' },
  ];
  const rows = [
    ['#10482', 'Aurora Outfitters', '€1,240', 'Paid', ACCENT_1],
    ['#10481', 'Verde Supply Co', '€386', 'Shipped', ACCENT_2],
    ['#10480', 'Banff Gear', '€2,910', 'Paid', ACCENT_1],
  ];
  return (
    <>
      <Window title="app.northwind.io/overview" bodyClassName="flex">
        {/* sidebar */}
        <div className="w-[120px] border-r border-[var(--border)] bg-[var(--surface-strong)] px-2.5 pt-3">
          <div className="flex items-center gap-2 px-1.5">
            <span
              className="h-4 w-4 rounded"
              style={{ background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})` }}
            />
            <span className="text-[10px] font-semibold text-[var(--fg)]">Northwind</span>
          </div>
          <div className="mt-4 space-y-0.5">
            {nav.map(({ Icon, t, on }) => (
              <div
                key={t}
                className={`flex items-center gap-2 rounded-md px-1.5 py-1.5 text-[10px] ${
                  on ? 'font-semibold text-[var(--fg)]' : 'text-[var(--text-muted)]'
                }`}
                style={on ? { background: `${ACCENT_1}1a` } : undefined}
              >
                <Icon className="h-3 w-3" style={on ? { color: ACCENT_1 } : undefined} />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* main */}
        <div className="flex-1 px-4 pt-3">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-[var(--fg)]">Overview</div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-28 items-center gap-1.5 rounded-md border border-[var(--border)] px-2 text-[9px] text-[var(--text-muted)]">
                <Search className="h-2.5 w-2.5" /> Search…
              </span>
              <Bell className="h-3 w-3 text-[var(--text-muted)]" />
              <span className="h-5 w-5 rounded-full" style={{ background: `linear-gradient(135deg, ${ACCENT_2}, ${ACCENT_1})` }} />
            </div>
          </div>

          {/* KPIs */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ['Revenue', '€48.2k', '+12.4%', ACCENT_1],
              ['Active users', '2,410', '+8.1%', ACCENT_2],
              ['Uptime', '99.98%', '30 days', ACCENT_1],
            ].map(([l, v, d, c]) => (
              <div key={l} className="rounded-lg border border-[var(--border)] p-2">
                <div className="text-[9px] text-[var(--text-muted)]">{l}</div>
                <div className="mt-0.5 flex items-baseline gap-1.5">
                  <span className="text-[14px] font-semibold text-[var(--fg)]">{v}</span>
                  <span className="text-[9px] font-medium" style={{ color: c }}>{d}</span>
                </div>
              </div>
            ))}
          </div>

          {/* chart */}
          <div className="mt-2.5 rounded-lg border border-[var(--border)] p-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-medium text-[var(--fg)]">Orders per day</span>
              <span className="text-[9px] text-[var(--text-muted)]">Last 30 days</span>
            </div>
            <svg viewBox="0 0 330 56" className="mt-1 h-14 w-full">
              <defs>
                <linearGradient id="scene-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor={ACCENT_1} stopOpacity="0.35" />
                  <stop offset="1" stopColor={ACCENT_1} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 44 C 30 40, 45 30, 70 32 S 110 46, 135 34 S 175 12, 205 22 S 250 30, 275 14 S 310 8, 330 10 L330 56 L0 56 Z"
                fill="url(#scene-area)"
              />
              <path
                d="M0 44 C 30 40, 45 30, 70 32 S 110 46, 135 34 S 175 12, 205 22 S 250 30, 275 14 S 310 8, 330 10"
                fill="none"
                stroke={ACCENT_1}
                strokeWidth="1.8"
              />
              <path
                d="M0 50 C 40 48, 80 44, 120 42 S 200 36, 260 30 S 310 24, 330 22"
                fill="none"
                stroke={ACCENT_2}
                strokeWidth="1.4"
                strokeDasharray="3 3"
              />
            </svg>
          </div>

          {/* table */}
          <div className="mt-2.5 overflow-hidden rounded-lg border border-[var(--border)]">
            {rows.map(([id, name, sum, st, c], i) => (
              <div
                key={id}
                className={`grid grid-cols-[52px_1fr_56px_58px] items-center px-2 py-[5px] text-[9px] ${
                  i ? 'border-t border-[var(--border)]' : ''
                }`}
              >
                <span className="font-mono text-[var(--text-muted)]">{id}</span>
                <span className="text-[var(--fg)]">{name}</span>
                <span className="text-right font-medium text-[var(--fg)]">{sum}</span>
                <span className="text-right">
                  <Pill color={c}>{st}</Pill>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Window>

      {/* floating: deploy toast */}
      <Floating className="left-[372px] top-[10px] w-[186px]">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full" style={{ background: `${ACCENT_1}22` }}>
            <Check className="h-3 w-3" style={{ color: ACCENT_1 }} />
          </span>
          <div className="leading-tight">
            <div className="text-[10px] font-semibold text-[var(--fg)]">Deployed to production</div>
            <div className="text-[9px] text-[var(--text-muted)]">build 42 s · zero downtime</div>
          </div>
        </div>
      </Floating>
    </>
  );
}

/* ------------------------------------------------------
   3 · AI & automations — a workflow canvas
------------------------------------------------------ */

function FlowNode({
  Icon,
  title,
  sub,
  color,
  className = '',
  active = false,
}: {
  Icon: typeof Mail;
  title: string;
  sub: string;
  color: string;
  className?: string;
  active?: boolean;
}) {
return (
  <div
    className={`absolute w-[124px] rounded-lg border p-2 ${className}`}
    style={{
      background: 'color-mix(in srgb, var(--bg) 93%, var(--fg) 7%)',
      borderColor: active ? color : 'var(--border)',
      boxShadow: active ? `0 0 0 3px ${color}22` : undefined,
    }}
  >
    <div className="flex items-center gap-1.5">
      <span className="grid h-5 w-5 place-items-center rounded-md" style={{ background: `${color}22` }}>
        <Icon className="h-3 w-3" style={{ color }} />
      </span>
      <span className="text-[10px] font-semibold text-[var(--fg)]">{title}</span>
    </div>
    <div className="mt-1 text-[9px] text-[var(--text-muted)]">{sub}</div>
  </div>
);
}

function AiScene() {
  return (
    <>
      <Window title="automations · invoice-intake">
        {/* dotted canvas */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
            opacity: 0.55,
          }}
        />
        {/* header strip */}
        <div className="relative flex items-center justify-between px-4 pt-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-[var(--fg)]">Invoice intake</span>
            <Pill color={ACCENT_1}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT_1 }} /> Live
            </Pill>
          </div>
          <span className="text-[9px] text-[var(--text-muted)]">1,248 runs · 99.6% success</span>
        </div>

        {/* connectors */}
        <svg viewBox="0 0 520 304" className="absolute inset-0 h-full w-full">
          {[
            'M148 92 C 180 92, 180 92, 212 92',
            'M336 92 C 372 92, 372 150, 400 150',
            'M336 92 C 372 92, 372 232, 400 232',
            'M148 92 C 148 170, 148 200, 200 200 C 240 200, 250 200, 274 200',
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={i === 3 ? ACCENT_2 : ACCENT_1}
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.8"
            />
          ))}
        </svg>

        <FlowNode Icon={Mail} title="Inbound email" sub="invoices@ · IMAP" color={ACCENT_2} className="left-6 top-[68px]" />
        <FlowNode Icon={Sparkles} title="Classify" sub="LLM · invoice / other" color={ACCENT_1} className="left-[212px] top-[68px]" active />
        <FlowNode Icon={Database} title="Post to ledger" sub="matched supplier" color={ACCENT_1} className="left-[400px] top-[126px]" />
        <FlowNode Icon={Bot} title="Draft reply" sub="ask for missing VAT no." color={ACCENT_1} className="left-[400px] top-[208px]" />
        <FlowNode Icon={FileText} title="Extract fields" sub="total · date · IBAN" color={ACCENT_2} className="left-[274px] top-[176px]" />
      </Window>

      {/* floating: assistant message */}
      <Floating className="left-[18px] top-[230px] w-[236px]">
        <div className="flex items-start gap-2">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full" style={{ background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})` }}>
            <Bot className="h-3 w-3 text-[#0b1a06]" />
          </span>
          <div>
            <div className="text-[10px] leading-snug text-[var(--fg)]">
              Invoice <b>#1042</b> matched to <b>Verde Supply</b> — posted €386.00, VAT 21%.
            </div>
            <div className="mt-1 text-[9px] text-[var(--text-muted)]">340 ms · 1.2k tokens · gpt-4.1</div>
          </div>
        </div>
      </Floating>
    </>
  );
}

/* ------------------------------------------------------
   4 · Consulting — a decision document
------------------------------------------------------ */

function ConsultingScene() {
  const steps = [
    ['Discovery', 'done'],
    ['Architecture', 'done'],
    ['MVP', 'now'],
    ['Scale', 'next'],
  ] as const;
  const options = [
    ['Stripe', '1.5% + €0.25', 'Fast to launch', true],
    ['Adyen', '0.6% + €0.11', 'Enterprise onboarding', false],
    ['Own gateway', 'interchange +', 'Full control, 6–9 mo', false],
  ] as const;
  return (
    <>
      <Window title="Payment stack · decision memo">
        <div className="px-5 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Decision memo</Label>
              <div className="mt-0.5 text-[13px] font-semibold text-[var(--fg)]">Payment stack for the marketplace</div>
            </div>
            <Pill color={ACCENT_2}>
              <CreditCard className="h-2.5 w-2.5" /> Fintech
            </Pill>
          </div>

          {/* roadmap */}
          <div className="mt-4 rounded-lg border border-[var(--border)] px-3 py-2.5">
            <div className="flex items-center">
              {steps.map(([t, s], i) => (
                <div key={t} className="flex flex-1 items-center">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="grid h-4 w-4 place-items-center rounded-full border text-[8px] font-bold"
                      style={{
                        borderColor: s === 'next' ? 'var(--border)' : s === 'now' ? ACCENT_2 : ACCENT_1,
                        background: s === 'done' ? ACCENT_1 : s === 'now' ? `${ACCENT_2}22` : 'transparent',
                        color: s === 'done' ? '#0b1a06' : s === 'now' ? ACCENT_2 : 'var(--text-muted)',
                      }}
                    >
                      {s === 'done' ? <Check className="h-2.5 w-2.5" /> : i + 1}
                    </span>
                    <span className={`text-[9px] ${s === 'next' ? 'text-[var(--text-muted)]' : 'font-medium text-[var(--fg)]'}`}>{t}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <span
                      className="mx-2 h-px flex-1"
                      style={{ background: s === 'done' ? ACCENT_1 : 'var(--border)' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* comparison */}
          <div className="mt-3 overflow-hidden rounded-lg border border-[var(--border)]">
            <div className="grid grid-cols-[1fr_92px_1fr_24px] bg-[var(--surface-strong)] px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
              <span>Option</span>
              <span>Fees</span>
              <span>Trade-off</span>
              <span />
            </div>
            {options.map(([n, f, t, pick]) => (
              <div
                key={n}
                className="grid grid-cols-[1fr_92px_1fr_24px] items-center border-t border-[var(--border)] px-2.5 py-1.5 text-[9px]"
                style={pick ? { background: `${ACCENT_1}0f` } : undefined}
              >
                <span className="font-medium text-[var(--fg)]">{n}</span>
                <span className="text-[var(--text-muted)]">{f}</span>
                <span className="text-[var(--text-muted)]">{t}</span>
                <span className="text-right">
                  {pick && <Check className="ml-auto h-3 w-3" style={{ color: ACCENT_1 }} />}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Window>

      {/* floating: the recommendation */}
      <Floating className="left-[352px] top-[236px] w-[200px]">
        <Label>Recommendation</Label>
        <div className="mt-1 text-[10px] leading-snug text-[var(--fg)]">
          Start on <b>Stripe</b>, keep the checkout PSP-agnostic — switch acquirers at volume without a rebuild.
        </div>
        <div className="mt-1.5 flex items-center gap-1 text-[9px] font-medium" style={{ color: ACCENT_1 }}>
          <ShieldCheck className="h-3 w-3" /> PCI SAQ A · 3-DS ready
        </div>
      </Floating>
    </>
  );
}
