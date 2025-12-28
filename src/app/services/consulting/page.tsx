import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  CreditCard,
  TrendingUp,
  Code,
  Brain,
  Globe,
  Lightbulb,
  BarChart3,
  ShieldCheck,
  Zap,
  Target,
  Users,
  FileCheck,
} from 'lucide-react';

/* brand accents */
const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

/* ======================================================
   DATA
====================================================== */

const consultingAreas = [
  {
    name: 'Payment system integration',
    description: 'Stripe, PayPal, Square and custom payment gateways. Secure, compliant and optimized checkout flows.',
  },
  {
    name: 'Fintech solutions',
    description: 'Financial technology architecture, compliance, security and scalable fintech platforms.',
  },
  {
    name: 'Website development strategy',
    description: 'Architecture planning, technology selection and roadmap for web projects.',
  },
  {
    name: 'Application development',
    description: 'System design, scalability planning and technical architecture for custom applications.',
  },
  {
    name: 'AI & automation consulting',
    description: 'AI integration strategies, automation workflows and intelligent system design.',
  },
  {
    name: 'Project assessment & planning',
    description: 'Technical audits, feasibility studies and development roadmaps.',
  },
];

const additionalServices = [
  { icon: Lightbulb, label: 'Technical strategy & planning' },
  { icon: BarChart3, label: 'Architecture & system design' },
  { icon: ShieldCheck, label: 'Security & compliance review' },
  { icon: Zap, label: 'Performance optimization' },
  { icon: Target, label: 'Technology stack selection' },
  { icon: Users, label: 'Team guidance & mentoring' },
  { icon: FileCheck, label: 'Code review & audits' },
  { icon: TrendingUp, label: 'Scalability planning' },
];

/* ======================================================
   PAGE
====================================================== */

export default function ConsultingPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-6 pt-40 pb-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* TEXT */}
          <div>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
            >
              ← Back to services
            </Link>

            <span
              className="mt-10 block text-sm uppercase tracking-widest font-medium"
              style={{ color: ACCENT_1 }}
            >
              Consulting
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              Expert guidance for
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
                }}
              >
                your digital projects
              </span>
            </h1>

            <p className="mt-8 text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              Strategic consulting for payment systems, fintech solutions,
              website and app development, AI integration, and project planning.
              Get expert guidance to make the right technical decisions.
            </p>

            <Link
              href="#contact"
              className="
                inline-block
                mt-10
                cursor-pointer select-none
                rounded-lg px-6 py-3 text-sm font-medium
                text-black
                transition-transform active:scale-[0.96]
                hover:opacity-90
              "
              style={{ background: ACCENT_1 }}
            >
              Start consulting
            </Link>
          </div>

          {/* INFOGRAPHIC */}
          <div className="flex justify-center">
            <ConsultingHeroInfographic />
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTING AREAS
      ====================================================== */}
      <section className="px-6 py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center">
            Consulting areas
          </h2>

          <p className="mt-6 text-center text-[var(--text-muted)] max-w-3xl mx-auto">
            We provide expert guidance across multiple domains — from payment
            integrations and fintech to web development, applications, AI and project planning.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingAreas.map((area) => (
              <div
                key={area.name}
                className="
                  rounded-2xl p-6
                  border border-[var(--border)]
                  bg-[var(--bg)]
                "
              >
                <div className="flex items-start gap-3">
                  {/* DOT */}
                  <span
                    className="mt-2 h-2 w-2 rounded-full"
                    style={{ backgroundColor: ACCENT_1 }}
                  />

                  <div>
                    <h3 className="font-medium">
                      {area.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-semibold">
              Strategic technical guidance
            </h2>

            <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
              Whether you're planning a new project, integrating payment systems,
              building fintech solutions, or need guidance on web/app/AI development,
              we provide expert consulting to help you make informed decisions
              and avoid costly mistakes.
            </p>
          </div>

          {/* SERVICES WITH ICONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.label}
                className="
                  flex items-center gap-4
                  rounded-2xl p-6
                  border border-[var(--border)]
                  bg-[var(--surface)]
                "
              >
                <div
                  className="
                    h-10 w-10
                    rounded-xl
                    flex items-center justify-center
                    border border-[var(--border)]
                    bg-[var(--bg)]
                  "
                >
                  <service.icon
                    size={18}
                    style={{ color: ACCENT_1 }}
                  />
                </div>

                <p className="text-sm font-medium">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section
        id="contact"
        className="
          px-6 py-40
          bg-[var(--surface-strong)]
          border-t border-[var(--border)]
        "
      >
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let's discuss your project
          </h2>

          <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
            Tell us about your project, challenges or goals.
            We'll provide expert guidance on payment systems, fintech solutions,
            development strategies, AI integration, or any technical consulting needs.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

/* ======================================================
   HERO INFOGRAPHIC — Consulting theme with interconnected nodes
====================================================== */

function ConsultingHeroInfographic() {
  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center">
      {/* Simple ambient background */}
      <div
        className="absolute inset-0 -z-10 blur-xl opacity-60 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 65% 35%, ${ACCENT_1}22 0%, transparent 70%), radial-gradient(circle at 30% 70%, ${ACCENT_2}22 0%, transparent 60%)`,
        }}
      />

      {/* Container with transparent background */}
      <div className="relative w-[280px] h-[280px] rounded-2xl bg-[var(--surface)]">
        <div className="relative w-full h-full flex items-center justify-center select-none">
          {/* Central hub with connecting lines */}
          <div className="relative w-full h-full">
        {/* Central circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="
              relative
              w-24 h-24
              rounded-2xl
              border-2
              flex items-center justify-center
              bg-[var(--surface-strong)]
            "
            style={{
              borderColor: `color-mix(in srgb, ${ACCENT_1} 50%, transparent)`,
              boxShadow: `0 10px 38px -18px color-mix(in srgb, ${ACCENT_2} 35%, transparent)`,
            }}
          >
            <Lightbulb size={32} style={{ color: ACCENT_1 }} />
          </div>
        </div>

        {/* Connecting lines and nodes */}
        {[
          { icon: CreditCard, angle: 0, label: 'Payments' },
          { icon: TrendingUp, angle: 60, label: 'Fintech' },
          { icon: Globe, angle: 120, label: 'Web' },
          { icon: Code, angle: 180, label: 'Apps' },
          { icon: Brain, angle: 240, label: 'AI' },
          { icon: FileCheck, angle: 300, label: 'Planning' },
        ].map((node, i) => {
          const radius = 120;
          const angleRad = (node.angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <div key={i} className="absolute left-1/2 top-1/2">
              {/* Line */}
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                width="240"
                height="240"
                style={{
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <line
                  x1="120"
                  y1="120"
                  x2={120 + x}
                  y2={120 + y}
                  stroke={ACCENT_1}
                  strokeOpacity="0.2"
                  strokeWidth="1"
                />
              </svg>

              {/* Node */}
              <div
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div
                  className="
                    w-16 h-16
                    rounded-xl
                    border
                    flex flex-col items-center justify-center
                    bg-[var(--bg)]
                    transition-all duration-300
                    hover:scale-110
                  "
                  style={{
                    borderColor: `color-mix(in srgb, ${ACCENT_1} 30%, var(--border))`,
                  }}
                >
                  <node.icon size={20} style={{ color: ACCENT_1 }} />
                </div>
              </div>
            </div>
          );
        })}
          </div>
        </div>
      </div>
    </div>
  );
}

