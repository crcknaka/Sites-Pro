import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  CreditCard,
  TrendingUp,
  Code,
  Brain,
  Globe,
  HelpCircle,
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
  { icon: Target, label: 'Technical strategy & planning' },
  { icon: BarChart3, label: 'Architecture & system design' },
  { icon: ShieldCheck, label: 'Security & compliance review' },
  { icon: Zap, label: 'Performance optimization' },
  { icon: Code, label: 'Technology stack selection' },
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
            <span
              className="block text-sm uppercase tracking-widest font-medium"
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
              href="/#contact"
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

      {/* BACK TO SERVICES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <Link
              href="/#services"
              className="
                group
                flex items-center justify-center gap-2
                px-6 py-4
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                text-sm sm:text-base font-medium
                text-[var(--text-muted)]
                hover:text-[var(--fg)]
                hover:border-[var(--accent-1)]
                transition-all
                cursor-pointer select-none
              "
            >
              <span>←</span>
              <span>Back to services</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ======================================================
   HERO INFOGRAPHIC — Consulting Network
====================================================== */

function ConsultingHeroInfographic() {
  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center group">
      {/* Glow effect */}
      <div
        className="absolute -inset-8 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${ACCENT_1}40, ${ACCENT_2}30, transparent)`,
        }}
      />

      {/* Container */}
      <div
        className="relative w-[300px] h-[280px] rounded-2xl border border-[var(--border)] overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02]"
        style={{
          background: 'color-mix(in srgb, var(--surface-strong) 95%, transparent)',
        }}
      >
        {/* Central Question Node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className="h-20 w-20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border backdrop-blur-sm animate-slow-float"
            style={{
              borderColor: `color-mix(in srgb, white 20%, transparent)`,
              boxShadow: `0 0 40px ${ACCENT_1}40`,
            }}
          >
            {/* Question mark text */}
            <span className="text-5xl font-bold" style={{ color: 'var(--text)' }}>
              ?
            </span>
          </div>
        </div>

        {/* Service Cards - 4 corners in simple layout */}
        {[
          { icon: CreditCard, label: 'Payments', position: 'top-4 left-4', colorType: 'accent2' },
          { icon: Globe, label: 'Web & Apps', position: 'top-4 right-4', colorType: 'accent1' },
          { icon: Brain, label: 'AI Solutions', position: 'bottom-4 left-4', colorType: 'gradient' },
          { icon: FileCheck, label: 'Planning', position: 'bottom-4 right-4', colorType: 'accent2' },
        ].map((node, i) => {
          const Icon = node.icon;
          
          let bgStyle, borderColor, textColor, shadowColor;
          
          if (node.colorType === 'accent1') {
            // Web & Apps - синий
            bgStyle = `${ACCENT_1}20`;
            borderColor = `color-mix(in srgb, ${ACCENT_1} 40%, transparent)`;
            textColor = ACCENT_1;
            shadowColor = `${ACCENT_1}30`;
          } else if (node.colorType === 'accent2') {
            // Payments, Planning - зелёный
            bgStyle = `${ACCENT_2}20`;
            borderColor = `color-mix(in srgb, ${ACCENT_2} 40%, transparent)`;
            textColor = ACCENT_2;
            shadowColor = `${ACCENT_2}30`;
          } else {
            // AI Solutions - градиент синий в зелёный с анимацией
            bgStyle = `linear-gradient(135deg, ${ACCENT_1}30, ${ACCENT_2}30)`;
            borderColor = `color-mix(in srgb, ${ACCENT_1} 40%, transparent)`;
            textColor = ACCENT_1;
            shadowColor = `${ACCENT_1}20, 0 6px 16px ${ACCENT_2}20`;
          }

          return (
            <div
              key={i}
              className={`absolute ${node.position} group/node`}
            >
              {/* Card */}
              <div
                className={`w-20 h-16 rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-110 cursor-pointer border backdrop-blur-sm ${
                  node.colorType === 'gradient' ? 'animate-gradient-shift' : ''
                }`}
                style={{
                  background: bgStyle,
                  backgroundSize: node.colorType === 'gradient' ? '200% 200%' : undefined,
                  borderColor: borderColor,
                  boxShadow: node.colorType === 'gradient' 
                    ? `0 4px 12px ${shadowColor}`
                    : `0 4px 12px ${shadowColor}`,
                }}
              >
                <Icon size={20} style={{ color: textColor }} />
                <span className="text-[9px] font-medium text-center px-1" style={{ color: textColor }}>
                  {node.label}
                </span>
              </div>
            </div>
          );
        })}

        {/* Decorative connecting lines - shortened to not enter cards */}
        <svg
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Lines from center to corners, shortened to not overlap with boxes */}
          {/* Top-left (Payments) - зелёный */}
          <line x1="125" y1="115" x2="85" y2="70" stroke={ACCENT_2} strokeWidth="1" strokeOpacity="0.3" />
          {/* Top-right (Web & Apps) - синий */}
          <line x1="175" y1="115" x2="215" y2="70" stroke={ACCENT_1} strokeWidth="1" strokeOpacity="0.3" />
          {/* Bottom-left (AI Solutions) - градиент эффект через два цвета */}
          <line x1="125" y1="165" x2="85" y2="210" stroke={ACCENT_1} strokeWidth="1" strokeOpacity="0.2" />
          <line x1="125" y1="165" x2="85" y2="210" stroke={ACCENT_2} strokeWidth="1" strokeOpacity="0.2" />
          {/* Bottom-right (Planning) - зелёный */}
          <line x1="175" y1="165" x2="215" y2="210" stroke={ACCENT_2} strokeWidth="1" strokeOpacity="0.3" />
        </svg>
      </div>
    </div>
  );
}

