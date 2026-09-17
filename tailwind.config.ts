import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic tokens backed by CSS variables so every existing bg-ink /
        // text-bone / bg-signal usage automatically re-themes — see the
        // `:root` / `[data-theme="light"]` blocks in globals.css. Names are
        // legacy (ink/bone from the dark-first design) but now mean
        // "page background" / "page foreground" / "accent" in either theme.
        ink: {
          DEFAULT: "rgb(var(--color-bg) / <alpha-value>)",
          soft: "rgb(var(--color-bg-soft) / <alpha-value>)",
        },
        bone: {
          DEFAULT: "rgb(var(--color-fg) / <alpha-value>)",
        },
        signal: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          dim: "rgb(var(--color-accent-dim) / <alpha-value>)",
        },
        line: "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        script: ["var(--font-script)", "serif"],
      },
      fontSize: {
        "fluid-hero": "clamp(3rem, 9vw, 10rem)",
        "fluid-xl": "clamp(2.25rem, 5.5vw, 5.5rem)",
        "fluid-lg": "clamp(1.75rem, 3.4vw, 3.25rem)",
        "fluid-md": "clamp(1.25rem, 1.8vw, 1.75rem)",
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
        wide: "0.14em",
        widest: "0.24em",
      },
      transitionTimingFunction: {
        nexus: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        content: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
