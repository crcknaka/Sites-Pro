'use client';

import { ScaledScene } from '@/components/service-scenes';

/* ======================================================
   Service-page heroes. The drawings themselves live in
   service-scenes.tsx and are shared with the home page cards,
   so both places render the exact same product windows.
====================================================== */

function HeroScene({ type }: { type: Parameters<typeof ScaledScene>[0]['type'] }) {
  return (
    <div className="w-full max-w-[680px] lg:-mr-6 xl:-mr-12">
      <ScaledScene type={type} />
    </div>
  );
}

export function WebsiteInfographic() {
  return <HeroScene type="web" />;
}

export function WebPlatformInfographic() {
  return <HeroScene type="web-platforms" />;
}

export function AIInfographic() {
  return <HeroScene type="ai" />;
}

export function ConsultingInfographic() {
  return <HeroScene type="consulting" />;
}
