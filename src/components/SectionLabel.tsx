export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-bone/50">
      <span className="text-signal">{index}</span>
      <span className="h-px w-8 bg-line" />
      <span>{title}</span>
    </div>
  );
}
