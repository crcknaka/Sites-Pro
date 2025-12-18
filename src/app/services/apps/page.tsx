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
   HERO INFOGRAPHIC — Simple phone with app
====================================================== */

function ApplicationsHeroInfographic() {
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
      <div className="relative w-[280px] h-[280px] rounded-2xl bg-[var(--surface)] flex items-center justify-center">
        {/* Simple phone device */}
        <div
          className="
            relative
            w-[160px] h-[280px]
            rounded-[2rem]
            border-4 border-[var(--border)]
            bg-[var(--surface-strong)]
            shadow-lg
            flex flex-col items-center
            overflow-hidden
          "
          style={{
            boxShadow: `0 10px 38px -18px color-mix(in srgb, ${ACCENT_2} 35%, transparent)`,
          }}
        >
        {/* Top Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-1.5 w-12 rounded-full bg-[var(--border)]/40 z-10" />

        {/* App "screen" */}
        <div className="mt-5 flex-1 w-full bg-[var(--bg)] flex flex-col items-center px-4 pt-4">
          {/* Example App Icon */}
          <div
            className="rounded-xl w-12 h-12 mb-3 grid place-items-center shadow-md"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
            }}
          >
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 34 34" fill="none">
              <rect x="7" y="7" width="20" height="20" rx="6" fill="white" fillOpacity="0.9" />
              <path d="M14 17l3 3 3-6" stroke={ACCENT_1} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* App Title */}
          <div className="text-sm font-semibold text-[var(--fg)]">SitesPro App</div>
          {/* App content (just a text block) */}
          <div className="mt-2 text-xs text-center text-[var(--text-muted)] leading-snug px-2">
            Welcome to our App. <br />
            Manage your services.
          </div>
        </div>

        {/* Home indicator */}
        <div className="mb-3 mt-2 h-1.5 w-12 rounded-full bg-[var(--border)]/30 mx-auto" />
        </div>
      </div>
    </div>
  );
}