import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes from the Nexushouse studio — coming soon.",
};

export default function InsightsPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-bone/50">Insights</p>
      <h1 className="mt-6 max-w-xl font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
        Coming soon.
      </h1>
      <p className="mt-6 max-w-md text-bone/60">
        We&apos;re building out a space for notes on process, product and craft. Nothing to show yet —
        we&apos;d rather post nothing than post filler.
      </p>
    </div>
  );
}
