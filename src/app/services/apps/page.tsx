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
    <div className="relative w-[320px] h-[320px] flex items-center justify-center group">
      {/* Glow effect */}
      <div
        className="absolute -inset-8 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${ACCENT_2}40, ${ACCENT_1}30, transparent)`,
        }}
      />

      {/* Phone device */}
      <div
        className="relative w-[160px] h-[300px] rounded-[2.5rem] border-[3px] border-[var(--border)] overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02]"
        style={{
          background: 'color-mix(in srgb, var(--surface-strong) 95%, transparent)',
        }}
      >
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-3 bg-[var(--surface)]/20 backdrop-blur-sm text-[8px] opacity-70 z-20 select-none">
          <span>9:41</span>
          <span>100%</span>
        </div>

        {/* Front camera */}
        <div 
          className="absolute top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full z-30"
          style={{ background: '#000' }}
        />

        {/* Screen content */}
        <div className="absolute inset-2 rounded-[2rem] overflow-hidden pt-9 px-3 pb-3 space-y-2">
          {/* App header with icon - hoverable */}
          <div className="flex items-center gap-2 p-2 rounded-xl transition-all duration-300 hover:bg-[var(--surface)]/30 cursor-pointer">
            <div
              className="h-8 w-8 rounded-lg shadow-md flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})` }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="4" fill="white" fillOpacity="0.9" />
              </svg>
            </div>
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-full rounded-full bg-[var(--border)]/50" />
              <div className="h-1 w-2/3 rounded-full bg-[var(--border)]/40" />
            </div>
          </div>

          {/* Stats grid - hoverable */}
          <div className="grid grid-cols-2 gap-2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="p-2 rounded-lg border border-[var(--border)] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                style={{
                  background: i === 0 
                    ? `${ACCENT_1}15`
                    : `${ACCENT_2}15`,
                  borderColor: i === 0 
                    ? `${ACCENT_1}40`
                    : `${ACCENT_2}40`,
                }}
              >
                <div className="h-1 w-6 rounded-full bg-[var(--border)]/50 mb-1.5" />
                <div 
                  className="h-2 w-8 rounded-full"
                  style={{
                    background: i === 0 ? ACCENT_1 : ACCENT_2,
                    opacity: 0.6,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Content cards - hoverable */}
          <div className="space-y-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-10 rounded-lg border border-[var(--border)] bg-[var(--surface)]/60 transition-all duration-300 hover:bg-[var(--surface)]/80 hover:scale-[1.02] hover:border-[var(--accent-1)]/30 cursor-pointer p-2 flex items-center gap-2"
              >
                <div 
                  className="h-5 w-5 rounded-md"
                  style={{
                    background: i === 0 
                      ? `${ACCENT_1}30`
                      : i === 1
                      ? `${ACCENT_2}30`
                      : i === 2
                      ? 'color-mix(in srgb, var(--surface) 70%, transparent)'
                      : 'color-mix(in srgb, var(--surface) 60%, transparent)',
                  }}
                />
                <div className="flex-1 space-y-1">
                  <div className="h-1 w-full rounded-full bg-[var(--border)]/50" />
                  <div className="h-0.5 w-3/4 rounded-full bg-[var(--border)]/30" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom action button - hoverable */}
          <div className="pt-1">
            <div
              className="h-8 rounded-lg transition-all duration-500 hover:shadow-lg hover:scale-[1.02] cursor-pointer flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
              }}
            >
              <div className="h-1 w-6 rounded-full bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}