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
        group relative block cursor-pointer select-none
        rounded-xl sm:rounded-2xl
        bg-[var(--surface)]
        border border-[var(--border)]
        transition-all duration-300
        overflow-hidden
        hover:bg-[var(--surface-strong)]
        hover:border-[color-mix(in_srgb,var(--accent-1)_20%,var(--border))]
        hover:shadow-xl
        hover:shadow-[var(--accent-1)]/10
        hover:scale-[1.02]
      "
    >
      {/* Image */}
      {image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[var(--surface-strong)]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/80 via-transparent to-transparent opacity-60" />
        </div>
      )}

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Badge */}
        <CategoryBadge category={category as any} />

        {/* Title */}
        <h3 className="mt-2 text-sm sm:text-base font-semibold text-[var(--fg)] line-clamp-1 sm:line-clamp-2">
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
