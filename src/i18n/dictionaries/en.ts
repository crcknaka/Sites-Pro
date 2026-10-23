/**
 * Interface copy for the English site. lv.ts must match this shape — the
 * `Dictionary` type below is what keeps the two in step.
 */
const en = {
  site: {
    name: 'Sites Pro',
    description: 'Product-grade websites, platforms and AI automations built to scale.',
    defaultTitle: 'Sites Pro — Web Development, Platforms & AI Automation Agency',
    ogAlt: 'Sites Pro — Digital Done Right',
    location: 'Riga, Latvia — working across the EU and worldwide',
  },

  nav: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Get Started',
    skip: 'Skip to content',
    homeLabel: 'Sites Pro — home',
    main: 'Main',
    mobile: 'Mobile',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  theme: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
  },

  footer: {
    tagline: 'Product-grade websites, web platforms and AI automations — built to scale.',
    motto: 'Digital Done Right.',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    allServices: 'All services',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    legal: 'Legal Notice',
    /** Link to the other language's site. */
    switchLabel: 'Latviski — sitespro.lv',
    extraLinks: [{ label: 'Web development in Riga', href: '/web-development-riga' }],
  },

  hero: {
    badge: 'Available for new projects',
    title: 'Product-grade websites and',
    titleAccent: 'web applications',
    intro:
      'We design and build scalable websites, web platforms and secure digital products — from the first conversation to production, and the years after.',
    primary: 'Start a project',
    secondary: 'See the work',
    note: 'Working across the EU and worldwide',
    windows: [
      'Payment gateway operator console',
      'Web studio CRM dashboard',
      'Vadi accounting platform',
    ],
    clients: 'Selected clients',
  },

  servicesSection: {
    eyebrow: 'What we do',
    title: 'Our',
    highlight: 'Services',
    subtitle:
      'We design and build digital products — from high-performance websites to complex web platforms and automations.',
    learnMore: 'Learn more',
    also: 'Also',
    /** Home page cards: which service each links to and which product window it shows. */
    cards: [
      {
        service: 'web',
        scene: 'web',
        title: 'Websites',
        description: 'High-performance websites built for growth. Scalable, fast and product-ready.',
      },
      {
        service: 'web-platforms',
        scene: 'web-platforms',
        title: 'Web Platforms',
        description:
          'Product-grade web applications and platforms. Built for complexity, scale and long-term use.',
      },
      {
        service: 'ai',
        scene: 'ai',
        title: 'AI & Automations',
        description:
          'AI-powered automations for digital products and workflows. Reduce manual work and improve efficiency.',
      },
      {
        service: 'consulting',
        scene: 'consulting',
        title: 'Consulting',
        description:
          'Strategic digital consulting to guide your transformation. We help you design, validate and scale digital solutions.',
      },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    title: 'We connect whatever your product runs on',
    text: 'Payments, banking, CRM, logistics, AI — if it has an API, we have probably wired it in. These are the ones that come up most often.',
    tabsLabel: 'Integration categories',
    /** Tab names, in the order of the categories in integrations.tsx. */
    categories: [
      'Payments',
      'Fintech & banking',
      'E-commerce',
      'CRM & marketing',
      'Communication',
      'AI',
      'Infrastructure',
    ],
  },

  spotlight: {
    eyebrow: 'Case study · own product',
    title: 'Accounting that tells you what to do',
    text: 'Vadi is our own SaaS for Latvian sole traders and small companies: a tax calendar with the amounts already calculated, payroll with a full gross-to-net breakdown, bank statement matching and declarations that leave the system in the exact format the tax office expects.',
    imageAlt: 'Vadi dashboard — July overview with income, expenses, result and the tax calendar',
    caseLabel: 'Vadi case study',
    facts: [
      { label: 'Eight free tax calculators', sub: 'on current-year rates' },
      { label: 'Declarations in VID EDS format', sub: 'MUN filed straight from the app' },
      { label: 'LV · EN · RU', sub: 'product and marketing site' },
    ],
    read: 'Read the case study',
    open: 'Open vadi.lv',
  },

  categories: {
    All: 'All',
    Websites: 'Websites',
    Commerce: 'Commerce',
    Apps: 'Apps',
    Fintech: 'Fintech',
  },

  portfolioSection: {
    eyebrow: 'Portfolio',
    title: 'Selected',
    highlight: 'Work',
    subtitle:
      'A selection of projects where strategy, design, and technology come together to create meaningful digital experiences.',
    filterDescriptions: {
      All: 'All projects',
      Apps: 'Web apps, AI tools, interactive services',
      Commerce: 'Online stores & transactional platforms',
      Websites: 'Content-driven sites & product showcases',
      Fintech: 'Fintech platforms & payments',
    },
    loadMore: 'Load more projects',
    viewAll: (n: number) => `View all ${n} projects`,
    viewProject: 'View project',
    view: 'View',
  },

  portfolioHub: {
    title: 'Portfolio — Website, Platform & AI Project Case Studies',
    description:
      'Case studies from Sites Pro: websites, online stores, web platforms, apps and fintech products — the challenge, the solution and the result for each project.',
    socialTitle: 'Portfolio — Case Studies | Sites Pro',
    socialDescription:
      'Websites, commerce, apps and fintech projects with the challenge, solution and result behind each one.',
    collectionName: 'Sites Pro Portfolio',
    collectionDescription:
      'Case studies from Sites Pro: websites, online stores, web platforms, apps and fintech products.',
    eyebrow: 'Portfolio',
    h1: 'All case',
    h1Accent: 'studies',
    intro: (n: number) =>
      `${n} projects where strategy, design and engineering come together — websites, online stores, web platforms, apps and fintech products. Each case study covers the challenge, the solution and the result.`,
    categoriesLabel: 'Categories',
    categoryIntro: {
      Websites: 'Content-driven sites and product showcases.',
      Commerce: 'Online stores and transactional platforms.',
      Apps: 'Web apps, AI tools and interactive services.',
      Fintech: 'Fintech platforms and payment products.',
    },
    start: 'Start a project',
    howWeWork: 'How we work',
  },

  caseStudy: {
    titleSuffix: '— case study',
    ogEyebrow: 'Case study',
    builtWith: 'Built with',
    service: 'Service',
    challenge: 'Challenge',
    solution: 'Solution',
    result: 'Result',
    visit: 'Visit website',
    allProjects: 'All projects',
    prev: 'Previous',
    prevShort: 'Prev',
    next: 'Next',
    ctaTitle: 'Want a similar project?',
    ctaText:
      "Let's discuss how we can bring your vision to life with the same quality and attention to detail.",
    ctaButton: 'Get in Touch',
    relatedEyebrow: (category: string) => `More ${category.toLowerCase()} work`,
    relatedTitle: 'Related case studies',
    logoAlt: (title: string) => `${title} logo`,
    galleryOpen: 'Open image',
    galleryClose: 'Close',
    galleryPrev: 'Previous image',
    galleryNext: 'Next image',
  },

  serviceCases: {
    eyebrow: 'Selected work',
    defaultTitle: 'Projects we delivered under this service',
    all: 'All case studies',
  },

  landing: {
    start: 'Start a project',
    caseStudy: (title: string) => `${title} case study`,
    proofEyebrow: 'Proof',
    readCase: 'Read the case study',
    approachDefault: 'How we approach it',
    faqTitle: 'Questions we get asked',
    otherServices: 'Other services',
    breadcrumbServices: 'Services',
    whyEyebrow: 'Why it matters',
    forWhom: 'Who it is for',
    deliverables: 'What you get',
    tech: 'Technologies',
  },

  aboutSection: {
    eyebrow: 'About us',
    title: 'How We',
    highlight: 'Work',
    subtitle:
      'We follow a structured, product-driven process focused on clarity, scalability and long-term results.',
    steps: [
      {
        title: 'Discovery & Strategy',
        description:
          'We align on goals, constraints and technical direction to define scope and priorities.',
      },
      {
        title: 'Design & Build',
        description:
          'We design and build scalable products with a focus on architecture, performance and usability.',
      },
      {
        title: 'Test, Launch & Scale',
        description:
          'We prepare products for production, launch reliably and support long-term growth.',
      },
    ],
    more: 'How we work, in detail',
  },

  faqSection: {
    eyebrow: 'FAQ',
    title: 'Frequently Asked',
    highlight: 'Questions',
    subtitle:
      'Got questions? We’ve got answers. If you don’t find what you’re looking for, feel free to reach out.',
  },

  contact: {
    eyebrow: 'Get in touch',
    title: 'Start your project',
    subtitle: 'Tell us what you are building. You will hear back from us within a day.',
    nextTitle: 'What happens next',
    next: [
      {
        title: 'We reply within 24 hours',
        text: 'A real answer from the person who will run your project, not an auto-responder.',
      },
      {
        title: 'A 30-minute call',
        text: 'We go through goals, constraints and what already exists — no slides, no pitch.',
      },
      {
        title: 'A written proposal',
        text: 'Scope, timeline and a fixed price. If we are not the right fit, we say so and point you elsewhere.',
      },
    ],
    email: 'Email',
    responseTime: 'Response time',
    responseValue: 'Usually within 24 hours',
    basedIn: 'Based in',
    confidentiality: 'Confidentiality',
    confidentialityValue: 'NDA signed on request before any details are shared',
    privacyNote:
      'Your information is used solely to respond to your inquiry. We do not share your data with third parties and handle all submissions in accordance with GDPR.',
  },

  form: {
    name: 'Your name',
    email: 'Your email',
    service: 'What do you need?',
    budget: 'Budget range',
    message: 'About the project',
    messagePlaceholder: 'Tell us about the project — goals, timeline, anything already decided',
    /** Labels for the option values in contact-options.ts, in the same order. */
    services: ['Website', 'Web platform / application', 'AI & automation', 'Consulting', 'Not sure yet'],
    budgets: ['Under €3,000', '€3,000 – €10,000', '€10,000 – €30,000', '€30,000+', 'Not decided yet'],
    errors: {
      captcha: 'We could not confirm the form was sent by a person. Please try again.',
      invalid: 'Please check your name, email and message — something is missing or too long.',
      rate: 'Too many messages from this connection. Please wait a few minutes and try again.',
      send: 'Your message could not be delivered just now. Please try again in a minute.',
    },
    writeDirect: 'You can also write to us directly at',
    checking: 'Checking the form is not spam — one moment…',
    verifying: 'Verifying…',
    sending: 'Sending…',
    send: 'Send the brief',
    sentTitle: 'Message sent',
    sentText: 'Thanks for reaching out. We’ll reply within 24 hours with next steps.',
    sendAnother: 'Send another message',
  },

  notFound: {
    title: 'Page not found',
    text: 'The page you’re looking for doesn’t exist or has been moved.',
    home: 'Back Home',
    portfolio: 'See the work',
  },

  error: {
    title: 'Something went wrong',
    text: 'An unexpected error occurred. Please try again.',
    retry: 'Try again',
    home: 'Back Home',
  },

  breadcrumbHome: 'Home',
};

type Widen<T> = T extends string
  ? string
  : T extends (...args: infer A) => infer R
    ? (...args: A) => Widen<R>
    : T extends readonly (infer U)[]
      ? Widen<U>[]
      : T extends object
        ? { [K in keyof T]: Widen<T[K]> }
        : T;

export type Dictionary = Widen<typeof en>;

export default en satisfies Dictionary;
