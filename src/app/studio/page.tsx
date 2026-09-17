import type { Metadata } from "next";
import Link from "next/link";
import { BELIEFS } from "@/lib/data/beliefs";
import { Process } from "@/components/Process";
import { FadeUp } from "@/components/RevealText";
import { SectionLabel } from "@/components/SectionLabel";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Nexushouse is a team of designers, engineers, strategists and IT professionals — how we work, and what we believe about building things properly.",
};

export default function StudioPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-bone/50">Studio</p>
        <h1 className="mt-6 max-w-3xl font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
          Good ideas are fragile.
          <br />
          We give them somewhere to live.
        </h1>
        <p className="mt-6 max-w-xl text-bone/60">
          Nexushouse is a team of designers, engineers, strategists and IT professionals built
          around one idea: the product and the infrastructure it runs on are one job, not two. We
          stay close to the work, end to end — from the first sketch to the servers it runs on.
        </p>

        <section className="mt-24">
          <SectionLabel index="01" title="What we believe" />
          <div className="mt-8 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {BELIEFS.map((belief, i) => (
              <FadeUp key={belief.index} delay={i * 0.06}>
                <span className="font-mono text-xs text-signal">{belief.index}</span>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tighter text-bone">
                  {belief.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/60">{belief.body}</p>
              </FadeUp>
            ))}
          </div>
        </section>
      </div>

      <Process sectionIndex="02" />

      <div className="mx-auto max-w-content px-6 pb-28 sm:px-10">
        <FadeUp className="flex flex-col items-start gap-6 border-t border-line pt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-display text-2xl font-medium tracking-tight text-bone">
            Want to work with us?
          </p>
          <MagneticButton cursor="talk">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3 font-mono text-xs font-medium uppercase tracking-wide text-ink"
            >
              Get in touch →
            </Link>
          </MagneticButton>
        </FadeUp>
      </div>
    </div>
  );
}
