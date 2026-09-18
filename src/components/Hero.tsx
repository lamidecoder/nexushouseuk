"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMarket } from "@/lib/market/MarketProvider";
import { PROJECTS } from "@/lib/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { MagneticButton } from "./MagneticButton";
import { VideoBubble } from "./VideoBubble";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

const featured = PROJECTS[0];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const { market } = useMarket();

  return (
    <section className="relative bg-ink px-4 pt-32 sm:px-6 sm:pt-36">
      <div className="mx-auto max-w-content">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone/60"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
          Hiya, we&apos;re Nexushouse <span aria-hidden>👋</span>
        </motion.div>

        <div className="relative mt-6 min-h-[560px] overflow-visible rounded-[40px] bg-signal pb-28 sm:min-h-[640px] lg:min-h-[720px]">
          <HeroBackgroundVideo />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ clipPath: "url(#notch-br)" }}
            className="relative z-20 max-w-md bg-ink px-8 pb-20 pt-10 sm:max-w-xl sm:px-12 sm:pb-24 sm:pt-12"
          >
            <h1 className="font-display text-fluid-lg font-medium leading-[0.98] tracking-tightest text-bone sm:text-fluid-xl">
              {market.heroLines[0]}
              <br />
              {market.heroLines[1]}
            </h1>
            <MagneticButton cursor="explore" className="mt-8 inline-block">
              <Link
                href="/work"
                className="inline-flex items-center gap-3 rounded-full bg-bone/10 px-6 py-3 font-mono text-xs uppercase tracking-wide text-bone transition-all duration-200 hover:bg-signal hover:text-ink active:scale-95"
              >
                View our work →
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="absolute right-4 top-[38%] z-10 w-[78%] max-w-md -translate-y-1/2 overflow-hidden rounded-2xl bg-bone shadow-2xl ring-1 ring-black/10 sm:right-10 sm:top-1/2 sm:w-[52%]"
          >
            <div className="aspect-[16/10]">
              <ProjectVisual project={featured} className="h-full w-full" />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wide text-ink/50">{featured.industry}</p>
                <p className="font-display text-lg font-medium tracking-tight text-ink">{featured.name}</p>
              </div>
              <Link
                href={`/work/${featured.slug}`}
                data-cursor="view"
                className="font-mono text-[10px] uppercase tracking-wide text-ink/60 transition-colors hover:text-ink"
              >
                View project →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="absolute bottom-0 left-6 z-20 translate-y-1/2 sm:left-10"
          >
            <VideoBubble />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-20 max-w-lg text-balance text-center text-sm text-bone/60 sm:text-base"
        >
          {market.heroSub}
        </motion.p>
      </div>
    </section>
  );
}
