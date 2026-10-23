import Section, { linkClass, listClass } from './legal-section';

/**
 * sitespro.lv privātuma politika. Carried over from the old Latvian site and
 * updated for what the merged site does: the contact form fields, Cloudflare
 * Turnstile spam protection and the theme kept in the browser's storage.
 */
export default function PrivacyLv() {
  return (
    <>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--fg)]">Privātuma politika</h1>
      <p className="mt-4 text-sm text-[var(--text-muted)]">Spēkā no: 2026. gada 23. oktobra</p>

      <div className="mt-8 space-y-8 text-[var(--text-muted)] leading-relaxed">
        <Section title="1. Pārzinis">
          <p>
            SIA SitesPro (turpmāk - «mēs» vai «Uzņēmums») ir atbildīgs par jūsu personas datu
            apstrādi vietnē sitespro.lv. Sazinieties ar mums:{' '}
            <a href="mailto:info@sitespro.lv" className={linkClass}>
              info@sitespro.lv
            </a>
            .
          </p>
        </Section>

        <Section title="2. Kādus datus mēs apkopojam">
          <p>Mēs apkopojam tikai tos datus, ko jūs paši norādāt kontaktformā:</p>
          <ul className={listClass}>
            <li>Vārds</li>
            <li>E-pasta adrese</li>
            <li>Nepieciešamais pakalpojums un budžets (ja norādīts)</li>
            <li>Ziņas saturs</li>
          </ul>
        </Section>

        <Section title="3. Datu apstrādes mērķi un pamats">
          <p>Jūsu personas dati tiek apstrādāti, lai:</p>
          <ul className={listClass}>
            <li>Atbildētu uz jūsu pieprasījumiem un jautājumiem</li>
            <li>Sniegtu informāciju par mūsu pakalpojumiem</li>
            <li>Sagatavotu un saskaņotu sadarbības piedāvājumu</li>
          </ul>
          <p className="mt-4">
            Apstrādes pamats ir jūsu piekrišana, nosūtot formu, un mūsu leģitīmās intereses
            atbildēt uz biznesa pieprasījumiem (VDAR 6. panta 1. punkta a) un f) apakšpunkts).
            Mēs neizmantojam jūsu datus automatizētai lēmumu pieņemšanai vai profilēšanai.
          </p>
        </Section>

        <Section title="4. Sīkdatnes">
          <p>
            Vietne neizmanto izsekošanas, analītikas vai reklāmas sīkdatnes. Jūsu izvēlētā tēma
            (gaišā vai tumšā) tiek saglabāta tikai jūsu pārlūkā un netiek nosūtīta mums.
          </p>
        </Section>

        <Section title="5. Apmeklējumu statistika">
          <p>
            Lai saprastu, kuras lapas ir noderīgas, mēs uzskaitām apmeklējumus ar SitesPro
            Analytics - mūsu pašu uzstādītu atvērtā koda rīku Umami. Tas neizmanto sīkdatnes un
            neglabā personas datus: tiek reģistrēta skatītā lapa, vietne, no kuras atnācāt,
            pārlūks, operētājsistēma, ierīces veids, ekrāna izmērs, valoda un aptuvenā atrašanās
            vieta (valsts un pilsēta). IP adrese tiek izmantota tikai atrašanās vietas noteikšanai
            un netiek saglabāta, tāpēc atsevišķus apmeklētājus identificēt nav iespējams.
          </p>
          <p className="mt-4">
            Statistika tiek apstrādāta mūsu pašu serverī Eiropas Savienībā (Hetzner, Vācija),
            netiek nodota trešajām pusēm un tiek glabāta 3 gadus. Apstrādes pamats ir mūsu
            leģitīmās intereses uzlabot vietni (VDAR 6. panta 1. punkta f) apakšpunkts).
          </p>
        </Section>

        <Section title="6. Trešo pušu pakalpojumi">
          <p>Kontaktformas darbībai izmantojam šādus pakalpojumu sniedzējus:</p>
          <ul className={listClass}>
            <li>
              <strong className="text-[var(--fg)]">Cloudflare Turnstile</strong> - aizsardzība
              pret surogātpastu. Pārbaudes laikā Cloudflare apstrādā jūsu IP adresi un pārlūka
              tehniskos datus, lai noteiktu, ka formu sūta cilvēks.
            </li>
            <li>
              <strong className="text-[var(--fg)]">Resend</strong> - kontaktformas ziņu piegāde
              uz mūsu e-pastu.
            </li>
          </ul>
          <p className="mt-4">
            Ja dati tiek apstrādāti ārpus Eiropas Savienības, tiek piemēroti VDAR prasībām
            atbilstoši aizsardzības pasākumi (piemēram, līguma standartklauzulas). Mēs
            nepārdodam, neiznomājam un nenododam jūsu datus citiem nolūkiem.
          </p>
        </Section>

        <Section title="7. Datu glabāšana un drošība">
          <p>
            Jūsu dati tiek glabāti drošā vidē un tiek dzēsti, kad tie vairs nav nepieciešami
            sākotnējam mērķim vai likumā noteikto pienākumu izpildei. Mēs piemērojam atbilstošus
            tehniskos un organizatoriskos pasākumus, lai aizsargātu jūsu personas datus.
          </p>
        </Section>

        <Section title="8. Jūsu tiesības (VDAR)">
          <p>Saskaņā ar Vispārīgo datu aizsardzības regulu jums ir tiesības:</p>
          <ul className={listClass}>
            <li>Piekļūt saviem personas datiem</li>
            <li>Labot neprecīzus datus</li>
            <li>Dzēst savus datus («tiesības tikt aizmirstam»)</li>
            <li>Ierobežot datu apstrādi vai iebilst pret to</li>
            <li>Uz datu pārnesamību</li>
            <li>Jebkurā brīdī atsaukt piekrišanu</li>
          </ul>
          <p className="mt-4">
            Lai izmantotu savas tiesības, sazinieties ar mums:{' '}
            <a href="mailto:info@sitespro.lv" className={linkClass}>
              info@sitespro.lv
            </a>
            . Jums ir arī tiesības iesniegt sūdzību Datu valsts inspekcijā.
          </p>
        </Section>

        <Section title="9. Izmaiņas politikā">
          <p>
            Mēs paturam tiesības atjaunināt šo privātuma politiku. Izmaiņas tiks publicētas šajā
            lapā ar atjauninātu spēkā stāšanās datumu.
          </p>
        </Section>
      </div>
    </>
  );
}
