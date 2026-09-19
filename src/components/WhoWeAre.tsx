"use client";

import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";
import { MagneticButton } from "./MagneticButton";
import { AmbientNotches } from "./AmbientNotches";

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[1fr_320px] lg:items-center lg:gap-10">
        <div>
          <FadeUp>
            <SectionLabel index="01" title="Who we are" />
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-6 max-w-3xl font-display text-fluid-lg font-medium leading-[1.05] tracking-tightest text-bone">
              An independent digital and IT team built around one job, not
              handed off between two.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-8 flex flex-wrap items-center gap-5">
            <MagneticButton cursor="explore" className="inline-block">
              <Link
                href="/studio"
                className="inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3 font-mono text-xs font-medium uppercase tracking-wide text-ink transition-transform duration-200 active:scale-95"
              >
                About Nexushouse →
              </Link>
            </MagneticButton>
            <Link
              href="/work"
              data-cursor="view"
              className="font-mono text-xs uppercase tracking-wide text-bone/60 underline-offset-4 transition-colors hover:text-bone hover:underline"
            >
              See our work
            </Link>
          </FadeUp>
        </div>

        <AmbientNotches className="h-56 w-full lg:h-72" />
      </div>
    </section>
  );
}
