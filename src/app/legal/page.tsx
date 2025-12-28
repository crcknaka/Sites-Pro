import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Notice — Sites Pro',
  description:
    'Legal Notice for sitespro.org. Information about the operator, services, and liability disclaimer.',
};

/* brand accents via CSS vars */
const ACCENT_1 = 'var(--accent-1)';

export default function LegalPage() {
  return (
    <main className="relative">
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-40">
        {/* BACK TO HOME LINK */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
        >
          ← Back Home
        </Link>

        <h1 className="mt-10 text-4xl font-semibold tracking-tight text-[var(--fg)]">
          Legal Notice
        </h1>

        <div className="mt-8 space-y-8 text-[var(--text-muted)] leading-relaxed">
          <p>
            This website, <a href="https://sitespro.org" className="text-[var(--accent-1)] hover:underline">sitespro.org</a>, is operated by a private individual based in the European Union (Latvia).
          </p>

          <Section title="Operator Information">
            <ul className="space-y-2">
              <li><strong className="text-[var(--fg)]">Operator:</strong> Private individual</li>
              <li><strong className="text-[var(--fg)]">Location:</strong> European Union (Latvia)</li>
              <li><strong className="text-[var(--fg)]">Website:</strong> <a href="https://sitespro.org" className="text-[var(--accent-1)] hover:underline">https://sitespro.org</a></li>
              <li><strong className="text-[var(--fg)]">Email:</strong> <a href="mailto:info@sitespro.org" className="text-[var(--accent-1)] hover:underline">info@sitespro.org</a></li>
              <li><strong className="text-[var(--fg)]">LinkedIn:</strong> <a href="https://www.linkedin.com/company/sites-pro/" target="_blank" rel="noreferrer" className="text-[var(--accent-1)] hover:underline">https://www.linkedin.com/company/sites-pro/</a></li>
            </ul>
          </Section>

          <Section title="Services">
            <p>The website presents professional services including, but not limited to:</p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li>Web development</li>
              <li>Application development</li>
              <li>AI automations</li>
              <li>Technical consulting</li>
            </ul>
          </Section>

          <Section title="Liability Disclaimer">
            <p>
              The content of this website is provided for general informational purposes only.
              While reasonable efforts are made to keep information accurate and up to date, no warranties are given regarding completeness or accuracy.
            </p>
          </Section>

          <Section title="External Links">
            <p>
              This website may contain links to third-party websites.
              The operator has no control over the content or privacy practices of external sites and assumes no responsibility for them.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              This Legal Notice may be updated at any time without prior notice.
            </p>
          </Section>
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[var(--fg)]">
        {title}
      </h2>
      <div className="mt-3">
        {children}
      </div>
    </section>
  );
}

