/** Numbered section of a legal page — shared by both languages. */
export default function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[var(--fg)]">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export const linkClass = 'text-[var(--accent-text)] hover:underline';
export const listClass = 'mt-2 ml-6 list-disc space-y-1';
