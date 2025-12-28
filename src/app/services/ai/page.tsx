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
   HERO INFOGRAPHIC — AI Neural Network
====================================================== */

function AIHeroInfographic() {
  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center group">
      {/* Glow effect */}
      <div
        className="absolute -inset-8 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${ACCENT_1}40, ${ACCENT_2}30, transparent)`,
        }}
      />

      {/* Container */}
      <div
        className="relative w-[300px] h-[280px] rounded-2xl border border-[var(--border)] overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02]"
        style={{
          background: 'color-mix(in srgb, var(--surface-strong) 95%, transparent)',
        }}
      >
        {/* Central Brain Node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className="h-20 w-20 rounded-2xl flex items-center justify-center animate-pulse-slow transition-all duration-300 hover:scale-110 cursor-pointer border backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`,
              borderColor: `color-mix(in srgb, white 20%, transparent)`,
              boxShadow: `0 0 40px ${ACCENT_1}60`,
            }}
          >
            <Brain size={40} color="white" />
          </div>
        </div>

        {/* Neural Connection Nodes - 6 around the center */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const radius = 100;
          const angleRad = (deg * Math.PI) / 180;
          const x = 150 + radius * Math.cos(angleRad);
          const y = 140 + radius * Math.sin(angleRad);

          // Calculate line start point (from edge of center circle)
          const centerRadius = 50; // half of h-20 w-20 (80px / 2 = 40px) + some padding
          const lineStartX = 150 + centerRadius * Math.cos(angleRad);
          const lineStartY = 140 + centerRadius * Math.sin(angleRad);

          // Calculate line end point (to edge of outer node)
          const nodeRadius = 24; // half of h-12 w-12 (48px / 2 = 24px)
          const lineEndX = 150 + (radius - nodeRadius) * Math.cos(angleRad);
          const lineEndY = 140 + (radius - nodeRadius) * Math.sin(angleRad);

          const icons = [MessageSquare, Workflow, Eye, Database, Sparkles, Brain];
          const Icon = icons[i];

          return (
            <div key={deg}>
              {/* Connection line - shortened to not overlap with nodes */}
              <svg
                className="absolute inset-0 pointer-events-none"
                style={{ width: '100%', height: '100%' }}
              >
                <line
                  x1={lineStartX}
                  y1={lineStartY}
                  x2={lineEndX}
                  y2={lineEndY}
                  stroke={i % 2 === 0 ? ACCENT_1 : ACCENT_2}
                  strokeOpacity="0.3"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="transition-all duration-500"
                />
              </svg>

              {/* Node */}
              <div
                className="absolute w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer z-20 border backdrop-blur-sm"
                style={{
                  left: `${x - 24}px`,
                  top: `${y - 24}px`,
                  background: i % 2 === 0
                    ? `${ACCENT_1}20`
                    : `${ACCENT_2}20`,
                  borderColor: i % 2 === 0 
                    ? `color-mix(in srgb, ${ACCENT_1} 40%, transparent)` 
                    : `color-mix(in srgb, ${ACCENT_2} 40%, transparent)`,
                  boxShadow: `0 4px 12px ${i % 2 === 0 ? ACCENT_1 : ACCENT_2}40`,
                }}
              >
                <Icon size={20} style={{ color: i % 2 === 0 ? ACCENT_1 : ACCENT_2 }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
