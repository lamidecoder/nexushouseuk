"use client";

import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";

const BELIEFS = [
  {
    index: "01",
    title: "Design and engineering are one discipline",
    body: "We don't hand work over a wall between design and code. The same people who shape an idea are accountable for how it performs in production.",
  },
  {
    index: "02",
    title: "Strategy before pixels",
    body: "We ask what the business actually needs before we decide what the interface looks like. A beautiful answer to the wrong question is still wrong.",
  },
  {
    index: "03",
    title: "Restraint is a skill",
    body: "Anyone can add another animation. The harder, more valuable work is knowing what to leave out.",
  },
];

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
            Nexushouse is a small studio built around one idea: strategy, design and engineering work
            better as a single conversation than three separate handoffs. We stay close to the work,
            end to end.
          </p>
        </FadeUp>

        <div className="mt-20 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
          {BELIEFS.map((belief, i) => (
            <FadeUp key={belief.index} delay={0.1 + i * 0.08}>
              <span className="font-mono text-xs text-signal">{belief.index}</span>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tighter text-bone">{belief.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/60">{belief.body}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
