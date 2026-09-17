"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { MARKETS, type MarketConfig, type MarketId } from "./config";
import { detectMarket } from "./detect";

const STORAGE_KEY = "nexus-market";

interface MarketContextValue {
  market: MarketConfig;
  marketId: MarketId;
  setMarket: (id: MarketId) => void;
  isAutoDetected: boolean;
}

const MarketContext = createContext<MarketContextValue | null>(null);

export function MarketProvider({ children }: { children: React.ReactNode }) {
  const [marketId, setMarketId] = useState<MarketId>("intl");
  const [isAutoDetected, setIsAutoDetected] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable (private mode, blocked) — fall back to detection
    }

    // Market detection reads localStorage/timezone/locale, all of which are
    // only available client-side, so this can only resolve after mount.
    /* eslint-disable react-hooks/set-state-in-effect */
    if (stored && stored in MARKETS) {
      setMarketId(stored as MarketId);
      setIsAutoDetected(false);
    } else {
      setMarketId(detectMarket());
      setIsAutoDetected(true);
    }
    setHydrated(true);
  }, []);

  const setMarket = (id: MarketId) => {
    setMarketId(id);
    setIsAutoDetected(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // ignore persistence failure
    }
  };

  const value = useMemo<MarketContextValue>(
    () => ({ market: MARKETS[marketId], marketId, setMarket, isAutoDetected }),
    [marketId, isAutoDetected]
  );

  return (
    <MarketContext.Provider value={value}>
      <div data-hydrated={hydrated}>{children}</div>
    </MarketContext.Provider>
  );
}

export function useMarket() {
  const ctx = useContext(MarketContext);
  if (!ctx) throw new Error("useMarket must be used within MarketProvider");
  return ctx;
}
