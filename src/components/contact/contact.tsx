'use client';

import ContactForm from './contact-form';
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

/* brand accents via CSS vars */
const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative scroll-mt-24 py-20 sm:py-32 px-4 sm:px-6
        select-none
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: ACCENT_1 }}
          >
            Get in touch
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Let’s start your{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
              }}
            >
              project
            </span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
          Let’s build something meaningful together.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT INFO (on desktop, second on mobile) */}
          <div className="space-y-10 order-2 lg:order-1">
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
                mt-12 border-l pl-6 text-sm
                border-[var(--border)]
                text-[var(--text-muted)]
              "
            >
              "We love hearing about new projects and challenges. Whether you
              have a detailed brief or just a rough idea, we're here to help
              shape your digital future."

              <div
                className="mt-4 font-medium not-italic"
                style={{ color: ACCENT_1 }}
              >
                — The Sites Pro Team
              </div>
            </blockquote>
          </div>

          {/* RIGHT: FORM + TRUST (on desktop, first on mobile) */}
          <div className="flex flex-col order-1 lg:order-2">
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
          </div>
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
  icon: any;
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
