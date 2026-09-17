/**
 * Typographic placeholder wordmark. Swap for the real Nexushouse logo file
 * by replacing this component's contents — nav, footer and loader all
 * consume it from here so a real asset only needs to be wired in once.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.14em] font-display font-medium tracking-tightest ${className}`}>
      <span className="relative inline-block h-[0.62em] w-[0.62em] shrink-0 self-center rounded-[0.14em] border-[1.5px] border-current">
        <span className="absolute inset-[22%] rounded-[0.05em] bg-current" />
      </span>
      NEXUSHOUSE
    </span>
  );
}
