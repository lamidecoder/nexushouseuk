"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { NexusField } from "./NexusField";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), { ssr: false });

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Renders the real WebGL nexus object where it's safe and worthwhile, on
 * top of the flat SVG line motif, which stays mounted underneath at all
 * times. That SVG is also the whole picture for reduced-motion visitors,
 * small viewports where a 3D scene adds cost without much payoff, or
 * browsers without WebGL. Nothing ever flashes blank: not on first paint,
 * not while the WebGL chunk is still downloading.
 */
export function Hero3D({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const { theme } = useTheme();
  const reducedMotion = useReducedMotion();
  const [capability, setCapability] = useState<"checking" | "3d" | "3d-light" | "fallback">("checking");
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // WebGL support and viewport width are only knowable client-side.
    /* eslint-disable react-hooks/set-state-in-effect */
    if (reducedMotion) {
      setCapability("fallback");
      return;
    }
    const narrow = window.innerWidth < 640;
    if (!supportsWebGL()) {
      setCapability("fallback");
    } else {
      setCapability(narrow ? "3d-light" : "3d");
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [reducedMotion]);

  // Tracked globally (not via the canvas element) so the object still
  // responds to pointer position even while the cursor is over UI on top
  // of the canvas; the canvas itself is pointer-events:none.
  useEffect(() => {
    if (capability !== "3d" && capability !== "3d-light") return;
    const handle = (e: PointerEvent) => {
      pointerRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      };
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, [capability]);

  return (
    <>
      <NexusField />
      {(capability === "3d" || capability === "3d-light") && (
        <HeroScene
          theme={theme}
          scrollProgress={scrollProgress}
          pointerRef={pointerRef}
          reduceQuality={capability === "3d-light"}
        />
      )}
    </>
  );
}
