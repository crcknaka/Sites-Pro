export type ProjectCategory = 'Websites' | 'Commerce' | 'Apps' | 'Fintech';

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
  link?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
  youtube?: string;
}

export const projects: Project[] = [
  {
    slug: 'lepicur',
    title: 'Lepicur',
    category: 'Commerce',
    description: 'Design-driven online store, crafted for speed and performance.',
    challenge: `
      Create a refined online presence that reflects the brand's premium
      positioning while maintaining excellent performance and usability.
    `,
    solution: [
      'Elegant, product-focused layout',
      'Careful typography and spacing',
      'Optimized media and assets',
      'Scalable WordPress architecture',
    ],
    result: `
      A calm, premium shopping experience that strengthens brand perception
      and supports long-term growth.
    `,
    image: '/projects/screenshots/lepicur.jpg',
    link: 'https://lepicur.com/',
    facebook: 'https://www.facebook.com/lepicur/',
    instagram: 'https://www.instagram.com/lepicur/',
    linkedin: 'https://www.linkedin.com/company/crystalboutique/',
  },

  {
    slug: 'institut-de-francais-nice',
    title: 'Institut De Français Nice',
    category: 'Websites',
    description: 'Informational website for an educational institution.',
    challenge: `
      Communicate credibility, clarity, and international accessibility.
    `,
    solution: [
      'Clear content hierarchy',
      'Multilingual-ready structure',
      'Editorial-style layouts',
      'Accessible design choices',
    ],
    result: `
      A trustworthy and informative website that supports institutional goals.
    `,
    image: '/projects/screenshots/institut.jpg',
    link: 'https://institutdefrancais-nice.com/',
    facebook: 'https://www.facebook.com/institutdefrancaisnice',
    instagram: 'https://www.instagram.com/institutdefrancais_nice',
    tiktok: 'https://www.tiktok.com/@institutdefrancais_nice',
  },

  {
    slug: 'madsword-studios',
    title: 'Madsword Studios',
    category: 'Websites',
    description: 'Award-winning game development studio with 8+ years of experience, 160+ games developed, and 20M+ downloads.',
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
    link: 'https://madswordstudios.com/',
    facebook: 'https://www.facebook.com/MadSwordStudio/',
    youtube: 'https://www.youtube.com/user/MadSwordStudio',
  },


  {
    slug: 'sensora',
    title: 'Sensora',
    category: 'Websites',
    description: 'Intelligent and secure IT security services delivering quality solutions to crucial security issues.',
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
    link: 'https://sensora.lv/',
  },

  {
    slug: 'imun',
    title: 'Imun',
    category: ['Websites', 'Fintech'] ,
    description: 'Advanced payment technology for modern financial operations.',
    challenge: `
      Create a professional, trustworthy online presence that communicates
      technical sophistication and security without overwhelming business clients
      with complexity.
    `,
    solution: [
      'Clean, professional design emphasizing security and reliability',
      'Clear value proposition and service overview',
      'Structured information architecture',
      'Trust-building elements and compliance messaging',
      'Scalable content structure for technical documentation',
    ],
    result: `
      A credible and informative platform that effectively communicates Imun's
      fintech capabilities and builds confidence with enterprise clients.
    `,
    image: '/projects/screenshots/imun.jpg',
    link: 'https://imungate.eu/',
  },



  {
    slug: 'ma-sunglasses',
    title: 'Ma Sunglasses',
    category: 'Commerce',
    description: 'Large-scale product catalogue for eyewear with advanced filtering.',
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
    link: 'https://masunglasses.eu/',
    facebook: 'https://www.facebook.com/masunglasses.eu/',
    instagram: 'https://www.instagram.com/masunglasses.eu/',
  },

  {
    slug: 'sunachates',
    title: 'Sunachates',
    category: 'Websites',
    description: 'Boutique catalogue site with strong visual identity.',
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
    description: 'Online store for pet products with promotional focus.',
    challenge: `
      Balance promotional content with product clarity and trustworthiness.
    `,
    solution: [
      'Clear promotional hierarchy',
      'Trust-building visuals',
      'Optimized checkout flow',
      'Performance-focused setup',
    ],
    result: `
      A conversion-oriented e-commerce site that remains friendly and easy to use.
    `,
    image: '/projects/screenshots/pets-pro.jpg',
    link: 'https://pets-pro.eu/',
    instagram: 'https://www.instagram.com/pets_pro.eu',
    tiktok: 'https://www.tiktok.com/@petspro.eu',
  },

  {
    slug: 'on-air-emotions',
    title: 'On Air Emotions',
    category: 'Websites',
    description: 'Event-oriented catalogue with dynamic content blocks.',
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
    description: 'Product-focused informational site with clean presentation.',
    challenge: `
      Explain complex products clearly without overloading the user.
    `,
    solution: [
      'Section-based storytelling',
      'Clear product categorization',
      'Visual explanations',
      'Minimal distractions',
    ],
    result: `
      A clear and professional presentation that improves understanding
      and credibility.
    `,
    image: '/projects/screenshots/goldberg.jpg',
    link: 'https://goldberg.lv/',
  },

  {
    slug: 'barberly',
    title: 'Barberly',
    category: 'Websites',
    description: 'Where Style Meets Tradition. Experience the perfect blend of classic barbering techniques and modern style in the heart of the city.',
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
    link: 'https://barberly.lv/',
  },

  {
    slug: 'finnex',
    title: 'Finnex',
    category: 'Websites',
    description: 'Product catalogue for a manufacturing-focused brand.',
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
    category: 'Websites',
    description: 'Community-driven catalogue for electric unicycle riders.',
    challenge: `
      Combine community elements with structured product and content discovery.
    `,
    solution: [
      'Hybrid catalogue/community layout',
      'Clear navigation paths',
      'Scalable content structure',
      'Mobile-friendly design',
    ],
    result: `
      A niche platform that supports both discovery and community engagement.
    `,
    image: '/projects/screenshots/euc-one.jpg',
    link: 'https://euc.one/',
    facebook: 'https://www.facebook.com/euconeofficial',
    instagram: 'https://www.instagram.com/euc.one',
  },

  {
    slug: 'euc-calculator',
    title: 'EUC Calculator',
    category: 'Apps',
    description: 'Interactive web application for EUC performance calculations.',
    challenge: `
      Deliver a complex calculation tool in a simple and intuitive interface.
    `,
    solution: [
      'Dark UI with focus on data',
      'Clear input/output separation',
      'Fast client-side logic',
      'Responsive layout',
    ],
    result: `
      A focused utility app that delivers value instantly without friction.
    `,
    image: '/projects/screenshots/euc-calculator.jpg',
    link: 'https://euc.one/calculator/',
    facebook: 'https://www.facebook.com/euconeofficial',
    instagram: 'https://www.instagram.com/euc.one',
  },

  {
    slug: 'gift-roulette',
    title: 'Gift Roulette',
    category: 'Apps',
    description: 'Create and manage Secret Santa gift exchange events with ease.',
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
    link: 'https://gift-roulette.win/',
  },

  {
    slug: 'ekobaltika',
    title: 'Ekobaltika',
    category: 'Commerce',
    description: 'Large e-commerce catalogue for automotive and technical products.',
    challenge: `
      Organize a very broad product range without sacrificing usability.
    `,
    solution: [
      'Deep category structure',
      'Efficient product listing',
      'Optimized filtering',
      'Performance tuning',
    ],
    result: `
      A robust e-commerce platform capable of handling scale and complexity.
    `,
    image: '/projects/screenshots/ekobaltika.jpg',
    link: 'https://ekobaltika.lv/lv/',
    facebook: 'https://www.facebook.com/ekobaltika.lv',
  },

  {
    slug: 'bullu-laivas',
    title: 'Bullu Laivas',
    category: 'Commerce',
    description: 'Lifestyle e-commerce site with strong visual storytelling.',
    challenge: `
      Combine lifestyle branding with commercial functionality.
    `,
    solution: [
      'Story-driven layouts',
      'Strong imagery',
      'Clear product CTAs',
      'Mobile-optimized shopping',
    ],
    result: `
      A visually expressive store that still performs as a solid sales channel.
    `,
    image: '/projects/screenshots/bullulaivas.jpg',
    link: 'https://www.bullulaivas.lv/',
    facebook: 'https://www.facebook.com/bullulaivas/',
    instagram: 'https://www.instagram.com/bullu_laivas/',
    tiktok: 'https://www.tiktok.com/@bullu_laivas',
    youtube: 'https://www.youtube.com/channel/UCDurFuw59Rdw3_vcfk6ZJJw',
  },

  {
    slug: 'annexe-de-francais',
    title: 'Annexe De Français',
    category: 'Websites',
    description: 'Informational site for educational programs and courses.',
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
    link: 'https://www.offshorelicense.com/',
  },

  {
    slug: 'wellton',
    title: 'Wellton',
    category: 'Commerce',
    description: 'Premium SPA vouchers for Wellton Hotels & Spa in Riga.',
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
      '/projects/screenshots/wellton2.png',
      '/projects/screenshots/wellton.jpg',
    ],
    link: 'https://shop.wellton.com/',
    facebook: 'https://www.facebook.com/welltonhotels/',
    instagram: 'https://www.instagram.com/wellton_hotels/',
  },

  {
    slug: 'window-pros',
    title: 'Bay Area Window Pros',
    category: 'Websites',
    description: 'Factory authorized dealer and installer for windows and doors with 25+ years of experience.',
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
    link: 'https://bayareawindowpros.com/',
  },

  {
    slug: 'aerial-platform',
    title: 'Aerial Platform',
    category: ['Apps', 'Commerce'] ,
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

];
