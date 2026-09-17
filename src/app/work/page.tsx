import type { Metadata } from "next";
import { WorkIndex } from "@/components/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Nexushouse: websites, digital products, mobile apps and platforms across education, bookings, commerce and creative industries.",
};

export default function WorkPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-bone/50">Work</p>
        <h1 className="mt-6 max-w-3xl font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
          Selected projects.
        </h1>
        <p className="mt-6 max-w-lg text-bone/60">
          A small, honest selection of what we&apos;ve built. Each project links through to a short case
          study.
        </p>
      </div>
      <WorkIndex />
    </div>
  );
}
