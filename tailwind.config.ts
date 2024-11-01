import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typographyPlugin from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
      },
    },
  },
  plugins: [typographyPlugin],
};

export default config;
