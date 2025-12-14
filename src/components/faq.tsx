'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/* brand accent via CSS var */
const ACCENT = 'var(--accent-1)';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Typically, a standard website takes 2–4 weeks from concept to launch. More complex projects like e-commerce platforms or custom applications may take 6–12 weeks. We’ll provide a detailed timeline during our initial consultation.',
  },
  {
    q: 'What is your development process?',
    a: 'We follow an agile methodology: Discovery → Design → Development → Testing → Launch. You’ll be involved at every stage with regular updates and opportunities for feedback to ensure the final product exceeds expectations.',
  },
  {
    q: 'Do you offer ongoing support and maintenance?',
    a: 'Yes. We offer flexible maintenance packages that include security updates, content changes, performance monitoring, and technical support. We’re committed to your long-term success.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We use modern, industry-leading technologies including React, Next.js, TypeScript, Node.js, and cloud platforms. Our stack is selected based on your project’s needs for performance and scalability.',
  },
  {
    q: 'Can you help with redesigning an existing website?',
    a: 'Absolutely. We specialize in website redesigns, whether you need a visual refresh, improved functionality, or a complete overhaul. We preserve what works while enhancing your digital presence.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We typically work with a 50% deposit to begin, with the remaining balance due upon completion. For larger projects, milestone-based payments are available. We accept cards, PayPal, SEPA, and crypto.',
  },
  {
    q: 'Do you provide hosting services?',
    a: 'We can recommend and set up hosting solutions tailored to your needs, from simple setups to scalable cloud infrastructure. Your site will be fast, secure, and reliable.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply reach out via our contact form or social channels. We’ll schedule a free consultation to discuss your goals and provide a tailored proposal with timeline and pricing.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="
        scroll-mt-24 relative px-6 py-32 select-none
      "
    >
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: ACCENT }}
          >
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Frequently Asked{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT}, ${ACCENT})`,
              }}
            >
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
            Got questions? We’ve got answers. If you don’t find what you’re
            looking for, feel free to reach out.
          </p>
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const active = open === i;

            return (
              <div
                key={i}
                className={`
                  rounded-2xl border transition
                  ${
                    active
                      ? 'border-[var(--border)] bg-[var(--surface-strong)]'
                      : 'border-[var(--border)] bg-[var(--surface)]'
                  }
                `}
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="
                    flex w-full cursor-pointer items-center justify-between gap-4
                    px-6 py-5 text-left
                  "
                >
                  <span className="font-medium text-[var(--fg)]">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`
                      h-5 w-5 shrink-0 transition-transform duration-200
                      ${active ? 'rotate-180' : ''}
                    `}
                    style={{
                      color: active
                        ? ACCENT
                        : 'var(--text-subtle)',
                    }}
                  />
                </button>

                {/* ANSWER */}
                {active && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
