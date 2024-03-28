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
        "white-primary": "#E5E5E5",
        "white-0": "#FFFFFF",
        "white-05": "#FCFCFC",
        "white-2": "#F5F5F5",
        "white-3": "#EFEFEF",

        "blue-primary": "#14213D",
        "blue-85": "#060A12",
        "blue-8": "#080D18",

        "yellow-primary": "#FCA311",
      },
      fontFamily: {
        'sans': ['Mozaic GEO'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'patternimg': "url('../public/pessoas-que-participam-de-um-evento-de-alto-protocolo.webp')",       
        'patternmen': "url('../public/man-sunglasses-hat-drinking-cocktail-sitting-near-pool-1.webp')"
      },
    },
  },
  plugins: [],
};
export default config;
