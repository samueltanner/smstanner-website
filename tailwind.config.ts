import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lufga)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        tall: { raw: "(min-height: 800px)" },
        xtall: { raw: "(min-height: 1000px)" },
        "2xtall": { raw: "(min-height: 1200px)" },
        "3xtall": { raw: "(min-height: 1400px)" },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        variants: string[],
      ) => void;
    }) {
      /** @type {import('@types/tailwindcss').Utility} */
      const utilities = {
        ".fade-in-out": {
          transition: "all 200ms ease-in-out",
        },
      };
      addUtilities(utilities, ["responsive", "hover"]);
    }),
  ],
};
export default config;
