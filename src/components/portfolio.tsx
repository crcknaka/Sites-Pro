import { projects } from '@/data/projects';
import PortfolioGrid from './portfolio-grid';

/**
 * Server wrapper: the grid is interactive (filters, load more), but it only
 * needs five fields per case. Passing slim items keeps the full case texts —
 * ~60 KB of challenge/solution/result copy — out of the client bundle.
 */
export default function Portfolio() {
  const items = projects.map(({ slug, title, category, description, image }) => ({
    slug,
    title,
    category,
    description,
    image,
  }));

  return <PortfolioGrid projects={items} />;
}
