import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { projectsFor, type Project, type ProjectCategory } from '@/data/projects';
import ProjectCard from '@/components/projectcard';
import { BreadcrumbJsonLd } from '@/components/json-ld';
import { SITES, dictionaryFor, isLocale, localizePath } from '@/i18n';
import { getI18n } from '@/i18n/server';

export async function generateMetadata({ params }: PageProps<'/[locale]/portfolio'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = dictionaryFor(locale).portfolioHub;
  return pageMetadata({
    locale,
    title: t.title,
    description: t.description,
    path: '/portfolio',
    socialTitle: t.socialTitle,
    socialDescription: t.socialDescription,
    image: false, // opengraph-image.tsx in this folder
  });
}

const CATEGORY_ORDER: ProjectCategory[] = [
  'Websites',
  'Commerce',
  'Apps',
  'Fintech',
];

function inCategory(project: Project, category: ProjectCategory) {
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
export default async function PortfolioIndex() {
  const { locale, t } = await getI18n();
  const h = t.portfolioHub;
  const projects = projectsFor(locale);
  const base = SITES[locale].url;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 text-[var(--fg)]">
      <BreadcrumbJsonLd items={[{ name: t.nav.portfolio, path: '/portfolio' }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: h.collectionName,
            url: `${base}/portfolio`,
            description: h.collectionDescription,
            inLanguage: SITES[locale].lang,
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: projects.length,
              itemListElement: projects.map((project, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${base}/portfolio/${project.slug}`,
                name: project.title,
              })),
            },
          }),
        }}
      />

      <header className="max-w-3xl">
        <p className="section-eyebrow">{h.eyebrow}</p>
        <h1 className="font-display mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          {h.h1}{' '}
          <span className="text-gradient">{h.h1Accent}</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
          {h.intro(projects.length)}
        </p>
      </header>

      {/* Jump links — the page lists every case, so give the reader a way to skip ahead */}
      <nav aria-label={h.categoriesLabel} className="mt-8 flex flex-wrap gap-2">
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
              {t.categories[category]}
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
              {t.categories[category]}
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {h.categoryIntro[category]}
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
                  locale={locale}
                />
              ))}
            </div>
          </section>
        );
      })}

      <div className="mt-16 sm:mt-20 flex flex-wrap gap-3">
        <Link href="/#contact" className="btn-primary text-sm">
          {h.start}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href={localizePath(locale, '/about')} className="btn-secondary text-sm">
          {h.howWeWork}
        </Link>
      </div>
    </div>
  );
}
