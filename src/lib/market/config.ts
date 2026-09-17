export type MarketId = "ng" | "uk" | "eu" | "intl";

export interface MarketConfig {
  id: MarketId;
  label: string;
  flag: string;
  currency: string;
  legalFramework: string;
  showWhatsapp: boolean;
  showRegistrationServices: boolean;
  contactEmail: string;
  whatsappNumber?: string;
  heroKicker: string;
  heroLines: string[];
  heroSub: string;
  servicesIntro: string;
  extraServices: { index: string; title: string; description: string; tags: string[] }[];
  contactHeadline: string;
  contactSub: string;
}

/**
 * TODO: replace placeholder contact details before launch.
 * Everything below is content/config, not fabricated results, clients or metrics.
 */
export const MARKETS: Record<MarketId, MarketConfig> = {
  ng: {
    id: "ng",
    label: "Nigeria",
    flag: "🇳🇬",
    currency: "NGN",
    legalFramework: "NDPR",
    showWhatsapp: true,
    showRegistrationServices: true,
    contactEmail: "hello@nexushouse.com",
    whatsappNumber: "+234 000 000 0000",
    heroKicker: "Digital agency — Lagos & remote",
    heroLines: ["WE BUILD", "DIGITAL THINGS", "WORTH REMEMBERING"],
    heroSub:
      "Nexushouse designs and engineers websites, products and software for Nigerian and international businesses — and, where useful, handles the CAC registration and compliance behind them.",
    servicesIntro:
      "Strategy, design and engineering — with business registration and compliance available as a local layer for Nigerian founders.",
    extraServices: [
      {
        index: "07",
        title: "Business Registration",
        description: "CAC registration, business names and company incorporation.",
        tags: ["CAC", "Business Name", "LTD"],
      },
      {
        index: "08",
        title: "Compliance Documentation",
        description: "NDPR-aligned documentation and business compliance paperwork.",
        tags: ["NDPR", "Compliance"],
      },
    ],
    contactHeadline: "HAVE AN IDEA?",
    contactSub: "Tell us what you're building. We'll reply within one working day.",
  },
  uk: {
    id: "uk",
    label: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP",
    legalFramework: "UK GDPR",
    showWhatsapp: false,
    showRegistrationServices: false,
    contactEmail: "hello@nexushouse.com",
    heroKicker: "Digital product studio — UK & remote",
    heroLines: ["WE BUILD", "DIGITAL THINGS", "WORTH REMEMBERING"],
    heroSub:
      "Nexushouse partners with UK startups and SMEs to design and engineer websites, products and software that hold up under real use.",
    servicesIntro:
      "A single studio for strategy, design and engineering — from first sketch to shipped product.",
    extraServices: [],
    contactHeadline: "HAVE AN IDEA?",
    contactSub: "Tell us what you're building. We'll reply within one working day.",
  },
  eu: {
    id: "eu",
    label: "Europe",
    flag: "🇪🇺",
    currency: "EUR",
    legalFramework: "GDPR",
    showWhatsapp: false,
    showRegistrationServices: false,
    contactEmail: "hello@nexushouse.com",
    heroKicker: "Digital product studio — Europe & remote",
    heroLines: ["WE BUILD", "DIGITAL THINGS", "WORTH REMEMBERING"],
    heroSub:
      "Nexushouse partners with European startups and scale-ups to design and engineer digital products that hold up under real use.",
    servicesIntro:
      "A single studio for strategy, design and engineering — from first sketch to shipped product.",
    extraServices: [],
    contactHeadline: "HAVE AN IDEA?",
    contactSub: "Tell us what you're building. We'll reply within one working day.",
  },
  intl: {
    id: "intl",
    label: "International",
    flag: "🌎",
    currency: "USD",
    legalFramework: "applicable data protection law",
    showWhatsapp: false,
    showRegistrationServices: false,
    contactEmail: "hello@nexushouse.com",
    heroKicker: "Digital agency & product studio",
    heroLines: ["WE BUILD", "DIGITAL THINGS", "WORTH REMEMBERING"],
    heroSub:
      "Nexushouse is a digital agency connecting strategy, design and technology — building websites, products and software for ambitious teams anywhere.",
    servicesIntro:
      "A single studio for strategy, design and engineering — from first sketch to shipped product.",
    extraServices: [],
    contactHeadline: "HAVE AN IDEA?",
    contactSub: "Tell us what you're building. We'll reply within one working day.",
  },
};

export const MARKET_LIST: MarketConfig[] = [MARKETS.ng, MARKETS.uk, MARKETS.eu, MARKETS.intl];
