'use client';

import ContactForm from './contact-form';
import { Mail, MapPin, Clock, ShieldCheck, FileSignature, type LucideIcon } from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import SectionHeader from '../section-header';
import Reveal from '../reveal';

/** What actually happens after the form — a process, not a mailto. */
const NEXT_STEPS = [
  {
    title: 'We reply within 24 hours',
    text: 'A real answer from the person who will run your project, not an auto-responder.',
  },
  {
    title: 'A 30-minute call',
    text: 'We go through goals, constraints and what already exists — no slides, no pitch.',
  },
  {
    title: 'A written proposal',
    text: 'Scope, timeline and a fixed price. If we are not the right fit, we say so and point you elsewhere.',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative scroll-mt-24 py-20 sm:py-32 px-4 sm:px-6
        select-none
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
          eyebrow="Get in touch"
          title="Start your project"
          subtitle="Tell us what you are building. You will hear back from us within a day."
        />

        <div className="mt-14 sm:mt-20 grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2">
          {/* LEFT: what happens next + contacts */}
          <Reveal className="order-2 lg:order-1" delay={100}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
              What happens next
            </p>
            <ol className="mt-5 space-y-5">
              {NEXT_STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-semibold"
                    style={{
                      borderColor: `color-mix(in srgb, ${ACCENT_1} 40%, transparent)`,
                      background: `color-mix(in srgb, ${ACCENT_1} 12%, transparent)`,
                      color: ACCENT_1,
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
              <InfoItem icon={Mail} title="Email" value="info@sitespro.org" selectable />
              <InfoItem icon={Clock} title="Response time" value="Usually within 24 hours" />
              <InfoItem icon={MapPin} title="Based in" value="Riga, Latvia — working across the EU and worldwide" />
              <InfoItem icon={FileSignature} title="Confidentiality" value="NDA signed on request before any details are shared" />
            </div>
          </Reveal>

          {/* RIGHT: form + trust note */}
          <Reveal className="order-1 flex flex-col lg:order-2">
            <ContactForm />

            <div className="mt-6 flex max-w-md items-start gap-3 text-xs text-[var(--text-muted)]">
              <ShieldCheck className="h-4 w-4 flex-shrink-0" style={{ color: ACCENT_1 }} />
              <p className="leading-relaxed">
                Your information is used solely to respond to your inquiry. We do not share
                your data with third parties and handle all submissions in accordance with
                GDPR.
              </p>
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
  selectable,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  selectable?: boolean;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <Icon className="h-4.5 w-4.5" style={{ color: ACCENT_1 }} />
      </div>
      <div>
        <p className="text-sm font-medium text-[var(--fg)]">{title}</p>
        <p className={`mt-0.5 text-sm text-[var(--text-muted)]${selectable ? ' select-text' : ''}`}>{value}</p>
      </div>
    </div>
  );
}
