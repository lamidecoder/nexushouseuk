import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { BlobFrame } from "./BlobFrame";
import { TagChip } from "./TagChip";

/**
 * A full-width, stacked project card: image on top (with tag chips floating
 * in the notch), metadata and title below. One of these per project, laid
 * out as a vertical feed rather than a side-by-side list+panel.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} data-cursor="view" className="group block">
      <div className="relative">
        <BlobFrame
          notch="tr"
          className="aspect-[16/10] w-full border border-line bg-ink-soft transition-transform duration-500 ease-out group-hover:scale-[1.01] sm:aspect-[2/1]"
        >
          <ProjectVisual project={project} className="h-full w-full" />
        </BlobFrame>
        <div className="absolute right-4 top-4 flex max-w-[70%] flex-wrap justify-end gap-2 sm:right-6 sm:top-6">
          {project.services.slice(0, 2).map((s) => (
            <TagChip key={s}>{s}</TagChip>
          ))}
          {project.services.length > 2 && <TagChip>+{project.services.length - 2}</TagChip>}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wide text-bone/40">
        <span>{project.industry}</span>
        <span className="h-1 w-1 rounded-full bg-bone/30" aria-hidden />
        <span>{project.name}</span>
      </div>
      <h3 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tighter text-bone transition-colors group-hover:text-signal sm:text-5xl">
        {project.headline}
      </h3>
    </Link>
  );
}
