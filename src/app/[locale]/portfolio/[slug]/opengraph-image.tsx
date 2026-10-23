import { projectsFor } from '@/data/projects';
import { dictionaryFor, isLocale, LOCALES } from '@/i18n';
import { OG_CONTENT_TYPE, OG_SIZE, loadShot, renderOg } from '@/lib/og';

export const alt = 'Case study — Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    projectsFor(locale).map((p) => ({ locale, slug: p.slug })),
  );
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
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : 'en';
  const t = dictionaryFor(locale);
  const project = projectsFor(locale).find((p) => p.slug === slug)!;
  const categories = Array.isArray(project.category) ? project.category : [project.category];
  const shot = await loadShot(project.images?.[0]);

  return renderOg({
    locale,
    eyebrow: `${t.caseStudy.ogEyebrow} · ${categories.map((c) => t.categories[c]).join(' · ')}`,
    title: project.title,
    subtitle: lead(project.metaDescription ?? project.description),
    shot,
  });
}
