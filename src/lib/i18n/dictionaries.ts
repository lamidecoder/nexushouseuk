export type Locale = "en" | "fr" | "es" | "de";

export const LOCALES: { id: Locale; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "fr", label: "FR" },
  { id: "es", label: "ES" },
  { id: "de", label: "DE" },
];

export interface Dictionary {
  nav: { home: string; work: string; services: string; studio: string; contact: string };
  cta: { talk: string; viewProject: string; explore: string; drag: string };
  hero: { scroll: string };
  yourExperience: string;
  language: string;
}

const en: Dictionary = {
  nav: { home: "Home", work: "Work", services: "Services", studio: "Studio", contact: "Contact" },
  cta: { talk: "Let's talk", viewProject: "View project", explore: "Explore", drag: "Drag" },
  hero: { scroll: "Scroll" },
  yourExperience: "Your experience",
  language: "Language",
};

const fr: Dictionary = {
  nav: { home: "Accueil", work: "Travaux", services: "Services", studio: "Studio", contact: "Contact" },
  cta: { talk: "Discutons", viewProject: "Voir le projet", explore: "Explorer", drag: "Glisser" },
  hero: { scroll: "Défiler" },
  yourExperience: "Votre expérience",
  language: "Langue",
};

const es: Dictionary = {
  nav: { home: "Inicio", work: "Trabajo", services: "Servicios", studio: "Estudio", contact: "Contacto" },
  cta: { talk: "Hablemos", viewProject: "Ver proyecto", explore: "Explorar", drag: "Arrastrar" },
  hero: { scroll: "Desplázate" },
  yourExperience: "Tu experiencia",
  language: "Idioma",
};

const de: Dictionary = {
  nav: { home: "Start", work: "Arbeiten", services: "Leistungen", studio: "Studio", contact: "Kontakt" },
  cta: { talk: "Lass uns reden", viewProject: "Projekt ansehen", explore: "Entdecken", drag: "Ziehen" },
  hero: { scroll: "Scrollen" },
  yourExperience: "Deine Erfahrung",
  language: "Sprache",
};

export const DICTIONARIES: Record<Locale, Dictionary> = { en, fr, es, de };
