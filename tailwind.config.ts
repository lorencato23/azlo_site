import type { Config } from "tailwindcss";

/**
 * Paleta e sistema tipográfico fiéis ao AZLO Brand Book v4.
 * Cores: Deep Navy, Zenith Blue, Arc Teal, Vital Cyan, Ice White, Graphite.
 * Regra 70/20/10 — navy/neutros dominam, ciano é sinal, não preenchimento.
 * Tipografia v4: Fraunces (display) + Hanken Grotesk (corpo).
 */
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
          navy: "#052B57", // Deep Navy — primária, autoridade, seções escuras
          "navy-deep": "#04203F", // derivada — rodapé e gradientes profundos
          blue: "#0A5E9C", // Zenith Blue — suporte, estrutura, navegação
          teal: "#00AFCB", // Arc Teal — acento/CTA/progresso (Health)
          cyan: "#35D3E6", // Vital Cyan — microinterações, brilho, estados ativos (Labs)
          "teal-ink": "#056072", // derivada — texto de acento sobre fundo claro (contraste AA)
          ice: "#F2FAFC", // Ice White — fundo geral e cards
          "ice-deep": "#E4F0F5", // derivada — hover/superfícies alternadas
          graphite: "#111827", // texto principal em contexto editorial
          slate: "#46586B", // derivada — texto secundário sobre claro
          muted: "#7C8CA0", // derivada — labels/metadados (só texto grande)
          line: "#D8E6ED", // derivada — bordas e separadores sobre claro
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.9rem, 7.5vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "display-xl": ["clamp(2.4rem, 5.5vw, 4.25rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.875rem, 4vw, 3rem)", { lineHeight: "1.06", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      maxWidth: {
        container: "72rem",
      },
      keyframes: {
        "orbit-pulse": {
          "0%, 100%": { opacity: "0.9", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.94)" },
        },
        "sheen": {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(320%)" },
        },
        "rise": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "orbit-pulse": "orbit-pulse 4.5s ease-in-out infinite",
        sheen: "sheen 7s linear infinite",
        rise: "rise 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
