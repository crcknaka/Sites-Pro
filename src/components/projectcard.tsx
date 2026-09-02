import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CategoryBadge } from '@/components/category-badge';

type Props = {
  slug: string;
  title: string;
  category: string | string[];
  description: string;
  image?: string;
};

export default function ProjectCard({
  slug,
  title,
  category,
  description,
  image,
}: Props) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="
        card-premium
        group block cursor-pointer select-none
        h-full
        rounded-xl sm:rounded-2xl
        overflow-hidden
      "
    >
      {/* Image */}
      {image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[var(--surface)]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Badge */}
        <CategoryBadge category={category as any} />

        {/* Title */}
        <h3 className="font-display mt-2 text-sm sm:text-base font-semibold text-[var(--fg)] line-clamp-1 sm:line-clamp-2">
          {title}
        </h3>

        {/* Description - hidden on mobile for compact view */}
        <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-muted)] line-clamp-2 hidden sm:block">
          {description}
        </p>

        {/* View project link */}
        <div className="mt-2 sm:mt-3 flex items-center gap-1.5 text-xs font-medium text-[var(--accent-1)] opacity-70 group-hover:opacity-100 transition-opacity">
          <span className="hidden sm:inline">View project</span>
          <span className="sm:hidden">View</span>
          <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
