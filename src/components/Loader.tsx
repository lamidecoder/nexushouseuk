"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const STEPS = ["N", "NE", "NEX", "NEXU", "NEXUS", "NEXUSHOUSE"];

export function Loader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      // Skip the animated sequence outright for reduced-motion users.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      onDone();
      return;
    }

    if (step < STEPS.length - 1) {
      const t = setTimeout(() => setStep((s) => s + 1), 90);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setVisible(false), 320);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, reducedMotion]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="font-display text-fluid-md font-medium tracking-tightest text-bone">
            {STEPS[step]}
            <span className="ml-1 inline-block h-[0.5em] w-[0.08em] animate-pulse bg-signal align-middle" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
