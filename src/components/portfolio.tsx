'use client';

import { useState, useEffect } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projectcard';

/* brand accent via CSS var */
const ACCENT = 'var(--accent-1)';

const CATEGORIES = [
  'All',
  'Apps',
  'Commerce',
  'Media',
  'Finance',
] as const;

export default function Portfolio() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All');
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isInitialized, setIsInitialized] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Set initial count only once
      if (!isInitialized) {
        setVisibleCount(mobile ? 4 : 6);
        setIsInitialized(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isInitialized]);
  
  // Determine initial count based on screen size
  const getInitialCount = () => (isMobile ? 4 : 6);

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
    const increment = isMobile ? 4 : 6;
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
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: ACCENT }}
          >
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Selected{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENT}, ${ACCENT})`,
              }}
            >
              Portfolio
            </span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
            A selection of projects where strategy, design, and technology
            come together to create meaningful digital experiences.
          </p>
        </div>

{/* FILTERS */}
<div className="mb-16 flex flex-wrap justify-center gap-3">
  {CATEGORIES.map((category) => {
    const isActive = active === category;

    return (
      <button
        key={category}
        onClick={() => handleCategoryChange(category)}
        className={`
          rounded-full px-5 py-2 text-sm font-medium
          transition-all duration-300
          border
          ${
            isActive
              ? `
                bg-[var(--surface-strong)]
                text-[var(--fg)]
                border-[var(--accent-1)]
              `
              : `
                bg-[var(--surface)]
                text-[var(--text-muted)]
                border-[var(--border)]
                opacity-75
                hover:opacity-100
                hover:text-[var(--fg)]
                hover:bg-[var(--surface-strong)]
                hover:border-[color-mix(in_srgb,var(--accent-1)_20%,var(--border))]
                hover:shadow-lg
                hover:shadow-[var(--accent-1)]/5
                hover:scale-105
              `
          }
        `}
      >
        {category}
      </button>
    );
  })}
</div>


        {/* GRID */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>

        {/* MORE BUTTON */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={loadMore}
              className="
                rounded-lg px-8 py-3 text-sm font-medium
                transition-all duration-300
                border border-[var(--border)]
                bg-[var(--surface)]
                text-[var(--fg)]
                opacity-75
                hover:opacity-100
                hover:bg-[var(--surface-strong)]
                hover:border-[color-mix(in_srgb,var(--accent-1)_20%,var(--border))]
                hover:shadow-lg
                hover:shadow-[var(--accent-1)]/10
                hover:scale-105
                active:scale-[0.98]
              "
            >
              More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
