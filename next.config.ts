import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images are query-free except the card covers, which carry a
    // cache-busting version — Next only allows that when it is listed here.
    localPatterns: [
      { pathname: '/**', search: '' },
      { pathname: '/projects/**', search: '?v=4' },
    ],
  },
  // Canonical host is www; the apex answered 200 with the same content.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sitespro.org' }],
        destination: 'https://www.sitespro.org/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts: allow self, Next.js dev mode, Cloudflare Turnstile, and Vercel
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com https://*.cloudflare.com https://vercel.live https://*.vercel.live",
              // Styles: allow self, inline styles, Google Fonts, and Turnstile
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://challenges.cloudflare.com https://*.cloudflare.com",
              // Fonts: allow self and Google Fonts
              "font-src 'self' data: https://fonts.gstatic.com",
              // Images: allow all HTTPS, data URIs, and self
              "img-src 'self' data: https: blob:",
              // Connect: allow self, Turnstile API, and Vercel
              "connect-src 'self' https://challenges.cloudflare.com https://*.cloudflare.com https://vercel.live https://*.vercel.live wss://*.pusher.com",
              // Frames: allow Turnstile iframe and Vercel
              "frame-src https://challenges.cloudflare.com https://*.cloudflare.com https://vercel.live",
              // Workers for Turnstile
              "worker-src 'self' blob:",
              // Block objects and restrict base URI
              "object-src 'none'",
              "base-uri 'self'",
            ].join('; '),
          },
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=(), interest-cohort=()',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
