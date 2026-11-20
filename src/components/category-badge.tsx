import { Layers, ShoppingCart, Globe, Shield } from 'lucide-react';
import { dictionaryFor, type Locale } from '@/i18n';

type Category =
  | 'Apps'
  | 'Commerce'
  | 'Websites'
  | 'Fintech';

const categoryIcons: Record<Category, typeof Layers> = {
  Apps: Layers,
  Commerce: ShoppingCart,
  Websites: Globe,
  Fintech: Shield,
};

const styles: Record<
  Category,
  {
    bg: string;
    text: string;
    border: string;
  }
> = {
  Apps: {
    bg: 'bg-[color:var(--accent-2)]/10',
    text: 'text-[color:var(--accent-2-text)]',
    border: 'border-[color:var(--accent-2)]/30',
  },
  Commerce: {
    bg: 'bg-[color:var(--accent-1)]/10',
    text: 'text-[color:var(--accent-text)]',
    border: 'border-[color:var(--accent-1)]/30',
  },
  Websites: {
    bg: 'bg-[color:var(--accent-2)]/15',
    text: 'text-[color:var(--accent-2-text)]',
    border: 'border-[color:var(--accent-2)]/25',
  },
  Fintech: {
    bg: 'bg-[color:var(--accent-1)]/15',
    text: 'text-[color:var(--accent-text)]',
    border: 'border-[color:var(--accent-1)]/25',
  },
};

const PILL = `
  inline-flex items-center gap-1.5
  rounded-full px-2 sm:px-3 py-0.5 sm:py-1
  text-[11px] sm:text-xs font-medium tracking-wide
  border
`;

/**
 * `compact` is for the two-column phone grid, where two badges do not fit on
 * one line: below `sm` only the first shows, the rest fold into "+N", so
 * every card keeps the same height.
 */
export function CategoryBadge({
  category,
  locale,
  compact = false,
}: {
  category: Category | Category[];
  locale: Locale;
  compact?: boolean;
}) {
  const labels = dictionaryFor(locale).categories;
  const categories = Array.isArray(category) ? category : [category];
  const folded = compact ? categories.length - 1 : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat, idx) => {
        const style = styles[cat];
        const Icon = categoryIcons[cat];
        return (
          <span
            key={cat}
            className={`${PILL} ${style.bg} ${style.text} ${style.border} ${
              compact && idx > 0 ? 'max-sm:hidden' : ''
            }`}
          >
            <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
            {labels[cat]}
          </span>
        );
      })}
      {folded > 0 && (
        <span
          className={`${PILL} border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] sm:hidden`}
          title={categories.slice(1).map((c) => labels[c]).join(', ')}
        >
          +{folded}
          <span className="sr-only">: {categories.slice(1).map((c) => labels[c]).join(', ')}</span>
        </span>
      )}
    </div>
  );
}
