"use client";

import { useEffect, useState } from "react";
import { MarketProvider } from "@/lib/market/MarketProvider";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { Cursor } from "./Cursor";
import { Loader } from "./Loader";
import { SmoothScroll } from "./SmoothScroll";
import { BackToTop } from "./BackToTop";

const SESSION_KEY = "nexus-loaded";

export function Providers({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    try {
      if (!window.sessionStorage.getItem(SESSION_KEY)) {
        // sessionStorage only exists client-side, so this first-visit check
        // can only run post-mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setShowLoader(true);
        window.sessionStorage.setItem(SESSION_KEY, "1");
      }
    } catch {
      // sessionStorage unavailable: skip the loader rather than block rendering
    }
  }, []);

  return (
    <ThemeProvider>
      <MarketProvider>
        <LocaleProvider>
          {/* Content renders immediately underneath; the loader (when shown) is an
              opaque overlay, so nothing actually waits on it. It only plays once
              per browser session, on first entry, not on every page. */}
          {showLoader && <Loader onDone={() => setShowLoader(false)} />}
          <SmoothScroll />
          <Cursor />
          <BackToTop />
          {children}
        </LocaleProvider>
      </MarketProvider>
    </ThemeProvider>
  );
}
