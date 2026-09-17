export interface Service {
  index: string;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Websites",
    description: "Marketing sites and web platforms designed to hold attention and convert it.",
    tags: ["Design", "Development", "CMS"],
  },
  {
    index: "02",
    title: "Digital Products",
    description: "End-to-end product design and build, from first flow to shipped release.",
    tags: ["Product Design", "UX", "Design Systems"],
  },
  {
    index: "03",
    title: "Mobile Apps",
    description: "Native and cross-platform apps built for everyday, repeated use.",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    index: "04",
    title: "Custom Software",
    description: "Internal tools and platforms built around how a business actually operates.",
    tags: ["Engineering", "APIs", "Automation"],
  },
  {
    index: "05",
    title: "AI Products",
    description: "AI-assisted features and products, integrated where they remove friction.",
    tags: ["AI Integration", "Automation", "Data"],
  },
  {
    index: "06",
    title: "Product Design",
    description: "UI/UX and brand-level design work that gives a product its own identity.",
    tags: ["UI/UX", "Brand", "Prototyping"],
  },
];
