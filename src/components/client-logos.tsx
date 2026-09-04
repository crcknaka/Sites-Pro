import Image from 'next/image';

/* ======================================================
   CLIENT LOGOS — a quiet, monochrome strip of the brands we
   built for. Marks come from the case-study logo set, so the
   strip only ever shows real clients.
====================================================== */

const CLIENTS = [
  { name: 'Institut de Français', logo: '/projects/logos/institut-de-francais-villefranche.png' },
  { name: 'Lepicur', logo: '/projects/logos/lepicur.png' },
  { name: 'Baltic Aqua', logo: '/projects/logos/balticaqua.png' },
  { name: 'Goldberg', logo: '/projects/logos/goldberg.png' },
  { name: 'Wellton', logo: '/projects/logos/wellton.png' },
  { name: 'BodyBar', logo: '/projects/logos/bodybar.png' },
  { name: 'EkoBaltika', logo: '/projects/logos/ekobaltika.png' },
  { name: 'Buļļu Laivas', logo: '/projects/logos/bullu-laivas.png' },
  { name: 'Pets Pro', logo: '/projects/logos/pets-pro.png' },
  { name: 'EUC.ONE', logo: '/projects/logos/euc-one.png' },
  { name: 'MadSword Studios', logo: '/projects/logos/madsword-studios.png' },
];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-10 sm:gap-14 pr-10 sm:pr-14"
      aria-hidden={ariaHidden}
    >
      {CLIENTS.map((c) => (
        <li key={c.name} className="flex items-center gap-2.5 whitespace-nowrap">
          <Image
            src={c.logo}
            alt=""
            width={28}
            height={28}
            className="h-6 w-6 rounded-md sm:h-7 sm:w-7"
          />
          <span className="text-sm font-medium tracking-tight text-[var(--fg)]">{c.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ClientLogos({ className = '' }: { className?: string }) {
  return (
    <div className={`select-none ${className}`}>
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
        Selected clients
      </p>

      {/* the row is rendered twice and scrolled by half its width: a seamless loop */}
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
        }}
      >
        <div className="flex w-max animate-marquee opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0">
          <Row />
          <Row ariaHidden />
        </div>
      </div>
    </div>
  );
}
