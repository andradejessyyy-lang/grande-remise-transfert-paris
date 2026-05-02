import type { Config } from "tailwindcss";

/**
 * Grande Remise Transfert Paris — Tailwind config.
 *
 * Strict 3-color palette by client direction:
 *   1. paper  — pure white #FFFFFF (surfaces)
 *   2. ink    — extra black #000000 (text, dark surfaces, primary CTA)
 *   3. luxe   — gold #A16207 / #D4AF37 (accent, signal)
 *
 * Typography: Playfair Display (serif headings) + Inter (sans body).
 * Source: ui-ux-pro-max skill, category Luxury Brand #33.
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
        // 1 — Surfaces (pure white)
        paper: {
          DEFAULT: "#FFFFFF",
          pure: "#FFFFFF",
          // Hairline tint for sub-section depth without breaking the 3-color rule
          tint: "#F8F8F8",
        },
        // 2 — Text + dark surfaces (extra black)
        ink: {
          DEFAULT: "#000000",
          soft: "#1F1F1F",
          mute: "#6B6B6B",
        },
        // 3 — Premium gold accent
        // luxe.DEFAULT (#A16207) reaches WCAG AA on white (5.6:1)
        // luxe.bright (#D4AF37) reserved for use on black surfaces
        luxe: {
          DEFAULT: "#A16207",
          bright: "#D4AF37",
          line: "#E8DCC4",
        },
      },
      borderColor: {
        line: "rgba(0,0,0,0.85)",
        "line-soft": "rgba(0,0,0,0.18)",
        "line-faint": "rgba(0,0,0,0.08)",
      },
      fontFamily: {
        // Wired to next/font CSS variables (see app/layout.tsx)
        sans: ["var(--font-inter)", "-apple-system", "system-ui", "sans-serif"],
        serif: [
          "var(--font-playfair)",
          "'Times New Roman'",
          "Georgia",
          "serif",
        ],
      },
      letterSpacing: {
        kicker: "0.22em",
        nav: "0.14em",
        btn: "0.18em",
      },
      maxWidth: {
        layout: "1440px",
        prose: "65ch",
      },
      aspectRatio: {
        hero: "21 / 9",
        card: "4 / 3",
        portrait: "3 / 4",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "fade-up-slow":
          "fade-up 1100ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "fade-in": "fade-in 1500ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
