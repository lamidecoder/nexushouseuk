export interface Project {
  slug: string;
  index: string;
  name: string;
  oneLiner: string;
  headline: string;
  industry: string;
  services: string[];
  description: string;
  challenge: string;
  approach: string;
  palette: [string, string, string];
  shape: "orbit" | "grid" | "wave" | "stack" | "aperture";
  /** Real project screenshots. Falls back to the abstract SVG visual when absent. */
  media?: {
    hero: string;
    gallery: string[];
  };
  /** Real client logo mark (transparent PNG), shown next to the case study title. */
  logo?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "withcent-global",
    index: "01",
    name: "Withcent Global",
    oneLiner: "Education / Digital Experience",
    headline: "Presenting an education brand with clarity and credibility",
    industry: "Education",
    services: ["Digital Strategy", "UI/UX Design", "Web Development"],
    description:
      "A digital experience for Withcent Global, built to present an education-focused organisation with the clarity and credibility its audience expects.",
    challenge:
      "Present a broad set of educational offerings in a way that feels coherent and easy to navigate, rather than a wall of information.",
    approach:
      "A structured content system and a clean visual language, so the site reads as one institution rather than a collection of unrelated pages.",
    palette: ["#0a0a0b", "#d6ff3f", "#f4f1ea"],
    shape: "grid",
    media: {
      hero: "/work/withcent-global/desktop-hero.jpg",
      gallery: ["/work/withcent-global/campus-life.jpg", "/work/withcent-global/partner-institutions.jpg"],
    },
  },
  {
    slug: "bookam",
    index: "02",
    name: "Bookam",
    oneLiner: "Booking Platform",
    headline: "Making bookings feel like two taps, not a form",
    industry: "Bookings & Reservations",
    services: ["Product Design", "Web App Development"],
    description:
      "Bookam is an app that lets people book shortlet apartments, hotels and event centres around Lagos State, Nigeria, in a few taps instead of a back-and-forth.",
    challenge:
      "Turn a multi-step booking flow (availability, selection, confirmation) into something that feels like two taps, not a form.",
    approach:
      "A focused interface built around the booking flow itself, with the supporting screens kept deliberately out of the way.",
    palette: ["#0a0a0b", "#d3ae67", "#6f3568"],
    shape: "wave",
    media: {
      hero: "/work/bookam/property-detail.jpg",
      gallery: ["/work/bookam/search-results.jpg", "/work/bookam/settings-profile.jpg"],
    },
    logo: "/work/bookam/logo.png",
  },
  {
    slug: "displyn",
    index: "03",
    name: "Displyn",
    oneLiner: "Mobile Product",
    headline: "A mobile product built for everyday clarity",
    industry: "Consumer Mobile",
    services: ["Product Design", "Mobile App Development"],
    description:
      "Displyn is a mobile product designed and built with a strong focus on interface clarity and everyday usability.",
    challenge:
      "Design a mobile experience that stays simple to use as functionality grows, without losing its identity.",
    approach:
      "A component-driven design system that let the interface scale in capability while staying visually consistent.",
    palette: ["#0a0a0b", "#ff6a3d", "#f4f1ea"],
    shape: "stack",
    media: {
      hero: "/work/displyn/web-hero.jpg",
      gallery: ["/work/displyn/app-onboarding.jpg", "/work/displyn/app-tasks.jpg"],
    },
  },
  {
    slug: "dropos",
    index: "04",
    name: "DropOS",
    oneLiner: "AI / Commerce Platform",
    headline: "AI-assisted commerce, without the added friction",
    industry: "AI & Commerce",
    services: ["Product Strategy", "AI Integration", "Platform Engineering"],
    description:
      "DropOS combines AI capability with a commerce platform, built to support the operational side of running a modern digital storefront.",
    challenge:
      "Introduce AI-assisted functionality into a commerce workflow without adding friction to the core operational tasks.",
    approach:
      "AI features integrated as assistance within existing workflows, rather than a separate tool operators have to learn.",
    palette: ["#0a0a0b", "#d6ff3f", "#1a1a1c"],
    shape: "orbit",
    media: {
      hero: "/work/dropos/desktop-hero.jpg",
      gallery: ["/work/dropos/mobile-hero.jpg", "/work/dropos/mobile-features.jpg"],
    },
  },
  {
    slug: "fzshotit",
    index: "05",
    name: "FZShotit",
    oneLiner: "Photography / Creative Portfolio",
    headline: "A quiet frame for photography that speaks for itself",
    industry: "Photography & Creative",
    services: ["Art Direction", "Portfolio Design", "Web Development"],
    description:
      "FZShotit is a creative portfolio built to let photography lead: a quiet frame for work that speaks for itself.",
    challenge:
      "Build a portfolio structure that presents imagery at full strength without competing chrome or decoration.",
    approach:
      "Large-format image presentation with minimal interface, so attention stays on the photography.",
    palette: ["#0a0a0b", "#f4f1ea", "#8a8a8a"],
    shape: "aperture",
    media: {
      hero: "/work/fzshotit/desktop-hero.jpg",
      gallery: ["/work/fzshotit/desktop-about.jpg", "/work/fzshotit/about-portfolio.jpg"],
    },
  },
  {
    slug: "gele-glamzzz",
    index: "06",
    name: "Gele Glamzzz",
    oneLiner: "Beauty & Personal Styling",
    headline: "A luxury styling brand presented the way its work looks",
    industry: "Beauty & Personal Styling",
    services: ["Brand Identity", "Web Design", "Web Development"],
    description:
      "Gele Glamzzz is a luxury gele and headwrap styling studio. The site gives its bridal, ceremony and stage work a presentation as considered as the styling itself.",
    challenge:
      "Give a highly visual, occasion-led styling business a site that reads as premium as the work it showcases, across weddings, stage and press moments.",
    approach:
      "A dark, editorial layout built to let full-bleed photography carry each story, with services and booking kept close at hand.",
    palette: ["#120b06", "#c9a56a", "#f4ecdf"],
    shape: "wave",
    media: {
      hero: "/work/gele-glamzzz/mobile-hero.jpg",
      gallery: ["/work/gele-glamzzz/desktop-notable-work.jpg", "/work/gele-glamzzz/mobile-notable-work.jpg"],
    },
  },
  {
    slug: "jaythecreator",
    index: "07",
    name: "Jaythecreator",
    oneLiner: "Beauty & Bridal Services",
    headline: "A quieter, editorial home for wedding-day beauty work",
    industry: "Beauty & Bridal Services",
    services: ["Brand Identity", "Web Design", "Web Development"],
    description:
      "Jaythecreator offers weddings, bridal prep and asoebi styling across the UK and internationally. The site was built to give that work a calm, editorial presentation.",
    challenge:
      "Present bridal and wedding-day beauty work with the same quiet confidence as the styling itself, without it reading like a generic booking site.",
    approach:
      "A dark, full-bleed layout that lets a single strong image and a short line of copy carry the page, with services and booking kept simple.",
    palette: ["#150c0c", "#b3455a", "#f4ece4"],
    shape: "wave",
    media: {
      hero: "/work/jaythecreator/desktop-hero.jpg",
      gallery: ["/work/jaythecreator/portfolio-grid.jpg", "/work/jaythecreator/selected-moments.jpg"],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
