/* ======================================================
   VADI BADGE — "we keep our books with Vadi". Ported from
   Vadi's own footer badge, design C (Vadi repo, design/footer-badge):
   same geometry and colours, styles in globals.css (.vadi-badge).
   Dark theme gets the white badge, light theme the blue one.
   The face swaps to "vadi.lv ↗" on hover / keyboard focus.
====================================================== */

type Props = { lead: string; hover: string; href: string; className?: string };

export default function VadiBadge({ lead, hover, href, className = '' }: Props) {
  return (
    <a
      className={`vadi-badge ${className}`}
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={`${lead} Vadi — vadi.lv`}
    >
      <svg className="vadi-badge__mark" viewBox="0 0 64 64" width="32" height="32" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="7" />
        <path d="M16.224 25.447A1 1 0 0 1 17.118 24L23.882 24A1 1 0 0 1 24.776 24.553L29.5 34L39.224 14.553A1 1 0 0 1 40.118 14L46.882 14A1 1 0 0 1 47.776 15.447L30.394 50.211A1 1 0 0 1 28.606 50.211Z" />
      </svg>
      <span className="vadi-badge__text" aria-hidden="true">
        <span className="vadi-badge__face vadi-badge__face--rest">
          <span className="vadi-badge__small">{lead}</span>
          <span className="vadi-badge__big">Vadi</span>
        </span>
        <span className="vadi-badge__face vadi-badge__face--hover">
          <span className="vadi-badge__small">{hover}</span>
          <span className="vadi-badge__big">
            vadi.lv
            <svg className="vadi-badge__arrow" viewBox="0 0 14 14" width="13" height="13" aria-hidden="true" focusable="false">
              <path d="M4 10 10 4M5 4h5v5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </span>
      </span>
    </a>
  );
}
