"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DICTIONARIES, type Dictionary, type Locale } from "./dictionaries";

const STORAGE_KEY = "nexus-locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * UI chrome (nav, CTAs, labels) is translated for en/fr/es/de. Long-form
 * editorial copy (hero statement, studio philosophy, case studies) stays in
 * English across locales for now. Machine-translating brand copywriting at
 * scale risks tone/accuracy issues the brief explicitly warns against.
 */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // localStorage is unavailable during SSR, so restoring a saved locale
      // can only happen after mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored && stored in DICTIONARIES) setLocaleState(stored as Locale);
    } catch {
      // ignore
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: DICTIONARIES[locale] }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
