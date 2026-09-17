"use client";

/**
 * Subtle backdrop motif for the hero: a handful of connecting lines that
 * nod to the "nexus" concept without literalising it. Pure SVG/CSS, no
 * WebGL — the effect doesn't need it.
 */
export function NexusField() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
    >
      <defs>
        <linearGradient id="nexus-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d6ff3f" stopOpacity="0" />
          <stop offset="50%" stopColor="#d6ff3f" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#d6ff3f" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[
        "M 80 780 L 620 340",
        "M 1520 120 L 900 420",
        "M 200 60 L 700 400",
        "M 1400 820 L 950 460",
      ].map((d, i) => (
        <path
          key={d}
          d={d}
          stroke="url(#nexus-line)"
          strokeWidth="1"
          fill="none"
          className="nexus-draw"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
      {[
        [620, 340],
        [900, 420],
        [700, 400],
        [950, 460],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="#d6ff3f" fillOpacity="0.7" />
      ))}
      <style>{`
        .nexus-draw {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: nexus-dash 2.4s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes nexus-dash {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .nexus-draw { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
}
