import Link from "next/link";
import { CLIENTS } from "@/lib/data/clients";
import { FadeUp } from "./RevealText";

function LogoMark({ name }: { name: string }) {
  switch (name) {
    case "Withcent Global":
      return (
        <span className="flex items-center gap-2 font-serif text-lg tracking-tight">
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden>
            <path
              d="M1 8.5L8 1.5L15 8.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Withcent <span className="text-[10px] uppercase tracking-widest opacity-60">Global</span>
        </span>
      );
    case "DropOS":
      return (
        <span className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-current/10">
            <svg width="11" height="13" viewBox="0 0 12 14" fill="currentColor" aria-hidden>
              <path d="M7 0L1 8h3.2L3 14l6-8H5.8L7 0z" />
            </svg>
          </span>
          DropOS
        </span>
      );
    case "Bookam":
      return (
        <span className="flex items-center gap-2 font-display text-lg font-medium tracking-tight">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeOpacity="0.3" />
            <path d="M5.2 5.2a3 3 0 1 0 0 5.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M10.8 5.2a3 3 0 1 1 0 5.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          Bookam
        </span>
      );
    case "Gele Glamzzz":
      return (
        <span className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.18em]">
          <svg width="11" height="11" viewBox="0 0 10 10" fill="currentColor" aria-hidden>
            <path d="M5 0l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" />
          </svg>
          Gele Glamzzz
        </span>
      );
    case "Displyn":
      return (
        <span className="flex items-center gap-2 font-display text-lg font-medium tracking-tight">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-current/10">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
              <rect x="1" y="2" width="12" height="2" rx="1" fill="currentColor" />
              <rect x="1" y="6" width="12" height="2" rx="1" fill="currentColor" />
              <rect x="1" y="10" width="8" height="2" rx="1" fill="currentColor" />
            </svg>
          </span>
          Displyn
        </span>
      );
    case "Sophie Dallamore":
      return <span className="font-script text-2xl italic">Sophie Dallamore</span>;
    default:
      return <span className="font-mono text-sm uppercase tracking-wide">{name}</span>;
  }
}

export function ClientLogos() {
  return (
    <section className="border-y border-line bg-ink px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-content">
        <FadeUp className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 sm:justify-between">
          {CLIENTS.map((client) => {
            const mark = (
              <span className="text-bone/50 opacity-80 transition-all duration-200 hover:text-bone hover:opacity-100">
                <LogoMark name={client.name} />
              </span>
            );
            return client.slug ? (
              <Link key={client.name} href={`/work/${client.slug}`} data-cursor="view">
                {mark}
              </Link>
            ) : (
              <span key={client.name}>{mark}</span>
            );
          })}
        </FadeUp>
      </div>
    </section>
  );
}
