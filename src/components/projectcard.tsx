import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CategoryBadge } from '@/components/category-badge';

type Props = {
  slug: string;
  title: string;
  category: string;
  description: string;
};

/* brand accent via CSS var */
const ACCENT = 'var(--accent-1)';

export default function ProjectCard({
  slug,
  title,
  category,
  description,
}: Props) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="
        group relative block cursor-pointer select-none
        rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6
        bg-[var(--surface)]
        border border-[var(--border)]
        transition-all duration-300
        hover:bg-[var(--surface-strong)]
        hover:border-[color-mix(in_srgb,var(--accent-1)_20%,var(--border))]
        hover:shadow-lg
        hover:shadow-[var(--accent-1)]/5
      "
    >
      {/* Accent line */}
      <span
        className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-0 top-3 sm:top-4 md:top-5 w-px"
        style={{ background: `${ACCENT}55` }}
        aria-hidden
      />

      {/* Content */}
      <div className="pl-2 sm:pl-3">
        {/* Badge */}
        <CategoryBadge category={category as any} />

        {/* Title */}
        <h3 className="mt-2 sm:mt-3 text-sm sm:text-base md:text-xl font-semibold text-[var(--fg)]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[var(--text-muted)] max-w-[85%]">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <div
        className="
          absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6
          flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 items-center justify-center
          rounded-full
          bg-[var(--surface-strong)]
          border border-[var(--border)]
          opacity-40
          transition-all duration-300
          group-hover:opacity-100
          group-hover:scale-110
        "
      >
        <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-[var(--accent-1)] transition-opacity duration-300" />
      </div>
    </Link>
  );
}
