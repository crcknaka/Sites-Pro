'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projectcard';

/* brand accent via CSS var */
const ACCENT = 'var(--accent-1)';

const CATEGORIES = [
  'All',
  'Apps',
  'Catalogue',
  'E-Commerce',
  'Informational',
] as const;

export default function Portfolio() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // Reset visible count when filter changes
  const handleCategoryChange = (category: (typeof CATEGORIES)[number]) => {
    setActive(category);
    setVisibleCount(6);
  };

  return (
    <section
      id="portfolio"
      className="
        scroll-mt-24 relative
        px-6 py-32
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
