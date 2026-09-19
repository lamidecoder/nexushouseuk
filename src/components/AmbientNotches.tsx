type Shape = {
  notch: "tr" | "bl" | "br";
  size: number;
  top: string;
  left: string;
  fill: "soft" | "signal" | "outline";
  duration: number;
  range: [number, number];
  delay: number;
};

const SHAPES: Shape[] = [
  { notch: "tr", size: 152, top: "6%", left: "18%", fill: "soft", duration: 13, range: [-14, 10], delay: 0 },
  { notch: "bl", size: 78, top: "54%", left: "58%", fill: "signal", duration: 9, range: [10, -12], delay: -3 },
  { notch: "br", size: 96, top: "8%", left: "62%", fill: "outline", duration: 15, range: [-10, 16], delay: -7 },
  { notch: "tr", size: 56, top: "68%", left: "12%", fill: "outline", duration: 10, range: [12, -8], delay: -2 },
];

/**
 * A quiet ambient graphic built from the site's own notch shape — the same
 * cut-corner geometry used everywhere else (BlobFrame, the loader badge,
 * the wipe). A handful of notch cards drift slowly and asynchronously
 * within a bounded area: not a literal orbit, more like objects settling
 * in zero gravity. No narrative meaning, no data — decorative motion for
 * a section (homepage "Who we are") that otherwise has no visual at all.
 *
 * Plain CSS animation (see .animate-ambient-drift in globals.css), not a
 * JS animation library: cheaper, and this is the same proven pattern the
 * marquee ticker already uses for its own always-on infinite loop.
 * Negative delays start each shape mid-cycle so they don't all move in
 * lockstep on mount.
 */
export function AmbientNotches({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      {SHAPES.map((s, i) => (
        <div
          key={i}
          className={`animate-ambient-drift absolute ${
            s.fill === "signal"
              ? "bg-signal"
              : s.fill === "outline"
                ? "border border-line bg-transparent"
                : "bg-ink-soft"
          }`}
          style={
            {
              width: s.size,
              height: s.size,
              top: s.top,
              left: s.left,
              clipPath: `url(#notch-${s.notch})`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              "--drift-x-from": `${s.range[1] / 2}px`,
              "--drift-y-from": `${s.range[0]}px`,
              "--drift-x-to": `${s.range[0] / 2}px`,
              "--drift-y-to": `${s.range[1]}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
