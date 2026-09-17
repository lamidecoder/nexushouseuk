"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { useMarket } from "@/lib/market/MarketProvider";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";
import { MagneticButton } from "./MagneticButton";

const HOMEPAGE_HIGHLIGHTS = ["01", "02", "03", "07", "08", "05"];

export function Services() {
  const { market } = useMarket();
  const allServices = SERVICES.filter((s) => HOMEPAGE_HIGHLIGHTS.includes(s.index));

  return (
    <section id="services" className="relative bg-ink px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-content">
        <FadeUp>
          <SectionLabel index="03" title="Capability" />
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
            What we do.
          </h2>
          <p className="mt-4 max-w-lg text-bone/60">{market.servicesIntro}</p>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-10">
          <MagneticButton cursor="explore" className="inline-block">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3 font-mono text-xs font-medium uppercase tracking-wide text-ink transition-transform duration-200 active:scale-95"
            >
              See all services →
            </Link>
          </MagneticButton>
        </FadeUp>

        <ul className="mt-14 flex flex-col divide-y divide-line border-t border-line">
          {allServices.map((service, i) => (
            <FadeUp key={service.index} delay={i * 0.03}>
              <li>
                <Link
                  href="/services"
                  data-cursor="explore"
                  className="group flex items-center gap-6 py-6 transition-colors sm:gap-8"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-ink-soft font-mono text-sm text-bone/40 transition-colors group-hover:border-signal/40 group-hover:text-signal sm:h-16 sm:w-16">
                    {service.index}
                  </span>
                  <span className="font-display text-2xl font-medium tracking-tighter text-bone transition-colors group-hover:text-signal sm:text-3xl">
                    {service.title}
                  </span>
                </Link>
              </li>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
