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

        {/* STEPS — one list: a card per step on mobile, a three-column row on desktop */}
        <ol className="relative mt-12 grid gap-4 md:mt-24 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* connector line (desktop) */}
          <li
            aria-hidden="true"
            className="pointer-events-none absolute top-12 left-[10%] right-[10%] hidden h-px md:block"
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
                as="li"
                key={step.step}
                delay={i * 100}
                className="
                  relative flex items-start gap-4 rounded-2xl p-4
                  border border-[var(--border-soft)] bg-[var(--surface)]
                  md:flex-col md:items-center md:gap-0 md:rounded-none md:border-0 md:bg-transparent md:px-4 md:py-0 md:text-center
                "
              >
                <div
                  className="
                    group/step relative z-10 shrink-0
                    h-12 w-12 rounded-xl md:mb-6 md:h-24 md:w-24 md:rounded-2xl
                    flex items-center justify-center
                    backdrop-blur-sm
                    border border-[var(--border)]
                    md:hover:border-[var(--accent-1)]
                    md:hover:-translate-y-1
                    transition-all duration-300
                  "
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--bg) 95%, var(--surface-strong))',
                  }}
                >
                  <Icon className="h-5 w-5 md:h-10 md:w-10" style={{ color: 'var(--accent-text)' }} aria-hidden="true" />

                  <span
                    className="
                      absolute -top-1.5 -right-1.5 h-5 w-5 text-xs
                      md:-top-2 md:-right-2 md:h-8 md:w-8 md:text-sm
                      rounded-full flex items-center justify-center
                      font-semibold text-black md:shadow-lg
                    "
                    style={{ background: `linear-gradient(135deg, ${ACCENT_1}, color-mix(in srgb, ${ACCENT_1} 65%, ${ACCENT_2}))` }}
                  >
                    {step.step}
                  </span>
                </div>

                <div>
                  <h3 className="font-display mb-1 text-base font-semibold md:mb-3 md:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)] md:max-w-sm">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>

        {/* READ MORE */}
        <Reveal className="mt-12 flex justify-center">
          <Link href="/about" className="btn-secondary group text-sm">
            How we work, in detail
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
