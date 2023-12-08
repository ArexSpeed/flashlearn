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
      backgroundImage: {
        headerBg: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        headerBgDark: "linear-gradient(to right, #133b5f 0%, #03393b 100%);",
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
  plugins: [require("@headlessui/tailwindcss"), require("tailwind-scrollbar")],
};
export default config;
