import Link from 'next/link';
import ContactForm from '@/components/contact/contact-form';
import {
  Brain,
  Workflow,
  MessageSquare,
  Eye,
  Database,
  Sparkles,
} from 'lucide-react';

/* brand accents */
const ACCENT_1 = 'var(--accent-1)';
const ACCENT_2 = 'var(--accent-2)';

/* ======================================================
   DATA
====================================================== */

const techStack = [
  {
    name: 'OpenAI & Anthropic APIs',
    description: 'GPT-4, Claude for intelligent conversations',
  },
  {
    name: 'LangChain & Vector DBs',
    description: 'Advanced RAG and knowledge retrieval',
  },
  {
    name: 'Computer Vision',
    description: 'Image recognition and processing',
  },
  {
    name: 'n8n & Zapier workflows',
    description: 'No-code automation pipelines',
  },
  {
    name: 'Custom ML models',
    description: 'Tailored solutions for unique problems',
  },
  {
    name: 'Real-time data processing',
    description: 'Streaming analytics and insights',
  },
];

const useCases = [
  {
    icon: MessageSquare,
    title: 'Intelligent Chatbots',
    description: '24/7 customer support with human-like responses',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Eliminate repetitive tasks and reduce errors',
  },
  {
    icon: Eye,
    title: 'Document Processing',
    description: 'Extract data from invoices, contracts, forms',
  },
  {
    icon: Database,
    title: 'Data Analysis',
    description: 'Turn raw data into actionable insights',
  },
  {
    icon: Brain,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make smarter decisions',
  },
  {
    icon: Sparkles,
    title: 'Content Generation',
    description: 'Automated reports, summaries, and more',
  },
];

/* ======================================================
   PAGE
====================================================== */

export default function AIPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-6 pt-40 pb-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* TEXT */}
          <div>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
            >
              ← Back to services
            </Link>

            <span
              className="mt-10 block text-sm uppercase tracking-widest font-medium"
              style={{ color: ACCENT_1 }}
            >
              Intelligent Solutions
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              AI & Automations
            </h1>

            <p className="mt-6 text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              Intelligent automation solutions powered by AI.
              Streamline workflows and enhance productivity
              with smart systems.
            </p>

            <Link
              href="#contact"
              className="
                inline-block
                mt-10
                cursor-pointer select-none
                rounded-lg px-6 py-3 text-sm font-medium
                text-black
                transition-transform active:scale-[0.96]
                hover:opacity-90
              "
              style={{ background: ACCENT_1 }}
            >
              Start your project
            </Link>
          </div>

          {/* INFOGRAPHIC */}
          <div className="flex justify-center">
            <AIHeroInfographic />
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}
      <section className="px-6 py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center">
            Technology stack
          </h2>

          <p className="mt-6 text-center text-[var(--text-muted)] max-w-3xl mx-auto">
            Cutting-edge AI tools and frameworks for intelligent automation
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl p-6 border border-[var(--border)] bg-[var(--bg)]"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full"
                    style={{ backgroundColor: ACCENT_1 }}
                  />
                  <div>
                    <h3 className="font-medium">{tech.name}</h3>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ====================================================== */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span
              className="text-sm uppercase tracking-widest font-medium"
              style={{ color: ACCENT_1 }}
            >
              Use Cases
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              AI that works for you
            </h2>

            <p className="mt-4 text-[var(--text-muted)] max-w-2xl mx-auto">
              From automating mundane tasks to generating insights,
              AI transforms how you work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 border border-[var(--border)] bg-[var(--surface)]"
              >
                <div
                  className="
                    h-12 w-12 mb-6
                    rounded-xl
                    flex items-center justify-center
                    border border-[var(--border)]
                    bg-[var(--bg)]
                  "
                >
                  <item.icon size={22} style={{ color: ACCENT_1 }} />
                </div>

                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section
        id="contact"
        className="px-6 py-40 bg-[var(--surface-strong)] border-t border-[var(--border)]"
      >
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to automate your business?
          </h2>

          <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
            Let’s explore how AI can transform your operations.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

/* ======================================================
   HERO INFOGRAPHIC — FIXED, PERFECT GEOMETRY
====================================================== */

function AIHeroInfographic() {
  const size = 320;
  const center = size / 2;
  const radius = 120;

  const nodes = [
    { icon: MessageSquare, id: 'chat' },
    { icon: Workflow, id: 'workflow' },
    { icon: Eye, id: 'vision' },
    { icon: Database, id: 'data' },
    { icon: Sparkles, id: 'gen' },
    { icon: Brain, id: 'brain' },
  ];

  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center">
      {/* Ambient */}
      <div
        className="absolute inset-0 -z-10 blur-xl opacity-60 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 65% 35%, ${ACCENT_1}22 0%, transparent 70%), radial-gradient(circle at 30% 70%, ${ACCENT_2}22 0%, transparent 60%)`,
        }}
      />

      {/* Container with transparent background */}
      <div className="relative w-[280px] h-[280px] rounded-2xl bg-[var(--surface)]">
        <div className="relative w-full h-full group select-none" style={{ userSelect: 'none' }}>
          {/* SVG: lines + rotating ring */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            viewBox={`0 0 ${size} ${size}`}
            style={{ userSelect: 'none' }}
          >
            {/* rotating outer ring */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="var(--accent-1)"
              strokeOpacity="0.25"
              strokeDasharray="6 6"
              className="origin-center animate-orbit"
            />

            {/* connection lines */}
            {nodes.map((_, i) => {
              const angle = (i * 2 * Math.PI) / nodes.length;
              const x = center + radius * Math.cos(angle);
              const y = center + radius * Math.sin(angle);

              return (
                <line
                  key={i}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke="var(--accent-1)"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                  className="transition-opacity duration-300 group-hover:stroke-opacity-40"
                />
              );
            })}
          </svg>

          {/* CENTER CORE */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            <div className="relative select-none">
              <div className="absolute inset-0 rounded-2xl bg-[var(--accent-1)]/30 blur-xl animate-pulse-slow select-none" />
              <div
                className="
                  relative h-20 w-20 rounded-2xl
                  flex items-center justify-center
                  border
                  select-none
                "
                style={{
                  borderColor:
                    'color-mix(in srgb, var(--accent-1) 50%, transparent)',
                  backgroundImage: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
                  userSelect: 'none',
                }}
              >
                <Brain size={36} color="white" />
              </div>
            </div>
          </div>

          {/* ORBITING NODES */}
          {nodes.map((node, i) => {
            const angle = (i * 360) / nodes.length;

            return (
              <div
                key={node.id}
                className="absolute left-1/2 top-1/2 select-none"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translate(${radius}px)
                  `,
                  userSelect: 'none',
                }}
              >
                <div
                  className="
                    h-10 w-10
                    rounded-xl
                    flex items-center justify-center
                    border
                    bg-[var(--surface)]
                    transition-all duration-300
                    hover:scale-110
                    select-none
                  "
                  style={{
                    borderColor:
                      'color-mix(in srgb, var(--accent-1) 30%, var(--border))',
                    userSelect: 'none',
                  }}
                >
                  <node.icon size={16} style={{ color: ACCENT_1 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
