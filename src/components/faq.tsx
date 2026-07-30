'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks';
import { ACCENT } from '@/lib';
import SectionHeader from './section-header';
import Reveal from './reveal';
import { faqs } from '@/data/faqs';

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

        {/* LIST — every item stays in the DOM (collapsed ones are just
            display:none) so crawlers and AI agents see all answers. */}
        <Reveal className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const active = open === i;

            return (
              <div
                key={i}
                className={`
                  rounded-2xl border transition-all duration-300
                  ${i >= visibleCount ? 'hidden' : ''}
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
