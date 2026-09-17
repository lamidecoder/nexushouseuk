export interface Project {
  slug: string;
  index: string;
  name: string;
  oneLiner: string;
  industry: string;
  services: string[];
  description: string;
  challenge: string;
  approach: string;
  palette: [string, string, string];
  shape: "orbit" | "grid" | "wave" | "stack" | "aperture";
}

export const PROJECTS: Project[] = [
  {
    slug: "withcent-global",
    index: "01",
    name: "Withcent Global",
    oneLiner: "Education / Digital Experience",
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
  },
  {
    slug: "bookam",
    index: "02",
    name: "Bookam",
    oneLiner: "Booking Platform",
    industry: "Bookings & Reservations",
    services: ["Product Design", "Web App Development"],
    description:
      "Bookam is a booking platform designed to make scheduling and reservations straightforward for both operators and their customers.",
    challenge:
      "Turn a multi-step booking flow — availability, selection, confirmation — into something that feels like two taps, not a form.",
    approach:
      "A focused interface built around the booking flow itself, with the supporting screens kept deliberately out of the way.",
    palette: ["#0a0a0b", "#5865ff", "#f4f1ea"],
    shape: "wave",
  },
  {
    slug: "displyn",
    index: "03",
    name: "Displyn",
    oneLiner: "Mobile Product",
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
  },
  {
    slug: "dropos",
    index: "04",
    name: "DropOS",
    oneLiner: "AI / Commerce Platform",
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
  },
  {
    slug: "fzshotit",
    index: "05",
    name: "FZShotit",
    oneLiner: "Photography / Creative Portfolio",
    industry: "Photography & Creative",
    services: ["Art Direction", "Portfolio Design", "Web Development"],
    description:
      "FZShotit is a creative portfolio built to let photography lead — a quiet frame for work that speaks for itself.",
    challenge:
      "Build a portfolio structure that presents imagery at full strength without competing chrome or decoration.",
    approach:
      "Large-format image presentation with minimal interface, so attention stays on the photography.",
    palette: ["#0a0a0b", "#f4f1ea", "#8a8a8a"],
    shape: "aperture",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
