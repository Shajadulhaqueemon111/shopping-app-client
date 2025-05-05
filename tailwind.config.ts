/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColour: "#0C55AA",
        lightBg: "#f4f7f9",
        themeWhite: "#ffffff",
        lightYellow: "#FFD43A",
        borderCollor: "#eaebed",
        skyColor: "#0989ff",
        lightText: "#55585b",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};

export default config;
