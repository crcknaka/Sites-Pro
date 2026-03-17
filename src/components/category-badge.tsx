import { Layers, ShoppingCart, Globe, Shield } from 'lucide-react';

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
    text: 'text-[color:var(--accent-2)]',
    border: 'border-[color:var(--accent-2)]/30',
  },
  Commerce: {
    bg: 'bg-[color:var(--accent-1)]/10',
    text: 'text-[color:var(--accent-1)]',
    border: 'border-[color:var(--accent-1)]/30',
  },
  Websites: {
    bg: 'bg-[color:var(--accent-2)]/15',
    text: 'text-[color:var(--accent-2)]',
    border: 'border-[color:var(--accent-2)]/25',
  },
  Fintech: {
    bg: 'bg-[color:var(--accent-1)]/15',
    text: 'text-[color:var(--accent-1)]',
    border: 'border-[color:var(--accent-1)]/25',
  },
};

export function CategoryBadge({ category }: { category: Category | Category[] }) {
  const categories = Array.isArray(category) ? category : [category];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat, idx) => {
        const style = styles[cat];
        const Icon = categoryIcons[cat];
        return (
          <span
            key={idx}
            className={`
              inline-flex items-center gap-1.5
              rounded-full px-2 sm:px-3 py-0.5 sm:py-1
              text-[10px] sm:text-xs font-medium tracking-wide
              border
              ${style.bg}
              ${style.text}
              ${style.border}
            `}
          >
            <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            {cat}
          </span>
        );
      })}
    </div>
  );
}
