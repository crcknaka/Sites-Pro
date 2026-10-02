import { projects } from '@/data/projects';
import { OG_CONTENT_TYPE, OG_SIZE, loadShot, renderOg } from '@/lib/og';

export const alt = 'Case study — Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/** First sentence-ish of the description, cut on a word boundary. */
function lead(text: string, max = 120): string {
  const flat = text.replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

// Each case gets its own share card — title, one line of what it is and the
// first screenshot — instead of a cropped portrait screenshot.
export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug)!;
  const categories = Array.isArray(project.category) ? project.category : [project.category];
  const shot = await loadShot(project.images?.[0]);

  return renderOg({
    eyebrow: `Case study · ${categories.join(' · ')}`,
    title: project.title,
    subtitle: lead(project.metaDescription ?? project.description),
    shot,
  });
}
