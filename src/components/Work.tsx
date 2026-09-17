import Link from "next/link";
import { PROJECTS } from "@/lib/data/projects";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";
import { ProjectCard } from "./ProjectCard";
import { MagneticButton } from "./MagneticButton";

const HOMEPAGE_COUNT = 3;

export function Work() {
  const featured = PROJECTS.slice(0, HOMEPAGE_COUNT);

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

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {featured.map((project, i) => (
            <FadeUp key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-20 flex justify-center">
          <MagneticButton cursor="explore">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 rounded-full border border-bone/20 px-6 py-3 font-mono text-xs uppercase tracking-wide text-bone transition-all duration-200 hover:border-signal hover:text-signal active:scale-95"
            >
              View all work →
            </Link>
          </MagneticButton>
        </FadeUp>
      </div>
    </section>
  );
}
