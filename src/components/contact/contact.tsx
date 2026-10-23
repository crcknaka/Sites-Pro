import ContactForm from './contact-form';
import { Mail, MapPin, Clock, ShieldCheck, FileSignature, type LucideIcon } from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import { SITES } from '@/i18n';
import { getI18n } from '@/i18n/server';
import SectionHeader from '../section-header';
import Reveal from '../reveal';

export default async function Contact() {
  const { locale, t } = await getI18n();
  const c = t.contact;
  const email = SITES[locale].email;

  return (
    <section
      id="contact"
      className="
        relative scroll-mt-24 py-20 sm:py-32 px-4 sm:px-6
      "
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${ACCENT_1}15 0%, transparent 60%), radial-gradient(circle at 70% 50%, ${ACCENT_2}10 0%, transparent 60%)`,
        }}
      />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={c.eyebrow}
          title={c.title}
          subtitle={c.subtitle}
        />

        <div className="mt-14 sm:mt-20 grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2">
          {/* LEFT: what happens next + contacts */}
          <Reveal className="order-2 lg:order-1" delay={100}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
              {c.nextTitle}
            </p>
            <ol className="mt-5 space-y-5">
              {/* what actually happens after the form — a process, not a mailto */}
              {c.next.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-semibold"
                    style={{
                      borderColor: `color-mix(in srgb, ${ACCENT_1} 40%, transparent)`,
                      background: `color-mix(in srgb, ${ACCENT_1} 12%, transparent)`,
                      color: 'var(--accent-text)',
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-[var(--fg)]">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <InfoItem icon={Mail} title={c.email} value={email} href={`mailto:${email}`} />
              <InfoItem icon={Clock} title={c.responseTime} value={c.responseValue} />
              <InfoItem icon={MapPin} title={c.basedIn} value={t.site.location} />
              <InfoItem icon={FileSignature} title={c.confidentiality} value={c.confidentialityValue} />
            </div>
          </Reveal>

          {/* RIGHT: form + trust note */}
          <Reveal className="order-1 flex flex-col lg:order-2">
            <ContactForm locale={locale} />

            <div className="mt-6 flex max-w-md items-start gap-3 text-xs text-[var(--text-muted)]">
              <ShieldCheck className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--accent-text)' }} />
              <p className="leading-relaxed">{c.privacyNote}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <Icon className="h-4.5 w-4.5" style={{ color: 'var(--accent-text)' }} aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-medium text-[var(--fg)]">{title}</p>
        {href ? (
          <a
            href={href}
            className="mt-0.5 block text-sm text-[var(--text-muted)] underline-offset-2 transition-colors hover:text-[var(--fg)] hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="mt-0.5 text-sm text-[var(--text-muted)]">{value}</p>
        )}
      </div>
    </div>
  );
}
