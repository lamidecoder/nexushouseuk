"use client";

import Link from "next/link";
import { PROJECTS } from "@/lib/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { FadeUp } from "./RevealText";
import { BlobFrame } from "./BlobFrame";
import { TagChip } from "./TagChip";

export function WorkIndex() {
  return (
    <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
      <div className="flex flex-col divide-y divide-line border-y border-line">
        {PROJECTS.map((project, i) => (
          <FadeUp key={project.slug} delay={i * 0.04}>
            <Link
              href={`/work/${project.slug}`}
              data-cursor="view"
              className="group -mx-4 grid grid-cols-1 items-center gap-6 rounded-2xl px-4 py-10 transition-colors duration-300 hover:bg-bone/[0.03] sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:py-12"
            >
              <div className="relative w-full sm:w-64 md:w-80">
                <BlobFrame notch="tr" className="aspect-[4/3] w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <ProjectVisual project={project} className="h-full w-full" />
                </BlobFrame>
                <div className="absolute right-3 top-3 flex flex-wrap justify-end gap-1.5">
                  {project.services.slice(0, 2).map((s) => (
                    <TagChip key={s}>{s}</TagChip>
                  ))}
                  {project.services.length > 2 && <TagChip>+{project.services.length - 2}</TagChip>}
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-bone/40">{project.index}</span>
                  <h2 className="font-display text-3xl font-medium tracking-tighter text-bone transition-colors group-hover:text-signal sm:text-5xl">
                    {project.name}
                  </h2>
                </div>
                <p className="mt-3 max-w-md text-bone/60">{project.oneLiner}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-bone/40">{project.industry}</p>
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
