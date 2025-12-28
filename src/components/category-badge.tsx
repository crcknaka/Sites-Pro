type Category =
  | 'Apps'
  | 'Catalogue'
  | 'E-Commerce'
  | 'Informational';

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
  'E-Commerce': {
    bg: 'bg-[color:var(--accent-1)]/10',
    text: 'text-[color:var(--accent-1)]',
    border: 'border-[color:var(--accent-1)]/30',
  },
  Catalogue: {
    bg: 'bg-[var(--surface-strong)]',
    text: 'text-[var(--fg-muted)]',
    border: 'border-[var(--border)]',
  },
  Informational: {
    bg: 'bg-[var(--surface)]',
    text: 'text-[var(--fg-muted)]',
    border: 'border-[var(--border)]',
  },
};

export function CategoryBadge({ category }: { category: Category }) {
  const style = styles[category];

  return (
    <span
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
      {category}
    </span>
  );
}
