'use client';

import ContactForm from './contact-form';
import { Mail, MapPin, Clock, ShieldCheck, type LucideIcon } from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import SectionHeader from '../section-header';
import Reveal from '../reveal';

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
          title="Start your"
          highlight="project"
          subtitle="Let’s build something meaningful together."
        />

        {/* CONTENT */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2">
          {/* LEFT INFO (on desktop, second on mobile) */}
          <Reveal className="space-y-8 sm:space-y-10 order-2 lg:order-1" delay={100}>
            <InfoItem
              icon={Mail}
              title="Email"
              value="info@sitespro.org"
              selectable
            />
            <InfoItem
              icon={MapPin}
              title="Location"
              value="Europe — working globally"
            />
            <InfoItem
              icon={Clock}
              title="Response time"
              value="Usually within 24 hours"
            />

            {/* QUOTE */}
            <blockquote
              className="
                border-l pl-6 text-sm
                border-[var(--border)]
                text-[var(--text-muted)]
              "
            >
              Tell us about your project or challenge.
              We’ll help define the right direction and next steps.

              <div
                className="mt-4 font-medium not-italic"
                style={{ color: ACCENT_1 }}
              >
                — The Sites Pro Team
              </div>
            </blockquote>
          </Reveal>

          {/* RIGHT: FORM + TRUST (on desktop, first on mobile) */}
          <Reveal className="flex flex-col order-1 lg:order-2">
            <ContactForm />

            {/* TRUST NOTE */}
            <div className="mt-6 flex max-w-md items-start gap-3 text-xs text-[var(--text-muted)]">
              <ShieldCheck
                className="h-4 w-4 flex-shrink-0"
                style={{ color: ACCENT_1 }}
              />
              <p className="leading-relaxed">
                Your information is used solely to respond to your inquiry.
                We do not share your data with third parties and handle all
                submissions in accordance with GDPR and privacy best practices.
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
    <div className="flex items-start gap-4">
      <div
        className="
          flex h-11 w-11 items-center justify-center
          rounded-xl
          bg-[var(--surface)]
          border border-[var(--border)]
        "
      >
        <Icon className="h-5 w-5" style={{ color: ACCENT_1 }} />
      </div>

      <div>
        <p className="font-medium text-[var(--fg)]">
          {title}
        </p>
        <p
          className={`mt-1 text-sm text-[var(--text-muted)]${selectable ? ' select-text' : ''}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
