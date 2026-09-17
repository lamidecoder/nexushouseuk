"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Route-level transition. Chrome (nav/footer) stays mounted and stable;
 * only the routed content cross-fades with a slight vertical settle, so
 * navigation never feels like a hard browser reload. Kept deliberately
 * restrained (no full-screen wipe/shared-element choreography) — that
 * complexity carries real risk around scroll position and focus handling
 * for comparatively little payoff over this.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
