import type { Locale } from '@/i18n';

export interface Faq {
  q: string;
  a: string;
}

const faqsEn: Faq[] = [
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

/** sitespro.lv FAQ — carried over from the Latvian site as it was. */
const faqsLv: Faq[] = [
  {
    q: "Cik ilgi aizņem mājas lapas izstrāde?",
    a: "Vienkārša vizītkaršu mājaslapa var būt gatava jau 2-5 dienu laikā. Sarežģītākiem projektiem izstrādes laiks tiek noteikts individuāli, atkarībā no projekta apjoma un funkcionalitātes.",
  },
  {
    q: "Cik maksā mājas lapas izstrāde?",
    a: "Katram projektam piemērojam individuālu pieeju un cenu. Sazinieties ar mums, lai saņemtu bezmaksas konsultāciju un precīzu cenas piedāvājumu jūsu projektam.",
  },
  {
    q: "Vai jūs nodrošināt mājas lapas uzturēšanu pēc izstrādes?",
    a: "Jā, mēs piedāvājam pastāvīgu mājas lapas uzturēšanu, atjauninājumus un tehnisko atbalstu, lai jūsu vietne vienmēr darbotos nevainojami.",
  },
  {
    q: "Vai mājas lapa būs pielāgota mobilajām ierīcēm?",
    a: "Pilnīgi noteikti. Visas mūsu izstrādātās mājas lapas ir pilnībā responsīvas un optimizētas darbam visās ierīcēs - datorā, planšetē un mobilajā telefonā.",
  },
  {
    q: "Vai jūsu izstrādātās mājaslapas ir SEO optimizētas?",
    a: "Jā, visi mūsu projekti tiek izstrādāti ar 100% SEO optimizāciju. Mēs ievērojam labākās SEO prakses - strukturēti dati (Schema.org), semantiskais HTML, optimizēts ielādes ātrums (Core Web Vitals), mobilā optimizācija un pareiza meta tagu konfigurācija - lai jūsu vietne būtu redzama meklētājprogrammās no pirmās dienas. Papildus tradicionālajam SEO mēs piedāvājam arī modernu GEO optimizāciju redzamībai AI sistēmās (vairāk par to nākamajā jautājumā).",
  },
  {
    q: "Kas ir GEO un vai jūs to piedāvājat?",
    a: "Jā! Papildus SEO mēs piedāvājam arī modernu GEO (Generative Engine Optimization) - optimizāciju redzamībai AI sistēmās, tādās kā ChatGPT, Google Gemini un Perplexity. Aizvien vairāk cilvēku informāciju un ieteikumus meklē nevis meklētājprogrammās, bet AI asistentos. Mēs strukturējam un noformējam jūsu saturu tā, lai mākslīgais intelekts to saprastu, citētu un ieteiktu tieši jūsu uzņēmumu - tā jūs esat redzami tur, kur klienti jau pieņem lēmumus.",
  },
  {
    q: "Kādas tehnoloģijas jūs izmantojat?",
    a: "Mēs izmantojam modernākos web izstrādes rīkus, ieskaitot React, Next.js, TypeScript un citas vadošās tehnoloģijas, kas nodrošina ātrumu, drošību un mērogojamību.",
  },
  {
    q: "Vai varu redzēt projekta progresu izstrādes laikā?",
    a: "Jā, jūs varēsiet sekot līdzi izstrādes procesam praktiski reāllaikā. Jūsu projekts tiks izvietots uz pagaidu domēna, un jūs saņemsiet saiti, lai jebkurā brīdī varētu redzēt visus atjauninājumus un progresu.",
  },
  {
    q: "Vai gatavā mājaslapa piederēs man?",
    a: "Pilnīgi noteikti. Pēc projekta pabeigšanas mēs nodosim jums visas nepieciešamās piekļuves, lai jūs būtu pilnīgs koda un vietnes īpašnieks un vienmēr varētu tam piekļūt.",
  },
];

const FAQS: Record<Locale, Faq[]> = { en: faqsEn, lv: faqsLv };

/**
 * Shared by the FAQ accordion and the FAQPage structured data on the
 * home page — keep both fed from this single source.
 */
export function faqsFor(locale: Locale): Faq[] {
  return FAQS[locale];
}
