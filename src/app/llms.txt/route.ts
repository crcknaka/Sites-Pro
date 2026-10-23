import { headers } from 'next/headers';
import { LLMS_EN } from '@/content/llms-en';
import { LV_SERVICE_PAGES } from '@/content/services-lv';
import { faqsFor } from '@/data/faqs';
import { projectsFor } from '@/data/projects';
import { servicesFor } from '@/data/services';
import { SITES, absoluteUrl, localeForHost } from '@/i18n';

/*
 * llms.txt — a compact, plain-text summary of the site for LLMs and answer
 * engines (ChatGPT, Gemini, Perplexity, Claude). https://llmstxt.org
 * One file per domain: the English one is hand-written, the Latvian one is
 * built from the same data as the pages so it cannot drift.
 */

function buildLv(): string {
  const url = (path: string) => absoluteUrl('lv', path);
  const pages = Object.entries(LV_SERVICE_PAGES);
  const projects = projectsFor('lv');

  return `# SitesPro (SIA SitesPro)

> Web izstrādes uzņēmums Rīgā. Veidojam mājas lapas, interneta veikalus, web
> aplikācijas, CRM sistēmas un AI automatizāciju, uzturam esošas vietnes un
> nodrošinām SEO un GEO optimizāciju - redzamību gan Google meklētājā, gan AI
> sistēmās (ChatGPT, Gemini, Perplexity).

- Vietne: ${SITES.lv.url}
- Starptautiskā vietne (angliski): ${SITES.en.url}
- E-pasts: ${SITES.lv.email}
- LinkedIn: https://www.linkedin.com/company/sites-pro/
- Atrašanās vieta: Rīga, Latvija (klienti Latvijā, ES un pasaulē)
- Valodas: latviešu, angļu, krievu
- Cenas: individuālas katram projektam, bezmaksas konsultācija

## Pakalpojumi

${servicesFor('lv').map((s) => `- **${s.name}** - ${url(s.path)} - ${s.description}`).join('\n')}

## Bezmaksas demo

Informatīvajām mājas lapām SitesPro sagatavo demo versiju pilnīgi bez maksas.
Ja klientam tā patīk - sadarbība turpinās; ja nē - nekādu maksājumu.

## Detalizētās pakalpojumu lapas

${pages
  .map(([slug, page]) => {
    const c = page.config;
    const intro = Array.isArray(c.intro) ? c.intro.join('\n\n') : c.intro;
    return `### ${c.title} ${c.titleAccent ?? ''}`.trim() +
      `\n${url(`/services/${slug}`)}\n\n${intro}` +
      (c.deliverables ? `\n\nIekļauts: ${c.deliverables.join('; ')}.` : '') +
      (c.tech ? `\nTehnoloģijas: ${c.tech.join(', ')}.` : '');
  })
  .join('\n\n')}

## Projekti (portfolio)

${projects.map((p) => `- [${p.title}](${SITES.lv.url}/portfolio/${p.slug}) - ${p.description.replace(/\s+/g, ' ').trim()}`).join('\n')}

## Biežāk uzdotie jautājumi

${faqsFor('lv').map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}

${pages
  .flatMap(([, page]) => page.config.faqs.map((f) => `### ${f.q}\n\n${f.a}`))
  .join('\n\n')}

## Saites

- [Sākumlapa](${SITES.lv.url}/)
- [Visi pakalpojumi](${url('/services')})
- [Portfolio](${SITES.lv.url}/portfolio)
- [Par mums](${url('/about')})
- [Privātuma politika](${url('/privacy')})
- [Lietošanas noteikumi](${url('/legal')})
`;
}

export async function GET() {
  const locale = localeForHost((await headers()).get('host'));
  return new Response(locale === 'lv' ? buildLv() : LLMS_EN, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      // the body depends on the domain — keep shared caches from mixing them up
      Vary: 'Host',
    },
  });
}
