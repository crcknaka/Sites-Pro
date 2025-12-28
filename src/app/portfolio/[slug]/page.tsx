import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default async function WorkCase({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[index - 1] ?? null;
  const next = projects[index + 1] ?? null;

  return (
    <main
      className="
        mx-auto max-w-7xl px-6 py-32
        text-[var(--fg)]
      "
    >
      {/* =========================
         TWO-COLUMN LAYOUT
      ========================= */}
      <section className="grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* =========================
           LEFT — CONTENT
        ========================= */}
        <div>
          {/* BACK TO PORTFOLIO LINK */}
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
          >
            ← Back to portfolio
          </Link>

          {/* META */}
          <span className="mt-10 block text-xs uppercase tracking-widest text-[var(--text-subtle)]">
            {project.category}
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
            {project.description}
          </p>

          <div className="my-16 h-px bg-[var(--border)]" />

          {/* CHALLENGE */}
          {project.challenge && (
            <Section title="Challenge">
              <p className="text-[var(--text-muted)] leading-relaxed">
                {project.challenge}
              </p>
            </Section>
          )}

          {/* SOLUTION */}
          {project.solution && (
            <Section title="Solution">
              {Array.isArray(project.solution) ? (
                <ul className="space-y-3 text-[var(--text-muted)]">
                  {project.solution.map((item: string) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {project.solution}
                </p>
              )}
            </Section>
          )}

          {/* RESULT */}
          {project.result && (
            <Section title="Result">
              <p className="text-[var(--text-muted)] leading-relaxed">
                {project.result}
              </p>
            </Section>
          )}
        </div>

        {/* =========================
           RIGHT — STICKY VISUAL
        ========================= */}
        {((project as any).images || project.image) && (
          <div className="relative">
            <div className="sticky top-32 space-y-6">
              {((project as any).images || [project.image]).map((img: string, idx: number) => (
                <div
                  key={idx}
                  className="
                    overflow-hidden rounded-3xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                  "
                >
                  <Image
                    src={img}
                    alt={`${project.title} preview ${idx + 1}`}
                    width={1200}
                    height={900}
                    className="w-full h-auto"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* =========================
         PREV / NEXT
      ========================= */}
      <div className="mt-32 flex items-center justify-between gap-6 border-t border-[var(--border)] pt-8">
        {prev ? (
          <Link
            href={`/portfolio/${prev.slug}`}
            className="
              group flex items-center gap-2
              text-sm font-medium
              text-[var(--text-muted)]
              hover:text-[var(--fg)]
              cursor-pointer select-none
            "
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            {prev.title}
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/portfolio/${next.slug}`}
            className="
              group flex items-center gap-2
              text-sm font-medium
              text-[var(--text-muted)]
              hover:text-[var(--fg)]
              cursor-pointer select-none
            "
          >
            {next.title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}

/* =========================
   SECTION
========================= */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16 max-w-xl">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>
      <div className="mt-4">
        {children}
      </div>
    </section>
  );
}
