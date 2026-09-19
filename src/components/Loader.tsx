"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DiagonalWipe } from "./DiagonalWipe";

const WORD = "NEXUSHOUSE";
const TOTAL_MS = 1200;
const HOLD_MS = 220;
const WIPE_TOTAL_MS = 760;

/**
 * A simplified version of the site's own notch silhouette (see
 * BlobDefs.tsx `notch-tr`), redrawn at a fixed 100x100 viewBox so its
 * path length is directly measurable for the stroke-draw progress ring.
 * The badge is the brand mark, not a generic spinner.
 */
const NOTCH_PATH =
  "M 10 0 L 62 0 Q 72 0 72 10 L 72 18 Q 72 24 78 24 L 88 24 Q 100 24 100 36 L 100 90 Q 100 100 90 100 L 10 100 Q 0 100 0 90 L 0 10 Q 0 0 10 0 Z";

/**
 * The preloader. Plays once per browser session, on first entry. Its own
 * exit is the DiagonalWipe — the same sweep every later page transition
 * uses — so the loading moment and every subsequent navigation read as
 * one motion identity rather than two unrelated animation systems.
 */
export function Loader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const [wipeKey, setWipeKey] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(360);

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength());
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      // Skip the animated sequence outright for reduced-motion users.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      onDone();
      return;
    }

    const start = performance.now();
    let frame: number;
    let holdTimer: ReturnType<typeof setTimeout>;
    let wipeTimer: ReturnType<typeof setTimeout>;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / TOTAL_MS) * 100));
      setProgress(pct);
      if (elapsed < TOTAL_MS) {
        frame = requestAnimationFrame(tick);
      } else {
        holdTimer = setTimeout(() => {
          setVisible(false);
          setWipeKey("loader-exit");
          // Unmount only once the wipe has actually finished sweeping off,
          // not when the badge's own quick fade completes — otherwise the
          // wipe gets cut off mid-travel along with its parent.
          wipeTimer = setTimeout(onDone, WIPE_TOTAL_MS);
        }, HOLD_MS);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(holdTimer);
      clearTimeout(wipeTimer);
    };
  }, [reducedMotion, onDone]);

  const offset = pathLength - (pathLength * progress) / 100;

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-ink"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.96,
              pointerEvents: "none",
              transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
            }}
          >
            <div className="relative h-24 w-24 sm:h-28 sm:w-28">
              <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
                <path d={NOTCH_PATH} className="fill-ink-soft" />
                <path
                  ref={pathRef}
                  d={NOTCH_PATH}
                  fill="none"
                  className="stroke-signal"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  style={{ strokeDasharray: pathLength, strokeDashoffset: offset }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-mono text-xs tabular-nums text-bone/60">
                {String(progress).padStart(3, "0")}
              </span>
            </div>

            <motion.div
              initial={{ clipPath: "polygon(0% 0%, 0% 0%, -20% 100%, -20% 100%)" }}
              animate={{
                clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)",
                transition: { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              <span className="block font-display text-fluid-md font-medium tracking-tightest text-bone">
                {WORD}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {wipeKey && <DiagonalWipe playKey={wipeKey} />}
    </>
  );
}
