"use client";

import { useState } from "react";

/**
 * A clickable video-preview bubble. No src is fetched until the viewer
 * clicks: `public/videos/intro.mp4` is a placeholder path (see README
 * "Known placeholders") for a real video to be dropped in later. Caption
 * stays generic ("the team") rather than naming a person, since no real
 * name was supplied.
 */
export function VideoBubble({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor="view"
        className={`flex items-center gap-3 rounded-full bg-ink py-2 pl-2 pr-5 text-left shadow-xl transition-transform duration-200 active:scale-95 ${className}`}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal text-ink">
          <PlayIcon />
        </span>
        <span>
          <span className="block font-mono text-xs uppercase tracking-wide text-bone">Hear from the team</span>
          <span className="block text-[11px] text-bone/50">Nexushouse, in one minute</span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-bone/10 text-bone"
          >
            ✕
          </button>
          <video
            src="/videos/intro.mp4"
            controls
            autoPlay
            playsInline
            className="max-h-[80vh] w-full max-w-3xl rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
