"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { LOCALES } from "@/lib/i18n/dictionaries";

export function LanguageSelector({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const color = variant === "light" ? "text-bone" : "text-ink";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.language}
        className={`font-mono text-xs uppercase tracking-wide ${color} opacity-70 transition-opacity hover:opacity-100`}
      >
        {locale.toUpperCase()}
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full z-20 mt-3 w-28 rounded-lg border border-line bg-ink-soft p-2 shadow-2xl"
          >
            {LOCALES.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l.id === locale}
                  onClick={() => {
                    setLocale(l.id);
                    setOpen(false);
                  }}
                  className={`block w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-white/5 ${
                    l.id === locale ? "text-signal" : "text-bone"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
