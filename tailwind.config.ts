import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'IBM': ['IBM', 'IBM Plex Sans Arabic', 'sans-serif'],
        'ibm-plex-arabic': ['IBM Plex Sans Arabic', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
