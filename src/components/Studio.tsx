"use client";

import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";
import { BELIEFS } from "@/lib/data/beliefs";

export function Studio() {
  return (
    <section id="studio" className="relative bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <FadeUp>
          <SectionLabel index="04" title="Studio" />
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
            Good ideas are fragile.
            <br />
            We give them somewhere to live.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mt-6 max-w-xl text-bone/60">
            Nexushouse is a team of designers, engineers, strategists and IT professionals built
            around one idea: the product and the infrastructure it runs on are one job, not two. We
            stay close to the work, end to end.
          </p>
        </FadeUp>

        <div className="mt-20 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {BELIEFS.map((belief, i) => (
            <FadeUp key={belief.index} delay={0.1 + i * 0.06}>
              <span className="font-mono text-xs text-signal">{belief.index}</span>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tighter text-bone">{belief.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/60">{belief.body}</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="mt-16 flex">
          <Link
            href="/studio"
            data-cursor="explore"
            className="inline-flex items-center gap-3 rounded-full border border-bone/20 px-6 py-3 font-mono text-xs uppercase tracking-wide text-bone transition-colors hover:border-signal hover:text-signal"
          >
            More about the studio →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
