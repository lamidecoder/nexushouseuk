"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const EASE = [0.76, 0, 0.24, 1] as const;

/**
 * Two staggered, skewed full-height panels that sweep across the viewport
 * and off, fully covering it for a beat at the midpoint. `playKey`
 * changing forces a fresh sweep (mount-driven replay, same trick
 * PageTransition uses with `key={pathname}`).
 *
 * Colors: `bone` (the theme's near-opposite of the page background,
 * already used for text) then `signal` (accent) — never `ink`, which
 * *is* the page background in both themes and would make that panel
 * invisible against itself.
 *
 * Pure `transform: translateX` — no clip-path interpolation, no layout
 * writes, cheap on both desktop and mobile GPUs. Shared by the preloader's
 * exit and every route transition, so both read as one motion vocabulary
 * rather than two unrelated effects. Purely decorative: pointer-events
 * stay off throughout so it can never block a real click.
 */
export function DiagonalWipe({ playKey }: { playKey: string | number }) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[95] overflow-hidden" aria-hidden>
      <motion.div
        key={`a-${playKey}`}
        className="absolute inset-y-0 w-[70vw] bg-bone"
        style={{ skewX: -12 }}
        initial={{ x: "-130%" }}
        animate={{ x: "160%" }}
        transition={{ duration: 0.6, ease: EASE }}
      />
      <motion.div
        key={`b-${playKey}`}
        className="absolute inset-y-0 w-[70vw] bg-signal"
        style={{ skewX: -12 }}
        initial={{ x: "-130%" }}
        animate={{ x: "160%" }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
      />
    </div>
  );
}
