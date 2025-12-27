import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  Layers,
  Server,
  Database,
  Plug,
  ShieldCheck,
  Headphones,
} from 'lucide-react';

/* brand accents */
const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

/* ======================================================
   DATA
====================================================== */

const techStack = [
  {
    name: 'Frontend applications',
    description: 'React, Next.js and modern UI architectures for complex user interfaces.',
  },
  {
    name: 'Backend systems',
    description: 'Node.js APIs, business logic, integrations and microservices.',
  },
  {
    name: 'Databases & storage',
    description: 'PostgreSQL, MySQL, Redis and scalable data layers.',
  },
  {
    name: 'Integrations & APIs',
    description: 'Payment systems, third-party services and internal APIs.',
  },
  {
    name: 'Security & reliability',
    description: 'Authentication, permissions, data protection and stability.',
  },
  {
    name: 'Infrastructure & monitoring',
    description: 'Cloud hosting, CI/CD pipelines and system observability.',
  },
];

const additionalServices = [
  { icon: Layers, label: 'System architecture & planning' },
  { icon: Server, label: 'Backend & API development' },
  { icon: Database, label: 'Database design & optimization' },
  { icon: Plug, label: 'Third-party integrations' },
  { icon: ShieldCheck, label: 'Security & access control' },
  { icon: Headphones, label: 'Support, scaling & improvements' },
];

/* ======================================================
   PAGE
====================================================== */

export default function ApplicationsPage() {
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
              Applications
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              Scalable applications,
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
                }}
              >
                built as systems
              </span>
            </h1>

            <p className="mt-8 text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              We design and build custom web applications and platforms —
              focused on architecture, performance and long-term scalability.
              Built to grow with your business.
            </p>

            <Link
              href="#contact"
              className="
                inline-block mt-10
                rounded-xl px-6 py-3
                border border-[var(--border)]
                bg-[var(--surface)]
                font-medium
                hover:bg-[var(--surface-strong)]
                transition
              "
            >
              Start your project
            </Link>
          </div>

          {/* INFOGRAPHIC */}
          <div className="flex justify-center">
            <ApplicationsHeroInfographic />
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY & ARCHITECTURE
      ====================================================== */}
      <section className="px-6 py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center">
            Architecture & technology
          </h2>

          <p className="mt-6 text-center text-[var(--text-muted)] max-w-3xl mx-auto">
            We approach applications as systems — with clear architecture,
            reliable infrastructure and room for future growth.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
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
                      {tech.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {tech.description}
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
              More than just code
            </h2>

            <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
              Applications require careful planning, solid foundations
              and continuous improvements. We support projects from
              early architecture decisions to long-term scaling.
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
            Let’s build your application
          </h2>

          <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
            Tell us about your idea or existing system.
            We’ll help design the right architecture
            and turn it into a reliable, scalable application.
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
   HERO INFOGRAPHIC — Enhanced phone with app
====================================================== */

function ApplicationsHeroInfographic() {
  return (
    <div className="relative w-[380px] h-[380px] flex items-center justify-center">
      {/* Ambient background with floating particles */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-50 pointer-events-none animate-pulse-slow"
        style={{
          background: `radial-gradient(circle at 65% 35%, ${ACCENT_1}30 0%, transparent 70%), radial-gradient(circle at 30% 70%, ${ACCENT_2}25 0%, transparent 60%)`,
        }}
      />

      {/* Floating feature cards */}
      <div className="absolute top-4 -left-8 animate-float-slow">
        <div className="px-3 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: ACCENT_1 }} />
            <span className="text-xs font-medium text-[var(--fg)]">Real-time</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 -right-6 animate-float-delayed">
        <div className="px-3 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: ACCENT_2 }} />
            <span className="text-xs font-medium text-[var(--fg)]">Secure</span>
          </div>
        </div>
      </div>

      <div className="absolute top-16 -right-10 animate-float">
        <div className="px-3 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-[var(--fg)]">Scalable</span>
          </div>
        </div>
      </div>

      {/* Main phone container */}
      <div className="relative w-[280px] h-[280px]  from-[var(--surface)] to-[var(--surface-strong)] flex items-center justify-center ">
        {/* Phone device */}
        <div
          className="
            relative
            w-[180px] h-[320px]
            rounded-[2.5rem]
            border-[3px] border-[var(--border)]
            bg-gradient-to-b from-[var(--bg)] to-[var(--surface)]
            shadow-2xl
            flex flex-col
            overflow-hidden
            transition-transform hover:scale-105 duration-500
          "
          style={{
            boxShadow: `0 20px 60px -15px color-mix(in srgb, ${ACCENT_1} 40%, transparent)`,
          }}
        >
          {/* Status bar */}
          <div className="h-10 bg-[var(--surface-strong)]/30 backdrop-blur-sm px-4 flex items-center justify-between text-[0.5rem] text-[var(--text-muted)] relative z-10">
            <span>9:41</span>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 h-4 w-16 rounded-full bg-[var(--bg)] border border-[var(--border)]" />
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm border border-current opacity-70" />
              <div className="w-1 h-1 rounded-full bg-current" />
            </div>
          </div>

          {/* App screen content */}
          <div className="flex-1 bg-[var(--bg)] px-4 pt-4 pb-6 overflow-hidden">
            {/* Header with gradient icon */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="white" fillOpacity="0.95" />
                  <path d="M9 12l2 2 4-4" stroke={ACCENT_1} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-2 w-20 rounded-full bg-[var(--border)]/60 mb-1.5" />
                <div className="h-1.5 w-14 rounded-full bg-[var(--border)]/40" />
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-xl p-2.5 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent-1)]/30 transition-all"
                >
                  <div className="h-1 w-8 rounded-full bg-[var(--border)]/50 mb-2" />
                  <div className="h-2.5 w-12 rounded-full" style={{ 
                    background: i === 1 ? `${ACCENT_1}40` : i === 2 ? `${ACCENT_2}40` : 'var(--border)/40' 
                  }} />
                </div>
              ))}
            </div>

            {/* List items */}
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2 rounded-lg bg-[var(--surface)]/50 border border-[var(--border)]/30"
                >
                  <div className="w-6 h-6 rounded-lg" style={{ background: i === 1 ? `${ACCENT_1}30` : 'var(--border)/40' }} />
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 w-full rounded-full bg-[var(--border)]/50" />
                    <div className="h-1 w-3/4 rounded-full bg-[var(--border)]/30" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom navigation bar */}
          <div className="h-14 bg-[var(--surface-strong)]/80 backdrop-blur-xl border-t border-[var(--border)]/50 flex items-center justify-around px-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: i === 1 ? `${ACCENT_1}25` : 'transparent',
                }}
              >
                <div 
                  className="w-3 h-3 rounded" 
                  style={{ 
                    background: i === 1 ? ACCENT_1 : 'var(--border)',
                    opacity: i === 1 ? 1 : 0.4
                  }} 
                />
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <div className="h-6 flex items-center justify-center">
            <div className="h-1 w-16 rounded-full bg-[var(--border)]/40" />
          </div>
        </div>
      </div>

      {/* Decorative rings */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-dashed opacity-20 animate-spin-slow pointer-events-none"
        style={{ borderColor: ACCENT_1 }}
      />
      <div 
        className="absolute inset-8 rounded-full border border-dashed opacity-15 animate-spin-reverse pointer-events-none"
        style={{ borderColor: ACCENT_2 }}
      />
    </div>
  );
}