'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks';
import { ACCENT } from '@/lib';
import SectionHeader from './section-header';
import Reveal from './reveal';

const faqs = [
  {
    q: 'What’s the typical timeline for a project?',
    a: 'There’s no fixed timeline — it depends on the scope, complexity and level of responsibility. A focused website can take a few weeks, while web platforms, fintech products or AI automations usually take longer due to architecture, integrations and testing. We define the timeline upfront during the discovery phase and align it with your priorities, so expectations are clear from day one.',
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
  const [open, setOpen] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const [visibleCount, setVisibleCount] = useState(4);
  const [isInitialized, setIsInitialized] = useState(false);

  // Set initial count based on screen size
  useEffect(() => {
    if (!isInitialized) {
      setVisibleCount(isMobile ? 3 : 4);
      setIsInitialized(true);
    }
  }, [isMobile, isInitialized]);

  const handleLoadMore = () => {
    const increment = isMobile ? 3 : 4;
    setVisibleCount((prev) => prev + increment);
  };

  const visibleFaqs = faqs.slice(0, visibleCount);
  const hasMore = visibleCount < faqs.length;

  return (
    <section
      id="faq"
      className="
        scroll-mt-24 relative px-4 sm:px-6 py-20 sm:py-32 select-none
      "
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Got questions? We’ve got answers. If you don’t find what you’re looking for, feel free to reach out."
          className="mb-14 sm:mb-20"
        />

        {/* LIST */}
        <Reveal className="flex flex-col gap-3">
          {visibleFaqs.map((item, i) => {
            const active = open === i;

            return (
              <div
                key={i}
                className={`
                  rounded-2xl border transition-all duration-300
                  ${
                    active
                      ? 'border-[var(--accent-1)]/30 bg-[var(--surface-strong)] shadow-lg shadow-[var(--accent-1)]/5'
                      : 'border-[var(--border-soft)] bg-[var(--surface)] hover:border-[var(--border)]'
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
                        : 'var(--text-muted)',
                    }}
                  />
                </button>

                {/* ANSWER with smooth animation */}
                <div
                  className={`
                    grid transition-all duration-300 ease-out
                    ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-sm leading-relaxed text-[var(--text-muted)]">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>

        {/* MORE BUTTON */}
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button onClick={handleLoadMore} className="btn-secondary text-sm">
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
