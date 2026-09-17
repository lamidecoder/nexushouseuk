import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";
import { MagneticButton } from "./MagneticButton";

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded bg-bone/[0.06] px-1.5 py-0.5 font-medium text-bone underline decoration-signal/50 decoration-2 underline-offset-2 transition-colors hover:bg-bone/10 hover:decoration-signal"
    >
      {children}
    </Link>
  );
}

export function SharingTheLove() {
  return (
    <section className="relative bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <FadeUp>
          <SectionLabel index="06" title="Why Nexushouse" />
        </FadeUp>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp delay={0.05}>
            <h2 className="max-w-lg font-display text-fluid-lg font-medium leading-[1.05] tracking-tightest text-bone">
              One team for the product and the infrastructure it runs on,
              no handoffs between agencies.
            </h2>
          </FadeUp>

          <FadeUp delay={0.1} className="flex flex-col gap-6">
            <div className="space-y-5 text-balance text-bone/70">
              <p>
                Most studios stop at the handoff: a finished <InlineLink href="/services">website</InlineLink> or{" "}
                <InlineLink href="/work">digital product</InlineLink> gets shipped, then someone else is left to host
                it, secure it and keep it running. Nexushouse designs and builds the product, and stays on for the{" "}
                <InlineLink href="/services">cloud infrastructure</InlineLink>,{" "}
                <InlineLink href="/services">cybersecurity</InlineLink> and{" "}
                <InlineLink href="/services">IT support</InlineLink> underneath it, as one team rather than a
                second vendor you have to brief from scratch.
              </p>
              <p>
                That applies whether the job is a marketing website, a mobile app, custom software, or an
                AI-assisted product: the same people who designed it are accountable for how it performs once real
                users and real traffic show up. Read more about <InlineLink href="/studio">how we work</InlineLink>,
                or <InlineLink href="/contact">get in touch</InlineLink> if you have something specific in mind.
              </p>
            </div>
            <MagneticButton cursor="explore" className="inline-block">
              <Link
                href="/studio"
                className="inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3 font-mono text-xs font-medium uppercase tracking-wide text-ink transition-transform duration-200 active:scale-95"
              >
                About Nexushouse →
              </Link>
            </MagneticButton>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
