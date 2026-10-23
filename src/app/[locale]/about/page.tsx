import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Gauge,
  Layers,
  Rocket,
  Search,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { ACCENT_1, ACCENT_2 } from '@/lib';
import { projectsFor } from '@/data/projects';
import { findService, type ServiceKey } from '@/data/services';
import { isLocale, localizePath, type Locale } from '@/i18n';
import { getLocale } from '@/i18n/server';

const STEP_ICONS = [Search, Code, Rocket];
const PRINCIPLE_ICONS = [Layers, Gauge, ShieldCheck, Wrench];

const COPY = {
  en: {
    title: 'About — How We Build Digital Products',
    description:
      'How Sites Pro works: a Riga-based studio that builds websites, web platforms and AI automations the way a product team would — and runs its own products on the same stack.',
    socialTitle: 'About Sites Pro — How We Build Digital Products',
    eyebrow: 'About Sites Pro',
    h1: 'A small studio that builds',
    h1Accent: 'like a product team',
    intro:
      'Sites Pro is SIA SitesPro, a web development studio in Riga. We design and build websites, web platforms and AI automations for companies in Latvia, the EU and beyond — and we run our own products on the same stack, which keeps us honest about what actually works.',
    facts: (cases: number, own: number) => [
      { value: 'Riga', label: 'Latvia — working across the EU and worldwide' },
      { value: String(cases), label: 'case studies in the portfolio' },
      { value: String(own), label: 'products of our own' },
      { value: 'EN · LV · RU', label: 'working languages' },
    ],
    processEyebrow: 'How we work',
    processTitle: 'Three stages, no surprises',
    processText:
      'The same process for a five-page site and a multi-year platform — what changes is the depth of each stage, not the order.',
    stage: 'Stage',
    steps: [
      {
        title: 'Discovery & strategy',
        text: 'One call to understand the business, then a short written brief we both sign off on: goals, constraints, what already exists, what "done" looks like. For anything bigger than a brochure site we map the data and the integrations before a single screen is designed.',
        delivers: 'Brief · scope · fixed price and timeline',
      },
      {
        title: 'Design & build',
        text: 'Design and engineering run together, not in sequence. You see a working version early and often — a staging link you can click, not a slide deck. Content, SEO structure and performance budgets are part of the build from the first week.',
        delivers: 'Staging site · weekly check-ins · content and SEO in place',
      },
      {
        title: 'Test, launch & scale',
        text: 'Cross-device testing, Core Web Vitals, accessibility and security checks before launch; DNS, hosting and monitoring handled by us. After launch the same team stays on for support, new features and the next version.',
        delivers: 'Launch checklist · handover · support plan',
      },
    ],
    principlesEyebrow: 'Principles',
    principlesTitle: 'What we optimise for',
    principles: [
      {
        title: 'Product-first UX',
        text: 'Every decision is driven by clarity, structure and predictable user behaviour — not by what is fashionable this quarter.',
      },
      {
        title: 'Performance by default',
        text: 'Minimal JavaScript, native browser features and fast-loading interfaces. Speed is a feature the client feels every day.',
      },
      {
        title: 'Production-ready',
        text: 'Security, scalability and clean architecture from day one, so the site you launch is the site you can grow.',
      },
      {
        title: 'We run what we build',
        text: 'Our own accounting SaaS and CRM run on the same stack and practices we sell. If something is painful, we feel it first.',
      },
    ],
    ownEyebrow: 'Our own products',
    ownTitle: 'Built and run by us',
    caseStudy: 'Case study',
    whatWeBuild: 'What we build',
    services: ['web', 'web-platforms', 'ai', 'consulting'] as ServiceKey[],
    closing:
      'Sites Pro is built for founders, companies and teams who value quality, clarity and long-term growth. We don’t chase trends — we design systems that last, and we stay around to run them.',
    start: 'Start a project',
    work: 'See the work',
  },
  lv: {
    title: 'Par mums - kā mēs veidojam digitālus produktus',
    description:
      'SitesPro ir web izstrādes studija Rīgā: mājas lapas, web platformas un AI automatizācija, veidota kā produktu komandā - un uz tām pašām tehnoloģijām darbojas arī mūsu pašu produkti.',
    socialTitle: 'Par SitesPro - kā mēs veidojam digitālus produktus',
    eyebrow: 'Par SitesPro',
    h1: 'Neliela studija, kas strādā',
    h1Accent: 'kā produktu komanda',
    intro:
      'SitesPro ir SIA SitesPro - web izstrādes studija Rīgā. Mēs projektējam un izstrādājam mājas lapas, web platformas un AI automatizāciju uzņēmumiem Latvijā, ES un citur pasaulē, un uz tām pašām tehnoloģijām darbinām arī savus produktus. Tas palīdz godīgi zināt, kas tiešām strādā.',
    facts: (cases: number, own: number) => [
      { value: 'Rīga', label: 'Latvija - strādājam visā ES un pasaulē' },
      { value: String(cases), label: 'projekti mūsu portfolio' },
      { value: String(own), label: 'mūsu pašu produkti' },
      { value: 'LV · EN · RU', label: 'darba valodas' },
    ],
    processEyebrow: 'Kā mēs strādājam',
    processTitle: 'Trīs posmi bez pārsteigumiem',
    processText:
      'Tas pats process piecu lapu vietnei un vairāku gadu platformai - mainās katra posma dziļums, nevis secība.',
    stage: 'Posms',
    steps: [
      {
        title: 'Izpēte un stratēģija',
        text: 'Viena saruna, lai saprastu jūsu biznesu, un īss rakstisks uzdevums, ko apstiprinām abi: mērķi, ierobežojumi, kas jau ir izdarīts un kā izskatās gatavs rezultāts. Visam, kas ir lielāks par vizītkartes vietni, vispirms izplānojam datus un integrācijas.',
        delivers: 'Uzdevums · apjoms · fiksēta cena un termiņi',
      },
      {
        title: 'Dizains un izstrāde',
        text: 'Dizains un izstrāde notiek paralēli, nevis pēc kārtas. Strādājošu versiju redzat agri un bieži - saiti uz testa vietni, nevis prezentāciju. Saturs, SEO struktūra un ātruma prasības ir daļa no darba jau pirmajā nedēļā.',
        delivers: 'Testa vietne · iknedēļas sarunas · saturs un SEO savās vietās',
      },
      {
        title: 'Testēšana, palaišana un atbalsts',
        text: 'Pirms palaišanas - pārbaude dažādās ierīcēs, Core Web Vitals, pieejamība un drošība; DNS, hostingu un uzraudzību nodrošinām mēs. Pēc palaišanas tā pati komanda turpina atbalstu, jaunas funkcijas un nākamo versiju.',
        delivers: 'Palaišanas saraksts · nodošana · atbalsta plāns',
      },
    ],
    principlesEyebrow: 'Principi',
    principlesTitle: 'Kam mēs pievēršam uzmanību',
    principles: [
      {
        title: 'Saprotams lietotājam',
        text: 'Katru lēmumu nosaka skaidrība, struktūra un paredzama lietotāja uzvedība - nevis tas, kas šobrīd ir modē.',
      },
      {
        title: 'Ātrums pēc noklusējuma',
        text: 'Minimāli JavaScript, pārlūka iebūvētās iespējas un ātri ielādējamas lapas. Ātrumu klients izjūt katru dienu.',
      },
      {
        title: 'Gatavs darbam',
        text: 'Drošība, mērogojamība un tīra arhitektūra no pirmās dienas, lai palaisto vietni varētu attīstīt tālāk.',
      },
      {
        title: 'Lietojam to, ko veidojam',
        text: 'Mūsu pašu grāmatvedības SaaS un CRM darbojas uz tām pašām tehnoloģijām, ko piedāvājam klientiem. Ja kaut kas ir neērti, mēs to izjūtam pirmie.',
      },
    ],
    ownEyebrow: 'Mūsu produkti',
    ownTitle: 'Izveidoti un uzturēti pašu spēkiem',
    caseStudy: 'Projekta apraksts',
    whatWeBuild: 'Ko mēs darām',
    services: ['web', 'ecommerce', 'web-platforms', 'ai', 'maintenance', 'seo-geo'] as ServiceKey[],
    closing:
      'SitesPro ir domāts uzņēmējiem, uzņēmumiem un komandām, kam svarīga kvalitāte, skaidrība un ilgtermiņa izaugsme. Mēs nedzenamies pēc modes - veidojam sistēmas, kas kalpo ilgi, un paliekam blakus, lai tās uzturētu.',
    start: 'Sākt projektu',
    work: 'Skatīt darbus',
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: PageProps<'/[locale]/about'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = COPY[locale];
  return pageMetadata({
    locale,
    title: c.title,
    description: c.description,
    path: '/about',
    socialTitle: c.socialTitle,
    image: false, // opengraph-image.tsx in this folder
  });
}

export default async function AboutPage() {
  const locale = await getLocale();
  const c = COPY[locale];
  const projects = projectsFor(locale);
  const ownProducts = projects.filter((p) => p.own);
  const facts = c.facts(projects.length, ownProducts.length);
  const services = c.services
    .map((key) => findService(locale, key))
    .filter((s) => s !== undefined);

  return (
    <div className="relative">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-32 pb-14 sm:pb-20">
        <span className="section-eyebrow">{c.eyebrow}</span>

        <h1 className="font-display mt-4 max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          {c.h1} <span className="text-gradient">{c.h1Accent}</span>
        </h1>

        <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
          {c.intro}
        </p>

        {/* FACTS */}
        <dl className="mt-10 sm:mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-[var(--bg)] px-5 py-5 sm:px-6 sm:py-6">
              <dt className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{f.value}</dt>
              <dd className="mt-1 text-sm text-[var(--text-muted)]">{f.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="max-w-2xl">
          <span className="section-eyebrow">{c.processEyebrow}</span>
          <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
            {c.processTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">{c.processText}</p>
        </div>

        <ol className="mt-10 sm:mt-14 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {c.steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <li key={s.title} className="card-premium card-topline flex flex-col rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)]">
                    <Icon className="h-5 w-5" style={{ color: 'var(--accent-text)' }} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
                    {c.stage} {i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{s.text}</p>
                <p className="mt-auto pt-5 text-xs font-medium" style={{ color: 'var(--accent-text)' }}>
                  {s.delivers}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <span className="section-eyebrow">{c.principlesEyebrow}</span>
        <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
          {c.principlesTitle}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {c.principles.map((p, i) => {
            const Icon = PRINCIPLE_ICONS[i];
            return (
              <div key={p.title} className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)]">
                  <Icon className="h-5 w-5" style={{ color: 'var(--accent-text)' }} />
                </span>
                <div>
                  <h3 className="text-base font-semibold sm:text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{p.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OWN PRODUCTS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <span className="section-eyebrow">{c.ownEyebrow}</span>
        <h2 className="font-display mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
          {c.ownTitle}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {ownProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="card-premium group flex flex-col rounded-2xl p-5 sm:p-6"
            >
              <span className="font-display text-lg font-semibold">{p.title}</span>
              <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {p.description}
              </span>
              <span
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium opacity-70 transition-opacity group-hover:opacity-100"
                style={{ color: 'var(--accent-text)' }}
              >
                {c.caseStudy}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
            {c.whatWeBuild}
          </span>
          {services.map((s) => (
            <Link
              key={s.key}
              href={localizePath(locale, s.path)}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent-1)]/50 hover:bg-[var(--surface-strong)]"
            >
              {s.name}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </Link>
          ))}
        </div>
      </section>

      {/* CLOSING + CTA */}
      <section className="px-4 sm:px-6 pb-24 sm:pb-32">
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[var(--border)] px-6 py-12 sm:px-12 sm:py-16"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, ${ACCENT_1} 10%, var(--surface)), color-mix(in srgb, ${ACCENT_2} 6%, var(--surface)))`,
          }}
        >
          <p className="max-w-3xl text-lg leading-relaxed sm:text-xl">{c.closing}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className="btn-primary group text-sm">
              {c.start}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/portfolio" className="btn-secondary text-sm">
              {c.work}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
