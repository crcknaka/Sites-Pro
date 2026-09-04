import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import SectionHeader from './section-header';
import Reveal from './reveal';
import { ScaledScene, type SceneType } from './service-scenes';

const services = [
  {
    title: 'Websites',
    description:
      'High-performance websites built for growth. Scalable, fast and product-ready.',
    type: 'web',
  },
  {
    title: 'Web Platforms',
    description:
      'Product-grade web applications and platforms. Built for complexity, scale and long-term use.',
    type: 'web-platforms',
  },
  {
    title: 'AI & Automations',
    description:
      'AI-powered automations for digital products and workflows. Reduce manual work and improve efficiency.',
    type: 'ai',
  },
  {
    title: 'Consulting',
    description:
      'Strategic digital consulting to guide your transformation. We help you design, validate and scale digital solutions.',
    type: 'consulting',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        scroll-mt-24 relative
        py-20 sm:py-32 px-4 sm:px-6
        bg-transparent
        text-[var(--fg)]
        select-none
      "
    >
      {/* Semi-transparent background overlay */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${ACCENT_1}15 0%, transparent 70%), radial-gradient(circle at 30% 70%, ${ACCENT_2}15 0%, transparent 60%)`,
        }}
      />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we do"
          title="Our"
          highlight="Services"
          subtitle="We design and build digital products — from high-performance websites to complex web platforms and automations."
        />

        {/* CARDS */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.type} delay={i * 90}>
              <Link href={`/services/${service.type}`} className="group block h-full">
                <div
                  className="
                    card-premium card-topline
                    h-full min-h-[220px] sm:min-h-0
                    rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7
                    overflow-hidden
                    flex flex-col
                  "
                >
                  {/* INFOGRAPHIC */}
                  <div className="mb-6 sm:mb-8 flex h-32 items-center justify-center lg:animate-[slow-float_6s_ease-in-out_infinite]">
                    <ServiceInfographic type={service.type} />
                  </div>

                  {/* TEXT */}
                  <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div
                    className="mt-auto pt-4 flex items-center gap-1 text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: 'var(--accent-1)' }}
                  >
                    Learn more{' '}
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ======================================================
   INFOGRAPHICS — the same product windows as the service heroes,
   scaled down to the card. See service-scenes.tsx.
====================================================== */

function ServiceInfographic({ type }: { type: string }) {
  return (
    <div className="w-[188px]">
      <ScaledScene type={type as SceneType} float={false} />
    </div>
  );
}
