"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMarket } from "@/lib/market/MarketProvider";
import { MARKET_LIST } from "@/lib/market/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function CountrySelector() {
  const { market, setMarket } = useMarket();
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.yourExperience}
        className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-bone opacity-70 transition-opacity hover:opacity-100"
      >
        <span>{market.flag}</span>
        <span>{market.label}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full z-20 mt-3 w-56 rounded-lg border border-line bg-ink-soft p-2 shadow-2xl"
          >
            <li className="px-2 pb-1.5 pt-1 font-mono text-[10px] uppercase tracking-widest text-bone/40">
              {t.yourExperience}
            </li>
            {MARKET_LIST.map((m) => (
              <li key={m.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={m.id === market.id}
                  onClick={() => {
                    setMarket(m.id);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors hover:bg-bone/10 ${
                    m.id === market.id ? "text-signal" : "text-bone"
                  }`}
                >
                  <span>{m.flag}</span>
                  <span>{m.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
