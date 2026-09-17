/**
 * Shared SVG clipPath definitions, mounted once in the root layout. Nothing
 * renders visibly: this just makes `url(#notch-tr)` / `url(#notch-bl)`
 * available to any element's `clip-path` anywhere on the page, rather than
 * duplicating the path per usage.
 */
export function BlobDefs() {
  return (
    <svg width="0" height="0" aria-hidden className="absolute">
      <defs>
        <clipPath id="notch-tr" clipPathUnits="objectBoundingBox">
          <path d="M 0.07 0 L 0.75 0 Q 0.82 0 0.82 0.06 L 0.82 0.16 Q 0.82 0.22 0.88 0.22 L 0.94 0.22 Q 1 0.22 1 0.28 L 1 0.93 Q 1 1 0.93 1 L 0.07 1 Q 0 1 0 0.93 L 0 0.07 Q 0 0 0.07 0 Z" />
        </clipPath>
        <clipPath id="notch-bl" clipPathUnits="objectBoundingBox">
          <path d="M 0.07 0 L 0.93 0 Q 1 0 1 0.07 L 1 0.93 Q 1 1 0.93 1 L 0.28 1 Q 0.22 1 0.22 0.94 L 0.22 0.84 Q 0.22 0.78 0.16 0.78 L 0.06 0.78 Q 0 0.78 0 0.72 L 0 0.07 Q 0 0 0.07 0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
