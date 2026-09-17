"use client";

import type { Service } from "@/lib/data/services";
import { SERVICES } from "@/lib/data/services";
import { useMarket } from "@/lib/market/MarketProvider";
import { FadeUp } from "./RevealText";
import { SectionLabel } from "./SectionLabel";

const GROUPS = ["Digital & Product", "IT & Infrastructure"] as const;

function ServiceCard({ service, delay }: { service: Pick<Service, "index" | "title" | "description" | "tags">; delay: number }) {
  return (
    <FadeUp delay={delay} className="bg-ink p-8">
      <span className="font-mono text-xs text-signal">{service.index}</span>
      <h3 className="mt-4 font-display text-xl font-medium tracking-tighter text-bone">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-bone/60">{service.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-signal/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-signal"
          >
            {tag}
          </span>
        ))}
      </div>
    </FadeUp>
  );
}

// Grid columns are picked per list so full rows always divide evenly.
// An uneven remainder leaves dangling empty cells that show through as a
// bare block of the container's gap-fill background.
function columnsFor(count: number): string {
  if (count % 3 === 0) return "sm:grid-cols-2 lg:grid-cols-3";
  if (count % 2 === 0) return "sm:grid-cols-2";
  return "sm:grid-cols-2 lg:grid-cols-3";
}

function ServiceGrid({ services }: { services: Pick<Service, "index" | "title" | "description" | "tags">[] }) {
  return (
    <div className={`mt-8 grid gap-px overflow-hidden rounded-2xl bg-line ${columnsFor(services.length)}`}>
      {services.map((service, i) => (
        <ServiceCard key={service.index} service={service} delay={i * 0.04} />
      ))}
    </div>
  );
}

export function ServicesPageContent() {
  const { market } = useMarket();

  return (
    <div className="mx-auto max-w-content px-6 pb-28 sm:px-10">
      {GROUPS.map((group, gi) => (
        <section key={group} className={gi === 0 ? "mt-8" : "mt-24"}>
          <SectionLabel index={gi === 0 ? "01" : "02"} title={group} />
          <ServiceGrid services={SERVICES.filter((s) => s.group === group)} />
        </section>
      ))}

      {market.extraServices.length > 0 && (
        <section className="mt-24">
          <SectionLabel index="03" title={`Local: ${market.label}`} />
          <ServiceGrid services={market.extraServices} />
        </section>
      )}
    </div>
  );
}
