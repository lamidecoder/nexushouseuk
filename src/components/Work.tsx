"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "@/lib/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Work() {
  const [active, setActive] = useState(0);
  const { t } = useLocale();

  return (
    <section id="work" className="relative bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <FadeUp>
          <SectionLabel index="02" title="Selected Work" />
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
            Work that speaks for itself.
          </h2>
        </FadeUp>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {PROJECTS.map((project, i) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor="view"
                  onMouseEnter={() => setActive(i)}
                  className="group flex items-center justify-between gap-6 py-6 sm:py-8"
                >
                  <div className="flex items-baseline gap-5 sm:gap-8">
                    <span className="font-mono text-xs text-bone/40">{project.index}</span>
                    <span className="font-display text-2xl font-medium tracking-tighter text-bone transition-colors group-hover:text-signal sm:text-4xl">
                      {project.name}
                    </span>
                  </div>
                  <span className="hidden shrink-0 font-mono text-xs uppercase tracking-wide text-bone/40 sm:block">
                    {project.oneLiner}
                  </span>
                  <ArrowIcon />
                </Link>
                <div className="block pb-6 lg:hidden">
                  <ProjectVisual project={project} className="aspect-[4/3] w-full rounded-lg" />
                </div>
              </li>
            ))}
          </ul>

          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={PROJECTS[active].slug}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <ProjectVisual project={PROJECTS[active]} className="h-full w-full" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <FadeUp delay={0.1} className="mt-14 flex justify-center">
          <Link
            href="/work"
            data-cursor="explore"
            className="inline-flex items-center gap-3 rounded-full border border-bone/20 px-6 py-3 font-mono text-xs uppercase tracking-wide text-bone transition-colors hover:border-signal hover:text-signal"
          >
            View all work →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-bone/40 transition-transform group-hover:translate-x-1 group-hover:text-signal">
      <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
