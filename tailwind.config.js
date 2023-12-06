const { scopedPreflightStyles } = require("tailwindcss-scoped-preflight");

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  maxWidth: {
    conatiner: "1440px",
    contentContainer: "1140px",
    containerSmall: "1140px",
    containers: "1140px",
  },

  extend: {
    rotate: {
      "135": "-135deg",
    },
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },

    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      bodyFont: ["Montserrat", "sans-serif"],
      titleFont: ["Inter", "sans-serif"],
      heading: ["Share Tech Mono", "monospace"],
    },

    colors: {
      bodyColor: "#0A192F",
      LightNavy: "#112240",
      LightestNavy: "#233554",
      Slate: "#8892b0",
      LightSlate: "#a8b2d1",
      LightestSlate: "#ccd6f6",
      White: "#e6f1ff",
      Green: "#64ffda",
    },
    boxShadow: {
      navbarShadow: " 0 10px 30px -10px rgba(2,12,27,0.7)  ",
    },
  },
};
export const plugins = [
  scopedPreflightStyles({
    cssSelector: ".notw", // or .notailwind or even [data-tailwind=false] - any valid CSS selector of your choice
    mode: "except matched",
  }),
];
