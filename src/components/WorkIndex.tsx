import { PROJECTS } from "@/lib/data/projects";
import { FadeUp } from "./RevealText";
import { ProjectCard } from "./ProjectCard";

export function WorkIndex() {
  return (
    <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
      <div className="flex flex-col gap-20 sm:gap-28">
        {PROJECTS.map((project, i) => (
          <FadeUp key={project.slug} delay={i * 0.04}>
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
