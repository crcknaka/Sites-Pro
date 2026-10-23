import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { SITES, dictionaryFor, type Locale } from '@/i18n';

/* ======================================================
   Share cards (og:image) — 1200×630, rendered at build time.

   One look for every page: brand bar, eyebrow, title, footer with the
   domain; case studies add their own screenshot on the right. The built-in
   font has a single weight, so hierarchy comes from size and colour.
====================================================== */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const BG = '#09090b';
const FG = '#f2f3f1';
const MUTED = '#9aa09a';
const ACCENT = '#8fd759';
const LINE = '#1f241f';

type Shot = { src: string; width: number; height: number };

/** Width/height from a JPEG or PNG header — enough to crop from the top. */
function imageSize(buf: Buffer): { width: number; height: number; mime: string } | null {
  // PNG: IHDR right after the signature
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20), mime: 'image/png' };
  }
  // JPEG: walk the segments to the first start-of-frame marker
  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i + 9 < buf.length) {
      if (buf[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = buf[i + 1];
      const isSof =
        marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isSof) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7), mime: 'image/jpeg' };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  return null;
}

/** Loads a JPEG/PNG from public/ as a data URL; anything else is skipped. */
export async function loadShot(publicPath: string | undefined): Promise<Shot | null> {
  if (!publicPath) return null;
  try {
    const file = join(process.cwd(), 'public', publicPath.split('?')[0]);
    const buf = await readFile(file);
    const size = imageSize(buf);
    if (!size) return null;
    return {
      src: `data:${size.mime};base64,${buf.toString('base64')}`,
      width: size.width,
      height: size.height,
    };
  } catch {
    return null;
  }
}

export function renderOg({
  locale = 'en',
  eyebrow,
  title,
  subtitle,
  shot,
}: {
  /** Which site the card is for — brand spelling and domain in the footer. */
  locale?: Locale;
  eyebrow: string;
  title: string;
  subtitle?: string;
  shot?: Shot | null;
}) {
  const withShot = Boolean(shot);
  const frameW = 470;
  const frameMaxH = 470;
  const imgH = shot ? Math.round((frameW * shot.height) / shot.width) : 0;
  const frameH = Math.min(frameMaxH, imgH);

  const titleSize = withShot
    ? title.length > 40 ? 50 : 60
    : title.length > 48 ? 64 : 78;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: BG,
          position: 'relative',
          padding: '64px 72px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: ACCENT,
          }}
        />

        {/* TEXT */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: withShot ? 560 : 1056,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
            <div
              style={{
                display: 'flex',
                fontSize: 24,
                letterSpacing: 5,
                textTransform: 'uppercase',
                color: ACCENT,
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 22,
                fontSize: titleSize,
                lineHeight: 1.1,
                color: FG,
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  display: 'flex',
                  marginTop: 24,
                  fontSize: 26,
                  lineHeight: 1.35,
                  color: MUTED,
                }}
              >
                {subtitle}
              </div>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: `1px solid ${LINE}`,
              paddingTop: 26,
            }}
          >
            <div style={{ display: 'flex', fontSize: 34, color: FG }}>{dictionaryFor(locale).site.name}</div>
            <div style={{ display: 'flex', fontSize: 26, color: MUTED }}>
              {new URL(SITES[locale].url).hostname.replace(/^www\./, '')}
            </div>
          </div>
        </div>

        {/* SCREENSHOT — cropped from the top inside a window frame */}
        {shot && (
          <div
            style={{
              position: 'absolute',
              right: 64,
              top: (630 - frameH) / 2,
              width: frameW,
              height: frameH,
              display: 'flex',
              overflow: 'hidden',
              borderRadius: 18,
              border: `1px solid #2c322c`,
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- rendered by satori, not the browser */}
            <img src={shot.src} width={frameW} height={imgH} style={{ width: frameW, height: imgH }} alt="" />
          </div>
        )}
      </div>
    ),
    OG_SIZE
  );
}
