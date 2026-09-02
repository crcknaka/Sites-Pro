import { projects, type Project } from '@/data/projects';
import ProjectCard from '@/components/projectcard';
import Reveal from './reveal';

const toList = (c: Project['category']) => (Array.isArray(c) ? c : [c]);

/**
 * Other case studies in the same category, shown under a case so a reader
 * who came in from search has somewhere to go besides the CTA.
 */
export default function RelatedCases({
  current,
  limit = 4,
}: {
  current: Project;
  limit?: number;
}) {
  const wanted = toList(current.category);
  const related = projects
    .filter((p) => p.slug !== current.slug)
    .filter((p) => toList(p.category).some((c) => wanted.includes(c)))
    .slice(0, limit);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 sm:mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-eyebrow">More {wanted[0].toLowerCase()} work</p>
          <h2 className="font-display mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
            Related case studies
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
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
