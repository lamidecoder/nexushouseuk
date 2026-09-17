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
    heroKicker: "Digital & IT solutions — Lagos & remote",
    heroLines: ["WE BUILD", "DIGITAL THINGS", "WORTH REMEMBERING"],
    heroSub:
      "Nexushouse is a team of designers, engineers and IT professionals building websites, software, cloud infrastructure and secure systems for Nigerian and international businesses — with CAC registration and compliance handled alongside, where useful.",
    servicesIntro:
      "Digital products, cloud, cybersecurity and IT support — with business registration and compliance available as a local layer for Nigerian founders.",
    extraServices: [
      {
        index: "11",
        title: "Business Registration",
        description: "CAC registration, business names and company incorporation.",
        tags: ["CAC", "Business Name", "LTD"],
      },
      {
        index: "12",
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
    heroKicker: "Digital & IT solutions studio — UK & remote",
    heroLines: ["WE BUILD", "DIGITAL THINGS", "WORTH REMEMBERING"],
    heroSub:
      "Nexushouse is a team of designers, engineers and IT professionals partnering with UK startups and SMEs — websites and products, plus the cloud, security and IT support underneath them.",
    servicesIntro:
      "One team for digital product work and the IT infrastructure it runs on — design, engineering, cloud and cybersecurity together.",
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
    heroKicker: "Digital & IT solutions studio — Europe & remote",
    heroLines: ["WE BUILD", "DIGITAL THINGS", "WORTH REMEMBERING"],
    heroSub:
      "Nexushouse is a team of designers, engineers and IT professionals partnering with European startups and scale-ups — websites and products, plus the cloud, security and IT support underneath them.",
    servicesIntro:
      "One team for digital product work and the IT infrastructure it runs on — design, engineering, cloud and cybersecurity together.",
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
    heroKicker: "A digital & IT solutions company",
    heroLines: ["WE BUILD", "DIGITAL THINGS", "WORTH REMEMBERING"],
    heroSub:
      "Nexushouse is a team of designers, engineers and IT professionals connecting strategy, design and technology — websites, software and AI products, plus the cloud, security and IT support underneath them.",
    servicesIntro:
      "One team for digital product work and the IT infrastructure it runs on — design, engineering, cloud and cybersecurity together.",
    extraServices: [],
    contactHeadline: "HAVE AN IDEA?",
    contactSub: "Tell us what you're building. We'll reply within one working day.",
  },
};

export const MARKET_LIST: MarketConfig[] = [MARKETS.ng, MARKETS.uk, MARKETS.eu, MARKETS.intl];
