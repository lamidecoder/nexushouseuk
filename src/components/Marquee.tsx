const WORDS = ["Websites", "Digital Products", "Mobile Apps", "Custom Software", "Cloud & Infrastructure", "Cybersecurity", "AI Products"];

/**
 * A looping horizontal band of capability words, echoing the bold scrolling
 * text banner in the reference layout. Uses real service names rather than
 * invented stats/numbers, since we have none to show honestly.
 */
export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink py-6 sm:py-8">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[...WORDS, ...WORDS].map((word, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 font-display text-3xl font-medium tracking-tight text-bone/25 sm:text-5xl"
          >
            {word}
            <span className="text-signal" aria-hidden>
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
