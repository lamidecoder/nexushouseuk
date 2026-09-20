"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { lenisRef } from "@/lib/lenisInstance";

const SHOW_AFTER_PX = 600;

/**
 * Fixed bottom-right button that appears once the visitor has scrolled past
 * the hero, for pages long enough that the header (which already links
 * home) scrolls out of easy reach. Scrolls through the shared Lenis
 * instance so it eases the same way as the rest of the site's scrolling;
 * falls back to native scrollTo before Lenis mounts or under reduced motion.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const reducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > SHOW_AFTER_PX);
  });

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, reducedMotion ? { immediate: true } : { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-4 z-40 sm:bottom-8 sm:right-8"
        >
          <MagneticButton cursor="explore">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-signal text-ink shadow-lg transition-transform duration-200 active:scale-90 sm:h-12 sm:w-12"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M8 13V3M3 8l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
