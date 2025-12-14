import type { Metadata } from 'next';
import {
  Lightbulb,
  Rocket,
  Sparkles,
  ShieldCheck,
  Gauge,
  Layers,
} from 'lucide-react';

/* brand accents via CSS vars */
const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

export const metadata: Metadata = {
  title: 'About — Sites Pro',
  description:
    'Learn how Sites Pro works, our process, principles, and why we build product-grade websites.',
};

const steps = [
  {
    step: 1,
    title: 'Explore Ideas',
    description:
      'We dive deep into your goals, challenges, and vision to define a clear product direction.',
    icon: Lightbulb,
  },
  {
    step: 2,
    title: 'Bring It to Life',
    description:
      'Design and engineering work together to turn concepts into clean, scalable solutions.',
    icon: Rocket,
  },
  {
    step: 3,
    title: 'Build & Polish',
    description:
      'We refine, optimize, and test every detail until the product feels effortless.',
    icon: Sparkles,
  },
];

const principles = [
  {
    title: 'Product-first UX',
    description:
      'Every decision is guided by clarity, hierarchy, and predictable user experience.',
    icon: Layers,
  },
  {
    title: 'Performance by default',
    description:
      'Minimal JavaScript, native browser features, and fast-loading interfaces.',
    icon: Gauge,
  },
  {
    title: 'Production-ready',
    description:
      'Security, scalability, and clean architecture from day one.',
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-32 pb-24">
        <span
          className="text-sm font-medium tracking-widest uppercase"
          style={{ color: ACCENT_1 }}
        >
          About Sites Pro
        </span>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          How we build{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
            }}
          >
            product-grade websites
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
          We design and develop calm, scalable, and conversion-focused digital
          products — where UX, performance, and engineering work as one system.
        </p>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          <div
            className="absolute top-12 left-[10%] right-[10%] hidden h-px md:block"
            style={{
              background: `linear-gradient(
                90deg,
                transparent,
                ${ACCENT_1}33,
                ${ACCENT_1}22,
                ${ACCENT_1}33,
                transparent
              )`,
            }}
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.step} className="relative px-6 text-center">
                <div
                  className="
                    relative mx-auto mb-8 h-24 w-24 rounded-full
                    flex items-center justify-center
                    bg-[var(--surface)]
                    border border-[var(--border)]
                  "
                >
                  <Icon className="h-10 w-10 text-[var(--fg)]/70" />

                  <span
                    className="
                      absolute -top-2 -right-2
                      flex h-8 w-8 items-center justify-center
                      rounded-full
                      text-sm font-semibold text-black
                    "
                    style={{ background: ACCENT_1 }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[var(--fg)]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <h2 className="text-2xl font-semibold text-[var(--fg)]">
          Our principles
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl p-6
                  bg-[var(--surface)]
                  border border-[var(--border)]
                "
              >
                <Icon className="h-6 w-6 text-[var(--accent-1)]" />

                <h3 className="mt-4 text-lg font-semibold text-[var(--fg)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-4xl px-6 pb-40">
        <div className="mb-20 h-px bg-[var(--border)]" />

        <p className="text-lg leading-relaxed text-[var(--text-muted)]">
          Sites Pro is built for founders, startups, and teams who care about
          quality, clarity, and long-term growth. We don’t chase trends — we
          design systems that last.
        </p>
      </section>
    </main>
  );
}
