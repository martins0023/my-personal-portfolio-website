import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        google: {
          blue: "#1a73e8",
          "blue-hover": "#1557b0",
          "blue-light": "#e8f0fe",
          "blue-dark": "#8ab4f8",
          red: "#ea4335",
          yellow: "#fbbc04",
          green: "#34a853",
        },
      },
      fontFamily: {
        sans: [
          "Google Sans",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
        card: "0 1px 3px 0 rgba(60, 64, 67, 0.12), 0 4px 8px 3px rgba(60, 64, 67, 0.08)",
        "card-hover": "0 2px 6px 2px rgba(60, 64, 67, 0.15), 0 8px 16px 4px rgba(60, 64, 67, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
