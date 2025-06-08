import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-source-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config; 