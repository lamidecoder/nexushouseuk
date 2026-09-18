"use client";

import { useState } from "react";

/**
 * Optional looping background video for the hero panel, behind the notch
 * card / floating preview / video bubble. public/videos/hero-bg.mp4 is a
 * placeholder path, see README "Known placeholders": until a real file
 * exists there this 404s once and quietly hides itself, leaving the plain
 * bg-signal lime fill on the parent panel as the only visual.
 */
export function HeroBackgroundVideo() {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-[40px]">
      <video
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        onError={() => setFailed(true)}
        className="h-full w-full object-cover opacity-90 mix-blend-multiply"
      />
    </div>
  );
}
