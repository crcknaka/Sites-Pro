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
   HERO INFOGRAPHIC — application architecture
====================================================== */

function ApplicationsHeroInfographic() {
  // "Телефон" с аппликацией внутри (векторная иконографика + стили)
  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center select-none">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-3xl bg-[var(--accent-2)]/10 blur-3xl pointer-events-none" />

      {/* Смартфон */}
      <div
        className="
          relative z-10
          w-[180px] h-[340px]
          rounded-[2.5rem]
          bg-gradient-to-br from-[var(--bg)] to-[var(--surface)]
          border-[6px] border-[var(--border)]
          shadow-2xl
          flex flex-col items-center
          overflow-hidden
        "
        style={{
          boxShadow: `
            0 4px 64px -4px var(--accent-2),
            0 0 0 2px color-mix(in srgb, var(--accent-1) 13%, transparent)
          `
        }}
      >
        {/* Динамик, "чёлка" */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-2 rounded-xl bg-[var(--border)]/70" />
        {/* Кнопка Home внизу */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-2 rounded-xl bg-[var(--border)]/40" />

        {/* Экран */}
        <div
          className="
            relative z-10
            mt-8 mb-8
            w-[156px] h-[290px]
            rounded-[1.6rem]
            bg-gradient-to-br from-white/90 to-[var(--surface)]
            shadow-[0_2px_16px_0_rgba(0,0,0,0.10)]
            flex flex-col items-center justify-center
          "
        >
          {/* Простая иконка "аппликации" внутри телефона */}
          <div className="flex flex-col items-center gap-6">
            {/* Логотип-акцент */}
            <div
              className="
                w-16 h-16
                mb-2
                rounded-2xl
                flex items-center justify-center
                shadow-[0_6px_18px_-6px_var(--accent-2)]
                bg-gradient-to-tr from-[var(--accent-1)] to-[var(--accent-2)]
                text-white
              "
            >
              <svg width="36" height="36" viewBox="0 0 36 36">
                <rect x="6" y="6" width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.9" />
                <rect x="12" y="12" width="12" height="12" rx="3" fill="white" fillOpacity="0.8" />
              </svg>
            </div>
            {/* Символы интерфейса */}
            <div className="flex flex-col gap-3 w-full px-3">
              <div className="w-full h-4 rounded-lg bg-[var(--accent-1)]/80 mb-2" />
              <div className="w-3/4 h-3 rounded-md bg-[var(--accent-2)]/50 mb-1" />
              <div className="w-5/6 h-3 rounded-md bg-[var(--accent-2)]/30" />
              <div className="w-4/5 h-3 rounded-md bg-[var(--accent-3,#6ee7b7)]/40" />
            </div>
            <div className="flex justify-between w-full px-5 mt-4">
              <div className="w-5 h-5 rounded-xl bg-[var(--accent-1)]/60" />
              <div className="w-5 h-5 rounded-xl bg-[var(--accent-2)]/70" />
              <div className="w-5 h-5 rounded-xl bg-[var(--accent-3,#6ee7b7)]/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}