# Nexushouse

The Nexushouse marketing site — a Next.js 16 (App Router) + TypeScript + Tailwind + Framer Motion +
React Three Fiber build.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Architecture

- **Market personalization** — `src/lib/market/`. Four markets (`ng`, `uk`, `eu`, `intl`) are defined in
  `config.ts` with their own hero copy, services, contact details and legal framework. `detect.ts` makes a
  best-effort client-side guess from timezone/locale (no IP lookup service); the visitor can always override
  it via the country selector, which persists to `localStorage`.
- **Language** — `src/lib/i18n/`. UI chrome (nav, CTAs, labels) is translated for `en`/`fr`/`es`/`de` and
  switches client-side (no locale-prefixed routes yet). Long-form editorial copy (hero statement, studio
  philosophy, case studies) intentionally stays in English across locales for now — see the comment in
  `LocaleProvider.tsx`. Because there's a single URL per page rather than per-locale URLs (`/fr/work`, etc.),
  `hreflang` tags are intentionally omitted — they'd be misleading without distinct localized routes. Adding
  real per-locale routing (e.g. via `next-intl` middleware) is the natural next step if full localization
  becomes a priority.
- **Content data** — `src/lib/data/` (`projects.ts`, `services.ts`, `process.ts`, `beliefs.ts`). Nothing in
  here fabricates metrics, testimonials, awards or team members, per the brief.
- **Theme** — `src/lib/theme/`. Light/dark tokens live as CSS custom properties in `globals.css`
  (`:root` = dark, `[data-theme="light"]` overrides), so existing Tailwind classes like `bg-ink`/`text-bone`
  re-theme automatically. A blocking inline script (`THEME_INIT_SCRIPT`, injected in `layout.tsx`) stamps
  `data-theme` before first paint to avoid a flash of the wrong theme; `ThemeProvider`/`useTheme` mirror it
  into React state, and `ThemeToggle` (nav, mobile menu, footer) flips it. Defaults to system preference,
  then remembers a manual choice in `localStorage`.
- **3D hero** — `src/components/HeroScene.tsx` + `Hero3D.tsx`. A React Three Fiber scene (distorted
  icosahedron core, wireframe shell, a ring of node-points, bloom post-processing) that reacts to scroll
  (via the same Framer Motion scroll progress the 2D headline uses, read imperatively so they never fight)
  and pointer position (tracked globally, since the canvas itself is `pointer-events: none`). Falls back to
  the flat SVG line motif (`NexusField.tsx`) for `prefers-reduced-motion`, missing WebGL support, or small
  viewports where the payoff doesn't justify the cost — nobody sees a blank hero.
- **Sections** — one component per homepage section in `src/components/` (`Hero`, `Intro`, `Work`,
  `Services`, `Studio`, `Process`, `Contact`), composed in `src/app/page.tsx`. `/services`, `/studio` and
  `/contact` are also full standalone pages (deeper content, linked from nav) built from the same shared
  data/components as their homepage teasers.

## Known placeholders to swap before launch

- **Logo** — `src/components/Logo.tsx` is a typographic placeholder wordmark. Replace its contents with the
  real mark; nav, footer and loader all consume it from this one place.
- **Contact details** — `src/lib/market/config.ts` has placeholder email/WhatsApp values marked `TODO`.
- **Contact form backend** — `src/app/api/contact/route.ts` validates and logs submissions but isn't wired
  to an email/CRM provider yet.
- **Project imagery** — `src/components/ProjectVisual.tsx` generates bespoke abstract SVG compositions per
  project (not screenshots, since none were supplied). Swap in real product imagery via `next/image` when
  available.
- **Legal copy** — `/legal` is a placeholder notice, not a real privacy policy/terms.
