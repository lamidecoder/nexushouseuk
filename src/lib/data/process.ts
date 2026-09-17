export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const PROCESS: ProcessStep[] = [
  { index: "01", title: "Discover", description: "Understand the business, the users and the real constraints." },
  { index: "02", title: "Define", description: "Turn findings into a clear brief and a measurable direction." },
  { index: "03", title: "Design", description: "Explore, prototype and refine until the idea earns its place." },
  { index: "04", title: "Build", description: "Engineer it properly — performant, tested, built to last." },
  { index: "05", title: "Launch", description: "Ship with care: QA, performance, accessibility, monitoring." },
  { index: "06", title: "Evolve", description: "Keep improving with real usage data, not assumptions." },
];
