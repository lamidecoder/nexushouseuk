"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TEXT =
  "Nexus — noun — a connection, a point where separate things meet and become one system. Nexushouse sits at that point: between strategy and design, between design and engineering, between an idea and the product it becomes.";

export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = TEXT.split(" ");

  return (
    <section className="relative bg-ink px-6 py-32 sm:px-10 sm:py-44" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <p className="flex flex-wrap gap-x-[0.28em] gap-y-2 font-display text-fluid-lg font-medium leading-[1.15] tracking-tighter">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />;
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const isSignal = word.toLowerCase().startsWith("nexus");

  return (
    <motion.span style={{ opacity }} className={isSignal ? "text-signal" : "text-bone"}>
      {word}
    </motion.span>
  );
}
