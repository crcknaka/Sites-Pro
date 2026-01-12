'use client';

import {
  Globe,
  Layers,
  Brain,
  Code,
  Server,
  Database,
  Workflow,
  MessageSquare,
  Sparkles,
  CreditCard,
  FileCheck,
  Zap,
  Settings,
  BarChart3,
  Users,
  Shield,
  Cpu,
} from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';

/* ======================================================
   SHARED CONTAINER — unified wrapper for all infographics
====================================================== */

function InfographicContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center group">
      {/* Ambient glow */}
      <div
        className="absolute -inset-8 rounded-[40px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 -z-10"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, ${ACCENT_1}40, transparent 50%), radial-gradient(ellipse at 70% 70%, ${ACCENT_2}30, transparent 50%)`,
        }}
      />

      {/* Main container */}
      <div
        className="
          relative w-full h-full rounded-3xl
          border border-[var(--border)]/80
          overflow-hidden
          backdrop-blur-xl
          transition-all duration-700 ease-out
          group-hover:border-[var(--border)]
          group-hover:shadow-2xl
          group-hover:shadow-black/10
        "
        style={{
          background: 'linear-gradient(145deg, color-mix(in srgb, var(--surface-strong) 98%, transparent), color-mix(in srgb, var(--bg) 95%, transparent))',
        }}
      >
        {/* Subtle inner glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${ACCENT_1}08, transparent 60%)`,
          }}
        />
        {children}
      </div>
    </div>
  );
}

/* ======================================================
   WEBSITES — Modern browser with live preview
====================================================== */

