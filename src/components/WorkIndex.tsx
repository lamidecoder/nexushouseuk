"use client";

import Link from "next/link";
import { PROJECTS } from "@/lib/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { FadeUp } from "./RevealText";

export function WorkIndex() {
  return (
    <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
      <div className="flex flex-col divide-y divide-line border-y border-line">
        {PROJECTS.map((project, i) => (
          <FadeUp key={project.slug} delay={i * 0.04}>
            <Link
              href={`/work/${project.slug}`}
              data-cursor="view"
              className="group grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:py-12"
            >
              <ProjectVisual
                project={project}
                className="aspect-[4/3] w-full rounded-xl sm:w-64 md:w-80"
              />
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-bone/40">{project.index}</span>
                  <h2 className="font-display text-3xl font-medium tracking-tighter text-bone transition-colors group-hover:text-signal sm:text-5xl">
                    {project.name}
                  </h2>
                </div>
                <p className="mt-3 max-w-md text-bone/60">{project.oneLiner}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <span key={s} className="font-mono text-[10px] uppercase tracking-wide text-bone/40">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <span className="hidden font-mono text-xs uppercase tracking-wide text-bone/40 transition-colors group-hover:text-signal sm:block">
                View case study →
              </span>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
