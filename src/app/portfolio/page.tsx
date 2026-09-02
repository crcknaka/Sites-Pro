import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { projects, type ProjectCategory } from '@/data/projects';
import ProjectCard from '@/components/projectcard';
import { BreadcrumbJsonLd } from '@/components/json-ld';
import { SITE_URL, ACCENT_1, ACCENT_2 } from '@/lib';

export const metadata: Metadata = {
  title: 'Portfolio — Website, Platform & AI Project Case Studies',
  description:
    'Case studies from Sites Pro: websites, online stores, web platforms, apps and fintech products — the challenge, the solution and the result for each project.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    url: '/portfolio',
    title: 'Portfolio — Case Studies | Sites Pro',
    description:
      'Websites, commerce, apps and fintech projects with the challenge, solution and result behind each one.',
  },
};

const CATEGORY_ORDER: ProjectCategory[] = [
  'Websites',
  'Commerce',
  'Apps',
  'Fintech',
];

const CATEGORY_INTRO: Record<ProjectCategory, string> = {
  Websites: 'Content-driven sites and product showcases.',
  Commerce: 'Online stores and transactional platforms.',
  Apps: 'Web apps, AI tools and interactive services.',
  Fintech: 'Fintech platforms and payment products.',
};

function inCategory(
  project: (typeof projects)[number],
  category: ProjectCategory,
) {
  const categories = Array.isArray(project.category)
    ? project.category
    : [project.category];
  return categories.includes(category);
}

/**
 * Server-rendered hub for every case study. The home page section is
 * client-filtered and only ships a handful of cards, so this is the page
 * that gives crawlers a single link to all projects.
 */
export default function PortfolioIndex() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 text-[var(--fg)]">
      <BreadcrumbJsonLd items={[{ name: 'Portfolio', path: '/portfolio' }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Sites Pro Portfolio',
            url: `${SITE_URL}/portfolio`,
            description:
              'Case studies from Sites Pro: websites, online stores, web platforms, apps and fintech products.',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: projects.length,
              itemListElement: projects.map((project, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${SITE_URL}/portfolio/${project.slug}`,
                name: project.title,
              })),
            },
          }),
        }}
      />

      <header className="max-w-3xl">
        <p className="section-eyebrow">Portfolio</p>
        <h1 className="font-display mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          All case{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ACCENT_1}, ${ACCENT_2})`,
            }}
          >
            studies
          </span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
          {projects.length} projects where strategy, design and engineering come
          together — websites, online stores, web platforms, apps and fintech
          products. Each case study covers the challenge, the solution and the
          result.
        </p>
      </header>

      {/* Jump links — the page lists every case, so give the reader a way to skip ahead */}
      <nav aria-label="Categories" className="mt-8 flex flex-wrap gap-2">
        {CATEGORY_ORDER.map((category) => {
          const count = projects.filter((p) => inCategory(p, category)).length;
          if (count === 0) return null;
          return (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="
                inline-flex items-center gap-2 rounded-full
                border border-[var(--border)] bg-[var(--surface)]
                px-4 py-2 text-sm font-medium text-[var(--text-muted)]
                transition-colors hover:border-[var(--accent-1)]/40 hover:text-[var(--fg)]
              "
            >
              {category}
              <span className="text-xs opacity-70">{count}</span>
            </a>
          );
        })}
      </nav>

      {CATEGORY_ORDER.map((category) => {
        const items = projects.filter((p) => inCategory(p, category));
        if (items.length === 0) return null;

        return (
          <section
            key={category}
            id={category.toLowerCase()}
            className="mt-16 sm:mt-20 scroll-mt-28"
          >
            <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
              {category}
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {CATEGORY_INTRO[category]}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {items.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  image={project.image}
                />
              ))}
            </div>
          </section>
        );
      })}

      <div className="mt-16 sm:mt-20 flex flex-wrap gap-3">
        <Link href="/#contact" className="btn-primary text-sm">
          Start a project
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/about" className="btn-secondary text-sm">
          How we work
        </Link>
      </div>
    </main>
  );
}