export function WebsiteInfographic() {
  return (
    <InfographicContainer>
      {/* Browser chrome */}
      <div className="h-11 border-b border-[var(--border)]/60 flex items-center px-4 gap-2 bg-[var(--surface)]/30 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="ml-3 h-6 flex-1 max-w-[180px] rounded-lg bg-[var(--surface)]/60 border border-[var(--border)]/50 flex items-center px-3">
          <div className="h-1.5 w-4 rounded-full opacity-40" style={{ background: ACCENT_1 }} />
          <div className="ml-1.5 h-1.5 w-16 rounded-full bg-[var(--border)]/50" />
        </div>
      </div>

      {/* Page content */}
      <div className="p-5 space-y-4">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div
            className="h-7 w-7 rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})` }}
          />
          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-1.5 w-8 rounded-full bg-[var(--border)]/50" />
            ))}
          </div>
        </div>

        {/* Hero section */}
        <div
          className="relative rounded-2xl p-4 overflow-hidden transition-all duration-500 group-hover:shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_1}12, ${ACCENT_2}08)`,
            border: `1px solid ${ACCENT_1}20`,
          }}
        >
          {/* Decorative gradient orb */}
          <div
            className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-30"
            style={{ background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})` }}
          />

          <div className="relative space-y-2">
            <div
              className="h-3 w-4/5 rounded-full"
              style={{ background: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})` }}
            />
            <div className="h-2 w-full rounded-full bg-[var(--border)]/40" />
            <div className="h-2 w-3/4 rounded-full bg-[var(--border)]/30" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { color: ACCENT_1, icon: Zap },
            { color: ACCENT_2, icon: Shield },
            { color: null, icon: BarChart3 },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="aspect-square rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-0.5"
                style={{
                  background: item.color ? `${item.color}10` : 'var(--surface)/50',
                  borderColor: item.color ? `${item.color}25` : 'var(--border)',
                }}
              >
                <Icon
                  className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ color: item.color || 'var(--text-muted)' }}
                />
              </div>
            );
          })}
        </div>

        {/* Content placeholder */}
        <div className="space-y-2">
          <div className="h-2 w-full rounded-full bg-[var(--border)]/30" />
          <div className="h-2 w-5/6 rounded-full bg-[var(--border)]/20" />
        </div>

        {/* CTA */}
        <div className="flex gap-3">
          <div
            className="h-9 flex-1 rounded-xl transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[var(--accent-1)]/20"
            style={{ background: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})` }}
          />
          <div className="h-9 w-9 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 transition-all duration-300 group-hover:border-[var(--accent-1)]/30" />
        </div>
      </div>
    </InfographicContainer>
  );
}

/* ======================================================
   WEB PLATFORMS — Dashboard/SaaS interface
====================================================== */

export function WebPlatformInfographic() {
  return (
    <InfographicContainer>
      {/* Top bar */}
      <div className="h-12 border-b border-[var(--border)]/60 flex items-center px-4 gap-3 bg-[var(--surface)]/30">
        <div
          className="h-7 w-7 rounded-lg transition-all duration-500 group-hover:scale-110"
          style={{ background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})` }}
        />
        <div className="h-2 w-20 rounded-full bg-[var(--border)]/50" />
        <div className="flex-1" />
        <div className="flex gap-2">
          <div className="h-6 w-6 rounded-lg bg-[var(--surface)]/60 border border-[var(--border)]/50" />
          <div className="h-6 w-6 rounded-full bg-[var(--surface)]/60 border border-[var(--border)]/50" />
        </div>
      </div>

      {/* Dashboard layout */}
      <div className="flex h-[calc(100%-48px)]">
        {/* Sidebar */}
        <div className="w-14 border-r border-[var(--border)]/40 p-2 space-y-2">
          {[
            { active: true, Icon: Layers },
            { active: false, Icon: BarChart3 },
            { active: false, Icon: Users },
            { active: false, Icon: Settings },
          ].map((item, i) => {
            const Icon = item.Icon;
            return (
              <div
                key={i}
                className="h-9 w-full rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: item.active ? `${ACCENT_1}15` : 'transparent',
                  border: item.active ? `1px solid ${ACCENT_1}30` : '1px solid transparent',
                }}
              >
                <Icon
                  className="h-4 w-4"
                  style={{ color: item.active ? ACCENT_1 : 'var(--text-muted)' }}
                />
              </div>
            );
          })}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 space-y-4">
          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '2.4K', label: 'Users', color: ACCENT_1, trend: '+12%' },
              { value: '$48K', label: 'Revenue', color: ACCENT_2, trend: '+8%' },
              { value: '99.9%', label: 'Uptime', color: ACCENT_1, trend: '' },
            ].map((metric, i) => (
              <div
                key={i}
                className="p-3 rounded-xl border transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-0.5"
                style={{
                  background: `${metric.color}08`,
                  borderColor: `${metric.color}20`,
                }}
              >
                <div className="text-[10px] text-[var(--text-muted)] mb-1">{metric.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold" style={{ color: metric.color }}>{metric.value}</span>
                  {metric.trend && (
                    <span className="text-[8px]" style={{ color: ACCENT_2 }}>{metric.trend}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div
            className="h-20 rounded-xl p-3 transition-all duration-500 group-hover:shadow-md"
            style={{
              background: `linear-gradient(180deg, ${ACCENT_1}05, transparent)`,
              border: `1px solid ${ACCENT_1}15`,
            }}
          >
            <div className="flex items-end h-full gap-1.5 pb-1">
              {[35, 55, 40, 70, 50, 85, 60, 75, 90, 65, 80].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t transition-all duration-500"
                  style={{
                    height: `${h}%`,
                    background: `linear-gradient(180deg, ${i % 2 === 0 ? ACCENT_1 : ACCENT_2}60, ${i % 2 === 0 ? ACCENT_1 : ACCENT_2}20)`,
                    opacity: 0.7 + (i * 0.025),
                  }}
                />
              ))}
            </div>
          </div>

          {/* Table rows */}
          <div className="space-y-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-8 rounded-lg border border-[var(--border)]/50 bg-[var(--surface)]/30 flex items-center px-3 gap-3 transition-all duration-300 group-hover:bg-[var(--surface)]/50"
              >
                <div
                  className="h-4 w-4 rounded-md"
                  style={{
                    background: i === 0 ? `${ACCENT_1}30` : i === 1 ? `${ACCENT_2}30` : 'var(--border)',
                  }}
                />
                <div className="h-1.5 flex-1 rounded-full bg-[var(--border)]/40" />
                <div className="h-1.5 w-8 rounded-full bg-[var(--border)]/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </InfographicContainer>
  );
}

/* ======================================================
   AI — Neural network / intelligence visualization
====================================================== */

export function AIInfographic() {
  return (
    <InfographicContainer>
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(var(--border) 1px, transparent 1px),
                linear-gradient(90deg, var(--border) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Orbital rings */}
        <div
          className="absolute w-48 h-48 rounded-full border border-dashed opacity-20 group-hover:opacity-40 transition-all duration-1000 group-hover:rotate-12"
          style={{ borderColor: ACCENT_1 }}
        />
        <div
          className="absolute w-64 h-64 rounded-full border border-dashed opacity-10 group-hover:opacity-30 transition-all duration-1000 group-hover:-rotate-6"
          style={{ borderColor: ACCENT_2 }}
        />

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
          {/* Lines from center to nodes */}
          {[
            { x: 160, y: 50 },   // top
            { x: 160, y: 270 },  // bottom
            { x: 50, y: 160 },   // left
            { x: 270, y: 160 },  // right
            { x: 80, y: 80 },    // top-left
            { x: 240, y: 240 },  // bottom-right
          ].map((pos, i) => (
            <line
              key={i}
              x1="160"
              y1="160"
              x2={pos.x}
              y2={pos.y}
              stroke={i % 2 === 0 ? ACCENT_1 : ACCENT_2}
              strokeWidth="1"
              strokeOpacity="0.15"
              strokeDasharray="4 4"
              className="transition-all duration-700"
              style={{
                strokeOpacity: 0.15,
              }}
            />
          ))}
        </svg>

        {/* Central brain node */}
        <div
          className="
            relative z-10
            h-24 w-24 rounded-3xl
            flex items-center justify-center
            transition-all duration-700 ease-out
            group-hover:scale-110
          "
          style={{
            background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
            boxShadow: `0 0 60px ${ACCENT_1}40, inset 0 0 30px rgba(255,255,255,0.1)`,
          }}
        >
          <Brain className="h-12 w-12 text-white drop-shadow-lg" />

          {/* Pulsing ring */}
          <div
            className="absolute inset-0 rounded-3xl animate-ping opacity-20"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
              animationDuration: '3s',
            }}
          />
        </div>

        {/* Surrounding nodes */}
        {[
          { Icon: MessageSquare, x: '50%', y: '12%', tx: '-50%', ty: '0' },
          { Icon: Workflow, x: '50%', y: '88%', tx: '-50%', ty: '-100%' },
          { Icon: Database, x: '12%', y: '50%', tx: '0', ty: '-50%' },
          { Icon: Sparkles, x: '88%', y: '50%', tx: '-100%', ty: '-50%' },
          { Icon: Cpu, x: '20%', y: '20%', tx: '0', ty: '0' },
          { Icon: Code, x: '80%', y: '80%', tx: '-100%', ty: '-100%' },
        ].map(({ Icon, x, y, tx, ty }, i) => (
          <div
            key={i}
            className="
              absolute
              h-12 w-12 rounded-xl
              flex items-center justify-center
              border backdrop-blur-sm
              transition-all duration-500
              group-hover:scale-110
            "
            style={{
              left: x,
              top: y,
              transform: `translate(${tx}, ${ty})`,
              background: i % 2 === 0 ? `${ACCENT_1}15` : `${ACCENT_2}15`,
              borderColor: i % 2 === 0 ? `${ACCENT_1}30` : `${ACCENT_2}30`,
              boxShadow: `0 4px 20px ${i % 2 === 0 ? ACCENT_1 : ACCENT_2}20`,
            }}
          >
            <Icon
              className="h-5 w-5"
              style={{ color: i % 2 === 0 ? ACCENT_1 : ACCENT_2 }}
            />
          </div>
        ))}
      </div>
    </InfographicContainer>
  );
}

