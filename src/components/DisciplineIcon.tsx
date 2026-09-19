/**
 * A simple human bust silhouette, standing in for a real team photo we
 * don't have. Not a claim about any specific person, just a human shape
 * rather than another geometric pattern.
 */
export function DisciplineIcon({ glyph }: { glyph: "design" | "engineering" | "strategy" | "it" }) {
  void glyph;
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
    </svg>
  );
}
