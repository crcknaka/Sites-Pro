import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts: allow self, Next.js dev mode, and Cloudflare Turnstile
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com",
              // Styles: allow self, inline styles, Google Fonts, and Turnstile
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://challenges.cloudflare.com",
              // Fonts: allow self and Google Fonts
              "font-src 'self' data: https://fonts.gstatic.com",
              // Images: allow all HTTPS, data URIs, and self
              "img-src 'self' data: https:",
              // Connect: allow self and Turnstile API
              "connect-src 'self' https://challenges.cloudflare.com",
              // Frames: allow Turnstile iframe
              "frame-src https://challenges.cloudflare.com",
              // Block objects and restrict base URI
              "object-src 'none'",
              "base-uri 'self'",
            ].join('; '),
          },
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
