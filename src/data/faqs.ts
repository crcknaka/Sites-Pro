export interface Faq {
  q: string;
  a: string;
}

/**
 * Shared by the FAQ accordion and the FAQPage structured data on the
 * home page — keep both fed from this single source.
 */
export const faqs: Faq[] = [
  {
    q: 'What’s the typical timeline for a project?',
    a: 'There’s no fixed timeline — it depends on the scope, complexity and level of responsibility. A focused website can take a few weeks, while web platforms, fintech products or AI automations usually take longer due to architecture, integrations and testing. We define the timeline upfront during the discovery phase and align it with your priorities, so expectations are clear from day one.',
  },
  {
    q: 'What is your development process?',
    a: 'Three stages, in the same order for every project. Discovery: one call and a short written brief with scope, a fixed price and a timeline. Design and build: design and engineering run together, and you get a staging link you can click from early on, with weekly check-ins. Test, launch and support: cross-device, performance, accessibility and security checks, then launch — and the same team stays on afterwards.',
  },
  {
    q: 'Do you offer ongoing support and maintenance?',
    a: 'Yes. We offer flexible maintenance packages that include security updates, content changes, performance monitoring, and technical support. We’re committed to your long-term success.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We use modern, industry-leading technologies including React, Next.js, TypeScript, Node.js, and cloud platforms. Our stack is selected based on your project’s needs for performance and scalability.',
  },
  {
    q: 'Can you help with redesigning an existing website?',
    a: 'Absolutely. We specialize in website redesigns, whether you need a visual refresh, improved functionality, or a complete overhaul. We preserve what works while enhancing your digital presence.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We typically work with a 50% deposit to begin, with the remaining balance due upon completion. For larger projects, milestone-based payments are available. We accept cards, PayPal, SEPA, and crypto.',
  },
  {
    q: 'Do you provide hosting services?',
    a: 'Yes. Hosting, DNS and monitoring are part of the launch: we run sites on our own managed servers in the EU, or set everything up on your own cloud account if you prefer to own the infrastructure.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply reach out via our contact form or social channels. We’ll schedule a free consultation to discuss your goals and provide a tailored proposal with timeline and pricing.',
  },
];
