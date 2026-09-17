import { PROJECTS } from "@/lib/data/projects";
import { FadeUp } from "./RevealText";
import { ProjectCard } from "./ProjectCard";

export function WorkIndex() {
  const left = PROJECTS.filter((_, i) => i % 2 === 0);
  const right = PROJECTS.filter((_, i) => i % 2 === 1);

  return (
    <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
        <div className="flex flex-col gap-16 lg:gap-20">
          {left.map((project, i) => (
            <FadeUp key={project.slug} delay={i * 0.04}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>
        <div className="flex flex-col gap-16 lg:mt-24 lg:gap-20">
          {right.map((project, i) => (
            <FadeUp key={project.slug} delay={i * 0.04 + 0.08}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
