import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== 'production';

/** Cloudflare Turnstile (contact form) is the only third party the pages load. */
const TURNSTILE = 'https://challenges.cloudflare.com';

const csp = [
  "default-src 'self'",
  // 'unsafe-inline' stays: Next's inline bootstrap/RSC scripts and the theme
  // script need it, and a nonce would force every page to render dynamically.
  // 'unsafe-eval' is only needed by the dev server's hot reload.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} ${TURNSTILE}`,
  `style-src 'self' 'unsafe-inline' ${TURNSTILE}`,
  // next/font self-hosts the fonts — no Google Fonts hosts needed
  "font-src 'self' data:",
  "img-src 'self' data: https: blob:",
  `connect-src 'self' ${TURNSTILE}`,
  `frame-src ${TURNSTILE}`,
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  // no upgrade-insecure-requests: every URL is relative and HSTS already pins
  // https — the directive would only break a local `next start` over http
].join('; ');

const nextConfig: NextConfig = {
  // Self-contained server bundle for the Docker image: only traced files ship
  output: 'standalone',
  // Cloudflare compresses at the edge with brotli; gzip from Next meant the
  // edge cached and served the gzip copy (~15% larger JS).
  compress: false,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Optimised images are cached for 30 days. Files under /projects carry a
    // ?v= version when they change, so a bump reaches browsers at once;
    // replacing a file in place without bumping can stay cached that long.
    minimumCacheTTL: 2592000,
    localPatterns: [
      { pathname: '/**', search: '' },
      // any ?v= version on portfolio assets — no config edit per bump
      { pathname: '/projects/**' },
    ],
  },
  async redirects() {
    return [
      // Canonical host is www; the apex answered 200 with the same content.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sitespro.org' }],
        destination: 'https://www.sitespro.org/:path*',
        permanent: true,
      },
      // The Annexe case became the Institut de Français — Villefranche case.
      {
        source: '/portfolio/annexe-de-francais',
        destination: '/portfolio/institut-de-francais-villefranche',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          // No includeSubDomains: other *.sitespro.org hosts (home server apps)
          // are not all confirmed HTTPS-only.
          ...(isDev
            ? []
            : [{ key: 'Strict-Transport-Security', value: 'max-age=31536000' }]),
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), interest-cohort=()',
          },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
