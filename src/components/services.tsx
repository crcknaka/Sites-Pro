import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import SectionHeader from './section-header';
import Reveal from './reveal';
import Integrations from './integrations';
import { ScaledScene, type SceneType } from './service-scenes';
import { findService, servicesFor, type ServiceKey } from '@/data/services';
import { localizePath, type Locale } from '@/i18n';
import { getI18n } from '@/i18n/server';

export default async function Services() {
  const { locale, t } = await getI18n();
  const s = t.servicesSection;
  const cardKeys = s.cards.map((c) => c.service);
  // everything without a card on the home page shows as a chip below the cards
  const specialisations = servicesFor(locale).filter((x) => !cardKeys.includes(x.key));
  const cards = s.cards.map((card) => ({
    ...card,
    href: localizePath(locale, findService(locale, card.service as ServiceKey)?.path ?? '/services'),
  }));

  return (
    <section
      id="services"
      className="
        scroll-mt-24 relative
        py-20 sm:py-32 px-4 sm:px-6
        bg-transparent
        text-[var(--fg)]
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
          eyebrow={s.eyebrow}
          title={s.title}
          highlight={s.highlight}
          subtitle={s.subtitle}
        />

        {/* CARDS — the link wraps only the title and is stretched over the card,
            so the anchor text search engines see is the service name, not the
            mock product window drawn inside the card. */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {cards.map((service, i) => (
            <Reveal key={service.service} delay={i * 90}>
              <div
                className="
                  group relative
                  card-premium card-topline
                  h-full min-h-[220px] sm:min-h-0
                  rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7
                  overflow-hidden
                  flex flex-col
                "
              >
                {/* INFOGRAPHIC */}
                <div className="mb-6 sm:mb-8 flex h-32 items-center justify-center lg:animate-[slow-float_6s_ease-in-out_infinite]">
                  <ServiceInfographic type={service.scene} locale={locale} />
                </div>

                {/* TEXT */}
                <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                  <Link
                    href={service.href}
                    className="after:absolute after:inset-0 after:rounded-[inherit] after:content-['']"
                  >
                    {service.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                  {service.description}
                </p>

                {/* CTA */}
                <div
                  aria-hidden="true"
                  className="mt-auto pt-4 flex items-center gap-1 text-xs font-medium"
                  style={{ color: 'var(--accent-text)' }}
                >
                  {s.learnMore}{' '}
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* SPECIALISATIONS */}
        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
            {s.also}
          </span>
          {specialisations.map((x) => (
            <Link
              key={x.key}
              href={localizePath(locale, x.path)}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent-1)]/50 hover:bg-[var(--surface-strong)]"
            >
              {x.short}
            </Link>
          ))}
        </Reveal>

        <Integrations t={t.integrations} />
      </div>
    </section>
  );
}

/* ======================================================
   INFOGRAPHICS — the same product windows as the service heroes,
   scaled down to the card. See service-scenes.tsx.
====================================================== */

function ServiceInfographic({ type, locale }: { type: string; locale: Locale }) {
  return (
    <div className="w-[188px]">
      <ScaledScene type={type as SceneType} locale={locale} float={false} />
    </div>
  );
}
