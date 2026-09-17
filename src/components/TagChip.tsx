export function TagChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-ink/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-bone backdrop-blur-md">
      {children}
    </span>
  );
}
