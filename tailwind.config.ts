import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azlo: {
          bg: "#050B12",
          surface: "#0A131D",
          "surface-elevated": "#0E1A26",
          "surface-strong": "#122333",
          border: "rgba(160,192,208,0.18)",
          "border-strong": "rgba(160,211,232,0.42)",
          text: "#ECF4F7",
          secondary: "#A7B8C2",
          muted: "#8CA4AF",
          accent: "#72C7E8",
          "accent-soft": "#B9E7F5",
          success: "#7DD0A7",
          warning: "#D4B36E",
        },
      },
      fontFamily: {
        display: ["var(--font-hanken)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["SFMono-Regular", "Cascadia Code", "Roboto Mono", "Consolas", "monospace"],
      },
      maxWidth: { container: "78rem" },
      transitionDuration: { 150: "150ms", 180: "180ms", 220: "220ms", 300: "300ms" },
    },
  },
  plugins: [],
};

export default config;
