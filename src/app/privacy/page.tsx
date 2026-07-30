import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for sitespro.org. Learn how we collect, use, and protect your personal data under GDPR.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: { url: '/privacy' },
};

/* brand accents via CSS vars */
const ACCENT_1 = 'var(--accent-1)';

export default function PrivacyPage() {
  return (
    <main className="relative">
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-40">
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--fg)]">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-[var(--text-muted)]">
          Last updated: 30 January 2026
        </p>

        <div className="mt-8 space-y-8 text-[var(--text-muted)] leading-relaxed">
          <p>
            This Privacy Policy explains how personal data is collected, used, and protected when you visit sitespro.org (the "Website").
          </p>

          <Section title="1. Who We Are">
            <p>This website is operated by <strong>SIA SitesPro</strong>, a company registered in Latvia, European Union.</p>
            <p className="mt-4"><strong className="text-[var(--fg)]">Company:</strong> SIA SitesPro</p>
            <p><strong className="text-[var(--fg)]">Website:</strong> <a href="https://www.sitespro.org" className="text-[var(--accent-1)] hover:underline">https://www.sitespro.org</a></p>
            <p><strong className="text-[var(--fg)]">Contact email:</strong> <a href="mailto:info@sitespro.org" className="text-[var(--accent-1)] hover:underline">info@sitespro.org</a></p>
            <p><strong className="text-[var(--fg)]">LinkedIn:</strong> <a href="https://www.linkedin.com/company/sites-pro/" target="_blank" rel="noreferrer" className="text-[var(--accent-1)] hover:underline">https://www.linkedin.com/company/sites-pro/</a></p>
            <p className="mt-4">For the purposes of the General Data Protection Regulation (GDPR), SIA SitesPro acts as the Data Controller.</p>
          </Section>

          <Section title="2. What Personal Data We Collect">
            <p>We only collect personal data that you voluntarily provide.</p>
            <h4 className="mt-4 font-semibold text-[var(--fg)]">Contact Form</h4>
            <p className="mt-2">When you contact us through the website, we may collect:</p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li>Name (if provided)</li>
              <li>Email address</li>
              <li>Message content</li>
              <li>Any other information you choose to include</li>
            </ul>
          </Section>

          <Section title="3. Purpose of Data Processing">
            <p>Your personal data is processed for the following purposes:</p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li>Responding to inquiries and messages</li>
              <li>Providing information about services</li>
              <li>Business communication and follow-up</li>
              <li>Improving communication quality</li>
            </ul>
            <p className="mt-4">We do not use your data for automated decision-making or profiling.</p>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>We process personal data under the following legal bases (GDPR Article 6):</p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li><strong>Consent</strong> — when you voluntarily submit a contact form</li>
              <li><strong>Legitimate interest</strong> — responding to business inquiries and providing requested information</li>
            </ul>
          </Section>

          <Section title="5. Data Storage and Retention">
            <ul className="space-y-2">
              <li>Personal data is stored securely (email systems and hosting infrastructure).</li>
              <li>Data is retained only as long as necessary to handle your request or comply with legal obligations.</li>
              <li>You may request deletion of your data at any time.</li>
            </ul>
          </Section>

          <Section title="6. Data Sharing">
            <p>We do not sell, rent, or trade your personal data.</p>
            <p className="mt-4">Your data may only be accessed by:</p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li>The website operator</li>
              <li>Essential technical service providers (e.g. hosting or email services), solely for operational purposes</li>
            </ul>
            <p className="mt-4">All processors comply with GDPR or equivalent data protection standards.</p>
          </Section>

          <Section title="7. International Data Transfers">
            <p>
              If any data is processed outside the European Union, appropriate safeguards are applied in accordance with GDPR requirements (such as Standard Contractual Clauses).
            </p>
          </Section>

          <Section title="8. Your Rights Under GDPR">
            <p>As a data subject, you have the right to:</p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data ("right to be forgotten")</li>
              <li>Restrict or object to processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact SIA SitesPro at: <a href="mailto:info@sitespro.org" className="text-[var(--accent-1)] hover:underline">info@sitespro.org</a>
            </p>
          </Section>

          <Section title="9. Cookies and Tracking">
            <p>This website does not use cookies for tracking, analytics, or advertising purposes.</p>
            <p className="mt-2">If this changes in the future, this Privacy Policy will be updated accordingly.</p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>
              This website may contain links to third-party websites (such as LinkedIn).
              We are not responsible for the privacy practices or content of those websites.
            </p>
          </Section>

          <Section title="11. Data Security">
            <p>
              Appropriate technical and organizational measures are implemented to protect personal data against unauthorized access, loss, or misuse.
            </p>
            <p className="mt-2">However, no method of transmission over the Internet is 100% secure.</p>
          </Section>

          <Section title="12. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time.
              The latest version will always be available on this page with an updated revision date.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>If you have any questions regarding this Privacy Policy or how your data is handled, please contact:</p>
            <p className="mt-4"> <a href="mailto:info@sitespro.org" className="text-[var(--accent-1)] hover:underline">info@sitespro.org</a></p>
          </Section>
        </div>
      </section>

      {/* BACK HOME */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-center">
            <Link
              href="/"
              className="
                group
                flex items-center justify-center gap-2
                px-6 py-4
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                text-sm sm:text-base font-medium
                text-[var(--text-muted)]
                hover:text-[var(--fg)]
                hover:border-[var(--accent-1)]
                transition-all
                cursor-pointer select-none
              "
            >
              <span>←</span>
              <span>Back Home</span>
            </Link>
          </div>
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

