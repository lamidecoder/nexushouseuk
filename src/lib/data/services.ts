export interface Service {
  index: string;
  title: string;
  description: string;
  tags: string[];
  group: "Digital & Product" | "IT & Infrastructure";
}

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Websites",
    description: "Marketing sites and web platforms designed to hold attention and convert it.",
    tags: ["Design", "Development", "CMS"],
    group: "Digital & Product",
  },
  {
    index: "02",
    title: "Digital Products",
    description: "End-to-end product design and build, from first flow to shipped release.",
    tags: ["Product Design", "UX", "Design Systems"],
    group: "Digital & Product",
  },
  {
    index: "03",
    title: "Mobile Apps",
    description: "Native and cross-platform apps built for everyday, repeated use.",
    tags: ["iOS", "Android", "React Native"],
    group: "Digital & Product",
  },
  {
    index: "04",
    title: "Custom Software",
    description: "Internal tools and platforms built around how a business actually operates.",
    tags: ["Engineering", "APIs", "Automation"],
    group: "Digital & Product",
  },
  {
    index: "05",
    title: "AI Products",
    description: "AI-assisted features and products, integrated where they remove friction.",
    tags: ["AI Integration", "Automation", "Data"],
    group: "Digital & Product",
  },
  {
    index: "06",
    title: "Product Design",
    description: "UI/UX and brand-level design work that gives a product its own identity.",
    tags: ["UI/UX", "Brand", "Prototyping"],
    group: "Digital & Product",
  },
  {
    index: "07",
    title: "Cloud & Infrastructure",
    description: "Cloud architecture, migration and hosting built to stay up and scale cleanly.",
    tags: ["AWS", "Azure", "DevOps"],
    group: "IT & Infrastructure",
  },
  {
    index: "08",
    title: "Cybersecurity",
    description: "Security audits, hardening and monitoring for infrastructure and applications.",
    tags: ["Audits", "Monitoring", "Compliance"],
    group: "IT & Infrastructure",
  },
  {
    index: "09",
    title: "IT Support & Managed Services",
    description: "Ongoing IT support so a business's systems stay someone else's problem.",
    tags: ["Helpdesk", "Maintenance", "SLA"],
    group: "IT & Infrastructure",
  },
  {
    index: "10",
    title: "Networking & Systems",
    description: "Network design, setup and administration for offices and growing teams.",
    tags: ["Networking", "Systems Admin", "Hardware"],
    group: "IT & Infrastructure",
  },
];
