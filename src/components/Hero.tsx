"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMarket } from "@/lib/market/MarketProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Hero3D } from "./Hero3D";
import { MagneticButton } from "./MagneticButton";

const CAPABILITIES = ["Websites", "Software", "Cloud", "Cybersecurity", "AI"];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { market } = useMarket();
  const { t } = useLocale();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const line2Y = useTransform(scrollYProgress, [0.22, 0.42], ["45%", "0%"]);
  const line2O = useTransform(scrollYProgress, [0.22, 0.4], [0, 1]);

  const line3Y = useTransform(scrollYProgress, [0.46, 0.66], ["45%", "0%"]);
  const line3O = useTransform(scrollYProgress, [0.46, 0.64], [0, 1]);

  const headlineScale = useTransform(scrollYProgress, [0.7, 1], [1, 0.82]);
  const headlineO = useTransform(scrollYProgress, [0.82, 1], [1, 0]);
  const headlineY = useTransform(scrollYProgress, [0.7, 1], ["0%", "-8%"]);

  const kickerO = useTransform(scrollYProgress, [0, 0.08, 0.7, 0.85], [1, 1, 1, 0]);
  const footO = useTransform(scrollYProgress, [0.78, 0.95], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-ink px-6 pt-28 sm:px-10">
        <Hero3D scrollProgress={scrollYProgress} />

        <motion.div style={{ opacity: kickerO }} className="relative z-10 flex items-center justify-between">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone/60">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            Hiya, we&apos;re Nexushouse <span aria-hidden>👋</span>
          </span>
          <span className="hidden rounded-full bg-signal px-4 py-2.5 font-mono text-[11px] uppercase tracking-wide text-ink sm:block">
            {market.heroKicker}
          </span>
        </motion.div>

        <motion.div
          style={{ scale: headlineScale, opacity: headlineO, y: headlineY }}
          className="relative z-10 mt-6 flex flex-1 flex-col justify-center"
        >
          <h1 className="font-display font-medium leading-[0.92] tracking-tightest text-bone">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block text-fluid-hero"
              >
                {market.heroLines[0]}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span style={{ y: line2Y, opacity: line2O }} className="block text-fluid-hero text-bone/90">
                {market.heroLines[1]}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span style={{ y: line3Y, opacity: line3O }} className="block text-fluid-hero text-stroke">
                {market.heroLines[2]}
              </motion.span>
            </span>
          </h1>
        </motion.div>

        <motion.div style={{ opacity: footO }} className="relative z-10 mb-10 flex flex-col gap-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-balance text-sm text-bone/60 sm:text-base">{market.heroSub}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-wide text-bone/40">
              {CAPABILITIES.map((c, i) => (
                <li key={c} className="flex items-center gap-4">
                  {c}
                  {i < CAPABILITIES.length - 1 && <span className="h-1 w-1 rounded-full bg-signal" />}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton cursor="explore">
              <Link
                href="/work"
                className="inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3 font-mono text-xs font-medium uppercase tracking-wide text-ink transition-transform duration-200 active:scale-95"
              >
                View our work →
              </Link>
            </MagneticButton>
            <Link
              href="/services"
              data-cursor="explore"
              className="font-mono text-xs uppercase tracking-wide text-bone/60 underline-offset-4 transition-colors hover:text-bone hover:underline"
            >
              See our services
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: kickerO }}
          className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-widest text-bone/40"
        >
          <span className="mb-2 block">{t.hero.scroll}</span>
          <span className="mx-auto block h-8 w-px animate-pulse bg-bone/40" />
        </motion.div>
      </div>
    </section>
  );
}
