"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES } from "@/lib/data/services";
import { useMarket } from "@/lib/market/MarketProvider";
import { SectionLabel } from "./SectionLabel";
import { FadeUp } from "./RevealText";

const HOMEPAGE_HIGHLIGHTS = ["01", "02", "03", "07", "08", "05"];

export function Services() {
  const [active, setActive] = useState(0);
  const { market } = useMarket();
  const allServices = [...SERVICES.filter((s) => HOMEPAGE_HIGHLIGHTS.includes(s.index)), ...market.extraServices];
  const current = allServices[active];

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

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {allServices.map((service, i) => {
              const isActive = i === active;
              return (
                <li key={service.index}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="flex w-full items-center gap-5 py-6 text-left sm:gap-8 sm:py-7"
                  >
                    <span className={`font-mono text-xs transition-colors ${isActive ? "text-signal" : "text-bone/40"}`}>
                      {service.index}
                    </span>
                    <span
                      className={`font-display text-2xl font-medium tracking-tighter transition-colors sm:text-3xl ${
                        isActive ? "text-bone" : "text-bone/40"
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-[3.2rem] text-sm text-bone/60 sm:pl-16"
                      >
                        <span className="block pb-6">{service.description}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-ink-soft lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full flex-col justify-between p-10"
              >
                <span className="font-display text-[10rem] font-medium leading-none tracking-tightest text-bone/10">
                  {current.index}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-medium tracking-tighter text-bone">{current.title}</h3>
                  <p className="mt-3 max-w-sm text-bone/60">{current.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-signal/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-signal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <FadeUp delay={0.1} className="mt-14 flex justify-center">
          <Link
            href="/services"
            data-cursor="explore"
            className="inline-flex items-center gap-3 rounded-full border border-bone/20 px-6 py-3 font-mono text-xs uppercase tracking-wide text-bone transition-all duration-200 hover:border-signal hover:text-signal active:scale-95"
          >
            View all services →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
