import Link from "next/link";
import { INSIGHTS } from "@/lib/data/insights";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";
import { MagneticButton } from "./MagneticButton";

export function InsightsTeaser() {
  return (
    <section className="relative bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <FadeUp>
              <SectionLabel index="05" title="Insights" />
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-6 max-w-lg font-display text-fluid-lg font-medium leading-[1.05] tracking-tightest text-bone">
                Notes from the work.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <MagneticButton cursor="explore" className="inline-block">
              <Link
                href="/insights"
                className="inline-flex items-center gap-3 rounded-full border border-bone/20 px-6 py-3 font-mono text-xs uppercase tracking-wide text-bone transition-all duration-200 hover:border-signal hover:text-signal active:scale-95"
              >
                View the blog →
              </Link>
            </MagneticButton>
          </FadeUp>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-3 sm:gap-8">
          {INSIGHTS.map((insight, i) => (
            <FadeUp key={insight.slug} delay={i * 0.06}>
              <Link href={`/insights/${insight.slug}`} data-cursor="view" className="group block">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-bone/40">
                  {insight.readingTime}
                </p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-bone transition-colors group-hover:text-signal">
                  {insight.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/60">{insight.dek}</p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
