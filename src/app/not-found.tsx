import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-bone/50">404</p>
      <h1 className="mt-6 font-display text-fluid-xl font-medium leading-[0.98] tracking-tightest text-bone">
        Nothing here.
      </h1>
      <p className="mt-6 max-w-md text-bone/60">
        The page you&apos;re looking for doesn&apos;t exist, or it moved. Let&apos;s get you back on track.
      </p>
      <MagneticButton cursor="explore" className="mt-10 inline-block">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full bg-signal px-6 py-3 font-mono text-xs font-medium uppercase tracking-wide text-ink transition-transform duration-200 active:scale-95"
        >
          Back to home →
        </Link>
      </MagneticButton>
    </div>
  );
}
