/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "3xs": "320px",
      "2.5xs": "360px",
      "2xs": "375px",
      "1xs": "390px",
      xs: "412px",
      lsm: "600px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1360px",
      "3xl": "1440px",
      "4xl": "1510px",
      "5xl": "1680px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "5xl": "5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
