import type { MarketId } from "./config";

const UK_TIMEZONES = new Set(["Europe/London", "Europe/Belfast", "Europe/Jersey", "Europe/Guernsey", "Europe/Isle_of_Man"]);

const EU_TIMEZONE_PREFIXES = [
  "Europe/",
];

const NG_TIMEZONES = new Set(["Africa/Lagos"]);

/**
 * Best-effort, client-side market guess. No IP lookup service. This reads
 * the browser's timezone/locale, which is enough to pick a sensible default
 * and is always overridable via the country selector.
 */
export function detectMarket(): MarketId {
  if (typeof window === "undefined") return "intl";

  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const locale = navigator.language?.toLowerCase() ?? "";

    if (NG_TIMEZONES.has(timeZone) || locale === "en-ng") return "ng";
    if (UK_TIMEZONES.has(timeZone) || locale === "en-gb") return "uk";
    if (EU_TIMEZONE_PREFIXES.some((prefix) => timeZone.startsWith(prefix))) return "eu";

    return "intl";
  } catch {
    return "intl";
  }
}
