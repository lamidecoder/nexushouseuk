import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { TagChip } from "@/components/TagChip";
import { FadeUp } from "@/components/RevealText";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Business Registration & Compliance",
  description:
    "CAC business registration, incorporation and NDPR-aligned compliance documentation for Nigerian businesses, handled alongside the digital work.",
  alternates: { canonical: "/services/business-registration" },
};

const ITEMS = [
  {
    index: "01",
    title: "Business Registration",
    description:
      "CAC registration for business names and limited companies: the paperwork and filing that gets a Nigerian business legally set up, done alongside the rest of the work rather than as a separate errand.",
    tags: ["CAC", "Business Name", "LTD"],
  },
  {
    index: "02",
    title: "Compliance Documentation",
    description:
      "NDPR-aligned privacy and data handling documentation, plus the general compliance paperwork a growing business is expected to have in place.",
    tags: ["NDPR", "Compliance", "Documentation"],
  },
] as const;

export default function BusinessRegistrationPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionLabel index="NG" title="Business Registration & Compliance" />
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <h1 className="reveal-heading font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
            Getting the business set up legally, not just the website.
          </h1>
          <p className="text-lg text-bone/60">
            For Nigerian founders, we handle CAC registration and compliance documentation
            alongside the digital work, so the legal side of the business doesn&apos;t become a
            separate project.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-content px-6 pb-28 pt-16 sm:px-10">
        <div className="flex flex-col divide-y divide-line border-t border-line">
          {ITEMS.map((item, i) => (
            <FadeUp key={item.index} delay={i * 0.05}>
              <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-bone/40">{item.index}</span>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-bone sm:text-3xl">
                    {item.title}
                  </h2>
                </div>
                <div className="max-w-lg sm:pl-10">
                  <p className="text-bone/60">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <TagChip key={tag}>{tag}</TagChip>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-16 flex flex-col items-start gap-6 rounded-[32px] border border-line bg-ink-soft p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div>
              <h3 className="font-display text-2xl font-medium tracking-tight text-bone">
                Setting up in Nigeria?
              </h3>
              <p className="mt-2 max-w-md text-bone/60">
                Tell us what you&apos;re building and whether you need registration, compliance
                documentation, or both.
              </p>
            </div>
            <MagneticButton cursor="talk" className="inline-block shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-ink transition-transform duration-200 active:scale-95"
              >
                Get in touch →
              </Link>
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
