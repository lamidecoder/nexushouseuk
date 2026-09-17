"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { PROCESS } from "@/lib/data/process";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });

  return (
    <section className="relative bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <FadeUp>
          <SectionLabel index="05" title="Process" />
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
            How the work moves.
          </h2>
        </FadeUp>

        <div ref={ref} className="relative mt-16 grid gap-x-10 sm:grid-cols-[2px_1fr]">
          <div className="relative hidden w-0.5 rounded-full bg-line sm:block">
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              className="absolute inset-x-0 top-0 w-full rounded-full bg-signal"
            />
          </div>

          <ul className="flex flex-col divide-y divide-line">
            {PROCESS.map((step, i) => (
              <FadeUp key={step.index} delay={i * 0.04} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 py-7 sm:grid-cols-[4rem_1fr] sm:gap-8">
                <span className="font-mono text-xs text-bone/40">{step.index}</span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tighter text-bone sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-bone/60">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
