# Sites Pro — sitespro.org + sitespro.lv

One Next.js app (App Router, TypeScript, Tailwind CSS v4) serving two sites of
SIA SitesPro:

| Domain | Language | Canonical host |
| --- | --- | --- |
| sitespro.org | English | `www.sitespro.org` (apex redirects to www) |
| sitespro.lv | Latvian | `sitespro.lv` (www redirects to apex) |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000 — English
                   # http://lv.localhost:3000 — Latvian
npm run build
npm run lint
```

`*.localhost` resolves to the loopback address in every modern browser, so no
hosts-file edits are needed.

Environment: `RESEND_API_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`,
`TURNSTILE_SECRET_KEY`. Without the Turnstile keys the contact form shows an
error instead of sending.

## How the two sites share one app

- Every route lives under `src/app/[locale]/`. `src/proxy.ts` picks the locale
  from the request host and rewrites the public URL onto that tree —
  `sitespro.lv/pakalpojumi/x` is served by `/lv/services/x`. Visitors never see
  a locale prefix.
- Latvian URLs keep the words sitespro.lv always used (`/pakalpojumi`,
  `/par-mums`, `/privacy-policy`, `/terms`); the mapping is in
  `src/i18n/paths.ts`. An English route word on the Latvian domain redirects to
  the Latvian one.
- Per-site settings (origin, contact address, Umami website id) are in
  `src/i18n/config.ts`; interface copy in `src/i18n/dictionaries/{en,lv}.ts`.
  Server components read the locale with `getI18n()` (`src/i18n/server.ts`,
  backed by `next/root-params`); client components get it as a prop.
- `robots.txt`, `sitemap.xml` and `llms.txt` are generated per host.

## Content

| What | Where |
| --- | --- |
| Service registry (both sites) | `src/data/services.ts` |
| English service pages | `src/app/[locale]/services/<key>/page.tsx` — English only, 404 on sitespro.lv |
| Latvian service pages | `src/content/services-lv.ts`, rendered by `services/[slug]` |
| Case studies | `src/data/projects.ts` (+ Latvian text in `projects.lv.ts`) |
| Home FAQ | `src/data/faqs.ts` |
| Legal pages | English inline in the route, Latvian in `src/components/legal/` |

A page that exists on one site only calls `onlyOn(locale)` (`src/i18n/only.ts`).
Pages that exist on both declare each other as hreflang alternates through
`pageMetadata()` (`src/lib/metadata.ts`).

## Deploy

Coolify on srv1 builds the Dockerfile; a push to `master` deploys both domains.
