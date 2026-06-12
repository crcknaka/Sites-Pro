import Link from 'next/link';
import {
  Search,
  Code,
  Rocket,
  ArrowUpRight,
} from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import SectionHeader from './section-header';
import Reveal from './reveal';

const steps = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description:
      'We align on goals, constraints and technical direction to define scope and priorities.',
    icon: Search,
  },
  {
    step: 2,
    title: 'Design & Build',
    description:
      'We design and build scalable products with a focus on architecture, performance and usability.',
    icon: Code,
  },
  {
    step: 3,
    title: 'Test, Launch & Scale',
    description:
      'We prepare products for production, launch reliably and support long-term growth.',
    icon: Rocket,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        scroll-mt-24 relative
        py-20 sm:py-32 px-4 sm:px-6
        select-none
        text-[var(--fg)]
      "
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 70% 50%, ${ACCENT_1}15 0%, transparent 60%), radial-gradient(circle at 30% 50%, ${ACCENT_2}10 0%, transparent 60%)`,
        }}
      />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About us"
          title="How We"
          highlight="Work"
          subtitle="We follow a structured, product-driven process focused on clarity, scalability and long-term results."
        />

        {/* STEPS - Mobile: vertical list, Desktop: horizontal grid */}

        {/* Mobile version - vertical cards */}
        <div className="md:hidden mt-12 space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.step} delay={i * 80}>
                <div className="card-premium card-topline flex items-start gap-4 p-4 rounded-2xl">
                  <div
                    className="
                      relative shrink-0 h-12 w-12 rounded-xl
                      flex items-center justify-center
                      bg-[var(--surface-strong)]
                      border border-[var(--border)]
                    "
                  >
                    <Icon className="h-5 w-5" style={{ color: ACCENT_1 }} />
                    <span
                      className="
                        absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full
                        flex items-center justify-center
                        text-xs font-semibold text-black
                      "
                      style={{ background: `linear-gradient(135deg, ${ACCENT_1}, color-mix(in srgb, ${ACCENT_1} 65%, ${ACCENT_2}))` }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-base font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Desktop version - horizontal grid */}
        <div className="hidden md:grid relative mt-24 grid-cols-3 gap-8 lg:gap-12">
          {/* connector line */}
          <div
            className="absolute top-12 left-[10%] right-[10%] h-px"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  transparent,
                  color-mix(in srgb, var(--accent-1) 55%, transparent) 25%,
                  color-mix(in srgb, var(--accent-2) 45%, transparent) 75%,
                  transparent
                )
              `,
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.step}
                delay={i * 120}
                className="relative flex flex-col items-center text-center px-4"
              >
                <div
                  className="
                    relative z-10 mb-6 h-24 w-24 rounded-2xl
                    flex items-center justify-center
                    backdrop-blur-sm
                    border border-[var(--border)]
                    hover:border-[var(--accent-1)]
                    hover:shadow-lg hover:shadow-[var(--accent-1)]/10
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--bg) 95%, var(--surface-strong))',
                  }}
                >
                  <Icon className="h-10 w-10" style={{ color: ACCENT_1 }} />

                  <span
                    className="
                      absolute -top-2 -right-2 h-8 w-8 rounded-full
                      flex items-center justify-center
                      text-sm font-semibold text-black
                      shadow-lg
                    "
                    style={{ background: `linear-gradient(135deg, ${ACCENT_1}, color-mix(in srgb, ${ACCENT_1} 65%, ${ACCENT_2}))` }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-[var(--text-muted)] max-w-sm">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </div>

        {/* READ MORE */}
        <Reveal className="mt-12 flex justify-center">
          <Link href="/about" className="btn-secondary group text-sm">
            Read more
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
