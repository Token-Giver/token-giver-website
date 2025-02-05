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
      },
      backgroundImage: {
        heroBg: "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
