# Nexushouse

The Nexushouse marketing site: a Next.js 16 (App Router) + TypeScript + Tailwind + Framer Motion +
React Three Fiber build.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Architecture

- **Market personalization** (`src/lib/market/`). Four markets (`ng`, `uk`, `eu`, `intl`) are defined in
  `config.ts` with their own hero copy, services, contact details and legal framework. `detect.ts` makes a
  best-effort client-side guess from timezone/locale (no IP lookup service); the visitor can always override
  it via the country selector, which persists to `localStorage`.
- **Language** (`src/lib/i18n/`). UI chrome (nav, CTAs, labels) is translated for `en`/`fr`/`es`/`de` and
  switches client-side (no locale-prefixed routes yet). Long-form editorial copy (hero statement, studio
  philosophy, case studies, insights articles) intentionally stays in English across locales for now, see the
  comment in `LocaleProvider.tsx`. Because there's a single URL per page rather than per-locale URLs
  (`/fr/work`, etc.), `hreflang` tags are intentionally omitted since they'd be misleading without distinct
  localized routes. Adding real per-locale routing (via `next-intl` middleware, for example) is the natural
  next step if full localization becomes a priority.
- **Content data** (`src/lib/data/`: `projects.ts`, `services.ts`, `process.ts`, `beliefs.ts`,
  `insights.ts`). Nothing here fabricates metrics, testimonials, awards or named team members.
- **Theme** (`src/lib/theme/`). Light/dark tokens live as CSS custom properties in `globals.css`
  (`:root` is dark, `[data-theme="light"]` overrides it), so existing Tailwind classes like `bg-ink` and
  `text-bone` re-theme automatically. A blocking inline script (`THEME_INIT_SCRIPT`, injected in
  `layout.tsx`) stamps `data-theme` before first paint to avoid a flash of the wrong theme.
  `ThemeProvider`/`useTheme` mirror it into React state, and `ThemeToggle` (nav, mobile menu, footer) flips
  it. Defaults to system preference, then remembers a manual choice in `localStorage`.
- **3D hero** (`src/components/HeroScene.tsx` + `Hero3D.tsx`). A React Three Fiber scene (distorted
  icosahedron core, wireframe shell, a ring of node-points, bloom post-processing) that reacts to scroll
  (via the same Framer Motion scroll progress the 2D headline uses, read imperatively so they never fight)
  and pointer position (tracked globally, since the canvas itself is `pointer-events: none`). The flat SVG
  line motif (`NexusField.tsx`) is always mounted underneath it, so there's never a blank moment while the
  WebGL chunk loads, and it's the whole picture for `prefers-reduced-motion`, missing WebGL support, or
  small viewports where a 3D scene adds cost without much payoff.
- **Smooth scroll** (`src/components/SmoothScroll.tsx`). Lenis-driven inertia scrolling, skipped entirely
  for `prefers-reduced-motion` in favor of plain native scrolling.
- **Sections** — one component per homepage section in `src/components/` (`Hero`, `Intro`, `Work`,
  `Services`, `Studio`, `Process`, `Contact`), composed in `src/app/page.tsx`. `/services`, `/studio` and
  `/contact` are also full standalone pages (deeper content, linked from nav) built from the same shared
  data/components as their homepage teasers. `/insights` and `/insights/[slug]` hold genuine editorial
  articles in the studio's voice, not fabricated bylines or stats.

## Known placeholders to swap before launch

- **Logo**: `src/components/Logo.tsx` is a typographic placeholder wordmark. Replace its contents with the
  real mark; nav, footer and loader all consume it from this one place.
- **Contact form backend**: `src/app/api/contact/route.ts` validates and logs submissions but isn't wired
  to an email/CRM provider yet. Real contact details (email + Instagram) live in
  `src/lib/market/config.ts`.
- **Project imagery**: `src/components/ProjectVisual.tsx` generates bespoke abstract SVG compositions per
  project. Real screenshots for the five case studies (plus a new Jaygele project) are pending: this
  sandbox's network policy blocks fetching arbitrary external sites, so real imagery needs to be supplied
  directly (screenshots or recordings) rather than captured here.
- **Legal copy**: `/legal` has genuine, complete privacy policy and terms content matching what the site
  actually does, but it's still worth a lawyer's review before launch, standard practice for any real
  privacy policy and terms of use.
- **Videos**: `public/videos/` (see its own README) takes two optional files that light up automatically:
  `intro.mp4` for the "Hear from the team" bubble's lightbox, and `hero-bg.mp4` for a lime-tinted looping
  background in the hero panel. Both degrade gracefully (spinner / plain lime fill) until the files exist.
