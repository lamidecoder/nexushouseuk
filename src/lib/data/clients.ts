export interface Client {
  name: string;
  slug?: string;
}

/**
 * Real clients only, supplied directly. `slug` links to the matching
 * case study under /work when one exists.
 */
export const CLIENTS: Client[] = [
  { name: "Withcent Global", slug: "withcent-global" },
  { name: "DropOS", slug: "dropos" },
  { name: "Displyn", slug: "displyn" },
  { name: "Sophie Dallamore" },
];
