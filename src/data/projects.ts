export type ProjectCategory = 'Websites' | 'Commerce' | 'Apps' | 'Fintech';

/** Keys of the service pages under /services — used to cross-link cases and services. */
export type ServiceKey = 'web' | 'web-platforms' | 'ai' | 'consulting';

export const SERVICE_LABELS: Record<ServiceKey, string> = {
  web: 'Website Development',
  'web-platforms': 'Web Platform Development',
  ai: 'AI & Automations',
  consulting: 'Digital Consulting',
};

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory | ProjectCategory[];
  description: string;
  challenge?: string;
  solution?: string | string[];
  result?: string;
  image: string;
  images?: string[];
  /** Square brand mark, shown next to the title on the case page. */
  logo?: string;
  /** Platform and stack the project actually runs on, shown as chips. */
  tech?: string[];
  /** Service pages this case belongs to — drives cross-linking in both directions. */
  services?: ServiceKey[];
  /** Wide app screenshots: gallery goes full-width above the copy instead of the side column. */
  layout?: 'landscape';
  /** Short honest state, e.g. 'Prototype · road to MVP'. Shown as a badge next to the category. */
  status?: string;
  link?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
  youtube?: string;
  googlePlay?: string;
}

export const projects: Project[] = [
  {
    slug: 'vadi',
    title: 'Vadi',
    category: 'Fintech',
    tech: ['Next.js', 'React', 'VID EDS API', 'Multilingual (LV/EN/RU)'],
    services: ['web-platforms', 'consulting'],
    description: 'Accounting SaaS for Latvian sole traders, micro-enterprises and small companies — invoices, payroll, taxes and VID EDS declarations in one system that tells you what is due, when and how much.',
    challenge: `
      Latvian bookkeeping punishes anyone without an accountant: VAT, payroll
      taxes, MUN and CIT all run on their own deadlines and formulas, and the
      cost of a mistake is a VID penalty. Build a product that a courier, an IT
      freelancer or a five-person SIA can run alone — accurate enough to be
      trusted with real tax filings, simple enough to need no accounting
      background, and fast enough to set up in minutes. On top of that, the
      product had to reach an audience that does not search for "accounting
      software" — it searches for "how much tax do I pay on 1500 euro".
    `,
    solution: [
      'Tax calendar as the core UX — every deadline with its already-calculated amount, one click from reminder to done',
      'Payroll engine with a full gross-to-net breakdown: tax-free minimum, allowances, sick pay and holiday pay by average earnings',
      'VAT, employer report and CIT generated as VID EDS XML; MUN declaration filed straight from the system via the EDS API',
      'Bank statement import with automatic matching to invoices and expenses, and categorisation that learns recurring payments',
      'PDF invoicing with VAT marks, plus camera and PDF receipt scanning — postings and VAT calculations appear on their own',
      'Onboarding that pulls company details from the business register and sets up the chart of accounts — ready to work in about ten minutes',
      'Eight free public tax calculators on current-year rates (salary gross↔net, self-employed, MUN, regime comparison, VAT, dividends and CIT, vacation pay, sick pay), each result shown with its full breakdown',
      'Industry landing pages for couriers, taxi drivers, IT freelancers, beauty and wellness, e-commerce, trades and construction, tutors, consultants, retail, health and legal professionals',
      'Multi-user access for accountants and teams, audit log of who changed what, and invite-only permissions',
      'Data stored in an EU data centre with daily automatic backups',
      'Three subscription tiers (€9 / €17 / €35 per month incl. VAT) with a 7-day trial that needs no payment card',
      'Multilingual product and marketing site (LV / EN / RU) on Next.js, with a help and documentation portal',
    ],
    result: `
      A self-serve accounting platform that removes the guesswork from Latvian
      tax compliance: users always see what is due and when, declarations leave
      the system in the exact format VID expects, and onboarding takes about ten
      minutes instead of an accountant's onboarding call. The free calculators
      and industry pages turn high-intent tax searches into an organic acquisition
      channel that feeds the trial, while accountants get a shared workspace for
      the clients they manage.
    `,
    image: '/projects/screenshots/vadi.jpg',
    images: [
      '/projects/screenshots/vadi.jpg',
      '/projects/screenshots/vadi-features.jpg',
      '/projects/screenshots/vadi-calculators.jpg',
    ],
    logo: '/projects/logos/vadi.svg',
    link: 'https://vadi.lv/',
    facebook: 'https://www.facebook.com/vadi.lv',
    instagram: 'https://www.instagram.com/vadi.lv',
    linkedin: 'https://www.linkedin.com/company/vadi-lv',
    tiktok: 'https://www.tiktok.com/@vadi_lv',
    youtube: 'https://www.youtube.com/@vadi-lv',
  },

  {
    slug: 'payment-gateway',
    title: 'White-label Payment Gateway',
    category: ['Fintech', 'Apps'],
    status: 'Prototype · road to MVP',
    layout: 'landscape',
    tech: ['Go', 'PostgreSQL', 'REST API', 'HMAC signing', 'State machine', 'Double-entry ledger', 'Docker'],
    services: ['web-platforms', 'consulting'],
    description: 'Payment orchestration core built for a fintech client — merchant API, payment state machine, double-entry ledger, cascading acquirer routing, settlements with rolling reserve and a white-label hosted checkout. Working prototype, acquirers simulated.',
    challenge: `
      A fintech client needed the core of a payment gateway before signing
      acquirer contracts: something that proves the money model — how a payment
      moves through its states, how client funds stay apart from fees, what
      happens when an acquirer declines, times out or charges back — and that
      partners could put their own brand on. One constraint shaped everything:
      card data must never touch the system, so the build had to be honest
      about its PCI posture from the first commit.
    `,
    solution: [
      'Merchant REST API with idempotency keys, HMAC request signing, test and live key modes and rate limiting; the API reference is generated from the OpenAPI spec',
      'Payment state machine with enforced transitions — create, capture (partial), refund (partial, multiple), void — and a per-payment event timeline with every provider attempt',
      'Double-entry ledger in integer minor units; client funds kept apart from fee revenue, the safeguarding shape payment regulators expect',
      'Provider routing that cascades only on retryable declines; an acquirer timeout parks the payment in processing instead of authorising the same card twice',
      'Adaptive routing that ranks acquirers by observed authorisation rate with 10% exploration, and a route tester that dry-runs any payment through the live rules',
      'Transactional outbox feeding signed merchant webhooks, with exponential backoff and a dead-letter queue that can be replayed by hand',
      'Funding and settlements on the same ledger: acquirer statements reconciled line by line, rolling reserve held and released after T+N banking days, FX at the ECB reference rate less a spread',
      'Chargebacks modelled end to end — funds leave when the case opens, the fee is charged either way, a merchant whose balance no longer covers it ends up owing it',
      'White-label tenants managed from Settings: partner branding on checkout and portal, revenue share posted to the ledger on every capture',
      'Hosted checkout with zero JavaScript and no third-party resources — an empty PCI script inventory that cannot drift, with a 3-D Secure challenge branch',
      'Operator console (dashboard, payments, merchants, routing control room, ledger with integrity checks, payouts) and a read-only merchant portal opened by signed link',
      'One Go binary with templates and assets embedded, PostgreSQL, CI, and a demo seed spread over 30 days so every screen looks real',
    ],
    result: `
      A working prototype that runs the whole money cycle — authorise, capture,
      webhook, settle, reserve, reconcile, charge back — against simulated
      acquirers, with the seams (engine, router, providers, workers) already
      where the production services will be. Deliberately not built yet: real
      acquirer adapters, KYB and AML onboarding, cardholder payouts and merchant
      sign-in. That is the MVP roadmap, and the client can now scope it against
      something that runs.
    `,
    image: '/projects/screenshots/gateway/cover.jpg',
    logo: '/projects/logos/payment-gateway.svg',
    images: [
      '/projects/screenshots/gateway/dashboard.jpg',
      '/projects/screenshots/gateway/payment-detail.jpg',
      '/projects/screenshots/gateway/routing.jpg',
      '/projects/screenshots/gateway/payouts.jpg',
      '/projects/screenshots/gateway/checkout.jpg',
    ],
  },

  {
    slug: 'liquid-silk',
    title: 'Liquid Silk',
    category: 'Apps',
    layout: 'landscape',
    tech: ['WebGL', 'GLSL shaders', 'Web Audio', 'Zero dependencies'],
    services: ['web-platforms'],
    description: 'Interactive WebGL gallery of fourteen pointer-reactive scenes — liquid gold, a solar eclipse, ion storms, a living map — each with its own generative soundtrack. One HTML file, no dependencies, no build step.',
    challenge: `
      Show what a browser can do with nothing but a fragment shader: fourteen
      distinct scenes that react to every pointer movement, sound that is
      synthesised live rather than played from files, and all of it tuned for
      a trackpad — pinch, two-finger scroll, force click — while holding 60 fps
      on a Retina display and not going black when the GPU drops the context.
    `,
    solution: [
      'Fourteen fragment-shader scenes on pure WebGL 1, sharing one input pipeline: pointer trail, ripples, hue, flow direction and zoom',
      'Scene-specific optics — specular lighting from the cursor, chromatic dispersion on glass edges, ray-marched light shafts, thin-film iridescence, gravitational lensing',
      'A CPU particle scene with 3 000 bodies: attraction, swirl forces and shockwave impulses rendered as additive point sprites',
      'Generative sound in Web Audio with zero audio files — every scene gets its own drone chord, wind colour and pluck voice; wind follows pointer speed, pitch follows the hue dial',
      'Trackpad-first controls: two-finger scroll shifts palette and rotates flow, pinch zooms, click sends a shockwave, force click dimples the scene; touch equivalents on phones',
      'Adaptive quality — a frame-time average scales render resolution so heavy scenes hold 60 fps, deep idle halves the frame rate to save battery, DPR capped at 2',
      'Survives GPU context loss by rebuilding programs and buffers on restore; respects prefers-reduced-motion',
      'Custom cursor with difference blend, scene rail, per-scene hero titles, film grain, vignette and a filmic tone curve — all in a single dependency-free HTML file',
    ],
    result: `
      A screensaver-grade WebGL piece that opens from a single file in any
      modern browser, runs smoothly on a laptop GPU, and doubles as a living
      reference for shader techniques we reuse in client work: procedural
      lighting, particle systems, adaptive rendering budgets and synthesised
      audio without a single asset download.
    `,
    image: '/projects/screenshots/liquid-silk/cover.jpg',
    images: [
      '/projects/screenshots/liquid-silk/scene-01.jpg',
      '/projects/screenshots/liquid-silk/scene-02.jpg',
      '/projects/screenshots/liquid-silk/scene-04.jpg',
      '/projects/screenshots/liquid-silk/scene-08.jpg',
      '/projects/screenshots/liquid-silk/scene-14.jpg',
    ],
    link: 'https://crcknaka.github.io/liquid-silk/',
  },

  {
    slug: 'agency-crm',
    title: 'Web Studio CRM',
    category: 'Apps',
    status: 'Internal product · in daily use',
    layout: 'landscape',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Row-level security', 'Email automation', 'PDF generation'],
    services: ['web-platforms'],
    description: 'CRM built for a web development company — cold-call lists, a stage-guided sales pipeline, projects with kanban and client portal, agreements and acceptance acts as PDF, invoicing through the accounting SaaS, email tracking and a shared calendar.',
    challenge: `
      A small web studio runs on the same few people doing sales, delivery and
      billing, and off-the-shelf CRMs model none of that: cold-call lists that
      turn into leads, a demo-first sales method with a script for every stage,
      projects that need a kanban and a client-facing view, and documents that
      must come out as proper Latvian agreements and acceptance acts. The brief
      was one internal tool that follows the studio's actual process instead of
      bending the process to the tool.
    `,
    solution: [
      'Pre-lead lists for cold calling — status per company, callbacks, comments, one-click conversion into a lead',
      'Sales pipeline with enforced stage transitions and stage guides: scripts, checklists and tips shown at the stage where they apply, lost reasons required on the way out',
      'Lead workspace: contacts with multiple phones, call log with outcomes, follow-ups, a requirements questionnaire the client can fill via a signed link, activity history',
      'Projects with a task kanban, checklists, comments with @mentions, files, encrypted credentials and support items; badge counts served by one database function',
      'Client portal and an owner-only "view as client" preview, so the studio sees exactly what the customer sees',
      'Documents: agreements and acceptance acts rendered from HTML templates to A4 PDF with headless Chrome; invoices drafted in the CRM and issued through the accounting platform, which owns numbering, VAT and payment status via a signed webhook',
      'Monthly billing plans that issue and email recurring invoices unattended, resumable if a run fails, double-billing prevented by a database constraint',
      'Email: templates, scheduled sends, open and reply tracking through an inbox poller, unsubscribe handling; shared calendar synced with Google',
      'Reports on pipeline, revenue and team activity; notifications, news feed and a rich-text editor that keeps pasted formatting from Word and Docs',
      'Multi-tenant from day one: organisations with owner and manager roles, row-level security on every table, credentials encrypted at rest',
    ],
    result: `
      The studio's whole operating loop — find, call, qualify, build, bill,
      support — lives in one app that mirrors how the team actually works. New
      staff learn the sales method from the stage guides instead of a wiki,
      recurring invoices go out without anyone remembering, and every client
      document comes from a template rather than a copied file.
    `,
    image: '/projects/screenshots/crm/cover.jpg',
    images: [
      '/projects/screenshots/crm/dashboard.jpg',
      '/projects/screenshots/crm/leads-board.jpg',
      '/projects/screenshots/crm/project-detail.jpg',
      '/projects/screenshots/crm/calendar.jpg',
      '/projects/screenshots/crm/reports.jpg',
    ],
  },

  {
    slug: 'bodybar',
    title: 'BodyBar',
    category: 'Commerce',
    tech: ['Next.js', 'React', 'Framer Motion', 'Online payments', 'Custom admin panel'],
    services: ['web-platforms'],
    description: 'Membership platform for the BodyBar method — barre, stretching and women’s plastique — with protected video courses, online payments and an admin panel the client runs alone.',
    challenge: `
      Create a premium digital experience that captures the elegance and energy
      of the BodyBar method while handling protected video content, integrated
      payments, and full client-side content management.
    `,
    solution: [
      'Custom design with refined typography and graceful visual language',
      'Framer Motion animations for smooth, elegant page transitions',
      'Protected video delivery for exclusive training content',
      'Integrated payment systems for memberships and class bookings',
      'Custom-built admin panel for the client to manage content independently',
      'Mobile-first approach reflecting the on-the-go fitness audience',
    ],
    result: `
      A beautifully crafted platform that embodies BodyBar's philosophy of
      confidence, energy and harmony — giving clients a seamless experience
      from discovery to booking, while keeping content secure and easy to manage.
    `,
    image: '/projects/screenshots/bodybar.jpg',
    images: [
      '/projects/screenshots/bodybar.jpg',
      '/projects/screenshots/bodybar-2.jpg',
      '/projects/screenshots/bodybar-3.jpg',
    ],
    logo: '/projects/logos/bodybar.png',
    link: 'https://bodybar.lv/',
    instagram: 'https://www.instagram.com/bodybar.lv/',
  },

  {
    slug: 'lepicur',
    title: 'Lepicur',
    category: 'Commerce',
    tech: ['WordPress', 'WooCommerce'],
    services: ['web'],
    description: 'Luxury crystal tableware and home interior boutique — Baccarat, Christofle, Daum, Lalique and Bernardaud — in a design-led storefront built for slow, considered browsing.',
    challenge: `
      Lepicur sells the most demanding brands in tableware — Baccarat, Lalique,
      Daum, Christofle, Bernardaud — to buyers who expect the online boutique to
      feel like the physical one. The site had to carry that positioning while
      still being a working store: fast, searchable, with a catalogue running
      into thousands of pieces.
    `,
    solution: [
      'Brand-led navigation and a brands section — customers here shop by house first, category second',
      'Restrained visual language: generous white space, editorial photography, a hero that sets tone rather than sells',
      'Top products and new arrivals rows, wishlist and product comparison for considered purchases',
      'Interior projects section that shows the pieces in situ and supports the studio\'s design work',
      'Delivery and free-shipping threshold stated up front, phone contact in the header for concierge-style questions',
      'WooCommerce catalogue tuned for performance despite heavy imagery, with newsletter capture',
    ],
    result: `
      A boutique that reads as luxury and works as a store: brand-first
      browsing, considered-purchase tools and a catalogue that stays fast under
      thousands of products — with the client managing every collection
      themselves.
    `,
    image: '/projects/screenshots/lepicur.jpg',
    images: [
      '/projects/screenshots/lepicur.jpg',
      '/projects/screenshots/lepicur-2.jpg',
      '/projects/screenshots/lepicur-3.jpg',
    ],
    logo: '/projects/logos/lepicur.png',
    link: 'https://lepicur.com/',
    facebook: 'https://www.facebook.com/lepicur/',
    instagram: 'https://www.instagram.com/lepicur/',
    linkedin: 'https://www.linkedin.com/company/crystalboutique/',
  },

  {
    slug: 'institut-de-francais-nice',
    title: 'Institut de Français Nice',
    category: 'Websites',
    tech: ['WordPress', 'WooCommerce', 'Multilingual'],
    services: ['web'],
    description: 'Site for the Institut de Français language school in Nice — immersive programme structure, daily schedules and pricing by course length, with enrolment handled online.',
    challenge: `
      The Institut de Français is a world-famous immersion school; the new Nice
      branch needed a site that sells a four-week total-immersion method to
      international students, explains a dense daily schedule and three
      programme lengths, and takes enrolments online — in a market where the
      school's reputation, not price, is the argument.
    `,
    solution: [
      'Programme structure made comparable at a glance: 2, 3 and 4 weeks (60, 90 and 120 hours) with what each includes',
      'Daily schedule laid out as mornings (expert-led classes and repeater sessions) and afternoons (animated learning sessions), so applicants see the intensity before they apply',
      'Transparent pricing per programme length, with what is and is not included',
      'Video hero and a location section that leans on the setting — a few steps from the Grand Hôtel, the Coulée Verte and the old town',
      'WooCommerce-backed application flow so enrolment and payment happen on the site',
      'Live Instagram feed and links to Facebook, Instagram and TikTok to show the school in session',
      'Multilingual WordPress build the school\'s team updates without a developer',
    ],
    result: `
      A site that carries the Institut's reputation into a new city: students
      can compare programmes, understand exactly how a day runs and enrol
      without email back-and-forth, while the school controls every text and
      price itself.
    `,
    image: '/projects/screenshots/institut.jpg',
    images: [
      '/projects/screenshots/institut.jpg',
      '/projects/screenshots/institut-de-francais-nice-2.jpg',
      '/projects/screenshots/institut-de-francais-nice-3.jpg',
    ],
    logo: '/projects/logos/institut-de-francais-nice.png',
    link: 'https://institutdefrancais-nice.com/',
    facebook: 'https://www.facebook.com/institutdefrancaisnice',
    instagram: 'https://www.instagram.com/institutdefrancais_nice',
    tiktok: 'https://www.tiktok.com/@institutdefrancais_nice',
  },

  {
    slug: 'madsword-studios',
    title: 'MadSword Studios',
    category: 'Websites',
    services: ['web'],
    description: 'Studio site for a mobile and VR game developer — a growing catalogue of iOS, Android and browser titles from TowerHex to Rigglebox VR, plus partnership and hiring sections.',
    challenge: `
      Showcase a game development studio's extensive portfolio and technical expertise
      while highlighting achievements and capabilities across mobile, VR, and multiplayer
      platforms to attract potential partners and clients.
    `,
    solution: [
      'Comprehensive game portfolio showcase with filtering by platform',
      'Highlighting 160+ games developed and 20M+ downloads',
      'Emphasizing 8+ years of experience in AAA mobile, VR and multiplayer projects',
      'Expertise in performance optimization, game servers, payments and cross-platform development',
      'Clear presentation of studio capabilities and services',
      'Professional design reflecting gaming industry standards',
    ],
    result: `
      An impressive portfolio website that effectively communicates the studio's
      track record and technical capabilities, attracting partnerships and showcasing
      the breadth of game development expertise.
    `,
    image: '/projects/screenshots/madsword.jpg',
    images: [
      '/projects/screenshots/madsword.jpg',
      '/projects/screenshots/madsword-studios-2.jpg',
      '/projects/screenshots/madsword-studios-3.jpg',
    ],
    logo: '/projects/logos/madsword-studios.png',
    link: 'https://madswordstudios.com/',
    facebook: 'https://www.facebook.com/MadSwordStudio/',
    youtube: 'https://www.youtube.com/user/MadSwordStudio',
  },


  {
    slug: 'sensora',
    title: 'Sensora',
    category: 'Websites',
    services: ['web'],
    description: 'Site for a Latvian cyber-security company — IT security services, cyber strategy, penetration testing and a security education platform, framed for a corporate buyer.',
    challenge: `
      Build trust and credibility for a cybersecurity services provider while
      clearly communicating expertise, certifications, and the comprehensive approach
      to information security that helps clients make informed decisions.
    `,
    solution: [
      'Group of professionals with unique real-life experience in different security areas',
      'Quality solutions to crucial security issues revealing existing and potential risks',
      'Team with genuine passion for information security and world-known certifications',
      'Continuous knowledge updates from conferences, news sites, and private sources',
      'Proactive client updates about latest vulnerabilities and security flaws',
      'Comprehensive services: Cyber strategy, Security education platform, Testing, VR training',
      'Clear 3-step process: Plan and Analyze, Evaluate and Manage, Remediate and Develop',
      '24/7/365 support and professional consulting services',
    ],
    result: `
      A professional cybersecurity platform that effectively communicates Sensora's
      expertise and commitment to client security, building trust through transparency
      and demonstrating the comprehensive approach to information security protection.
    `,
    image: '/projects/screenshots/sensora.jpg',
    images: [
      '/projects/screenshots/sensora.jpg',
      '/projects/screenshots/sensora-2.jpg',
      '/projects/screenshots/sensora-3.jpg',
    ],
    link: 'https://sensora.lv/',
  },

  {
    slug: 'imun',
    title: 'Imun',
    category: ['Websites', 'Fintech'] ,
    tech: ['React', 'Vite'],
    services: ['web', 'consulting'],
    description: 'Marketing site for a payment gateway provider — open banking, online acquiring, alternative payment methods and payouts, presented with a compliance-first tone.',
    challenge: `
      Create a professional, trustworthy online presence that communicates
      technical sophistication and security without overwhelming business clients
      with complexity.
    `,
    solution: [
      'Product structured around the four things merchants actually buy: open banking, online acquiring, alternative payment methods and payouts',
      'Clean, professional design emphasizing security and reliability',
      'Trust-building elements and compliance messaging throughout the funnel',
      'Structured information architecture that scales into technical documentation',
      'Fast single-page build so a technical audience never waits on a page load',
    ],
    result: `
      A credible and informative platform that effectively communicates Imun's
      fintech capabilities and builds confidence with enterprise clients.
    `,
    image: '/projects/screenshots/imun.jpg',
    images: [
      '/projects/screenshots/imun.jpg',
      '/projects/screenshots/imun-2.jpg',
      '/projects/screenshots/imun-3.jpg',
    ],
    logo: '/projects/logos/imun.png',
    link: 'https://imungate.eu/',
  },



  {
    slug: 'ma-sunglasses',
    title: 'Ma Sunglasses',
    category: 'Commerce',
    services: ['web'],
    description: 'Online sunglasses store built around a large catalogue — filterable browsing, clear product presentation and a checkout tuned for fast, repeat purchases.',
    challenge: `
      Present a wide assortment of products in a clear and user-friendly way
      without overwhelming the customer.
    `,
    solution: [
      'Structured product taxonomy',
      'Fast-loading catalogue pages',
      'Clear filtering and navigation',
      'Mobile-first UX',
    ],
    result: `
      A scalable online store that makes browsing a large catalogue intuitive
      and efficient.
    `,
    image: '/projects/screenshots/masunglasses.jpg',
    facebook: 'https://www.facebook.com/masunglasses.eu/',
    instagram: 'https://www.instagram.com/masunglasses.eu/',
  },

  {
    slug: 'sunachates',
    title: 'Sunachates',
    category: 'Websites',
    services: ['web'],
    description: 'Boutique catalogue site with a strong visual identity — image-led layouts, a consistent editorial rhythm and a responsive grid that keeps the products in front.',
    challenge: `
      Showcase products in a visually rich way while keeping the interface
      clean and easy to explore.
    `,
    solution: [
      'Image-led layouts',
      'Minimal interface elements',
      'Consistent visual rhythm',
      'Responsive grid system',
    ],
    result: `
      A visually engaging catalogue that highlights products without
      distracting from content.
    `,
    image: '/projects/screenshots/sunachates.jpg',
    facebook: 'https://www.facebook.com/sunachateskennel/',
  },

  {
    slug: 'pets-pro',
    title: 'Pets Pro',
    category: 'Commerce',
    tech: ['WordPress', 'WooCommerce', 'Multilingual', 'Mailchimp'],
    services: ['web'],
    description: 'Pet supplies store with a multilingual catalogue — clothing, beds, toys and care products, with featured categories and a favourites list on the storefront.',
    challenge: `
      A pet-supplies retailer selling across the Baltics needed a store that
      works like the big marketplaces shoppers are used to — fast browsing by
      category, favourites, loyalty points, clear delivery terms — without a
      marketplace budget, and with a small team running it in several languages.
    `,
    solution: [
      'Storefront built around featured categories (clothing and shoes, beds, dog toys, care products) and seasonal campaign banners',
      'Wishlist and a loyalty scheme: shoppers register, earn points with every purchase and spend them next time',
      'Country-specific free-delivery thresholds shown on every page, so cross-border buyers know the rules up front',
      'Promotional bar and campaign blocks (a −20% food line, for example) the team changes without touching the layout',
      'Multilingual WooCommerce catalogue with Elementor-editable pages',
      'Mailchimp newsletter capture and links to Instagram, TikTok and Facebook',
    ],
    result: `
      A Baltic-wide pet store the client operates alone: campaigns, prices and
      delivery rules change in the back office, while shoppers get the
      favourites, points and delivery clarity they expect from much bigger
      stores.
    `,
    image: '/projects/screenshots/pets-pro.jpg',
    images: [
      '/projects/screenshots/pets-pro.jpg',
      '/projects/screenshots/pets-pro-2.jpg',
    ],
    logo: '/projects/logos/pets-pro.png',
    link: 'https://pets-pro.eu/',
    instagram: 'https://www.instagram.com/pets_pro.eu',
    tiktok: 'https://www.tiktok.com/@petspro.eu',
    facebook: 'https://www.facebook.com/people/Pets-proeu/100095118016104/',
  },

  {
    slug: 'on-air-emotions',
    title: 'On Air Emotions',
    category: 'Websites',
    services: ['web'],
    description: 'Event agency catalogue built from modular content blocks — a flexible CMS structure that lets the team reshape their offering without touching the design.',
    challenge: `
      Present events and media content in a way that feels dynamic
      but remains structured.
    `,
    solution: [
      'Modular content sections',
      'Clear event hierarchy',
      'Strong contrast and typography',
      'Flexible CMS structure',
    ],
    result: `
      A dynamic yet controlled layout suitable for frequently changing content.
    `,
    image: '/projects/screenshots/onairemotions.jpg',
    link: 'https://onairemotions.com/',
    facebook: 'https://www.facebook.com/onairemotion',
    instagram: 'https://www.instagram.com/onairemotions/',
    tiktok: 'https://www.tiktok.com/@onairemotions.com',
  },



  {
    slug: 'goldberg',
    title: 'Goldberg',
    category: 'Websites',
    tech: ['WordPress', 'WooCommerce', 'Multilingual'],
    services: ['web'],
    description: 'Dental supplies catalogue for a Baltic distributor — endodontics, therapy, hygiene, orthodontics, implantology and instruments, organised so doctors find parts fast.',
    challenge: `
      A dental supplies distributor sells to an audience that knows exactly what
      it needs — a specific scaler tip, a probe, a particular brand of composite.
      The catalogue had to stay scannable across a wide technical range and three
      Baltic markets, without turning into a wall of part numbers, and the team
      had to be able to keep it current without a developer.
    `,
    solution: [
      'Category-first navigation across endodontics, therapy, hygiene, orthodontics, implantology and instruments',
      'Product cards that lead with the manufacturer reference, so professionals recognise the item at a glance',
      'Featured and popular product rows on the storefront for the fast-moving range',
      'Multilingual store covering the three Baltic markets the distributor serves',
      'WooCommerce back office so the client adds products, prices and categories independently',
      'Restrained, clinical visual language that keeps attention on the products',
    ],
    result: `
      A professional catalogue where a dentist gets from the homepage to the exact
      consumable in a couple of clicks, and where the distributor can expand the
      range across markets without touching the design or calling us.
    `,
    image: '/projects/screenshots/goldberg.jpg',
    images: [
      '/projects/screenshots/goldberg.jpg',
      '/projects/screenshots/goldberg-2.jpg',
    ],
    logo: '/projects/logos/goldberg.png',
    link: 'https://goldberg.lv/',
    facebook: 'https://www.facebook.com/goldberg.lv',
    instagram: 'https://www.instagram.com/goldberg.dental',
    tiktok: 'https://www.tiktok.com/@goldberg.dental.latvia',
  },

  {
    slug: 'barberly',
    title: 'Barberly',
    category: 'Websites',
    services: ['web'],
    description: 'Barbershop website — classic barbering positioned as a premium experience, with services, the team, social proof and an online booking flow that works on a phone.',
    challenge: `
      Create an elegant booking-focused website that reflects the premium
      barbershop experience while making appointment scheduling simple and intuitive.
    `,
    solution: [
      'Crafted grooming experiences tailored to your style',
      'Streamlined booking system without payment complexity',
      'Modern design that honors traditional barbering heritage',
      'Clear service presentation and appointment flow',
    ],
    result: `
      A sophisticated website that captures the essence of classic barbering
      while providing a seamless booking experience for clients.
    `,
    image: '/projects/screenshots/barberly.jpg',
  },

  {
    slug: 'finnex',
    title: 'Finnex',
    category: 'Websites',
    services: ['web'],
    description: 'Product catalogue for a manufacturing-focused brand — a simple visual language, fast-loading pages and navigation that keeps a wide range easy to scan.',
    challenge: `
      Present industrial products in a clean and approachable manner.
    `,
    solution: [
      'Simple visual language',
      'Focus on product imagery',
      'Straightforward navigation',
      'Fast-loading pages',
    ],
    result: `
      A practical catalogue that supports both marketing and sales use cases.
    `,
    image: '/projects/screenshots/finnex.jpg',
  },

  {
    slug: 'euc-one',
    title: 'EUC.ONE',
    category: ['Apps', 'Websites'],
    tech: ['Vite', 'Progressive Web App', 'Interactive maps'],
    services: ['web-platforms'],
    description: 'Platform for electric unicycle riders — community content, routes and model data in an installable web app built to be used on a phone, mid-ride.',
    challenge: `
      Electric-unicycle riders in Latvia had their community scattered across
      Telegram chats: where to charge, whether it is worth riding today, which
      wheel to buy, where to learn. The brief was a single rider-built platform
      that works on a phone mid-ride, installs without an app store, and gives
      the community somewhere to add its own knowledge.
    `,
    solution: [
      'Spots map: chargers and riding spots nearby, searchable, with riders adding their own',
      'Weather widget that turns the forecast into a riding verdict — "Dry — go ride", chance of rain — for the rider\'s city',
      'Market for wheels and gear, with listings added by riders',
      'Community gallery, training with an instructor, and an FAQ for people who have not bought their first wheel yet',
      'Range calculator built in as a tool (see the EUC Calculator case)',
      'Installable progressive web app — Android and iOS straight from the browser, no store listing needed',
      'Telegram login and a Telegram group link, since that is where the community already lives',
      'English and Russian interface',
    ],
    result: `
      The community's scattered knowledge now has one home that works at the
      roadside: riders check the weather verdict, find a charger, add a spot or
      a listing, and install it like an app — all from a browser, in either
      language.
    `,
    image: '/projects/screenshots/euc-one.jpg',
    images: [
      '/projects/screenshots/euc-one.jpg',
      '/projects/screenshots/euc-one-2.jpg',
      '/projects/screenshots/euc-one-3.jpg',
    ],
    logo: '/projects/logos/euc-one.png',
    link: 'https://euc.one/',
    facebook: 'https://www.facebook.com/euconeofficial',
    instagram: 'https://www.instagram.com/euc.one',
  },

  {
    slug: 'euc-calculator',
    title: 'EUC Calculator',
    category: 'Apps',
    tech: ['Vite', 'Progressive Web App', 'Client-side calculations'],
    services: ['web-platforms'],
    description: 'Interactive calculator for electric unicycle performance — a dark, data-first interface where inputs and results stay separated and every figure updates instantly.',
    challenge: `
      Range is the question every EUC buyer and rider asks, and the honest
      answer depends on a dozen variables — rider weight, speed, tyre pressure,
      temperature, riding style, battery degradation. The brief was a calculator
      that takes all of them and still feels like a single screen, not a
      spreadsheet.
    `,
    solution: [
      'Wheel selection from a preset list (with a custom option for any other wheel) that pre-fills battery capacity',
      'Riding parameters as toggles: riding style, tyre type, road surface, sitting or standing',
      'Sliders for rider weight, average speed, tyre pressure and air temperature, each with unit switches (kg/lbs, km/h/mph, bar/psi, °C/°F)',
      'Result shown two ways — expected range on a full battery and continuous ride time — with a relative range-quality indicator',
      'Every factor explained in plain language under the result, including how battery degradation is treated',
      'All calculation on the client, so results update instantly and the tool works inside the EUC.ONE progressive web app',
    ],
    result: `
      A calculator riders trust because it shows its work: move one slider and
      the range and ride time update instantly, with the assumptions written out
      rather than hidden — and it lives inside the EUC.ONE app, where the
      decision gets made.
    `,
    image: '/projects/screenshots/euc-calculator.jpg',
    images: [
      '/projects/screenshots/euc-calculator.jpg',
      '/projects/screenshots/euc-calculator-2.jpg',
      '/projects/screenshots/euc-calculator-3.jpg',
    ],
    logo: '/projects/logos/euc-calculator.png',
    link: 'https://euc.one/calculator/',
    facebook: 'https://www.facebook.com/euconeofficial',
    instagram: 'https://www.instagram.com/euc.one',
  },

  {
    slug: 'gift-roulette',
    title: 'Gift Roulette',
    category: 'Apps',
    services: ['web-platforms'],
    description: 'Secret Santa organiser — create an event, manage participants, draw names automatically and share admin links by email, with nothing to install and no account to join.',
    challenge: `
      Simplify the organization of Secret Santa events by providing an intuitive
      platform for creating events, managing participants, and coordinating gift
      exchanges without complexity.
    `,
    solution: [
      'Simple event creation with name, description, and date',
      'Easy participant management with minimum requirements',
      'Optional email notifications for admin links',
      'Streamlined interface for quick event setup',
      'Clear event details and participant tracking',
    ],
    result: `
      A user-friendly app that makes organizing Secret Santa events effortless,
      allowing users to focus on the fun of gift exchanges rather than logistics.
    `,
    image: '/projects/screenshots/gift-roulette.jpg',
  },

  {
    slug: 'ekobaltika',
    title: 'EkoBaltika',
    category: 'Commerce',
    tech: ['WordPress', 'WooCommerce', 'Multilingual'],
    services: ['web'],
    description: 'Laser cleaning of metal surfaces and CNC milling for wood and polymers, plus a tools web shop — services and products in one site, serving customers across Latvia.',
    challenge: `
      EkoBaltika does two different things — industrial services (laser cleaning
      of metal, CNC milling of wood and polymers) and retail of tools and car
      chemistry — for customers all over Latvia. One site had to sell both
      without confusing a workshop owner looking for a service quote with a
      hobbyist buying a wrench.
    `,
    solution: [
      'One homepage, two clear paths: services with a quick cost-estimate request, and the web shop with new arrivals and popular categories',
      'Product categories built for how customers search: tools for car repair, car chemistry, construction tools, metalworking tools',
      'Trust block that answers the practical questions first — work across all of Latvia, pay by card or invoice, delivery or on-site pickup, help choosing',
      'Service pages for laser cleaning and CNC milling with an individual-offer request form',
      'Customer accounts with registration, and client-service hours and phone in the header',
      'Multilingual WooCommerce build the team updates independently',
    ],
    result: `
      Services and retail now live on one domain without getting in each other's
      way: workshops request a laser-cleaning or milling quote in a minute,
      while shop customers browse, pay by card or invoice and pick up on site —
      and the team manages both from one WordPress back office.
    `,
    image: '/projects/screenshots/ekobaltika.jpg',
    images: [
      '/projects/screenshots/ekobaltika.jpg',
      '/projects/screenshots/ekobaltika-2.jpg',
      '/projects/screenshots/ekobaltika-3.jpg',
    ],
    logo: '/projects/logos/ekobaltika.png',
    link: 'https://ekobaltika.lv/lv/',
    facebook: 'https://www.facebook.com/ekobaltika.lv',
  },

  {
    slug: 'bullu-laivas',
    title: 'Buļļu Laivas',
    category: 'Commerce',
    tech: ['WordPress', 'WooCommerce', 'Multilingual'],
    services: ['web'],
    description: 'SUP and watersports shop — boards, paddles, wetsuits, clothing and gift cards, with a catalogue built for a seasonal range that turns over fast every summer.',
    challenge: `
      Buļļu Laivas is three businesses in one: Latvia's widest SUP board shop, a
      rental fleet (SUP, kayaks, jet skis, e-foil, motorboats) and a calendar of
      guided water events. The site had to sell boards, take rental bookings and
      fill event dates — all in a season that lasts a few months, on a phone, on
      the beach.
    `,
    solution: [
      'Shop-first homepage with the current sale, brand rows (Starboard, Shark, Gladiator, Aquatone, Yoloboard) and a "buy SUP" grid',
      'Rental section with per-hour pricing for every craft — SUP, jet ski, boats and kayaks, catamaran, e-foil, motorboats',
      'Events and corporate events with a calendar: sunrise SUP, river trips, group outings',
      'Guides that shorten the sales conversation — SUP board types and a "which size board should I choose" article, with "try before you buy" as the pitch',
      'Delivery rules in the top bar (free in Latvia above a threshold), gift cards, customer accounts',
      'Mobile layout with a persistent shop / cart / account bar, since most traffic arrives from the beach',
      'Multilingual WooCommerce catalogue the team restocks every spring',
    ],
    result: `
      One site now sells boards, books rentals and fills events for the season,
      and the guides answer the questions the team used to answer by phone.
      Everything is built for the mobile shopper who decides on the water, not
      at a desk.
    `,
    image: '/projects/screenshots/bullulaivas.jpg',
    images: [
      '/projects/screenshots/bullulaivas.jpg',
      '/projects/screenshots/bullu-laivas-2.jpg',
      '/projects/screenshots/bullu-laivas-3.jpg',
    ],
    logo: '/projects/logos/bullu-laivas.png',
    link: 'https://www.bullulaivas.lv/',
    facebook: 'https://www.facebook.com/bullulaivas/',
    instagram: 'https://www.instagram.com/bullu_laivas/',
    tiktok: 'https://www.tiktok.com/@bullu_laivas',
    youtube: 'https://www.youtube.com/channel/UCDurFuw59Rdw3_vcfk6ZJJw',
  },

  {
    slug: 'annexe-de-francais',
    title: 'Annexe de Français',
    category: 'Websites',
    services: ['web'],
    description: 'Informational site for a French language school’s programmes and courses — clear content sections, trust-focused design and typography built for long reading.',
    challenge: `
      Present educational offerings clearly to an international audience.
    `,
    solution: [
      'Clear content sections',
      'Simple navigation',
      'Trust-focused design',
      'Readable typography',
    ],
    result: `
      An informative and approachable website supporting educational outreach.
    `,
    image: '/projects/screenshots/annexedefrancais.jpg',
  },

  

  {
    slug: 'offshore-license',
    title: 'Offshore License',
    category: 'Fintech',
    tech: ['Bitrix', 'Multilingual'],
    services: ['web', 'consulting'],
    description: 'Trustworthy turnkey partner for offshore and onshore business setup with offices in London, Hong Kong, Cyprus, Prague and Riga.',
    challenge: `
      Establish credibility and trust for a complex financial services provider
      while clearly communicating expertise across multiple jurisdictions and
      specialized licensing requirements.
    `,
    solution: [
      'Company formation and corporate services',
      'Licensing for Forex, Crypto & ICO, Binaries, Financial intermediaries and Gambling',
      'Assistance with banking and merchant services',
      'Accounting and Audit services',
      'Turnkey solution for Forex, Crypto & ICO, Binaries and Gambling platforms',
      'Highlighting highly experienced staff and strong technological base',
      'Emphasizing wide partner network and broad geographical presence',
      'Clear service categorization and professional presentation',
    ],
    result: `
      A professional platform that effectively communicates Offshore License's
      comprehensive capabilities and international reach, building trust with
      clients seeking complex financial and corporate services.
    `,
    image: '/projects/screenshots/offshorelicense.jpg',
    images: [
      '/projects/screenshots/offshorelicense.jpg',
      '/projects/screenshots/offshore-license-2.jpg',
      '/projects/screenshots/offshore-license-3.jpg',
    ],
    link: 'https://www.offshorelicense.com/',
    facebook: 'https://www.facebook.com/OffshorelicenseLTD/',
    linkedin: 'https://www.linkedin.com/company/offshorelicense-ltd',
  },

  {
    slug: 'wellton',
    title: 'Wellton',
    category: 'Commerce',
    tech: ['WordPress', 'WooCommerce', 'Multilingual'],
    services: ['web'],
    description: 'Gift card shop for Wellton Hotels & Spa in Riga — SPA zones, massages and memberships sold as vouchers, with a purchase flow that still feels like giving a gift.',
    challenge: `
      Create an elegant and user-friendly platform for selling premium wellness
      vouchers that balances the luxurious brand identity with straightforward
      e-commerce functionality, while making the purchase process feel like a
      gift experience.
    `,
    solution: [
      'Premium, relaxing design aesthetic reflecting SPA experience',
      'Clear categorization of wellness offerings (SPA zones, massages, memberships)',
      'Easy-to-use voucher selection and purchase flow',
      'Gift-friendly presentation and flexible pricing options',
      'Trust-building elements highlighting professional service and premium facilities',
      'Mobile-optimized shopping experience',
    ],
    result: `
      A beautiful e-commerce platform that successfully sells wellness experiences
      online, making it easy for customers to purchase premium SPA vouchers as
      gifts or for personal use, while maintaining the luxurious Wellton brand
      identity.
    `,
    image: '/projects/screenshots/wellton.jpg',
    images: [
      '/projects/screenshots/wellton.jpg',
      '/projects/screenshots/wellton2.png',
      '/projects/screenshots/wellton-2.jpg',
    ],
    logo: '/projects/logos/wellton.png',
    link: 'https://shop.wellton.com/',
    facebook: 'https://www.facebook.com/welltonhotels/',
    instagram: 'https://www.instagram.com/wellton_hotels/',
  },

  {
    slug: 'window-pros',
    title: 'Bay Area Window Pros',
    category: 'Websites',
    tech: ['OctoberCMS', 'Laravel'],
    services: ['web'],
    description: 'Window and door replacement across the Bay Area — a factory-authorised dealer’s catalogue by brand, material and style, with financing options and free estimates.',
    challenge: `
      Build trust and credibility for a service-based business while showcasing
      extensive product variety, manufacturer partnerships, and installation expertise
      to convert visitors into qualified leads.
    `,
    solution: [
      'Large variety of styles, sizes and colors to transform home design',
      'Partnerships with highest quality manufacturers ensuring best dealer prices',
      'Guaranteed customer service with extensive product knowledge',
      'Team of installation experts with 20+ years of experience',
      'Custom design approach meeting specific project requirements',
      'HOA and city approval assistance for compliance',
      'Clear 4-step process from quote to project completion',
      'Trust-building credentials and statistics (5000+ jobs, 45,000+ windows installed)',
    ],
    result: `
      A professional service website that effectively communicates expertise and
      reliability, generating qualified leads through free quote requests while
      building confidence in the installation process.
    `,
    image: '/projects/screenshots/windowspros.jpg',
    images: [
      '/projects/screenshots/windowspros.jpg',
      '/projects/screenshots/window-pros-2.jpg',
      '/projects/screenshots/window-pros-3.jpg',
    ],
    link: 'https://bayareawindowpros.com/',
  },

  {
    slug: 'aerial-platform',
    title: 'Aerial Platform',
    category: ['Apps', 'Commerce'] ,
    services: ['web-platforms'],
    description: 'The premier marketplace connecting professional drone operators with clients who need exceptional aerial photography and videography services.',
    challenge: `
      Create a comprehensive marketplace platform that seamlessly connects drone
      operators with clients, facilitating bookings, payments, and service delivery
      while ensuring quality and trust on both sides of the transaction.
    `,
    solution: [
      'Professional operator profiles with portfolios and ratings',
      'Client-friendly booking system with service filtering',
      'Secure payment processing and transaction management',
      'Service categorization for different aerial photography needs',
      'Review and rating system for quality assurance',
      'Real-time availability and scheduling',
      'Mobile-responsive design for on-the-go bookings',
    ],
    result: `
      A modern marketplace platform that streamlines the connection between
      professional drone operators and clients, making exceptional aerial
      photography and videography services easily accessible. (Still in development.)
    `,
    image: '/projects/screenshots/aerial.jpg',

  },

  {
    slug: 'senso-projects',
    title: 'Senso Projects',
    category: 'Websites',
    tech: ['React', 'Vite'],
    services: ['web'],
    description: 'Complete design solutions from initial concept to final installation, handling every aspect of interior transformation with expertise and care.',
    challenge: `
      Create a professional website for an interior design and renovation company
      that showcases their comprehensive service offerings, international expertise,
      and structured project approach while building trust with potential clients.
    `,
    solution: [
      'Interior design services with 3D visualization and rendering',
      'Full renovation and demolition project implementation',
      'Professional electrical installation by certified electricians',
      'Expert plumbing works from design consultation to installation',
      'Custom furniture including kitchens, wardrobes, and built-ins',
      'Finishing works: painting, plastering, floor restoration, lighting',
      'Clear 5-step process from consultation to implementation',
      'International expertise with specialized services in Italy',
    ],
    result: `
      A sophisticated website that effectively communicates Senso Projects'
      comprehensive interior design and renovation capabilities, highlighting
      their structured approach and international experience to attract
      discerning clients seeking quality transformations.
    `,
    image: '/projects/screenshots/sensoprojects.jpg',
    images: [
      '/projects/screenshots/sensoprojects.jpg',
      '/projects/screenshots/senso-projects-2.jpg',
    ],
    link: 'https://www.sensoprojects.com/',
  },

  {
    slug: 'reppy',
    title: 'Reppy',
    category: 'Apps',
    tech: ['Mobile app', 'Offline-first architecture', 'Cross-device sync'],
    services: ['web-platforms'],
    description: 'Free, offline-first workout tracker that puts you in control. Track exercises, sets, reps, and weights — even without internet.',
    challenge: `
      Most fitness apps are bloated with ads, require constant internet connection,
      and lock basic features behind paywalls. Users lose their workout data when
      switching devices or lose motivation without seeing their progress.
    `,
    solution: [
      'Offline-first architecture for uninterrupted training anywhere',
      'Track exercises, sets, reps, and weights without internet',
      'Share workouts with friends and view detailed progress charts',
      'Export your data anytime — you own your fitness history',
      'No ads, no subscriptions, no data selling',
      'Cross-device sync when online, always available offline',
    ],
    result: `
      A clean, fast fitness companion that works anywhere. Your data syncs across
      devices when online, stays available when offline, and belongs to you.
      Train smarter, track progress, and stay motivated — completely free.
    `,
    image: '/projects/screenshots/reppy/feature-graphic.jpg',
    images: [
      '/projects/screenshots/reppy/workout-list.jpg',
      '/projects/screenshots/reppy/workout-detail.jpg',
      '/projects/screenshots/reppy/workouts.jpg',
      '/projects/screenshots/reppy/progress.jpg',
      '/projects/screenshots/reppy/feature-graphic.jpg',
    ],
    googlePlay: '',
  },

  {
    slug: 'balticaqua',
    title: 'Baltic Aqua',
    category: 'Websites',
    tech: ['Next.js', 'React', 'Multilingual'],
    services: ['web'],
    description: 'Kinetico water treatment systems for homes and businesses in Latvia — softeners, drinking water filters and full filtration, sold with installation and consultation.',
    challenge: `
      Establish a strong digital presence for a well-established water treatment
      company, clearly communicating decades of expertise and a wide range of
      services while making it easy for customers to find the right solution.
    `,
    solution: [
      'Custom-built admin panel for independent content management',
      'Clear service categorization: purification, softening, filtration',
      'Trust-building elements highlighting 20+ years of industry experience',
      'Latvia-wide service coverage with installation and maintenance info',
      'Mobile-optimized layout for on-the-go customer inquiries',
      'SEO-friendly structure for local search visibility',
    ],
    result: `
      A professional, easy-to-manage website that reinforces BalticAqua's
      market authority and makes it simple for customers across Latvia to
      explore solutions and request service.
    `,
    image: '/projects/screenshots/balticaqua.jpg',
    images: [
      '/projects/screenshots/balticaqua.jpg',
      '/projects/screenshots/balticaqua-2.jpg',
      '/projects/screenshots/balticaqua-3.jpg',
    ],
    logo: '/projects/logos/balticaqua.png',
    link: 'https://balticaqua.lv/',
  },

];
