import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, LayoutGrid, Facebook, Instagram, Music, Linkedin, Youtube, Target, Lightbulb, Trophy, ExternalLink, Play } from 'lucide-react';
import { projects, SERVICE_LABELS } from '@/data/projects';
import { PortfolioLightbox } from '@/components/portfolio-lightbox';
import { CategoryBadge } from '@/components/category-badge';
import { ProjectJsonLd, BreadcrumbJsonLd } from '@/components/json-ld';

const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

const sectionIcons = {
  Challenge: Target,
  Solution: Lightbulb,
  Result: Trophy,
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  const categories = Array.isArray(project.category)
    ? project.category.join(', ')
    : project.category;
  const description = project.description.replace(/\s+/g, ' ').trim();
  const url = `/portfolio/${project.slug}`;

  return {
    title: `${project.title} — ${categories} Case Study`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: `${project.title} — ${categories} Case Study | Sites Pro`,
      description,
      images: [{ url: project.image, alt: `${project.title} — project screenshot` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — ${categories} Case Study`,
      description,
      images: [project.image],
    },
  };
}

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
    <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 text-[var(--fg)]">
      <ProjectJsonLd project={project} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Portfolio', path: '/portfolio' },
          { name: project.title, path: `/portfolio/${project.slug}` },
        ]}
      />
      {/* =========================
         IMAGE GALLERY (Mobile - at top)
      ========================= */}
      {images.length > 0 && (
        <div className="lg:hidden mb-8">
          <PortfolioLightbox images={images} projectTitle={project.title} />
        </div>
      )}

      {/* =========================
         TWO COLUMN LAYOUT
      ========================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        {/* =========================
           LEFT — CONTENT
        ========================= */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Category Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <CategoryBadge category={project.category as any} />
          </div>

          {/* Title — with brand mark when the project has one */}
          <div className="flex items-center gap-4">
            {project.logo && (
              <span
                className="
                  flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0
                  items-center justify-center
                  overflow-hidden rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                "
              >
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={56}
                  height={56}
                  className="h-9 w-9 sm:h-11 sm:w-11 object-contain"
                />
              </span>
            )}

            <h1 className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-semibold
              tracking-tight
              leading-tight
            ">
              {project.title}
            </h1>
          </div>

          {/* Description */}
          <p className="
            text-sm sm:text-base md:text-lg
            leading-relaxed
            text-[var(--text-muted)]
            max-w-3xl
          ">
            {project.description}
          </p>

          {/* STACK + SERVICES */}
          {(project.tech?.length || project.services?.length) && (
            <div className="space-y-4">
              {project.tech && project.tech.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    Built with
                  </span>
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full border border-[var(--border)]
                        bg-[var(--surface)] px-3 py-1
                        text-xs text-[var(--text-muted)]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {project.services && project.services.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    Service
                  </span>
                  {project.services.map((key) => (
                    <Link
                      key={key}
                      href={`/services/${key}`}
                      className="
                        rounded-full border border-[var(--accent-1)]/30
                        bg-[var(--accent-1)]/10 px-3 py-1
                        text-xs font-medium text-[var(--accent-1)]
                        transition-colors hover:bg-[var(--accent-1)]/20
                      "
                    >
                      {SERVICE_LABELS[key]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
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

          {/* SOCIAL LINKS */}
          {(project.link || (project as any).facebook || (project as any).instagram || (project as any).tiktok || (project as any).linkedin || (project as any).youtube || (project as any).googlePlay) && (
            <div className="flex flex-wrap items-center gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    w-10 h-10
                    rounded-xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    text-[var(--text-muted)]
                    hover:text-[var(--fg)]
                    hover:border-[var(--accent-1)]
                    hover:bg-[var(--surface-strong)]
                    transition-all
                  "
                  aria-label="Visit Website"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
              {(project as any).facebook && (
                <a
                  href={(project as any).facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    w-10 h-10
                    rounded-xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    text-[var(--text-muted)]
                    hover:text-[var(--fg)]
                    hover:border-[var(--accent-1)]
                    hover:bg-[var(--surface-strong)]
                    transition-all
                  "
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {(project as any).instagram && (
                <a
                  href={(project as any).instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    w-10 h-10
                    rounded-xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    text-[var(--text-muted)]
                    hover:text-[var(--fg)]
                    hover:border-[var(--accent-1)]
                    hover:bg-[var(--surface-strong)]
                    transition-all
                  "
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {(project as any).tiktok && (
                <a
                  href={(project as any).tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    w-10 h-10
                    rounded-xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    text-[var(--text-muted)]
                    hover:text-[var(--fg)]
                    hover:border-[var(--accent-1)]
                    hover:bg-[var(--surface-strong)]
                    transition-all
                  "
                  aria-label="TikTok"
                >
                  <Music className="h-5 w-5" />
                </a>
              )}
              {(project as any).linkedin && (
                <a
                  href={(project as any).linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    w-10 h-10
                    rounded-xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    text-[var(--text-muted)]
                    hover:text-[var(--fg)]
                    hover:border-[var(--accent-1)]
                    hover:bg-[var(--surface-strong)]
                    transition-all
                  "
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {(project as any).youtube && (
                <a
                  href={(project as any).youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    w-10 h-10
                    rounded-xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    text-[var(--text-muted)]
                    hover:text-[var(--fg)]
                    hover:border-[var(--accent-1)]
                    hover:bg-[var(--surface-strong)]
                    transition-all
                  "
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              )}
              {(project as any).googlePlay && (
                <a
                  href={(project as any).googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    w-10 h-10
                    rounded-xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    text-[var(--text-muted)]
                    hover:text-[var(--fg)]
                    hover:border-[var(--accent-1)]
                    hover:bg-[var(--surface-strong)]
                    transition-all
                  "
                  aria-label="Google Play"
                >
                  <Play className="h-5 w-5" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* =========================
           RIGHT — IMAGES (Desktop sidebar)
        ========================= */}
        {/* Desktop: sidebar gallery */}
        {images.length > 0 && (
          <div className="lg:col-span-1 hidden lg:block">
            <PortfolioLightbox images={images} projectTitle={project.title} />
          </div>
        )}
      </div>

      {/* =========================
         PREV / NEXT / BACK (Before CTA)
      ========================= */}
      <div className="
        mt-12 sm:mt-16
        border-t border-[var(--border)]
        pt-6 sm:pt-8
      ">
        {/* Back button - always visible on top on mobile */}
        <div className="flex justify-center mb-4 sm:hidden">
          <Link
            href="/#portfolio"
            className="
              group
              inline-flex items-center justify-center gap-2
              px-5 py-2.5
              rounded-full
              border border-[var(--border)]
              bg-[var(--surface)]
              text-xs font-medium
              text-[var(--text-muted)]
              hover:text-[var(--fg)]
              hover:border-[var(--accent-1)]
              transition-all
              active:scale-95
            "
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span>All projects</span>
          </Link>
        </div>

        {/* Navigation row */}
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {prev ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="
                group
                flex items-center gap-2 sm:gap-3
                px-3 sm:px-5 py-2.5 sm:py-3
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                text-xs sm:text-sm font-medium
                text-[var(--text-muted)]
                hover:text-[var(--fg)]
                hover:border-[var(--accent-1)]
                hover:bg-[var(--surface-strong)]
                transition-all
                active:scale-95
                max-w-[45%] sm:max-w-none
              "
            >
              <ArrowLeft className="h-4 w-4 flex-shrink-0 transition-transform group-hover:-translate-x-1" />
              <span className="truncate hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Prev</span>
            </Link>
          ) : (
            <div />
          )}

          {/* Back Link - Center (desktop only) */}
          <Link
            href="/#portfolio"
            className="
              hidden sm:flex
              group
              items-center justify-center gap-2
              px-5 py-3
              rounded-xl
              border border-[var(--border)]
              bg-[var(--surface)]
              text-sm font-medium
              text-[var(--text-muted)]
              hover:text-[var(--fg)]
              hover:border-[var(--accent-1)]
              hover:bg-[var(--surface-strong)]
              transition-all
            "
          >
            <LayoutGrid className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>All projects</span>
          </Link>

          {next ? (
            <Link
              href={`/portfolio/${next.slug}`}
              className="
                group
                flex items-center gap-2 sm:gap-3
                px-3 sm:px-5 py-2.5 sm:py-3
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                text-xs sm:text-sm font-medium
                text-[var(--text-muted)]
                hover:text-[var(--fg)]
                hover:border-[var(--accent-1)]
                hover:bg-[var(--surface-strong)]
                transition-all
                active:scale-95
                max-w-[45%] sm:max-w-none
              "
            >
              <span className="truncate hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* =========================
         CTA SECTION (Modern design)
      ========================= */}
      <div className="
        mt-12 sm:mt-20
        relative
        overflow-hidden
        rounded-2xl sm:rounded-3xl
        border border-[var(--border)]
        bg-[var(--surface)]
        p-6 sm:p-10 lg:p-16
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
            text-xl sm:text-2xl md:text-3xl
            font-semibold
            mb-3 sm:mb-4
          ">
            Want a similar project?
          </h3>
          <p className="
            text-sm sm:text-base md:text-lg
            text-[var(--text-muted)]
            mb-6 sm:mb-8
            leading-relaxed
          ">
            Let's discuss how we can bring your vision to life with the same quality and attention to detail.
          </p>
          <Link
            href="/#contact"
            className="
              inline-flex items-center justify-center gap-2
              rounded-xl sm:rounded-2xl
              px-6 sm:px-8 py-3 sm:py-4
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
            <ArrowRight className="h-4 w-4" />
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
  const Icon = sectionIcons[title as keyof typeof sectionIcons];

  return (
    <section className="
      relative
      p-4 sm:p-6
      rounded-xl sm:rounded-2xl
      bg-[var(--surface)]
      border border-[var(--border)]
    ">
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div
            className="
              flex items-center justify-center
              w-8 h-8 sm:w-10 sm:h-10
              rounded-xl
              bg-[var(--accent-1)]/10
            "
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--accent-1)]" />
          </div>
        )}
        <h2
          className="
            text-lg sm:text-xl md:text-2xl
            font-semibold
          "
        >
          {title}
        </h2>
      </div>
      <div className="text-sm sm:text-base">
        {children}
      </div>
    </section>
  );
}
