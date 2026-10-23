import { projectsFor, type Project } from '@/data/projects';
import ProjectCard from '@/components/projectcard';
import { getI18n } from '@/i18n/server';
import Reveal from './reveal';

const toList = (c: Project['category']) => (Array.isArray(c) ? c : [c]);

/**
 * Other case studies close to this one, shown under a case so a reader who came
 * in from search has somewhere to go besides the CTA.
 *
 * Scored by shared services and categories; ties go to the nearest neighbours in
 * portfolio order. Taking "the first four of the category" sent every case's
 * related links to the same four projects and left half the portfolio with no
 * inbound links at all — neighbours spread them across every case.
 */
export default async function RelatedCases({
  current,
  limit = 4,
}: {
  current: Project;
  limit?: number;
}) {
  const { locale, t } = await getI18n();
  const projects = projectsFor(locale);
  const index = projects.findIndex((p) => p.slug === current.slug);
  const categories = toList(current.category);
  const services = current.services ?? [];

  const related = projects
    .map((p, i) => {
      if (p.slug === current.slug) return null;
      const sharedServices = (p.services ?? []).filter((s) => services.includes(s)).length;
      const sharedCategories = toList(p.category).filter((c) => categories.includes(c)).length;
      const score = sharedServices * 2 + sharedCategories * 3;
      return score > 0 ? { p, score, distance: Math.abs(i - index) } : null;
    })
    .filter((x): x is { p: Project; score: number; distance: number } => x !== null)
    .sort((a, b) => b.score - a.score || a.distance - b.distance)
    .slice(0, limit)
    .map((x) => x.p);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 sm:mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-eyebrow">
            {t.caseStudy.relatedEyebrow(t.categories[categories[0]])}
          </p>
          <h2 className="font-display mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
            {t.caseStudy.relatedTitle}
          </h2>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {related.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 4) * 70}>
            <ProjectCard
              slug={project.slug}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              locale={locale}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
