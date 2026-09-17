import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { INSIGHTS, getInsightBySlug } from "@/lib/data/insights";
import { FadeUp } from "@/components/RevealText";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.dek,
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const currentIndex = INSIGHTS.findIndex((i) => i.slug === slug);
  const next = INSIGHTS[(currentIndex + 1) % INSIGHTS.length];

  return (
    <article className="pt-32">
      <div className="mx-auto max-w-2xl px-6 sm:px-10">
        <Link href="/insights" className="font-mono text-xs uppercase tracking-wide text-bone/50 hover:text-signal">
          ← All insights
        </Link>

        <div className="mt-8 flex items-baseline gap-4 font-mono text-xs uppercase tracking-wide text-bone/40">
          <span className="text-signal">{insight.index}</span>
          <span>{insight.readingTime}</span>
        </div>

        <h1 className="mt-6 font-display text-fluid-lg font-medium leading-[1.05] tracking-tightest text-bone">
          {insight.title}
        </h1>
        <p className="mt-6 text-lg text-bone/60">{insight.dek}</p>

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-12 text-base leading-relaxed text-bone/80">
          {insight.body.map((paragraph, i) => (
            <FadeUp key={i} delay={i * 0.03}>
              <p>{paragraph}</p>
            </FadeUp>
          ))}
        </div>
      </div>

      <Link
        href={`/insights/${next.slug}`}
        data-cursor="view"
        className="group mt-28 flex flex-col border-t border-line px-6 py-16 transition-colors hover:bg-ink-soft sm:px-10 sm:py-24"
      >
        <div className="mx-auto flex w-full max-w-content flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-bone/40">Next</span>
          <h2 className="font-display text-fluid-lg font-medium tracking-tightest text-bone transition-colors group-hover:text-signal">
            {next.title} →
          </h2>
        </div>
      </Link>
    </article>
  );
}
