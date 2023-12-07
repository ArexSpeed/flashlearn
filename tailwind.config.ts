import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        primaryGray: "#999999",
        darkGray: "#555555",
        lightGray: "#DDDDDD",
        primaryBlue: "#17ABDB",
        darkBlue: "#0072AF",
        primaryLight: "#FFFFFF",
        secondaryLight: "#F3F3F3",
        primaryDark: "#1A263E",
        secondaryDark: "#000000",
        lightGreen: "#CFF630",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