/* ======================================================
   CONSULTING — Strategic hub visualization
====================================================== */

export function ConsultingInfographic() {
  return (
    <InfographicContainer>
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--border) 1px, transparent 0)`,
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
          {/* Lines from center to corners */}
          {[
            { x1: 160, y1: 140, x2: 70, y2: 55 },
            { x1: 160, y1: 140, x2: 250, y2: 55 },
            { x1: 160, y1: 180, x2: 70, y2: 265 },
            { x1: 160, y1: 180, x2: 250, y2: 265 },
          ].map((line, i) => (
            <line
              key={i}
              {...line}
              stroke={i % 2 === 0 ? ACCENT_1 : ACCENT_2}
              strokeWidth="1.5"
              strokeOpacity="0.2"
              className="transition-all duration-500"
            />
          ))}

          {/* Center decorative circle */}
          <circle
            cx="160"
            cy="160"
            r="50"
            fill="none"
            stroke={ACCENT_1}
            strokeWidth="1"
            strokeOpacity="0.1"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Central question/strategy hub */}
        <div
          className="
            relative z-10
            h-20 w-20 rounded-2xl
            flex items-center justify-center
            border
            transition-all duration-700
            group-hover:scale-110
          "
          style={{
            background: `linear-gradient(135deg, ${ACCENT_1}15, ${ACCENT_2}10)`,
            borderColor: `${ACCENT_1}30`,
            boxShadow: `0 0 40px ${ACCENT_1}20, inset 0 0 20px ${ACCENT_1}05`,
          }}
        >
          <span
            className="text-4xl font-bold transition-all duration-500 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ?
          </span>
        </div>

        {/* Service nodes in corners */}
        {[
          { Icon: CreditCard, label: 'Payments', pos: { top: '28px', left: '28px' }, color: ACCENT_2 },
          { Icon: Globe, label: 'Web & Apps', pos: { top: '28px', right: '28px' }, color: ACCENT_1 },
          { Icon: Brain, label: 'AI Strategy', pos: { bottom: '28px', left: '28px' }, color: ACCENT_1 },
          { Icon: FileCheck, label: 'Planning', pos: { bottom: '28px', right: '28px' }, color: ACCENT_2 },
        ].map(({ Icon, label, pos, color }, i) => (
          <div
            key={i}
            className="
              absolute
              w-20 h-16 rounded-xl
              flex flex-col items-center justify-center gap-1.5
              border backdrop-blur-sm
              transition-all duration-500
              group-hover:scale-105
              group-hover:-translate-y-0.5
            "
            style={{
              ...pos,
              background: `${color}12`,
              borderColor: `${color}25`,
              boxShadow: `0 4px 16px ${color}15`,
            }}
          >
            <Icon className="h-5 w-5" style={{ color }} />
            <span
              className="text-[9px] font-medium tracking-wide"
              style={{ color }}
            >
              {label}
            </span>
          </div>
        ))}

        {/* Decorative floating elements */}
        <div
          className="absolute top-1/2 left-[22%] h-2 w-2 rounded-full opacity-40 group-hover:opacity-70 transition-all duration-700"
          style={{ background: ACCENT_1 }}
        />
        <div
          className="absolute top-1/2 right-[22%] h-2 w-2 rounded-full opacity-40 group-hover:opacity-70 transition-all duration-700"
          style={{ background: ACCENT_2 }}
        />
      </div>
    </InfographicContainer>
  );
}
