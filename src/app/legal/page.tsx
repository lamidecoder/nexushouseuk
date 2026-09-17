import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Privacy",
  description: "Legal and privacy information for Nexushouse.",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-24 pt-32 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-bone/50">Legal</p>
      <h1 className="mt-6 font-display text-fluid-lg font-medium tracking-tightest text-bone">
        Legal &amp; Privacy
      </h1>

      <div className="mt-10 flex flex-col gap-8 text-bone/70">
        <p>
          This page is a placeholder. Nexushouse&apos;s full privacy policy and terms of service —
          covering data handling, cookies, and rights under NDPR, UK GDPR and EU GDPR depending on
          where you&apos;re visiting from — will be published here before launch.
        </p>
        <p>
          In the meantime, if you have a question about how your data is handled, contact us
          directly at{" "}
          <a href="mailto:hello@nexushouse.com" className="text-bone underline decoration-line underline-offset-4 hover:text-signal">
            hello@nexushouse.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
