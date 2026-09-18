import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital products and the IT infrastructure that runs them: websites, software, mobile apps, AI, cloud, cybersecurity, IT support and networking.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-bone/50">Services</p>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <h1 className="font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
            Digital work, and the IT it runs on.
          </h1>
          <p className="text-lg text-bone/60">
            One team for both halves of the job: the product people see, and the infrastructure
            that keeps it running, secure and supported.
          </p>
        </div>
      </div>
      <ServicesPageContent />
    </div>
  );
}
