import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0b",
          soft: "#131315",
        },
        bone: {
          DEFAULT: "#f4f1ea",
          dim: "#e8e3d8",
        },
        signal: {
          DEFAULT: "#d6ff3f",
          dim: "#a8c930",
        },
        line: "rgba(244,241,234,0.14)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
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
