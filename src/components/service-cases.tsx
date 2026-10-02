import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { projects, type ServiceKey } from '@/data/projects';
import ProjectCard from '@/components/projectcard';
import Reveal from './reveal';

/**
 * Case studies delivered under a given service. Rendered at the bottom of each
 * service page so cases and services link to each other in both directions.
 * Several keys may be passed: cases tagged with the first come first, the rest
 * fill up the grid (a narrow specialisation borrows from its parent service).
 */
export default function ServiceCases({
  service,
  slugs,
  limit = 8,
  title = 'Projects we delivered under this service',
}: {
  service?: ServiceKey | ServiceKey[];
  /** Explicit list instead of a service filter, kept in the given order. */
  slugs?: string[];
  limit?: number;
  title?: string;
}) {
  const keys = service ? (Array.isArray(service) ? service : [service]) : [];
  const seen = new Set<string>();
  const picked = slugs
    ? slugs.flatMap((slug) => projects.filter((p) => p.slug === slug))
    : keys.flatMap((key) => projects.filter((p) => p.services?.includes(key)));
  const cases = picked
    .filter((p) => (seen.has(p.slug) ? false : (seen.add(p.slug), true)))
    .slice(0, limit);

  if (cases.length === 0) return null;

  return (
    <section className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow">Selected work</p>
            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="
              inline-flex items-center gap-1.5 text-sm font-medium
              text-[var(--text-muted)] transition-colors
              hover:text-[var(--accent-text)]
            "
          >
            All case studies
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {cases.map((project, i) => (
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
      </div>
    </section>
  );
}
