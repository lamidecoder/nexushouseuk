"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { DiagonalWipe } from "./DiagonalWipe";

/**
 * Fires the DiagonalWipe on every route change (not on first load, where
 * the Loader's own exit already plays the same sweep). Mounted once at
 * the layout root so it sits above nav/footer/content, not scoped inside
 * `<main>` — a full-bleed wipe is the point.
 */
export function TransitionOverlay() {
  const pathname = usePathname();
  const isFirst = useRef(true);
  const [playKey, setPlayKey] = useState<string | null>(null);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setPlayKey(pathname);
  }, [pathname]);

  if (!playKey) return null;
  return <DiagonalWipe playKey={playKey} />;
}
