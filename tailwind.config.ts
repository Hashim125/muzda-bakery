import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfbf7",
          100: "#faf6ef",
          200: "#f5ede0",
          300: "#ede0ca",
          400: "#e3ccab",
          500: "#d9b88c",
        },
        pistachio: {
          50: "#f4f8f4",
          100: "#e8f1e8",
          200: "#c8ddc8",
          300: "#a8c9a8",
          400: "#88b588",
          500: "#6a9d6a",
        },
        saffron: {
          50: "#fef9ed",
          100: "#fdf2d6",
          200: "#fbe5ad",
          300: "#f8d075",
          400: "#f5b83d",
          500: "#f2a005",
        },
        brown: {
          50: "#f8f5f2",
          100: "#f0e9e2",
          200: "#dfd1c1",
          300: "#c9af94",
          400: "#b38d68",
          500: "#8b6f4e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-playfair)"],
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
      },
      borderRadius: {
        card: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
