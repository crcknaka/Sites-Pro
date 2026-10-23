import { NextResponse, type NextRequest } from 'next/server';
import { SITES, localeForHost } from '@/i18n/config';
import { internalPath, localizePath } from '@/i18n/paths';

/**
 * Picks the site by host and rewrites the public URL onto the internal
 * app/[locale] tree: sitespro.lv/pakalpojumi → /lv/services.
 */
export function proxy(request: NextRequest) {
  const locale = localeForHost(request.headers.get('host'));
  const { pathname } = request.nextUrl;

  // Generated share images are linked by their internal path (Next builds the
  // og:image URL from the route), so those have to resolve as they are.
  if (pathname.startsWith(`/${locale}/`) && /\/(opengraph|twitter)-image/.test(pathname)) {
    return NextResponse.next();
  }

  // An English route word on the Latvian site (sitespro.lv/services) lands on
  // the Latvian URL instead of serving the same page twice.
  const localized = localizePath(locale, pathname);
  if (localized !== pathname) {
    // Built on the canonical origin: behind the reverse proxy the request URL
    // can carry the container's own host and port.
    const origin = process.env.NODE_ENV === 'production' ? SITES[locale].url : request.nextUrl.origin;
    return NextResponse.redirect(new URL(`${localized}${request.nextUrl.search}`, origin), 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${internalPath(locale, pathname)}`.replace(/\/$/, '') || `/${locale}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except Next internals, the API and files with an extension
  // (public assets, robots.txt, sitemap.xml, llms.txt, favicon.ico).
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
};
