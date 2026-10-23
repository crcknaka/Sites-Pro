import Section, { linkClass, listClass } from './legal-section';

/** sitespro.lv lietošanas noteikumi — carried over from the old Latvian site. */
export default function TermsLv() {
  return (
    <>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--fg)]">Lietošanas noteikumi</h1>
      <p className="mt-4 text-sm text-[var(--text-muted)]">Spēkā no: 2026. gada 23. oktobra</p>

      <div className="mt-8 space-y-8 text-[var(--text-muted)] leading-relaxed">
        <Section title="1. Vispārīgie noteikumi">
          <p>
            Šie noteikumi regulē SIA SitesPro vietnes sitespro.lv (turpmāk - «Vietne») lietošanu.
            Izmantojot Vietni, jūs piekrītat šiem noteikumiem.
          </p>
        </Section>

        <Section title="2. Pakalpojumi">
          <p>
            SIA SitesPro sniedz web izstrādes pakalpojumus, tostarp mājas lapu izstrādi,
            e-komercijas risinājumus, web aplikāciju un CRM sistēmu izstrādi, AI automatizāciju,
            mājas lapu uzturēšanu un SEO/GEO optimizāciju. Katram projektam tiek piemērota
            individuāla pieeja un cena.
          </p>
        </Section>

        <Section title="3. Intelektuālais īpašums">
          <p>
            Viss Vietnes saturs, ieskaitot, bet neaprobežojoties ar tekstu, grafiku, logotipiem,
            ikonām un programmatūru, ir SIA SitesPro īpašums un ir aizsargāts ar Latvijas
            Republikas un starptautiskajiem intelektuālā īpašuma likumiem.
          </p>
        </Section>

        <Section title="4. Lietotāja pienākumi">
          <p>Izmantojot Vietni, jūs apņematies:</p>
          <ul className={listClass}>
            <li>Nesniegt nepatiesas vai maldinošas ziņas kontaktformā</li>
            <li>Neizmantot Vietni nelikumīgiem mērķiem</li>
            <li>Netraucēt Vietnes darbību</li>
          </ul>
        </Section>

        <Section title="5. Atbildības ierobežojums">
          <p>
            SIA SitesPro nenes atbildību par jebkādiem tiešiem vai netiešiem zaudējumiem, kas
            radušies Vietnes lietošanas rezultātā. Vietnes saturs tiek sniegts «kā ir» bez
            jebkādām garantijām.
          </p>
        </Section>

        <Section title="6. Bezmaksas demo">
          <p>
            Bezmaksas demo piedāvājums attiecas tikai uz nelielām informatīvām mājas lapām.
            SIA SitesPro patur tiesības atteikt bezmaksas demo, ja projekta apjoms pārsniedz demo
            piedāvājuma ietvarus. Bezmaksas demo neuzliek klientam nekādas maksājuma saistības.
          </p>
        </Section>

        <Section title="7. Piemērojamie tiesību akti">
          <p>
            Šie noteikumi tiek regulēti saskaņā ar Latvijas Republikas tiesību aktiem. Jebkuri
            strīdi tiks risināti Latvijas Republikas tiesās.
          </p>
        </Section>

        <Section title="8. Kontaktinformācija">
          <p>
            Ja jums ir jautājumi par šiem noteikumiem, sazinieties ar mums:{' '}
            <a href="mailto:info@sitespro.lv" className={linkClass}>
              info@sitespro.lv
            </a>
            .
          </p>
        </Section>
      </div>
    </>
  );
}
