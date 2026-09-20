import type Lenis from "lenis";

/**
 * The single Lenis instance SmoothScroll.tsx creates, shared so other
 * components (BackToTop) can drive it directly instead of fighting it with
 * native scrollTo. Null when Lenis isn't running (reduced motion, or before
 * mount) — callers fall back to native scroll in that case.
 */
export const lenisRef: { current: Lenis | null } = { current: null };
