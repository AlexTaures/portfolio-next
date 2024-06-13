import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      menuIcons: '1.5em',
      menuText: '1em'
    },
    extend: {
      colors: {
        'orange-enphasis': '#e5421f',
        'gray-enphasis': '#656565'
      },
    screens: {
      'xxs': '250px'
    }
    }
  },
  plugins: [],
};
export default config;
