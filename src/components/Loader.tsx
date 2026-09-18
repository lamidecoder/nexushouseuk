"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const WORD = "NEXUSHOUSE";
const LETTER_DELAY = 0.045;
const TOTAL_MS = 1300;

export function Loader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

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

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / TOTAL_MS) * 100));
      setProgress(pct);
      if (elapsed < TOTAL_MS) {
        frame = requestAnimationFrame(tick);
      } else {
        holdTimer = setTimeout(() => setVisible(false), 260);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(holdTimer);
    };
  }, [reducedMotion, onDone]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-ink"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="flex overflow-hidden font-display text-fluid-md font-medium tracking-tightest text-bone">
            {WORD.split("").map((char, i) => (
              <span key={i} className="inline-block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.55, delay: i * LETTER_DELAY, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex w-40 flex-col items-center gap-3 sm:w-56"
          >
            <div className="h-px w-full overflow-hidden bg-line">
              <motion.div
                className="h-full bg-signal"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-bone/40">
              {String(progress).padStart(3, "0")}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
