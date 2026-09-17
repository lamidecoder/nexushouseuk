export interface Belief {
  index: string;
  title: string;
  body: string;
}

export const BELIEFS: Belief[] = [
  {
    index: "01",
    title: "Design and engineering are one discipline",
    body: "We don't hand work over a wall between design and code. The same people who shape an idea are accountable for how it performs in production.",
  },
  {
    index: "02",
    title: "Strategy before pixels",
    body: "We ask what the business actually needs before we decide what the interface looks like. A beautiful answer to the wrong question is still wrong.",
  },
  {
    index: "03",
    title: "Reliable systems, not just good looks",
    body: "A beautiful product on fragile infrastructure isn't finished. The same team that designs it keeps it running, secure and supported.",
  },
  {
    index: "04",
    title: "Restraint is a skill",
    body: "Anyone can add another animation. The harder, more valuable work is knowing what to leave out.",
  },
];
