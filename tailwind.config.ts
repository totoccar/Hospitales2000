import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: "#025951",
        secundario: "#012623",
        fondo: "#F2F2F2",
        acentos: "#04D99D",
      },
    },
  },
  plugins: [],
};
export default config;
