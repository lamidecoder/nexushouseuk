const GLYPHS: Record<string, React.ReactNode> = {
  design: <path d="M9 15l6-6 2 2-6 6H9v-2z" />,
  engineering: <path d="M8 8l-3 4 3 4M16 8l3 4-3 4M13 6l-2 12" />,
  strategy: <><circle cx="12" cy="12" r="3.4" /><path d="M12 5v2M12 17v2M5 12h2M17 12h2" /></>,
  it: <path d="M12 4l6 2.4v4.3c0 4-2.5 6.9-6 8.3-3.5-1.4-6-4.3-6-8.3V6.4L12 4z" />,
};

/**
 * A simple human bust silhouette with a small role glyph, standing in for
 * a real team photo we don't have. Not a claim about any specific person,
 * just a human shape rather than another geometric pattern.
 */
export function DisciplineIcon({ glyph }: { glyph: keyof typeof GLYPHS }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <circle cx="28" cy="28" r="27" stroke="currentColor" strokeOpacity="0.18" />
      <circle cx="28" cy="21" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M14 43c0-7.7 6.3-12 14-12s14 4.3 14 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <g transform="translate(30, 30)" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="9" cy="9" r="10.5" className="fill-ink" stroke="currentColor" strokeOpacity="0.4" />
        <g transform="translate(0.5, 0.5) scale(0.75)">{GLYPHS[glyph]}</g>
      </g>
    </svg>
  );
}
