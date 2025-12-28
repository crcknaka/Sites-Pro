import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  Palette,
  Brush,
  FileText,
  Share2,
  BarChart3,
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
    name: 'Node.js / Next.js / React',
    description: 'Modern frameworks for fast, scalable and future-proof websites.',
  },
  {
    name: 'TypeScript & modern tooling',
    description: 'Reliable, maintainable and type-safe codebases.',
  },
  {
    name: 'WordPress & WooCommerce',
    description: 'Optimized CMS and e-commerce solutions for smaller budgets.',
  },
  {
    name: 'Headless CMS',
    description: 'Flexible content management with modern frontends.',
  },
  {
    name: 'SEO & performance optimization',
    description: 'Core Web Vitals, accessibility and search visibility.',
  },
  {
    name: 'Hosting, CI/CD & monitoring',
    description: 'Stable infrastructure and smooth deployments.',
  },
];

const additionalServices = [
  { icon: Palette, label: 'UI / UX design' },
  { icon: Brush, label: 'Branding & visual identity' },
  { icon: FileText, label: 'Content & copywriting' },
  { icon: Share2, label: 'Social media & SMM' },
  { icon: BarChart3, label: 'Analytics & tracking' },
  { icon: Headphones, label: 'Ongoing support & improvements' },
];

/* ======================================================
   PAGE
====================================================== */

export default function WebsitesPage() {
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
              Websites
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              Websites that perform,
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
                }}
              >
                scale and convert
              </span>
            </h1>

            <p className="mt-8 text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              We build fast, reliable and scalable websites — from high-end
              custom platforms to optimized CMS solutions. Always focused on
              performance, usability and real business results.
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
            <WebsiteHeroInfographic />
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}
      <section className="px-6 py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center">
            Technology stack
          </h2>

          <p className="mt-6 text-center text-[var(--text-muted)] max-w-3xl mx-auto">
            We choose technologies based on project complexity, scalability
            requirements and budget — not trends.
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
          MORE THAN DEVELOPMENT
      ====================================================== */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-semibold">
              More than just development
            </h2>

            <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
              A successful website is not only about code.
              We provide everything needed to launch, grow
              and continuously improve your digital presence.
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
            Let’s build your website
          </h2>

          <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
            Tell us about your project — whether it’s a high-end custom platform
            or a clean, efficient CMS website.
            We’ll help you choose the right approach.
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
   HERO INFOGRAPHIC — minimal / product style
====================================================== */

function WebsiteHeroInfographic() {
  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center group">
      {/* Glow effect */}
      <div
        className="absolute -inset-8 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${ACCENT_1}40, ${ACCENT_2}30, transparent)`,
        }}
      />

      {/* Browser window */}
      <div 
        className="relative w-[300px] h-[280px] rounded-2xl border border-[var(--border)] overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
        style={{
          background: 'color-mix(in srgb, var(--surface-strong) 95%, transparent)',
        }}
      >
        {/* Browser top bar with colored dots */}
        <div className="h-11 border-b border-[var(--border)] flex items-center px-4 gap-2 bg-[var(--surface)]/40 backdrop-blur-sm">
          <span className="h-3 w-3 rounded-full bg-red-500/70 transition-all duration-300 group-hover:bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70 transition-all duration-300 group-hover:bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500/70 transition-all duration-300 group-hover:bg-green-500" />
          
          {/* URL bar with gradient */}
          <div 
            className="ml-3 h-6 flex-1 rounded-lg px-3 flex items-center transition-all duration-300"
            style={{
              background: 'color-mix(in srgb, var(--surface) 80%, transparent)',
              border: '1px solid var(--border)',
            }}
          >
            <div 
              className="h-1.5 w-8 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${ACCENT_1}60, ${ACCENT_2}40)`,
              }}
            />
            <div className="ml-2 h-1.5 w-24 rounded-full bg-[var(--border)]/50" />
          </div>
        </div>

        {/* Browser content with modern layout */}
        <div className="p-5 space-y-3">
          {/* Hero section with gradient */}
          <div 
            className="h-12 rounded-xl p-3 space-y-1.5 transition-all duration-500 group-hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_1}15, ${ACCENT_2}10)`,
              border: `1px solid ${ACCENT_1}30`,
            }}
          >
            <div 
              className="h-2.5 w-3/4 rounded-full animate-pulse"
              style={{
                background: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
              }}
            />
            <div className="h-1.5 w-full rounded-full bg-[var(--border)]/40" />
            <div className="h-1.5 w-5/6 rounded-full bg-[var(--border)]/30" />
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg border border-[var(--border)] transition-all duration-300 hover:scale-105"
                style={{
                  background: i === 0 
                    ? `${ACCENT_1}15`
                    : i === 1
                    ? `${ACCENT_2}15`
                    : 'color-mix(in srgb, var(--surface) 60%, transparent)',
                  borderColor: i === 0 
                    ? `${ACCENT_1}40`
                    : i === 1
                    ? `${ACCENT_2}40`
                    : 'var(--border)',
                }}
              />
            ))}
          </div>

          {/* Content rows */}
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-[var(--border)]/40" />
            <div className="h-1.5 w-4/5 rounded-full bg-[var(--border)]/30" />
            <div className="h-1.5 w-3/5 rounded-full bg-[var(--border)]/20" />
          </div>

          {/* CTA Button */}
          <div className="flex gap-2">
            <div
              className="h-8 flex-1 rounded-lg transition-all duration-500 group-hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
              }}
            />
            <div
              className="h-8 w-8 rounded-lg border transition-all duration-300"
              style={{
                background: 'color-mix(in srgb, var(--surface) 60%, transparent)',
                borderColor: 'var(--border)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
