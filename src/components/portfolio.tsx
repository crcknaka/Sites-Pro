'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Layers, ShoppingCart, Globe, Shield, Grid, ChevronDown } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projectcard';
import { useIsMobile } from '@/hooks';
import SectionHeader from './section-header';
import Reveal from './reveal';

const CATEGORIES = [
  'All',
  'Websites',
  'Commerce',
  'Apps',
  'Fintech',
] as const;

const categoryIcons: Record<(typeof CATEGORIES)[number], typeof Grid> = {
  All: Grid,
  Apps: Layers,
  Commerce: ShoppingCart,
  Websites: Globe,
  Fintech: Shield,
};

const categoryDescriptions: Record<(typeof CATEGORIES)[number], string> = {
  All: 'All projects',
  Apps: 'Web apps, AI tools, interactive services',
  Commerce: 'Online stores & transactional platforms',
  Websites: 'Content-driven sites & product showcases',
  Fintech: 'Fintech platforms & payments',
};

export default function Portfolio() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All');
  const isMobile = useIsMobile();
  const [visibleCount, setVisibleCount] = useState(8);
  const [isInitialized, setIsInitialized] = useState(false);

  // Set initial count based on screen size
  useEffect(() => {
    if (!isInitialized) {
      setVisibleCount(isMobile ? 4 : 8);
      setIsInitialized(true);
    }
  }, [isMobile, isInitialized]);

  const getInitialCount = () => (isMobile ? 4 : 8);

  const filteredProjects =
    active === 'All'
      ? projects
      : projects.filter((p) => {
          const categories = Array.isArray(p.category) ? p.category : [p.category];
          return categories.includes(active);
        });

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    const increment = isMobile ? 4 : 8;
    setVisibleCount((prev) => prev + increment);
  };

  // Reset visible count when filter changes
  const handleCategoryChange = (category: (typeof CATEGORIES)[number]) => {
    setActive(category);
    setVisibleCount(getInitialCount());
  };

  return (
    <section
      id="portfolio"
      className="
        scroll-mt-24 relative
        px-4 sm:px-6 py-20 sm:py-32
        select-none
        text-[var(--fg)]
      "
    >
      {/* subtle section surface - removed to show animation */}

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected"
          highlight="Work"
          subtitle="A selection of projects where strategy, design, and technology come together to create meaningful digital experiences."
          className="mb-14"
        />

        {/* FILTERS */}
        <div className="mb-10 sm:mb-12">
          {/* Mobile: scrollable horizontal */}
          <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
            {CATEGORIES.map((category) => {
              const isActive = active === category;
              const Icon = categoryIcons[category];

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`
                    inline-flex items-center gap-1.5 sm:gap-2
                    rounded-full px-3 sm:px-5 py-2 sm:py-2.5
                    text-xs sm:text-sm font-medium
                    transition-all duration-300
                    border whitespace-nowrap flex-shrink-0
                    ${
                      isActive
                        ? `
                          bg-[var(--accent-1)]/10
                          text-[var(--accent-1)]
                          border-[var(--accent-1)]/50
                          shadow-md shadow-[var(--accent-1)]/10
                        `
                        : `
                          bg-[var(--surface)]
                          text-[var(--text-muted)]
                          border-[var(--border)]
                          hover:text-[var(--fg)]
                          hover:bg-[var(--surface-strong)]
                          hover:border-[var(--accent-1)]/30
                          hover:shadow-md
                          active:scale-95
                        `
                    }
                  `}
                >
                  <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isActive ? 'text-[var(--accent-1)]' : ''}`} />
                  {category}
                </button>
              );
            })}
          </div>

          {/* Category description */}
          {active !== 'All' && (
            <p className="mt-4 text-center text-xs sm:text-sm text-[var(--text-muted)]">
              {categoryDescriptions[active]}
            </p>
          )}
        </div>


        {/* GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {displayedProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 4) * 70}>
              <ProjectCard
                slug={project.slug}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
              />
            </Reveal>
          ))}
        </div>

        {/* MORE BUTTON */}
        {hasMore && (
          <div className="mt-10 sm:mt-14 flex justify-center">
            <button
              onClick={loadMore}
              className="
                group
                inline-flex items-center gap-2
                rounded-full px-6 sm:px-8 py-3 sm:py-3.5
                text-sm font-medium
                transition-all duration-300
                border border-[var(--border)]
                bg-[var(--surface)]
                text-[var(--fg)]
                hover:bg-[var(--surface-strong)]
                hover:border-[var(--accent-1)]/30
                hover:shadow-lg
                hover:shadow-[var(--accent-1)]/10
                active:scale-95
              "
            >
              <span>Load more projects</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        )}

        {/* HUB LINK — crawlable entry point to every case study */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/portfolio"
            className="
              text-sm font-medium text-[var(--text-muted)]
              underline-offset-4 transition-colors
              hover:text-[var(--accent-1)] hover:underline
            "
          >
            View all {projects.length} projects
          </Link>
        </div>
      </div>
    </section>
  );
}
