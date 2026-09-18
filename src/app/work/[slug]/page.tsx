import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS, getProjectBySlug } from "@/lib/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { BlobFrame } from "@/components/BlobFrame";
import { TagChip } from "@/components/TagChip";
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
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | Nexushouse`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.name} | Nexushouse`,
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nexushouse.com/" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://nexushouse.com/work" },
      { "@type": "ListItem", position: 3, name: project.name, item: `https://nexushouse.com/work/${project.slug}` },
    ],
  };

  return (
    <article className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <header className="px-6 pt-10 sm:px-10">
        <div className="mx-auto max-w-content">
          <Link
            href="/work"
            data-cursor="explore"
            className="font-mono text-xs uppercase tracking-wide text-bone/50 hover:text-signal"
          >
            ← All work
          </Link>
          <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-bone/40">
            <span>{project.index}</span>
            <span className="h-1 w-1 rounded-full bg-bone/30" aria-hidden />
            <span>{project.industry}</span>
          </div>
          <h1 className="mt-3 font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl font-display text-xl font-medium leading-snug tracking-tight text-bone/80 sm:text-2xl">
            {project.headline}
          </p>
        </div>
      </header>

      <FadeUp className="mt-12 px-6 sm:px-10">
        <div className="relative mx-auto max-w-content">
          <BlobFrame notch="tr" className="aspect-[16/9] w-full border border-line bg-ink-soft">
            <ProjectVisual project={project} className="h-full w-full" />
          </BlobFrame>
          <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-2 sm:right-6 sm:top-6">
            {project.services.map((s) => (
              <TagChip key={s}>{s}</TagChip>
            ))}
          </div>
        </div>
      </FadeUp>

      <div className="mx-auto grid max-w-content gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[240px_1fr] lg:gap-24">
        <dl className="flex flex-col gap-8 border-t border-line pt-8 lg:border-t-0 lg:pt-0">
          <Meta label="Client" value={project.name} />
          <Meta label="Industry" value={project.industry} />
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-bone/40">Services</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.services.map((s) => (
                <TagChip key={s}>{s}</TagChip>
              ))}
            </dd>
          </div>
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
              <BlobFrame notch="bl" className="aspect-square border border-line bg-ink-soft">
                <ProjectVisual project={project} className="h-full w-full" />
              </BlobFrame>
              <BlobFrame notch="tr" className="aspect-square border border-line bg-ink-soft">
                <ProjectVisual project={project} className="h-full w-full" />
              </BlobFrame>
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
