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
        rounded-2xl p-6
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
        className="absolute bottom-5 left-0 top-5 w-px"
        style={{ background: `${ACCENT}55` }}
        aria-hidden
      />

      {/* Content */}
      <div className="pl-3">
        {/* Badge */}
        <CategoryBadge category={category as any} />

        {/* Title */}
        <h3 className="mt-3 text-xl font-semibold text-[var(--fg)]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] max-w-[85%]">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <div
        className="
          absolute bottom-6 right-6
          flex h-8 w-8 items-center justify-center
          rounded-full
          bg-[var(--surface-strong)]
          border border-[var(--border)]
          opacity-40
          transition-all duration-300
          group-hover:opacity-100
          group-hover:scale-110
        "
      >
        <ArrowUpRight className="h-4 w-4 text-[var(--accent-1)] transition-opacity duration-300" />
      </div>
    </Link>
  );
}
