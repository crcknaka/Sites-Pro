import Reveal from './reveal';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  /** The word(s) rendered with the brand gradient, appended after `title`. */
  highlight?: string;
  subtitle?: string;
  className?: string;
};

/**
 * Unified section heading: eyebrow → display heading with gradient
 * highlight → muted subtitle. Keeps every section visually consistent.
 */
export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  className = '',
}: Props) {
  return (
    <Reveal className={`mx-auto max-w-3xl text-center ${className}`}>
      <span className="section-eyebrow">{eyebrow}</span>

      <h2 className="font-display mt-4 text-3xl sm:text-4xl font-semibold tracking-tight md:text-5xl text-balance">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-gradient">{highlight}</span>
          </>
        )}
      </h2>

      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
