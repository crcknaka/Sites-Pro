import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, LayoutGrid } from 'lucide-react';
import { projects } from '@/data/projects';
import { PortfolioLightbox } from '@/components/portfolio-lightbox';
import { CategoryBadge } from '@/components/category-badge';

const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

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
  const images = ((project as any).images || [project.image]).filter(Boolean);

  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 text-[var(--fg)]">
      {/* =========================
         TWO COLUMN LAYOUT
      ========================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        {/* =========================
           LEFT — CONTENT
        ========================= */}
        <div className="lg:col-span-2 space-y-12 lg:space-y-10">
          {/* Category Badge */}
          <div className="mb-0">
            <CategoryBadge category={project.category as any} />
          </div>

          {/* Title */}
          <h1 className="
            mt-1
            text-4xl
            font-semibold 
            tracking-tight
            md:text-5xl
          ">
            {project.title}
          </h1>

          {/* Description */}
          <p className="
            mt-6
            text-base sm:text-lg
            leading-relaxed
            text-[var(--text-muted)]
            max-w-3xl
          ">
            {project.description}
          </p>
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
                <ul className="space-y-3 text-[var(--text-muted)] leading-relaxed">
                  {project.solution.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span 
                        className="
                          mt-1.5
                          flex-shrink-0
                          w-1.5 h-1.5
                          rounded-full
                        "
                        style={{ background: ACCENT_1 }}
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
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
           RIGHT — IMAGES (Opposite to badge on desktop)
        ========================= */}
        {images.length > 0 && (
          <div className="lg:col-span-1 lg:pt-0 pt-12">
            <PortfolioLightbox images={images} projectTitle={project.title} />
          </div>
        )}
      </div>

      {/* =========================
         PREV / NEXT / BACK (Before CTA)
      ========================= */}
      <div className="
        mt-16
        flex flex-col sm:flex-row 
        items-stretch sm:items-center 
        justify-between 
        gap-4 sm:gap-6
        border-t border-[var(--border)] 
        pt-8
      ">
        {prev ? (
          <Link
            href={`/portfolio/${prev.slug}`}
            className="
              group
              flex items-center gap-3
              px-4 py-3 sm:px-6 sm:py-4
              rounded-xl
              border border-[var(--border)]
              bg-[var(--surface)]
              text-sm sm:text-base font-medium
              text-[var(--text-muted)]
              hover:text-[var(--fg)]
              hover:border-[var(--accent-1)]
              transition-all
              cursor-pointer select-none
              flex-1 sm:flex-initial
              justify-center sm:justify-start
            "
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:-translate-x-1" />
            <span className="truncate">{prev.title}</span>
          </Link>
        ) : (
          <div className="flex-1 sm:flex-initial" />
        )}

        {/* Back Link - Center */}
        <Link
          href="/#portfolio"
          className="
            group
            flex items-center justify-center gap-2
            px-4 py-3 sm:px-6 sm:py-4
            rounded-xl
            border border-[var(--border)]
            bg-[var(--surface)]
            text-sm sm:text-base font-medium
            text-[var(--text-muted)]
            hover:text-[var(--fg)]
            hover:border-[var(--accent-1)]
            transition-all
            cursor-pointer select-none
            flex-1 sm:flex-initial
          "
        >
          <LayoutGrid className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
          <span>Back to portfolio</span>
        </Link>

        {next ? (
          <Link
            href={`/portfolio/${next.slug}`}
            className="
              group
              flex items-center gap-3
              px-4 py-3 sm:px-6 sm:py-4
              rounded-xl
              border border-[var(--border)]
              bg-[var(--surface)]
              text-sm sm:text-base font-medium
              text-[var(--text-muted)]
              hover:text-[var(--fg)]
              hover:border-[var(--accent-1)]
              transition-all
              cursor-pointer select-none
              flex-1 sm:flex-initial
              justify-center sm:justify-end
            "
          >
            <span className="truncate">{next.title}</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <div className="flex-1 sm:flex-initial" />
        )}
      </div>

      {/* =========================
         CTA SECTION (Modern design)
      ========================= */}
      <div className="
        mt-20
        relative
        overflow-hidden
        rounded-3xl
        border border-[var(--border)]
        bg-[var(--surface)]
        p-12 lg:p-16
      ">
        {/* Background gradient */}
        <div 
          className="
            absolute inset-0 
            opacity-5
            pointer-events-none
          "
          style={{
            background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
          }}
        />
        
        <div className="relative text-center max-w-2xl mx-auto">
          <h3 className="
            text-2xl sm:text-3xl
            font-semibold 
            mb-4
          ">
            Want a similar project?
          </h3>
          <p className="
            text-base sm:text-lg
            text-[var(--text-muted)] 
            mb-8
            leading-relaxed
          ">
            Let's discuss how we can bring your vision to life with the same quality and attention to detail.
          </p>
          <Link
            href="/#contact"
            className="
              inline-flex items-center justify-center gap-2
              rounded-2xl 
              px-8 py-4
              text-sm sm:text-base font-medium 
              text-black
              transition-all duration-300
              hover:opacity-90 hover:scale-105
              active:scale-95
              shadow-lg
            "
            style={{ background: ACCENT_1 }}
          >
            Get in Touch
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>

    </main>
  );
}

/* =========================
   SECTION (Modern design)
========================= */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 
        className="
          text-2xl
          font-semibold
          mb-4
          md:text-3xl
        "
      >
        {title}
      </h2>
      <div>
        {children}
      </div>
    </section>
  );
}
