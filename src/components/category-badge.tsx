type Category =
  | 'Apps'
  | 'Commerce'
  | 'Media'
  | 'Finance';

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
  Media: {
    bg: 'bg-[var(--surface-strong)]',
    text: 'text-[var(--fg-muted)]',
    border: 'border-[var(--border)]',
  },
  Finance: {
    bg: 'bg-[#1F4FD8]/10',
    text: 'text-[#1F4FD8]',
    border: 'border-[#1F4FD8]/30',
  },
};

export function CategoryBadge({ category }: { category: Category | Category[] }) {
  const categories = Array.isArray(category) ? category : [category];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat, idx) => {
        const style = styles[cat];
        return (
          <span
            key={idx}
            className={`
              inline-flex items-center
              rounded-full px-2 sm:px-3 py-0.5 sm:py-1
              text-[10px] sm:text-xs font-medium tracking-wide
              border
              ${style.bg}
              ${style.text}
              ${style.border}
            `}
          >
            {cat}
          </span>
        );
      })}
    </div>
  );
}
