import type { ServiceLandingConfig } from '@/components/service-landing';

/**
 * The Latvian service pages — the copy sitespro.lv has always had, now
 * rendered with the shared service layout and linked to the case studies.
 * Keyed by URL slug: sitespro.lv/pakalpojumi/<slug>.
 */
export interface LvServicePage {
  metaTitle: string;
  metaDescription: string;
  config: ServiceLandingConfig;
}

export const LV_SERVICE_PAGES: Record<string, LvServicePage> = {
  "majas-lapas-izstrade": {
    metaTitle: "Mājas lapas izstrāde Latvijā - cena un termiņi",
    metaDescription: "Mājas lapas izstrāde Latvijā no 2-5 dienām. Individuāls dizains, administrācijas panelis, 100% SEO un GEO optimizācija. Bezmaksas demo versija pirms samaksas.",
    config: {
      service: "web",
      breadcrumb: [
        { name: 'Pakalpojumi', path: '/services' },
        { name: "Mājas lapas izstrāde", path: '/services/majas-lapas-izstrade' },
      ],
      eyebrow: "Vizītkaršu un korporatīvās mājaslapas",
      title: "Mājas lapas izstrāde",
      titleAccent: "Latvijā",
      intro: [
        "Mājas lapas izstrāde SitesPro sākas ar bezmaksas konsultāciju un bezmaksas demo versiju - jūs redzat gatavu vietni vēl pirms jebkādas samaksas. Vienkārša vizītkaršu mājaslapa parasti ir gatava 2-5 dienu laikā, apjomīgāku korporatīvo vietņu termiņš tiek noteikts individuāli.",
        "Katra mūsu izstrādātā mājaslapa ir pilnībā responsīva, ātra un no pirmās dienas optimizēta gan Google meklētājam (SEO), gan AI sistēmām - ChatGPT, Google Gemini un Perplexity (GEO). Cena tiek noteikta individuāli, atkarībā no lapu skaita, dizaina apjoma un funkcionalitātes.",
      ],
      flagship: "institut-de-francais-villefranche",
      secondaryCta: { label: 'Bezmaksas demo', href: '/#demo' },
      pointsTitle: "Ko ietver mājas lapas izstrāde",
      points: [
        {
          title: "Individuāls dizains",
          text: "Nekādu gatavu veidņu - katras mājaslapas dizains tiek veidots no nulles atbilstoši jūsu zīmolam un mērķauditorijai.",
        },
        {
          title: "Pielāgots administrācijas panelis",
          text: "Saturu maināt paši, bez izstrādātāja palīdzības. Panelis tiek veidots tieši jūsu vajadzībām, nevis pielāgots no standarta CMS.",
        },
        {
          title: "Ātrums un Core Web Vitals",
          text: "Vietnes tiek būvētas uz Next.js ar servera pusē renderētu saturu - tas nozīmē zibenīgu ielādi un augstus Google veiktspējas rādītājus.",
        },
        {
          title: "SEO un GEO no pirmās dienas",
          text: "Semantiskais HTML, strukturētie dati (Schema.org), meta tagi, sitemap, robots.txt un llms.txt - viss sagatavots gan meklētājprogrammām, gan AI asistentiem.",
        },
        {
          title: "Daudzvalodu atbalsts",
          text: "Latviešu, angļu, krievu vai jebkura cita valoda ar pareizu hreflang konfigurāciju, lai katra versija tiktu indeksēta atsevišķi.",
        },
        {
          title: "Kontaktformas un integrācijas",
          text: "Formas ar aizsardzību pret mēstulēm, e-pasta paziņojumiem un savienojumu ar jūsu CRM vai Google Analytics.",
        },
      ],
      forWhom: [
        "Uzņēmumiem, kas vēl nav pārstāvēti internetā",
        "Zīmoliem, kuru esošā mājaslapa ir novecojusi vai lēna",
        "Speciālistiem un pakalpojumu sniedzējiem, kam vajadzīga pārliecinoša vizītkarte",
        "Uzņēmumiem, kas vēlas tikt atrasti ne tikai Google, bet arī AI asistentos",
      ],
      deliverables: [
        "Individuāls dizains un responsīvs izkārtojums",
        "Administrācijas panelis satura rediģēšanai",
        "SEO pamatkonfigurācija un strukturētie dati",
        "GEO optimizācija redzamībai AI sistēmās",
        "Kontaktforma ar e-pasta paziņojumiem",
        "Domēna un hostinga uzstādīšana, SSL sertifikāts",
        "Google Analytics un Search Console pieslēgšana",
        "Apmācība darbam ar administrācijas paneli",
      ],
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel / VPS"],
      faqs: [
        {
          q: "Cik maksā mājas lapas izstrāde?",
          a: "Cena tiek noteikta individuāli katram projektam, jo tā ir atkarīga no lapu skaita, dizaina sarežģītības, valodu skaita un nepieciešamajām integrācijām. Sazinieties ar mums - konsultācija un cenas piedāvājums ir bez maksas.",
        },
        {
          q: "Cik ilgi aizņem mājas lapas izstrāde?",
          a: "Vienkārša vizītkaršu mājaslapa var būt gatava 2-5 dienu laikā. Korporatīvām vietnēm ar daudzām sadaļām, vairākām valodām vai integrācijām termiņš tiek noteikts individuāli pēc konsultācijas.",
        },
        {
          q: "Vai demo versija tiešām ir bez maksas?",
          a: "Jā. Informatīvajām mājaslapām mēs sagatavojam demo versiju pilnīgi bez maksas. Ja jums tā patīk - turpinām sadarbību un pielāgojam vēlmēm. Ja nē - nekādu maksājumu un nekādu saistību.",
        },
        {
          q: "Vai es varēšu pats mainīt saturu mājaslapā?",
          a: "Jā. Katram projektam mēs veidojam individuālu administrācijas paneli, kurā varat rediģēt tekstus, attēlus un sadaļas bez izstrādātāja palīdzības. Pēc nodošanas sniedzam arī īsu apmācību.",
        },
        {
          q: "Vai mājaslapa piederēs man?",
          a: "Pilnīgi noteikti. Pēc projekta pabeigšanas jūs saņemat visas piekļuves - kodu, domēnu, hostingu un administrācijas paneli. Jūs esat pilnīgs īpašnieks.",
        },
      ],
      cases: { services: ["web"] },
      contactTitle: "Pastāstiet par savu projektu",
      contactText: "Konsultācija un cenas piedāvājums ir bez maksas. Atbildam parasti vienas darba dienas laikā.",
    },
  },
  "interneta-veikala-izstrade": {
    metaTitle: "Interneta veikala izstrāde - e-komercija Latvijā",
    metaDescription: "Interneta veikala izstrāde ar pielāgotu administrācijas paneli, drošiem maksājumiem, loģistikas un grāmatvedības integrācijām. E-komercijas risinājumi Latvijā no SitesPro.",
    config: {
      service: "ecommerce",
      breadcrumb: [
        { name: 'Pakalpojumi', path: '/services' },
        { name: "Interneta veikala izstrāde", path: '/services/interneta-veikala-izstrade' },
      ],
      eyebrow: "E-komercijas risinājumi",
      title: "Interneta veikala",
      titleAccent: "izstrāde",
      intro: [
        "Interneta veikala izstrāde SitesPro nozīmē pilnībā pielāgotu e-komercijas risinājumu, nevis standarta veidni. Mēs veidojam veikalu ar individuālu administrācijas paneli, kurā ērti pārvaldīt preces, krājumus, pasūtījumus, atlaides un klientus.",
        "Katrs veikals tiek savienots ar Latvijā izmantotajām maksājumu un piegādes sistēmām, kā arī ar jūsu grāmatvedības programmu. Preču lapas tiek marķētas ar Product un Offer strukturētajiem datiem, tāpēc tās parādās Google preču rezultātos un ir saprotamas AI asistentiem.",
      ],
      flagship: "overline-baltics",
      pointsTitle: "Ko ietver interneta veikala izstrāde",
      points: [
        {
          title: "Pielāgots preču katalogs",
          text: "Kategorijas, filtri, variācijas (izmērs, krāsa), krājumu uzskaite un preču importēšana no faila vai piegādātāja sistēmas.",
        },
        {
          title: "Droši maksājumi",
          text: "Bankas maksājumu integrācija, karšu maksājumi un norēķini pēcapmaksā - atbilstoši tam, kā strādā jūsu bizness.",
        },
        {
          title: "Loģistikas integrācijas",
          text: "Pakomātu un kurjeru piegādes izvēle tieši grozā, automātiska sūtījumu izveide un izsekošanas numuru nosūtīšana klientam.",
        },
        {
          title: "Grāmatvedības savienojums",
          text: "Automātiska rēķinu izveide un datu nodošana grāmatvedības sistēmai - bez manuālas pārrakstīšanas.",
        },
        {
          title: "Optimizēts pirkuma ceļš",
          text: "Īss un skaidrs grozs un kase, kas samazina pamesto grozu skaitu un palielina konversiju.",
        },
        {
          title: "E-komercijas SEO un GEO",
          text: "Product, Offer un AggregateRating strukturētie dati, unikāli meta tagi katrai precei un saturs, ko AI sistēmas var citēt.",
        },
      ],
      forWhom: [
        "Veikaliem, kas pāriet no fiziskās tirdzniecības uz internetu",
        "Zīmoliem, kuriem standarta platformas kļuvušas par šauru",
        "Uzņēmumiem ar netipiskiem pasūtījumu vai cenu procesiem",
        "B2B tirgotājiem, kam vajadzīgas individuālas cenas katram klientam",
      ],
      deliverables: [
        "Preču katalogs ar kategorijām, filtriem un variācijām",
        "Individuāls administrācijas panelis pasūtījumu pārvaldībai",
        "Maksājumu sistēmu integrācija",
        "Piegādes un pakomātu integrācijas",
        "Automātiski e-pasta paziņojumi klientam un administratoram",
        "Preču strukturētie dati Google un AI sistēmām",
        "Atlaižu kodi un akciju pārvaldība",
        "Apmācība un tehniskais atbalsts pēc palaišanas",
      ],
      tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Stripe / bankas API"],
      faqs: [
        {
          q: "Cik maksā interneta veikala izstrāde?",
          a: "Cena ir atkarīga no preču skaita, nepieciešamajām integrācijām un pasūtījumu procesa sarežģītības. Pēc bezmaksas konsultācijas mēs sagatavojam precīzu piedāvājumu tieši jūsu veikalam.",
        },
        {
          q: "Vai varat pārnest manu esošo veikalu uz jaunu platformu?",
          a: "Jā. Mēs pārnesam preces, kategorijas, klientu datus un pasūtījumu vēsturi, kā arī iestatām pāradresācijas, lai saglabātu esošās Google pozīcijas un neveidotos 404 kļūdas.",
        },
        {
          q: "Kādas maksājumu sistēmas var pieslēgt?",
          a: "Pieslēdzam Latvijā izplatītos bankas maksājumus, karšu maksājumus, kā arī starptautiskos risinājumus. Ja izmantojat konkrētu pakalpojumu sniedzēju ar publisku API, integrēsim tieši to.",
        },
        {
          q: "Vai veikals strādās mobilajās ierīcēs?",
          a: "Jā, visi mūsu veikali tiek veidoti pēc mobile-first principa. Lielākā daļa e-komercijas apmeklējumu Latvijā notiek no telefona, tāpēc mobilā pieredze ir izstrādes sākumpunkts, nevis papildinājums.",
        },
        {
          q: "Vai pēc palaišanas nodrošināt uzturēšanu?",
          a: "Jā. Piedāvājam nepārtrauktu tehnisko uzturēšanu, drošības atjauninājumus, veiktspējas uzraudzību un prioritāru atbalstu, jo e-veikala dīkstāve nozīmē tiešus zaudējumus.",
        },
      ],
      cases: { services: ["ecommerce"] },
      contactTitle: "Pastāstiet par savu projektu",
      contactText: "Konsultācija un cenas piedāvājums ir bez maksas. Atbildam parasti vienas darba dienas laikā.",
    },
  },
  "web-aplikaciju-izstrade": {
    metaTitle: "Web aplikāciju izstrāde - individuāli risinājumi",
    metaDescription: "Web aplikāciju un portālu izstrāde jebkurai sarežģītībai - lietotāju pārvaldība, individuāla administrācijas sistēma, API integrācijas. Next.js un TypeScript risinājumi.",
    config: {
      service: "web-platforms",
      breadcrumb: [
        { name: 'Pakalpojumi', path: '/services' },
        { name: "Web aplikāciju izstrāde", path: '/services/web-aplikaciju-izstrade' },
      ],
      eyebrow: "Portāli un biznesa aplikācijas",
      title: "Web aplikāciju",
      titleAccent: "izstrāde",
      intro: [
        "Web aplikāciju izstrāde ir risinājums tad, kad mājaslapas iespējas beidzas: nepieciešami lietotāju konti, lomas un tiesības, sarežģīta datu apstrāde vai iekšējie darba procesi pārlūkprogrammā. Mēs veidojam aplikācijas no vienkāršiem iekšējiem rīkiem līdz uzņēmuma līmeņa portāliem.",
        "Katrs projekts sākas ar procesu izpēti - mēs vispirms saprotam, kā jūs strādājat, un tikai pēc tam projektējam datu struktūru un saskarni. Rezultāts ir sistēma, kas atbilst jūsu procesiem, nevis liek tos pārtaisīt.",
      ],
      flagship: "vadi",
      pointsTitle: "Ko ietver web aplikāciju izstrāde",
      points: [
        {
          title: "Lietotāji, lomas un tiesības",
          text: "Droša autentifikācija, dažādi piekļuves līmeņi un darbību žurnāls, lai vienmēr būtu skaidrs, kas un kad ko mainīja.",
        },
        {
          title: "Individuāla datu struktūra",
          text: "Datubāze tiek projektēta tieši jūsu procesiem - bez liekiem laukiem un bez ierobežojumiem, ko uzspiež gatavas platformas.",
        },
        {
          title: "Atskaites un datu vizualizācija",
          text: "Paneļi ar reāllaika rādītājiem, filtriem un eksportu uz Excel vai CSV lēmumu pieņemšanai.",
        },
        {
          title: "API un ārējās sistēmas",
          text: "Savienojums ar jūsu esošajām sistēmām - grāmatvedību, noliktavu, maksājumiem vai jebkuru citu servisu ar API.",
        },
        {
          title: "Mērogojamība",
          text: "Arhitektūra tiek veidota tā, lai lietotāju un datu apjoma pieaugums neprasītu sistēmas pārrakstīšanu no nulles.",
        },
        {
          title: "Drošība",
          text: "Datu šifrēšana, aizsardzība pret izplatītākajiem uzbrukumiem, regulāras rezerves kopijas un atjauninājumi.",
        },
      ],
      forWhom: [
        "Uzņēmumiem, kas procesus vada Excel failos un e-pastā",
        "Pakalpojumu sniedzējiem, kam vajadzīgs klientu portāls vai pieteikumu sistēma",
        "Komandām ar unikāliem darba procesiem, kuriem nav gatavu risinājumu",
        "Uzņēmumiem, kas vēlas apvienot vairākas atsevišķas sistēmas vienā",
      ],
      deliverables: [
        "Procesu izpēte un tehniskā specifikācija",
        "Saskarnes dizains un prototips",
        "Lietotāju, lomu un tiesību sistēma",
        "Administrācijas panelis un atskaites",
        "API integrācijas ar ārējām sistēmām",
        "Testēšana un veiktspējas optimizācija",
        "Izvietošana serverī un uzraudzība",
        "Dokumentācija un komandas apmācība",
      ],
      tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
      faqs: [
        {
          q: "Ar ko web aplikācija atšķiras no mājaslapas?",
          a: "Mājaslapa galvenokārt pasniedz informāciju, bet web aplikācija veic darbu: tajā ir lietotāju konti, datu ievade un apstrāde, aprēķini, atskaites un darba procesi. Web aplikācija aizstāj vai automatizē to, kas citādi tiktu darīts manuāli.",
        },
        {
          q: "Cik ilgi aizņem web aplikācijas izstrāde?",
          a: "Termiņš ir tieši atkarīgs no funkcionalitātes apjoma. Nelielus iekšējos rīkus var izstrādāt dažu nedēļu laikā, apjomīgākus portālus - ilgākā periodā, ko sadalām posmos ar redzamu starprezultātu katrā.",
        },
        {
          q: "Vai varēšu sekot līdzi izstrādes gaitai?",
          a: "Jā. Projekts tiek izvietots uz pagaidu domēna, un jūs saņemat saiti, kur jebkurā brīdī redzēt aktuālo versiju un progresu praktiski reāllaikā.",
        },
        {
          q: "Vai varat pārņemt jau iesāktu projektu?",
          a: "Jā. Mēs veicam esošā koda auditu, novērtējam tā stāvokli un piedāvājam risinājumu - turpināt izstrādi uz esošā pamata vai pārbūvēt konkrētas daļas.",
        },
        {
          q: "Kas notiek pēc projekta nodošanas?",
          a: "Jūs saņemat pilnas piekļuves kodam un serverim. Papildus piedāvājam uzturēšanas līgumu ar atjauninājumiem, uzraudzību un prioritāru atbalstu.",
        },
      ],
      cases: { services: ["web-platforms"] },
      contactTitle: "Pastāstiet par savu projektu",
      contactText: "Konsultācija un cenas piedāvājums ir bez maksas. Atbildam parasti vienas darba dienas laikā.",
    },
  },
  "crm-sistemas-izstrade": {
    metaTitle: "CRM sistēmas izstrāde pēc pasūtījuma",
    metaDescription: "Individuālas CRM sistēmas izstrāde - klientu bāze, darījumu vadība, uzdevumi un atskaites, pielāgotas tieši jūsu darba procesiem. CRM izstrāde Latvijā.",
    config: {
      service: "crm",
      breadcrumb: [
        { name: 'Pakalpojumi', path: '/services' },
        { name: "CRM sistēmas izstrāde", path: '/services/crm-sistemas-izstrade' },
      ],
      eyebrow: "Klientu attiecību pārvaldība",
      title: "CRM sistēmas",
      titleAccent: "izstrāde",
      intro: [
        "Individuāla CRM sistēma ir jēgpilna tad, kad gatavās platformas prasa pielāgot uzņēmuma procesus programmatūrai, nevis otrādi. Mēs veidojam CRM, kurā darījumu posmi, lauki un atskaites atbilst tam, kā jūsu komanda strādā šodien.",
        "Sistēmā apvienojas klientu bāze, komunikācijas vēsture, darījumu piltuve, uzdevumi un atskaites. Maksājat par izstrādi vienreiz, nevis par katru lietotāju katru mēnesi, un sistēma pieder jums.",
      ],
      flagship: "agency-crm",
      pointsTitle: "Ko ietver CRM sistēmas izstrāde",
      points: [
        {
          title: "Klientu bāze un vēsture",
          text: "Visa informācija par klientu vienuviet - kontakti, sarakste, dokumenti, pasūtījumi un piezīmes.",
        },
        {
          title: "Darījumu piltuve",
          text: "Vizuāla darījumu tāfele ar posmiem, kurus definējat jūs, kā arī prognozes un konversijas rādītāji katrā posmā.",
        },
        {
          title: "Uzdevumi un atgādinājumi",
          text: "Uzdevumu piešķiršana darbiniekiem, termiņi un automātiski atgādinājumi, lai neviens klients netiktu aizmirsts.",
        },
        {
          title: "Atskaites vadībai",
          text: "Pārdošanas rādītāji, darbinieku slodze un piltuves stāvoklis reāllaikā, ar eksportu tālākai analīzei.",
        },
        {
          title: "Integrācijas",
          text: "Savienojums ar e-pastu, mājaslapas kontaktformām, interneta veikalu, grāmatvedību un telefoniju.",
        },
        {
          title: "Tiesību pārvaldība",
          text: "Katrs darbinieks redz tikai to, kas viņam nepieciešams. Darbību žurnāls saglabā izmaiņu vēsturi.",
        },
      ],
      forWhom: [
        "Pārdošanas komandām, kas klientus uzskaita izklājlapās",
        "Uzņēmumiem, kuriem gatavo CRM abonementi kļuvuši pārāk dārgi",
        "Biznesiem ar netipisku pārdošanas vai apkalpošanas procesu",
        "Komandām, kas vēlas CRM savienot ar savu mājaslapu un veikalu",
      ],
      deliverables: [
        "Pārdošanas procesa izpēte un modelēšana",
        "Klientu un darījumu datu struktūra",
        "Darījumu piltuve ar pielāgotiem posmiem",
        "Uzdevumu un atgādinājumu sistēma",
        "Atskaišu panelis vadībai",
        "Integrācijas ar e-pastu un mājaslapas formām",
        "Datu imports no esošās sistēmas",
        "Komandas apmācība un atbalsts ieviešanas laikā",
      ],
      tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
      faqs: [
        {
          q: "Kāpēc izstrādāt CRM, ja ir gatavi risinājumi?",
          a: "Gatavie risinājumi ir izdevīgi, ja jūsu process sakrīt ar to loģiku. Individuāla CRM ir izdevīga tad, kad process ir netipisks, kad abonementu maksa par lietotājiem kļūst dārgāka par izstrādi, vai kad nepieciešama cieša integrācija ar citām jūsu sistēmām.",
        },
        {
          q: "Vai varēsim pārnest datus no esošās sistēmas?",
          a: "Jā. Mēs pārnesam klientus, darījumus, kontaktu vēsturi un dokumentus no izklājlapām vai esošās CRM platformas, saglabājot saikni starp ierakstiem.",
        },
        {
          q: "Cik lietotāju var strādāt sistēmā?",
          a: "Lietotāju skaits nav ierobežots un neietekmē ikmēneša izmaksas - jūs maksājat par izstrādi un uzturēšanu, nevis par katru darbinieku atsevišķi.",
        },
        {
          q: "Vai CRM var savienot ar mājaslapu?",
          a: "Jā, un tas ir viens no biežākajiem ieguvumiem. Pieteikumi no mājaslapas kontaktformas vai interneta veikala pasūtījumi nonāk CRM automātiski, bez manuālas pārrakstīšanas.",
        },
        {
          q: "Kas notiek, ja vajadzēs jaunu funkcionalitāti?",
          a: "Sistēma pieder jums, tāpēc to var papildināt jebkurā brīdī. Mēs piedāvājam uzturēšanas līgumu, kura ietvaros regulāri pievienojam jaunas funkcijas atbilstoši biznesa attīstībai.",
        },
      ],
      cases: { services: ["crm", "web-platforms"] },
      contactTitle: "Pastāstiet par savu projektu",
      contactText: "Konsultācija un cenas piedāvājums ir bez maksas. Atbildam parasti vienas darba dienas laikā.",
    },
  },
  "ai-automatizacija": {
    metaTitle: "AI automatizācija uzņēmumiem - čatboti un integrācijas",
    metaDescription: "AI automatizācija biznesa procesos - čatboti, dokumentu apstrāde, satura ģenerēšana un datu analīze. Mākslīgā intelekta integrācija jūsu sistēmās.",
    config: {
      service: "ai",
      breadcrumb: [
        { name: 'Pakalpojumi', path: '/services' },
        { name: "AI automatizācija", path: '/services/ai-automatizacija' },
      ],
      eyebrow: "Mākslīgais intelekts biznesa procesos",
      title: "AI automatizācija",
      titleAccent: "uzņēmumiem",
      intro: [
        "AI automatizācija ir mākslīgā intelekta ieviešana konkrētos jūsu uzņēmuma procesos - tur, kur šobrīd tiek tērēts laiks atkārtotam manuālam darbam. Tas var būt klientu jautājumu apstrāde, dokumentu un rēķinu nolasīšana, satura sagatavošana vai datu analīze.",
        "Mēs sākam ar procesu auditu un izvēlamies tikai tos uzdevumus, kur AI dod izmērāmu ietaupījumu. Risinājums tiek integrēts jūsu esošajās sistēmās - mājaslapā, CRM vai iekšējā aplikācijā - un paliek jūsu kontrolē.",
      ],
      flagship: "teahouse-news-bot",
      pointsTitle: "Ko ietver AI automatizācija",
      points: [
        {
          title: "Klientu atbalsta čatboti",
          text: "Asistents, kas atbild uz jautājumiem, balstoties uz jūsu dokumentiem un cenrādi, un nodod sarunu cilvēkam, kad tas nepieciešams.",
        },
        {
          title: "Dokumentu apstrāde",
          text: "Automātiska datu nolasīšana no rēķiniem, līgumiem un pieteikumiem ar ierakstīšanu tieši jūsu sistēmā.",
        },
        {
          title: "Satura ģenerēšana",
          text: "Preču apraksti, ziņu projekti un e-pastu sagataves jūsu zīmola stilā, ar cilvēka apstiprinājumu pirms publicēšanas.",
        },
        {
          title: "Datu analīze",
          text: "Pārdošanas un klientu datu analīze dabiskā valodā - jautājiet sistēmai un saņemiet atbildi ar konkrētiem skaitļiem.",
        },
        {
          title: "Procesu automatizācija",
          text: "Pieteikumu šķirošana, prioritāšu noteikšana un novirzīšana pareizajam darbiniekam bez manuālas iejaukšanās.",
        },
        {
          title: "Integrācija esošajās sistēmās",
          text: "AI tiek pieslēgts tur, kur jūs jau strādājat - CRM, e-pastā, mājaslapā vai iekšējā portālā.",
        },
      ],
      forWhom: [
        "Uzņēmumiem, kas saņem daudz atkārtotu klientu jautājumu",
        "Komandām, kas manuāli pārraksta datus no dokumentiem",
        "E-veikaliem ar lielu preču skaitu un aprakstu apjomu",
        "Vadītājiem, kam vajadzīgas ātras atbildes no saviem datiem",
      ],
      deliverables: [
        "Procesu audits un automatizācijas potenciāla novērtējums",
        "Risinājuma prototips ar reāliem jūsu datiem",
        "AI modeļa izvēle un konfigurācija",
        "Integrācija ar esošajām sistēmām",
        "Drošības un datu aizsardzības konfigurācija",
        "Kvalitātes uzraudzība un rezultātu mērīšana",
        "Komandas apmācība darbam ar risinājumu",
        "Uzturēšana un pilnveidošana",
      ],
      tech: ["Claude API", "OpenAI API", "Next.js", "TypeScript", "Node.js"],
      faqs: [
        {
          q: "Ar ko sākt AI ieviešanu uzņēmumā?",
          a: "Ar procesu auditu. Mēs izvērtējam, kuri uzdevumi ir atkārtoti, apjomīgi un balstīti tekstā vai datos - tieši tur AI dod ātrāko atdevi. Sākam ar vienu procesu, izmērām rezultātu un tikai tad paplašinām.",
        },
        {
          q: "Vai mani dati būs drošībā?",
          a: "Jā. Mēs konfigurējam risinājumu tā, lai dati netiktu izmantoti modeļu apmācībai, ierobežojam piekļuvi tikai nepieciešamajai informācijai un vienojamies par datu glabāšanas noteikumiem pirms izstrādes sākuma.",
        },
        {
          q: "Vai AI aizstās manus darbiniekus?",
          a: "Praksē AI pārņem atkārtoto darbu, nevis cilvēkus. Čatbots atbild uz tipiskajiem jautājumiem un nodod sarežģītos cilvēkam, dokumentu apstrāde novērš pārrakstīšanu - komanda velta laiku uzdevumiem, kuros vajadzīgs cilvēka spriedums.",
        },
        {
          q: "Cik maksā AI risinājuma ieviešana?",
          a: "Izmaksas veido izstrāde un AI modeļa lietošanas maksa, kas ir atkarīga no apjoma. Pēc audita mēs parādām abus skaitļus un prognozējamo ietaupījumu, lai lēmumu varētu pieņemt, balstoties uz atdevi.",
        },
        {
          q: "Vai AI risinājums saistīts ar GEO optimizāciju?",
          a: "Tie ir divi dažādi pakalpojumi ar kopīgu pamatu. AI automatizācija ievieš mākslīgo intelektu jūsu procesos, savukārt GEO optimizācija panāk, ka AI sistēmas - ChatGPT, Gemini, Perplexity - iesaka jūsu uzņēmumu saviem lietotājiem.",
        },
      ],
      cases: { services: ["ai", "web-platforms"] },
      contactTitle: "Pastāstiet par savu projektu",
      contactText: "Konsultācija un cenas piedāvājums ir bez maksas. Atbildam parasti vienas darba dienas laikā.",
    },
  },
  "majas-lapas-uzturesana": {
    metaTitle: "Mājas lapas uzturēšana un administrēšana",
    metaDescription: "Mājas lapas uzturēšana un administrēšana par fiksētu mēneša maksu: drošības atjauninājumi, rezerves kopijas, uzraudzība 24/7, satura izmaiņas un mēneša atskaite. Arī citu izstrādātāju vietnēm.",
    config: {
      service: "maintenance",
      breadcrumb: [
        { name: 'Pakalpojumi', path: '/services' },
        { name: "Mājas lapas uzturēšana", path: '/services/majas-lapas-uzturesana' },
      ],
      eyebrow: "Tehniskā uzturēšana un satura administrēšana",
      title: "Mājas lapas uzturēšana",
      titleAccent: "un administrēšana",
      intro: [
        "Mājas lapas uzturēšana ir regulārs darbs, kas nodrošina, ka jūsu vietne vienmēr strādā, ir droša un aktuāla. Mēs uzstādām drošības atjauninājumus, veidojam rezerves kopijas, visu diennakti uzraugām vietnes pieejamību un pēc jūsu pieprasījuma mainām saturu - tekstus, attēlus, cenas un jaunumus.",
        "Mājaslapa nav vienreizējs pirkums: tāpat kā automašīnai, tai vajadzīga regulāra apkope. Bez tās vietne pakāpeniski noveco, kļūst lēnāka un ievainojamāka, un problēmas parasti atklājas brīdī, kad klients nevar atvērt lapu vai nosūtīt pieteikumu. Uzturēšanu piedāvājam arī mājaslapām, kuras izstrādājis cits uzņēmums.",
      ],
      illustration: "maintenance-report",
      secondaryCta: { label: "Bezmaksas tehniskais audits", href: "/#kontakti" },
      why: {
        title: "Kāpēc mājaslapai vajadzīga uzturēšana",
        points: [
          {
            title: "Drošība",
            text: "Lielākā daļa uzlaušanu notiek caur novecojušiem spraudņiem un sistēmas versijām, kuru ievainojamības jau ir publiski zināmas. Automatizēti boti tās meklē nepārtraukti - arī mazu uzņēmumu vietnēs.",
          },
          {
            title: "Nepārtraukta darbība",
            text: "Kamēr vietne nestrādā, jūs zaudējat pieteikumus un pasūtījumus - un bieži par to uzzināt tikai no klienta. Uzraudzība pamana problēmu dažu minūšu laikā.",
          },
          {
            title: "Rezerves kopijas",
            text: "Servera kļūme, neveiksmīgs atjauninājums vai nejauši izdzēsta lapa: ar svaigu rezerves kopiju vietni atjauno minūšu laikā, nevis veido no jauna.",
          },
          {
            title: "Aktuāls saturs",
            text: "Vecas cenas, pagājušā gada akcijas un nestrādājoši kontakti mazina uzticību. Jums nav jāapgūst administrēšanas panelis - atsūtiet izmaiņas e-pastā, un mēs tās ievietosim.",
          },
          {
            title: "Ātrums un pozīcijas Google",
            text: "Google vērtē vietnes ātrumu un tehnisko stāvokli. Regulāra optimizācija uztur labus Core Web Vitals rādītājus un neļauj vietnei zaudēt pozīcijas meklētājā.",
          },
          {
            title: "Viena kontaktpersona",
            text: "Jums nav jāzina, kurš atbild par hostingu, domēnu vai SSL sertifikātu. Jebkuras problēmas gadījumā rakstiet mums - mēs to atrisināsim.",
          },
        ],
      },
      pointsTitle: "Ko ietver mājas lapas uzturēšana",
      points: [
        {
          title: "Drošības atjauninājumi",
          text: "Regulāri atjauninām sistēmu, spraudņus un bibliotēkas, iepriekš pārbaudot, ka atjauninājums neko nesabojā.",
        },
        {
          title: "Rezerves kopijas",
          text: "Automātiskas ikdienas rezerves kopijas, kas glabājas atsevišķi no servera. Atjaunošanu periodiski pārbaudām.",
        },
        {
          title: "Uzraudzība 24/7",
          text: "Vietnes pieejamību pārbaudām ik pēc dažām minūtēm. Ja lapa neatveras, paziņojumu saņemam mēs - nevis jūsu klients.",
        },
        {
          title: "Satura administrēšana",
          text: "Teksti, attēli, cenas, jaunumi, preces un jaunas lapas - atsūtiet izmaiņas, un mēs tās ievietojam.",
        },
        {
          title: "Ātruma optimizācija",
          text: "Sekojam ielādes ātrumam un Core Web Vitals, optimizējam attēlus un kešošanu, lai vietne paliktu ātra.",
        },
        {
          title: "SSL, domēns un hostings",
          text: "Sekojam SSL sertifikāta, domēna un hostinga termiņiem, lai nekas nebeigtos negaidīti.",
        },
        {
          title: "Kļūdu labošana",
          text: "Forma nesūta vēstules, poga nereaģē, lapa izskatās salauzta mobilajā - mēs atrodam cēloni un izlabojam.",
        },
        {
          title: "Mēneša atskaite",
          text: "Īss pārskats par paveikto: atjauninājumi, rezerves kopijas, pieejamība, ātrums un veiktās izmaiņas.",
        },
        {
          title: "Konsultācijas un uzlabojumi",
          text: "Ieteikumi, ko vietnē uzlabot, un nelieli papildinājumi bez atsevišķa izstrādes projekta.",
        },
      ],
      comparison: {
        title: "Mājaslapa bez uzturēšanas un ar to",
        eyebrow: "Salīdzinājums",
        columns: [
          {
            label: "Bez uzturēšanas",
            tone: "negative",
            items: [
              "Spraudņi un sistēma nav atjaunoti gadiem - atvērtas durvis uzlaušanai",
              "Par to, ka vietne nestrādā, uzzināt no klienta",
              "Rezerves kopijas nav - pēc kļūmes vietne jāveido no jauna",
              "SSL sertifikāts beidzas, un pārlūks rāda brīdinājumu «Nedroša vietne»",
              "Saturs noveco, jo nav laika vai nav skaidrs, kā to mainīt",
              "Vietne kļūst lēnāka un zaudē pozīcijas Google",
            ],
          },
          {
            label: "Ar SitesPro uzturēšanu",
            tone: "positive",
            items: [
              "Atjauninājumi tiek uzstādīti regulāri un pārbaudīti",
              "Problēmu pamanām dažu minūšu laikā un novēršam",
              "Ikdienas rezerves kopijas - atjaunošana minūšu laikā",
              "SSL, domēns un hostings vienmēr spēkā",
              "Izmaiņas saturā - pēc jūsu e-pasta",
              "Ātrums un tehniskais stāvoklis pastāvīgi uzraudzīts",
            ],
          },
        ],
      },
      approachTitle: 'Kā notiek sadarbība',
      approach: [
        {
          title: "Bezmaksas audits",
          text: "Pārbaudām vietnes drošību, versijas, ātrumu, rezerves kopijas un hostingu un parādām, kādā stāvoklī tā ir šobrīd.",
        },
        {
          title: "Sakārtošana",
          text: "Novēršam atrastās problēmas, uzstādām atjauninājumus, rezerves kopijas un uzraudzību.",
        },
        {
          title: "Ikdienas uzraudzība",
          text: "Sekojam vietnes darbībai, drošībai un ātrumam - jums par to vairs nav jādomā.",
        },
        {
          title: "Izmaiņas pēc pieprasījuma",
          text: "Atsūtiet, kas jāmaina, un mēs to ieviešam saskaņotajā termiņā.",
        },
        {
          title: "Mēneša atskaite",
          text: "Katru mēnesi saņemat īsu pārskatu par paveikto un ieteikumus uzlabojumiem.",
        },
      ],
      forWhom: [
        "Uzņēmumiem, kuru mājaslapa vai e-veikals atnes pieteikumus un pasūtījumus",
        "WordPress un WooCommerce vietnēm, kas ilgi nav atjaunotas",
        "Uzņēmumiem, kuru iepriekšējais izstrādātājs vairs nav sasniedzams",
        "Komandām bez sava IT speciālista",
        "Tiem, kas vēlas mainīt saturu, nemācoties administrēšanas paneli",
      ],
      deliverables: [
        "Bezmaksas sākotnējais tehniskais audits",
        "Regulāri drošības un sistēmas atjauninājumi",
        "Automātiskas ikdienas rezerves kopijas ārpus servera",
        "Pieejamības uzraudzība 24/7 ar tūlītējiem paziņojumiem",
        "Satura izmaiņas pēc pieprasījuma",
        "SSL sertifikāta, domēna un hostinga kontrole",
        "Kļūdu labošana un ātruma optimizācija",
        "Mēneša atskaite par paveikto",
        "Fiksēta mēneša maksa bez pārsteigumiem",
      ],
      tech: ["WordPress", "WooCommerce", "Next.js", "React", "PHP", "Node.js", "Cloudflare"],
      faqs: [
        {
          q: "Kas ir mājas lapas uzturēšana?",
          a: "Mājas lapas uzturēšana ir regulārs tehniskais darbs, kas nodrošina vietnes drošību, darbību un aktualitāti: atjauninājumi, rezerves kopijas, pieejamības uzraudzība, kļūdu labošana un satura izmaiņas. To veic par fiksētu mēneša maksu, lai problēmas tiktu novērstas, pirms tās ietekmē klientus.",
        },
        {
          q: "Ar ko uzturēšana atšķiras no administrēšanas?",
          a: "Uzturēšana ir tehniskā puse - drošība, atjauninājumi, rezerves kopijas un ātrums. Administrēšana ir darbs ar saturu - tekstu, attēlu, cenu, preču un jaunumu publicēšana. Mūsu pakalpojumā ir iekļautas abas daļas.",
        },
        {
          q: "Vai uzturat arī mājaslapas, ko izstrādājis cits uzņēmums?",
          a: "Jā. Sākam ar bezmaksas tehnisko auditu, lai saprastu vietnes stāvokli, un tikai tad piedāvājam uzturēšanas plānu. Strādājam ar WordPress, WooCommerce, Next.js un citām mūsdienīgām platformām.",
        },
        {
          q: "Cik maksā mājas lapas uzturēšana?",
          a: "Uzturēšanu apmaksā ar fiksētu mēneša maksu, kas atkarīga no vietnes apjoma, platformas un nepieciešamo satura izmaiņu daudzuma. Precīzu cenu nosaucam pēc bezmaksas audita - bez slēptām papildu izmaksām.",
        },
        {
          q: "Cik ātri reaģējat, ja vietne nestrādā?",
          a: "Uzraudzības sistēma paziņo mums par problēmu dažu minūšu laikā, un kļūmes, kuru dēļ vietne nav pieejama, risinām prioritāri. Konkrēto reakcijas laiku fiksējam līgumā.",
        },
        {
          q: "Vai mājaslapa joprojām piederēs man?",
          a: "Jā. Kods, dati un visas piekļuves paliek jūsu īpašumā. Uzturēšanas līgums nepadara jūs atkarīgus no mums.",
        },
      ],
      contactTitle: "Pastāstiet par savu mājas lapu",
      contactText: "Sāksim ar bezmaksas tehnisko auditu - parādīsim, kādā stāvoklī ir vietne un ko vajadzētu sakārtot. Atbildam vienas darba dienas laikā.",
    },
  },
  "seo-geo-optimizacija": {
    metaTitle: "SEO un GEO optimizācija - redzamība Google un AI",
    metaDescription: "SEO un GEO optimizācija mājaslapām Latvijā: augstākas pozīcijas Google meklētājā un ieteikumi ChatGPT, Gemini un Perplexity atbildēs. Audits, tehniskie labojumi, saturs un atskaites.",
    config: {
      service: "seo-geo",
      breadcrumb: [
        { name: 'Pakalpojumi', path: '/services' },
        { name: "SEO un GEO optimizācija", path: '/services/seo-geo-optimizacija' },
      ],
      eyebrow: "Redzamība Google meklētājā un AI atbildēs",
      title: "SEO un GEO",
      titleAccent: "optimizācija",
      intro: [
        "SEO optimizācija palīdz jūsu mājaslapai parādīties Google pirmajā lapā, kad potenciālie klienti meklē jūsu pakalpojumus. GEO (Generative Engine Optimization) ir jaunāks virziens: tas panāk, ka AI asistenti - ChatGPT, Google Gemini un Perplexity - savās atbildēs min un iesaka tieši jūsu uzņēmumu.",
        "Abi darbojas kopā: mēs sakārtojam vietnes tehnisko pusi, izveidojam saturu, kas atbild uz klientu jautājumiem, un nostiprinām uzņēmuma klātbūtni ārpus mājaslapas. Rezultāts - vairāk pieteikumu no klientiem, kas jūs atrod paši, bez maksas reklāmas. SEO ir ilgtermiņa ieguldījums: pirmās pārmaiņas parasti redzamas pēc 2-3 mēnešiem.",
      ],
      illustration: "search-vs-ai",
      secondaryCta: { label: "Bezmaksas SEO/GEO audits", href: "/#kontakti" },
      why: {
        title: "Kāpēc tas ir svarīgi jūsu biznesam",
        illustration: "click-share",
        points: [
          {
            title: "Klienti izvēlas no pirmajiem rezultātiem",
            text: "Pirmā vieta Google saņem aptuveni 10 reizes vairāk klikšķu nekā desmitā, bet otro lapu atver mazāk nekā 1% meklētāju. Ja jūs neesat pirmajā lapā, klients jūs vienkārši neredz.",
          },
          {
            title: "Arvien vairāk jautājumu uzdod AI",
            text: "Cilvēki arvien biežāk jautā ChatGPT vai Gemini: «Kuru firmu izvēlēties?». AI nedod 10 saites, bet 2-3 ieteikumus. Ja jūsu tur nav, klientu saņem konkurents.",
          },
          {
            title: "Šie klienti jau ir gatavi pirkt",
            text: "Cilvēks, kurš meklē «grāmatvedis Rīgā», jau ir nolēmis, ka pakalpojums vajadzīgs - viņš izvēlas, pie kā vērsties. Tie ir siltākie pieteikumi, kādus var iegūt.",
          },
          {
            title: "Rezultāts, kas paliek",
            text: "Maksas reklāma apstājas, tiklīdz beidzas budžets. Labas pozīcijas meklētājā un AI atbildēs turpina atnest klientus arī pēc tam.",
          },
        ],
      },
      pointsTitle: "Ko ietver SEO un GEO optimizācija",
      points: [
        {
          title: "SEO un GEO audits",
          text: "Pārbaudām, kā jūsu vietni redz Google un AI asistenti: tehniskās kļūdas, ātrums, indeksācija, saturs un konkurentu pozīcijas.",
        },
        {
          title: "Atslēgvārdu un jautājumu izpēte",
          text: "Noskaidrojam, ko tieši jūsu klienti raksta Google un ko viņi jautā AI, lai saturs atbilstu reāliem meklējumiem.",
        },
        {
          title: "Tehniskā optimizācija",
          text: "Ātrums un Core Web Vitals, mobilā versija, indeksācija, sitemap, meta tagi un pareiza lapu struktūra.",
        },
        {
          title: "Strukturētie dati (Schema.org)",
          text: "Mašīnlasāma informācija par uzņēmumu, pakalpojumiem, cenām un atsauksmēm - to izmanto gan Google, gan AI sistēmas.",
        },
        {
          title: "Saturs, kas atbild uz jautājumiem",
          text: "Pakalpojumu lapas, BUJ un raksti, kas skaidri atbild uz klientu jautājumiem - tieši šādu saturu AI citē visbiežāk.",
        },
        {
          title: "Google uzņēmuma profils",
          text: "Sakārtots Google Business Profile, lai jūs parādītos kartē un vietējos meklējumos «tuvumā».",
        },
        {
          title: "Ārējā klātbūtne un atsauksmes",
          text: "Vienoti uzņēmuma dati katalogos un platformās, atsauksmju stratēģija un kvalitatīvas saites uz jūsu vietni.",
        },
        {
          title: "Piekļuve AI sistēmām",
          text: "Konfigurējam vietni tā, lai AI rāpuļprogrammas to varētu nolasīt un saprast, ieskaitot llms.txt failu.",
        },
        {
          title: "Mērīšana un atskaites",
          text: "Regulāras atskaites par pozīcijām, apmeklējumu, pieteikumiem un pieminējumiem AI atbildēs.",
        },
      ],
      comparison: {
        title: "SEO un GEO - kas ir kas",
        eyebrow: "Vienkāršiem vārdiem",
        columns: [
          {
            label: "SEO · Google meklētājs",
            tone: "neutral",
            items: [
              "Klients raksta: «auto serviss Rīgā»",
              "Redz 10 saites un reklāmas, izvēlas pats",
              "Mērķis - būt Google pirmajā lapā, pēc iespējas augstāk",
              "Svarīgi: ātrums, tehniskā kvalitāte, atslēgvārdi, saites uz jūsu vietni",
              "Rezultātu mēra pozīcijās, klikšķos un pieteikumos",
            ],
          },
          {
            label: "GEO · AI asistenti",
            tone: "neutral",
            items: [
              "Klients jautā: «Kur Rīgā var uzticami salabot auto?»",
              "Saņem vienu atbildi ar 2-3 ieteikumiem",
              "Mērķis - būt starp uzņēmumiem, ko AI iesaka un citē",
              "Svarīgi: skaidri fakti, strukturēti dati, atsauksmes un pieminējumi citās vietnēs",
              "Rezultātu mēra pieminējumos AI atbildēs un pieteikumos no tām",
            ],
          },
        ],
      },
      approachTitle: 'Kā notiek sadarbība',
      approach: [
        {
          title: "Audits",
          text: "Novērtējam vietnes tehnisko stāvokli, pašreizējās pozīcijas un to, vai AI asistenti jūs jau pazīst.",
        },
        {
          title: "Stratēģija",
          text: "Izvēlamies atslēgvārdus un jautājumus ar lielāko biznesa vērtību un saskaņojam plānu ar jums.",
        },
        {
          title: "Tehniskie labojumi",
          text: "Novēršam kļūdas, paātrinām vietni un pievienojam strukturētos datus.",
        },
        {
          title: "Saturs",
          text: "Izveidojam vai pārstrādājam lapas, lai tās skaidri atbildētu uz klientu jautājumiem.",
        },
        {
          title: "Ārējie signāli",
          text: "Google uzņēmuma profils, katalogi, atsauksmes un saites no citām vietnēm.",
        },
        {
          title: "Mērīšana un uzlabošana",
          text: "Katru mēnesi mērām rezultātus, atskaitāmies un pielāgojam plānu.",
        },
      ],
      forWhom: [
        "Uzņēmumiem, kuru konkurenti ir Google augšā, bet viņi paši - nē",
        "Vietējiem pakalpojumu sniedzējiem, kam klienti nāk no meklējumiem «tuvumā»",
        "E-veikaliem, kas vēlas vairāk pasūtījumu, nepalielinot reklāmas budžetu",
        "Uzņēmumiem, kas vēlas tikt ieteikti ChatGPT, Gemini un Perplexity atbildēs",
        "Tiem, kam ir laba mājaslapa, bet maz pieteikumu no tās",
      ],
      deliverables: [
        "SEO un GEO audits ar konkrētu darbu sarakstu",
        "Atslēgvārdu un klientu jautājumu karte",
        "Tehnisko kļūdu labojumi un ātruma optimizācija",
        "Schema.org strukturētie dati",
        "Optimizētas vai jaunas pakalpojumu lapas un BUJ",
        "Sakārtots Google uzņēmuma profils",
        "Redzamības pārbaude ChatGPT, Gemini un Perplexity",
        "Ikmēneša atskaite par pozīcijām un pieteikumiem",
      ],
      tech: ["Google Search Console", "Google Business Profile", "Schema.org", "PageSpeed Insights", "llms.txt"],
      faqs: [
        {
          q: "Kas ir SEO optimizācija?",
          a: "SEO (Search Engine Optimization) ir mājaslapas pilnveidošana, lai tā parādītos pēc iespējas augstāk Google meklēšanas rezultātos. Tā ietver tehnisko optimizāciju, saturu, kas atbilst klientu meklējumiem, un uzticamības signālus - atsauksmes un saites no citām vietnēm.",
        },
        {
          q: "Kas ir GEO un ar ko tas atšķiras no SEO?",
          a: "GEO (Generative Engine Optimization) ir optimizācija AI asistentiem - ChatGPT, Google Gemini, Perplexity un Google AI pārskatiem. SEO mērķis ir augsta pozīcija meklēšanas rezultātos, GEO mērķis - lai AI savā atbildē pieminētu un ieteiktu jūsu uzņēmumu. Daudzi pamati ir kopīgi, tāpēc abus vislabāk darīt kopā.",
        },
        {
          q: "Cik ātri būs redzami rezultāti?",
          a: "Tehniskie labojumi iedarbojas dažu nedēļu laikā, pozīciju pieaugums parasti kļūst redzams pēc 2-3 mēnešiem, bet stabils rezultāts - pēc 4-6 mēnešiem. Tas atkarīgs no konkurences jūsu nozarē un vietnes sākotnējā stāvokļa.",
        },
        {
          q: "Vai varat garantēt pirmo vietu Google?",
          a: "Neviens godīgs speciālists to nevar garantēt - Google algoritmu kontrolē tikai Google. Mēs garantējam darbu pēc labākajām praksēm un caurspīdīgas atskaites, kurās redzams, kā mainās pozīcijas, apmeklējums un pieteikumi.",
        },
        {
          q: "Vai var optimizēt mājaslapu, ko izstrādājis cits uzņēmums?",
          a: "Jā. Sākam ar auditu, kas parāda, ko esošajā vietnē var uzlabot. Ja platforma ierobežo optimizāciju, mēs to godīgi pasakām un piedāvājam risinājumus.",
        },
        {
          q: "Cik maksā SEO un GEO optimizācija?",
          a: "Cena atkarīga no vietnes apjoma, konkurences nozarē un darbu apjoma. Parasti to veido sākotnējā optimizācija un ikmēneša darbs. Pēc audita saņemat konkrētu plānu un cenu.",
        },
      ],
      contactTitle: "Uzziniet, kā jūs redz Google un AI",
      contactText: "Bezmaksas SEO/GEO audits parādīs pašreizējās pozīcijas un konkrētus darbus, kas dos rezultātu. Atbildam vienas darba dienas laikā.",
    },
  },
};
