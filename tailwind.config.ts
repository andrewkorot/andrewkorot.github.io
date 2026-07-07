import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#f6f1e7",
          soft: "#efe7d6",
          card: "#fbf6ec",
        },
        ink: {
          DEFAULT: "#1a1814",
          mute: "#5e564b",
          dim: "#8a7e6e",
        },
        accent: {
          cyan: "#c2410c",
          violet: "#9a3412",
          mint: "#6b7a4c",
        },
        border: {
          DEFAULT: "rgba(26, 24, 20, 0.12)",
          strong: "rgba(26, 24, 20, 0.22)",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top left, rgba(194,65,12,0.10), transparent 55%), radial-gradient(ellipse at bottom right, rgba(154,52,18,0.08), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
