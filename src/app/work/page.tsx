import type { Metadata } from "next";
import { WorkIndex } from "@/components/WorkIndex";
import { PROJECTS } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Nexushouse: websites, digital products, mobile apps and platforms across education, bookings, commerce and creative industries.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-bone/50">Work</p>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <h1 className="font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
            Selected projects.
          </h1>
          <p className="text-lg text-bone/60">
            A small, honest selection of what we&apos;ve built, {PROJECTS.length} projects and
            counting. Each one links through to a short case study.
          </p>
        </div>
      </div>
      <WorkIndex />
    </div>
  );
}
