import Link from 'next/link';
import {
  Lightbulb,
  Rocket,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

/* brand accents via CSS vars */
const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

const steps = [
  {
    step: 1,
    title: 'Explore Ideas',
    description:
      'We dive deep into understanding your vision, goals, and challenges to create the perfect strategy.',
    icon: Lightbulb,
  },
  {
    step: 2,
    title: 'Bring It to Life',
    description:
      'Our team transforms concepts into reality with cutting-edge technology and creative design.',
    icon: Rocket,
  },
  {
    step: 3,
    title: 'Build & Polish',
    description:
      'We refine every detail, ensuring your digital product exceeds expectations and delights users.',
    icon: Sparkles,
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
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: ACCENT_1 }}
          >
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            How We{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
              }}
            >
              Work
            </span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
            At Sites Pro, we believe in a collaborative approach that puts your
            success first. Our proven process ensures exceptional results every
            time.
          </p>
        </div>

        {/* STEPS - hidden on mobile, visible on desktop */}
        <div className="hidden md:grid relative mt-24 grid-cols-3 gap-8 lg:gap-12">
          {/* connector line */}
          <div
            className="absolute top-12 left-[10%] right-[10%] h-px"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  transparent,
                  color-mix(in srgb, var(--accent-1) 35%, transparent),
                  color-mix(in srgb, var(--accent-1) 20%, transparent),
                  color-mix(in srgb, var(--accent-1) 35%, transparent),
                  transparent
                )
              `,
            }}
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center px-4"
              >
                <div
                  className="
                    relative z-10 mb-6 h-24 w-24 rounded-xl
                    flex items-center justify-center
                    bg-[var(--surface-strong)] backdrop-blur-sm
                    border border-[var(--border)]
                    text-[var(--text-muted)]
                    hover:text-[var(--fg)]
                    hover:border-[var(--accent-1)]
                    hover:bg-[var(--surface-strong)]
                    transition-all duration-300
                  "
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--bg) 95%, var(--surface-strong))',
                  }}
                >
                  <Icon className="h-10 w-10" />

                  <span
                    className="
                      absolute -top-2 -right-2 h-8 w-8 rounded-full
                      flex items-center justify-center
                      text-sm font-semibold text-black
                      shadow-lg
                    "
                    style={{ background: ACCENT_1 }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-[var(--text-muted)] max-w-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* READ MORE */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/about"
            className="
              group inline-flex items-center gap-2
              cursor-pointer select-none
              rounded-xl px-6 py-3
              text-sm font-medium
              border border-[var(--border)]
              bg-[var(--surface)]
              text-[var(--text-muted)]
              hover:text-[var(--fg)]
              hover:border-[var(--accent-1)]
              hover:bg-[var(--surface-strong)]
              transition-all
            "
          >
            Read more
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
