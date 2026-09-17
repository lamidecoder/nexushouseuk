import type { ReactNode } from "react";

/**
 * A rounded frame with one corner notched out, like a puzzle piece. Uses the
 * shared clipPath defs from BlobDefs.tsx. Falls back to a plain rounded
 * rectangle if clip-path isn't supported, via the rounded-[32px] base class.
 */
export function BlobFrame({
  children,
  notch = "tr",
  className = "",
}: {
  children: ReactNode;
  notch?: "tr" | "bl";
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] ${className}`}
      style={{ clipPath: `url(#notch-${notch})` }}
    >
      {children}
    </div>
  );
}
