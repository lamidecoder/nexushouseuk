"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { FadeUp } from "./RevealText";

interface ServiceRow {
  index: string;
  title: string;
  href?: string;
}

interface Discipline {
  word: string;
  intro: string;
  services: ServiceRow[];
}

function byIndex(indexes: string[]): ServiceRow[] {
  return indexes
    .map((i) => SERVICES.find((s) => s.index === i))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s))
    .map(({ index, title }) => ({ index, title }));
}

const BASE_DISCIPLINES: Discipline[] = [
  {
    word: "Design",
    intro: "Product and brand-level design work, done in-house by the same people who build it.",
    services: byIndex(["06", "02"]),
  },
  {
    word: "Build",
    intro: "Engineering across web, mobile and custom software, matched to how the product actually needs to work.",
    services: byIndex(["01", "03", "04", "05"]),
  },
  {
    word: "Support",
    intro: "The cloud, security and IT layer that keeps everything above it running once it's live.",
    services: byIndex(["07", "08", "09", "10"]),
  },
  {
    word: "Compliance",
    intro: "CAC business registration and NDPR-aligned compliance documentation, for Nigerian businesses.",
    services: [
      { index: "11", title: "Business Registration", href: "/services/business-registration" },
      { index: "12", title: "Compliance Documentation", href: "/services/business-registration" },
    ],
  },
];

function ArrowChip() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/40 text-signal transition-colors duration-200 group-hover:bg-signal group-hover:text-ink">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function DisciplineSection({ discipline, first }: { discipline: Discipline; first: boolean }) {
  return (
    <section className={`border-t border-line py-16 sm:py-20 ${first ? "mt-16" : ""}`}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <FadeUp>
            <h2 className="font-display text-[clamp(3.5rem,10vw,7rem)] font-medium leading-[0.9] tracking-tightest text-bone">
              {discipline.word}
            </h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="mt-6 max-w-sm text-bone/60">{discipline.intro}</p>
          </FadeUp>
        </div>

        <ul className="flex flex-col divide-y divide-line self-start">
          {discipline.services.map((service, i) => (
            <FadeUp key={service.index} delay={i * 0.04}>
              <li>
                <Link
                  href={service.href ?? "/contact"}
                  data-cursor="explore"
                  className="group flex items-center justify-between gap-6 py-4"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-bone/40">{service.index}</span>
                    <span className="font-display text-lg font-medium tracking-tight text-bone transition-colors group-hover:text-signal sm:text-xl">
                      {service.title}
                    </span>
                  </span>
                  <ArrowChip />
                </Link>
              </li>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicesPageContent() {
  return (
    <div className="mx-auto max-w-content px-6 pb-28 sm:px-10">
      {BASE_DISCIPLINES.map((discipline, i) => (
        <DisciplineSection key={discipline.word} discipline={discipline} first={i === 0} />
      ))}
    </div>
  );
}
