import type { Metadata } from "next";
import Link from "next/link";
import { INSIGHTS } from "@/lib/data/insights";
import { FadeUp } from "@/components/RevealText";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes on process, product and IT from the Nexushouse studio.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-bone/50">Insights</p>
        <h1 className="mt-6 max-w-3xl font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
          Notes on the work.
        </h1>
        <p className="mt-6 max-w-lg text-bone/60">
          Short, practical pieces on process, product and IT. Written by the studio, for anyone
          weighing the same decisions we see clients make every week.
        </p>

        <ul className="mt-20 flex flex-col divide-y divide-line border-y border-line pb-28">
          {INSIGHTS.map((insight, i) => (
            <li key={insight.slug}>
              <FadeUp delay={i * 0.05}>
                <Link href={`/insights/${insight.slug}`} data-cursor="view" className="group block py-10">
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-xs text-bone/40">{insight.index}</span>
                    <span className="font-mono text-xs uppercase tracking-wide text-bone/40">
                      {insight.readingTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-medium tracking-tighter text-bone transition-colors group-hover:text-signal sm:text-4xl">
                    {insight.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-bone/60">{insight.dek}</p>
                </Link>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
