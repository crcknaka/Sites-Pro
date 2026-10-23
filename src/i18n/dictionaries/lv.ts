import type { Dictionary } from './en';

/** Interface copy for sitespro.lv. House style: a spaced hyphen, not an em dash. */
const lv: Dictionary = {
  site: {
    name: 'SitesPro',
    description:
      'Mājas lapas, web aplikācijas un AI automatizācija uzņēmumiem - izstrāde, uzturēšana un SEO/GEO optimizācija.',
    defaultTitle: 'SitesPro | Web izstrāde Latvijā',
    ogAlt: 'SitesPro - web izstrāde Latvijā',
    location: 'Rīga, Latvija - strādājam visā ES un pasaulē',
  },

  nav: {
    home: 'Sākums',
    services: 'Pakalpojumi',
    portfolio: 'Portfolio',
    about: 'Par mums',
    faq: 'BUJ',
    contact: 'Kontakti',
    cta: 'Sazināties',
    skip: 'Pāriet uz saturu',
    homeLabel: 'SitesPro - sākums',
    main: 'Galvenā navigācija',
    mobile: 'Mobilā navigācija',
    menu: 'Izvēlne',
    openMenu: 'Atvērt izvēlni',
    closeMenu: 'Aizvērt izvēlni',
  },

  theme: {
    toLight: 'Pārslēgt uz gaišo tēmu',
    toDark: 'Pārslēgt uz tumšo tēmu',
  },

  footer: {
    tagline: 'Mājas lapas, web platformas un AI automatizācija - izstrādātas izaugsmei.',
    motto: 'Digital Done Right.',
    services: 'Pakalpojumi',
    company: 'Uzņēmums',
    contact: 'Kontakti',
    allServices: 'Visi pakalpojumi',
    rights: 'Visas tiesības aizsargātas.',
    privacy: 'Privātuma politika',
    legal: 'Lietošanas noteikumi',
    switchLabel: 'In English - sitespro.org',
    extraLinks: [],
  },

  hero: {
    badge: 'Pieņemam jaunus projektus',
    title: 'Mājas lapas un web aplikācijas,',
    titleAccent: 'kas strādā jūsu biznesam',
    intro:
      'Izstrādājam ātras mājas lapas, interneta veikalus, web platformas un AI risinājumus - no pirmās sarunas līdz palaišanai un ilgi pēc tās. Bezmaksas demo versija pirms jebkādas samaksas.',
    primary: 'Sākt projektu',
    secondary: 'Skatīt darbus',
    note: 'Rīgā, visā Latvijā un ES',
    windows: [
      'Maksājumu vārtejas operatora panelis',
      'Web studijas CRM sistēma',
      'Vadi grāmatvedības platforma',
    ],
    clients: 'Mūsu klienti',
  },

  servicesSection: {
    eyebrow: 'Ko mēs darām',
    title: 'Mūsu',
    highlight: 'pakalpojumi',
    subtitle:
      'Izstrādājam digitālus produktus - no ātrām mājas lapām līdz sarežģītām web platformām un automatizācijai.',
    learnMore: 'Uzzināt vairāk',
    also: 'Arī',
    cards: [
      {
        service: 'web',
        scene: 'web',
        title: 'Mājas lapas',
        description:
          'Ātras vizītkaršu un korporatīvās mājas lapas ar individuālu dizainu un SEO no pirmās dienas.',
      },
      {
        service: 'ecommerce',
        scene: 'web-platforms',
        title: 'Interneta veikali',
        description:
          'E-veikali ar ērtu administrēšanas paneli, maksājumiem, piegādi un grāmatvedības integrācijām.',
      },
      {
        service: 'web-platforms',
        scene: 'consulting',
        title: 'Web aplikācijas',
        description:
          'Portāli, CRM un biznesa aplikācijas, kas veidotas tieši jūsu darba procesiem.',
      },
      {
        service: 'ai',
        scene: 'ai',
        title: 'AI automatizācija',
        description:
          'Čatboti, dokumentu apstrāde un procesu automatizācija - mazāk manuāla darba jūsu komandai.',
      },
    ],
  },

  integrations: {
    eyebrow: 'Integrācijas',
    title: 'Savienojam visu, ar ko strādā jūsu bizness',
    text: 'Maksājumi, bankas, CRM, loģistika, AI - ja sistēmai ir API, visticamāk, esam to jau integrējuši. Šeit - tās, ko klienti prasa visbiežāk.',
    tabsLabel: 'Integrāciju kategorijas',
    categories: [
      'Maksājumi',
      'Fintech un bankas',
      'E-komercija',
      'CRM un mārketings',
      'Saziņa',
      'AI',
      'Infrastruktūra',
    ],
  },

  spotlight: {
    eyebrow: 'Projekta apraksts · mūsu produkts',
    title: 'Grāmatvedība, kas pati pasaka, kas jādara',
    text: 'Vadi ir mūsu pašu SaaS pašnodarbinātajiem un maziem uzņēmumiem Latvijā: nodokļu kalendārs ar jau aprēķinātām summām, algas ar pilnu aprēķinu no bruto līdz neto, bankas izrakstu sasaiste un deklarācijas tieši tādā formātā, kādu sagaida VID.',
    imageAlt: 'Vadi panelis - jūlija pārskats ar ieņēmumiem, izdevumiem, rezultātu un nodokļu kalendāru',
    caseLabel: 'Vadi projekta apraksts',
    facts: [
      { label: 'Astoņi bezmaksas nodokļu kalkulatori', sub: 'ar šī gada likmēm' },
      { label: 'Deklarācijas VID EDS formātā', sub: 'MUN iesniegšana tieši no lietotnes' },
      { label: 'LV · EN · RU', sub: 'produkts un mārketinga vietne' },
    ],
    read: 'Lasīt projekta aprakstu',
    open: 'Atvērt vadi.lv',
  },

  categories: {
    All: 'Visi',
    Websites: 'Mājas lapas',
    Commerce: 'E-komercija',
    Apps: 'Aplikācijas',
    Fintech: 'Fintech',
  },

  portfolioSection: {
    eyebrow: 'Portfolio',
    title: 'Mūsu',
    highlight: 'darbi',
    subtitle:
      'Projekti, kuros stratēģija, dizains un tehnoloģijas apvienojas rezultātā, kas strādā klienta biznesam.',
    filterDescriptions: {
      All: 'Visi projekti',
      Apps: 'Web aplikācijas, AI rīki un interaktīvi servisi',
      Commerce: 'Interneta veikali un darījumu platformas',
      Websites: 'Uzņēmumu mājas lapas un produktu prezentācijas',
      Fintech: 'Finanšu tehnoloģiju platformas un maksājumi',
    },
    loadMore: 'Rādīt vairāk projektu',
    viewAll: (n: number) => `Visi ${n} projekti`,
    viewProject: 'Skatīt projektu',
    view: 'Skatīt',
  },

  portfolioHub: {
    title: 'Portfolio - mājas lapu, platformu un AI projektu piemēri',
    description:
      'SitesPro projektu piemēri: mājas lapas, interneta veikali, web platformas, aplikācijas un fintech produkti - katram projektam uzdevums, risinājums un rezultāts.',
    socialTitle: 'Portfolio - mūsu darbi | SitesPro',
    socialDescription:
      'Mājas lapas, e-komercija, aplikācijas un fintech projekti ar uzdevumu, risinājumu un rezultātu.',
    collectionName: 'SitesPro portfolio',
    collectionDescription:
      'SitesPro projektu piemēri: mājas lapas, interneta veikali, web platformas, aplikācijas un fintech produkti.',
    eyebrow: 'Portfolio',
    h1: 'Visi mūsu',
    h1Accent: 'darbi',
    intro: (n: number) =>
      `${n} projekti, kuros apvienojas stratēģija, dizains un izstrāde - mājas lapas, interneta veikali, web platformas, aplikācijas un fintech produkti. Katrā aprakstā: uzdevums, risinājums un rezultāts.`,
    categoriesLabel: 'Kategorijas',
    categoryIntro: {
      Websites: 'Uzņēmumu mājas lapas un produktu prezentācijas.',
      Commerce: 'Interneta veikali un darījumu platformas.',
      Apps: 'Web aplikācijas, AI rīki un interaktīvi servisi.',
      Fintech: 'Finanšu tehnoloģiju platformas un maksājumu produkti.',
    },
    start: 'Sākt projektu',
    howWeWork: 'Kā mēs strādājam',
  },

  caseStudy: {
    titleSuffix: '- projekta apraksts',
    ogEyebrow: 'Projekta apraksts',
    builtWith: 'Tehnoloģijas',
    service: 'Pakalpojums',
    challenge: 'Uzdevums',
    solution: 'Risinājums',
    result: 'Rezultāts',
    visit: 'Atvērt vietni',
    allProjects: 'Visi projekti',
    prev: 'Iepriekšējais',
    prevShort: 'Iepr.',
    next: 'Nākamais',
    ctaTitle: 'Vēlaties līdzīgu projektu?',
    ctaText:
      'Pastāstiet par savu ideju - parādīsim, kā to īstenot ar tādu pašu kvalitāti un uzmanību detaļām.',
    ctaButton: 'Sazināties',
    relatedEyebrow: () => 'Līdzīgi projekti',
    relatedTitle: 'Saistītie projekti',
    logoAlt: (title: string) => `${title} logotips`,
    galleryOpen: 'Atvērt attēlu',
    galleryClose: 'Aizvērt',
    galleryPrev: 'Iepriekšējais attēls',
    galleryNext: 'Nākamais attēls',
  },

  serviceCases: {
    eyebrow: 'Mūsu darbi',
    defaultTitle: 'Projekti, ko esam īstenojuši šajā jomā',
    all: 'Visi projekti',
  },

  landing: {
    start: 'Saņemt piedāvājumu',
    caseStudy: (title: string) => `Projekts: ${title}`,
    proofEyebrow: 'Pierādījumi',
    readCase: 'Lasīt projekta aprakstu',
    approachDefault: 'Kā mēs strādājam',
    faqTitle: 'Biežāk uzdotie jautājumi',
    otherServices: 'Citi pakalpojumi',
    breadcrumbServices: 'Pakalpojumi',
    whyEyebrow: 'Kāpēc tas vajadzīgs',
    forWhom: 'Kam tas ir domāts',
    deliverables: 'Ko jūs saņemat',
    tech: 'Tehnoloģijas',
  },

  aboutSection: {
    eyebrow: 'Par mums',
    title: 'Kā mēs',
    highlight: 'strādājam',
    subtitle:
      'Strādājam pēc skaidra procesa, kurā svarīga ir saprotamība, mērogojamība un ilgtermiņa rezultāts.',
    steps: [
      {
        title: 'Izpēte un stratēģija',
        description:
          'Vienojamies par mērķiem, ierobežojumiem un tehnisko virzienu, lai noteiktu apjomu un prioritātes.',
      },
      {
        title: 'Dizains un izstrāde',
        description:
          'Projektējam un izstrādājam mērogojamus risinājumus, domājot par arhitektūru, ātrumu un lietojamību.',
      },
      {
        title: 'Testēšana, palaišana un atbalsts',
        description:
          'Sagatavojam projektu darbam, droši to palaižam un atbalstām arī pēc palaišanas.',
      },
    ],
    more: 'Kā mēs strādājam - sīkāk',
  },

  faqSection: {
    eyebrow: 'BUJ',
    title: 'Biežāk uzdotie',
    highlight: 'jautājumi',
    subtitle:
      'Ja neatradāt atbildi uz savu jautājumu, rakstiet mums - atbildēsim vienas darba dienas laikā.',
  },

  contact: {
    eyebrow: 'Sazināties',
    title: 'Pastāstiet par savu projektu',
    subtitle: 'Konsultācija un cenas piedāvājums ir bez maksas. Atbildam vienas darba dienas laikā.',
    nextTitle: 'Kas notiek tālāk',
    next: [
      {
        title: 'Atbildam 24 stundu laikā',
        text: 'Īsta atbilde no cilvēka, kurš vadīs jūsu projektu, nevis automātisks paziņojums.',
      },
      {
        title: '30 minūšu saruna',
        text: 'Pārrunājam mērķus, ierobežojumus un to, kas jau ir izdarīts - bez prezentācijām un spiediena.',
      },
      {
        title: 'Rakstisks piedāvājums',
        text: 'Apjoms, termiņi un fiksēta cena. Ja neesam īstie izpildītāji, godīgi to pasakām un iesakām, pie kā vērsties.',
      },
    ],
    email: 'E-pasts',
    responseTime: 'Atbildes laiks',
    responseValue: 'Parasti 24 stundu laikā',
    basedIn: 'Atrašanās vieta',
    confidentiality: 'Konfidencialitāte',
    confidentialityValue: 'Pēc pieprasījuma parakstām NDA, pirms tiek atklātas detaļas',
    privacyNote:
      'Jūsu dati tiek izmantoti tikai, lai atbildētu uz jūsu pieprasījumu. Mēs nenododam tos trešajām personām un apstrādājam saskaņā ar VDAR.',
  },

  form: {
    name: 'Jūsu vārds',
    email: 'Jūsu e-pasts',
    service: 'Kas jums nepieciešams?',
    budget: 'Budžets',
    message: 'Par projektu',
    messagePlaceholder: 'Pastāstiet par projektu - mērķi, termiņi, kas jau ir izlemts',
    services: [
      'Mājas lapa',
      'Web platforma / aplikācija',
      'AI un automatizācija',
      'Konsultācija',
      'Vēl nezinu',
    ],
    budgets: ['Līdz 3000 €', '3000 – 10 000 €', '10 000 – 30 000 €', '30 000+ €', 'Vēl nav izlemts'],
    errors: {
      captcha: 'Neizdevās pārliecināties, ka formu sūta cilvēks. Lūdzu, mēģiniet vēlreiz.',
      invalid: 'Lūdzu, pārbaudiet vārdu, e-pastu un ziņu - kaut kas trūkst vai ir pārāk garš.',
      rate: 'Pārāk daudz ziņu no šī savienojuma. Lūdzu, pagaidiet dažas minūtes.',
      send: 'Ziņu šobrīd neizdevās nosūtīt. Lūdzu, mēģiniet vēlreiz pēc minūtes.',
    },
    writeDirect: 'Varat arī rakstīt mums tieši uz',
    checking: 'Pārbaudām, vai forma nav surogātpasts - mirkli…',
    verifying: 'Pārbauda…',
    sending: 'Sūta…',
    send: 'Nosūtīt',
    sentTitle: 'Ziņa nosūtīta',
    sentText: 'Paldies! Atbildēsim 24 stundu laikā ar nākamajiem soļiem.',
    sendAnother: 'Nosūtīt vēl vienu ziņu',
  },

  notFound: {
    title: 'Lapa nav atrasta',
    text: 'Meklētā lapa neeksistē vai ir pārvietota.',
    home: 'Uz sākumu',
    portfolio: 'Skatīt darbus',
  },

  error: {
    title: 'Kaut kas nogāja greizi',
    text: 'Radās neparedzēta kļūda. Lūdzu, mēģiniet vēlreiz.',
    retry: 'Mēģināt vēlreiz',
    home: 'Uz sākumu',
  },

  breadcrumbHome: 'Sākums',
};

export default lv;
