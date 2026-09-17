"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export type CursorLabel = "" | "view" | "explore" | "talk" | "drag";

const LABELS: Record<CursorLabel, string> = {
  "": "",
  view: "VIEW PROJECT →",
  explore: "EXPLORE",
  talk: "LET'S TALK →",
  drag: "DRAG",
};

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<CursorLabel>("");
  const [hidden, setHidden] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 340, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 340, mass: 0.4 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    // Pointer capability is only knowable client-side; this one-time mount
    // check can't be moved to render or expressed via useSyncExternalStore
    // since it also drives the event-listener setup below.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const target = e.target as HTMLElement;
      const cursorEl = target.closest<HTMLElement>("[data-cursor]");
      setLabel((cursorEl?.dataset.cursor as CursorLabel) ?? "");
    };
    const leave = () => setHidden(true);

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      style={{ x: springX, y: springY, opacity: hidden ? 0 : 1 }}
      aria-hidden
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-bone text-ink"
        animate={{
          width: label ? "auto" : 10,
          height: label ? 40 : 10,
          paddingInline: label ? 14 : 0,
        }}
        transition={{ type: "spring", damping: 24, stiffness: 320 }}
      >
        {label && (
          <span className="whitespace-nowrap font-mono text-[11px] font-medium uppercase tracking-wide">
            {LABELS[label]}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
