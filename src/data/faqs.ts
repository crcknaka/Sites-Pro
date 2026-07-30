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
    a: 'We follow an agile methodology: Discovery → Design → Development → Testing → Launch. You’ll be involved at every stage with regular updates and opportunities for feedback to ensure the final product exceeds expectations.',
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
    a: 'We can recommend and set up hosting solutions tailored to your needs, from simple setups to scalable cloud infrastructure. Your site will be fast, secure, and reliable.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply reach out via our contact form or social channels. We’ll schedule a free consultation to discuss your goals and provide a tailored proposal with timeline and pricing.',
  },
];
