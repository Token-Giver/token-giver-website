import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      AgrandirBold: ["AgrandirBold", "sans-serif"],
      AgrandirRegular: ["AgrandirRegular", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#00594C",
        ash: "#8E9BAE",
        jade: "#34AA6D",
        "raisin-black": "#282828",
        jonquil: "#FED12E",
        "dark-grey": "#55534E",
        "foreground-secondary": "#8E9BAE",
        "foreground-primary": "#282828",
      },
      backgroundImage: {
        heroBg: "url('/hero-bg.png')",
      },
      boxShadow: {
        "primary-black": "0px 0px 20px 0px rgba(18, 18, 18, 0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
