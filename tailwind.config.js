/** @type {import('tailwindcss').Config} */
import { theme } from "./src/config.js";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FBF8EB', // Very light gold
          100: '#F4EFCB', // Light gold
          500: theme.colors.primary,
          600: theme.colors.primary,
          700: '#B69324', // Darker gold for contrast/hover
          DEFAULT: theme.colors.primary,
        },
        secondary: {
          50: theme.colors.accent,
          100: theme.colors.accent,
          200: theme.colors.accent,
          DEFAULT: theme.colors.secondary,
        },
        accent: {
          500: theme.colors.primary, // mapping accent to primary/gold for now
          600: theme.colors.primary,
        },
        dark: {
          800: theme.colors.secondary,
          900: theme.colors.secondary, // mapping dark to secondary/black
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

