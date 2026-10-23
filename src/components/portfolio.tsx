import { projectsFor } from '@/data/projects';
import { getLocale } from '@/i18n/server';
import PortfolioGrid from './portfolio-grid';

/**
 * Server wrapper: the grid is interactive (filters, load more), but it only
 * needs five fields per case. Passing slim items keeps the full case texts —
 * ~60 KB of challenge/solution/result copy — out of the client bundle.
 */
export default async function Portfolio() {
  const locale = await getLocale();
  const items = projectsFor(locale).map(({ slug, title, category, description, image }) => ({
    slug,
    title,
    category,
    description,
    image,
  }));

  return <PortfolioGrid projects={items} locale={locale} />;
}
