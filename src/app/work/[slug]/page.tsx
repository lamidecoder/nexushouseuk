import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS, getProjectBySlug } from "@/lib/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { FadeUp } from "@/components/RevealText";
import { SectionLabel } from "@/components/SectionLabel";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} — Nexushouse`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.name} — Nexushouse`,
      description: project.description,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="pt-24">
      <header className="px-6 pt-10 sm:px-10">
        <div className="mx-auto max-w-content">
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-wide text-bone/50 hover:text-signal"
          >
            ← All work
          </Link>
          <div className="mt-8 flex items-baseline gap-4">
            <span className="font-mono text-sm text-bone/40">{project.index}</span>
            <h1 className="font-display text-fluid-xl font-medium tracking-tightest text-bone">
              {project.name}
            </h1>
          </div>
          <p className="mt-4 max-w-xl text-bone/60">{project.oneLiner}</p>
        </div>
      </header>

      <FadeUp className="mt-12 px-6 sm:px-10">
        <ProjectVisual project={project} className="mx-auto aspect-[16/9] w-full max-w-content rounded-2xl" />
      </FadeUp>

      <div className="mx-auto grid max-w-content gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[240px_1fr] lg:gap-24">
        <dl className="flex flex-col gap-8 border-t border-line pt-8 lg:border-t-0 lg:pt-0">
          <Meta label="Client" value={project.name} />
          <Meta label="Industry" value={project.industry} />
          <Meta label="Services" value={project.services.join(", ")} />
        </dl>

        <div className="flex flex-col gap-16">
          <section>
            <SectionLabel index="01" title="The Challenge" />
            <p className="mt-5 max-w-2xl font-display text-xl font-medium leading-relaxed tracking-tight text-bone/90 sm:text-2xl">
              {project.challenge}
            </p>
          </section>

          <section>
            <SectionLabel index="02" title="The Approach" />
            <p className="mt-5 max-w-2xl font-display text-xl font-medium leading-relaxed tracking-tight text-bone/90 sm:text-2xl">
              {project.approach}
            </p>
          </section>

          <section>
            <SectionLabel index="03" title="Overview" />
            <p className="mt-5 max-w-2xl text-bone/60">{project.description}</p>
          </section>

          <section>
            <SectionLabel index="04" title="Gallery" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ProjectVisual project={project} className="aspect-square rounded-xl" />
              <ProjectVisual project={project} className="aspect-square rounded-xl" />
            </div>
          </section>
        </div>
      </div>

      <Link
        href={`/work/${next.slug}`}
        data-cursor="view"
        className="group flex flex-col border-t border-line px-6 py-16 transition-colors hover:bg-ink-soft sm:px-10 sm:py-24"
      >
        <div className="mx-auto flex w-full max-w-content flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-bone/40">Next project</span>
          <h2 className="font-display text-fluid-lg font-medium tracking-tightest text-bone transition-colors group-hover:text-signal">
            {next.name} →
          </h2>
        </div>
      </Link>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-widest text-bone/40">{label}</dt>
      <dd className="mt-2 text-bone/80">{value}</dd>
    </div>
  );
}
