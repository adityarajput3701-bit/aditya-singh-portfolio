import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        graphite: "var(--color-graphite)",
        charcoal: "var(--color-charcoal)",
        navy: "var(--color-navy)",
        card: "var(--color-card)",
        border: "var(--color-border)",
        text: {
          DEFAULT: "var(--color-text)",
          dim: "var(--color-text-dim)",
          faint: "var(--color-text-faint)",
        },
        gold: {
          DEFAULT: "var(--color-gold)",
          soft: "var(--color-gold-soft)",
        },
        mint: "var(--color-mint)",
        electric: "var(--color-electric)",
        glow: "var(--color-glow)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "var(--max-w)",
      },
      backdropBlur: {
        glass: "20px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        bob: "bob 2.4s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
