# Nexushouse

The Nexushouse marketing site — a Next.js 16 (App Router) + TypeScript + Tailwind + Framer Motion build.

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
- **Content data** — `src/lib/data/` (`projects.ts`, `services.ts`, `process.ts`). Nothing in here fabricates
  metrics, testimonials, awards or team members, per the brief.
- **Sections** — one component per homepage section in `src/components/` (`Hero`, `Intro`, `Work`,
  `Services`, `Studio`, `Process`, `Contact`), composed in `src/app/page.tsx`.

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
