/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#006B3F',
          light: '#007A47',
          pale: '#e8f4ee',
        },
        gold: {
          DEFAULT: '#C9A84C',
          pale: '#fdf6e3',
          dark: '#8a6c1a',
        },
        navy: {
          DEFAULT: '#1A1A2E',
          mid: '#252540',
          light: '#eeeef6',
        },
        teal: {
          DEFAULT: '#17A589',
          light: '#20B2AA',
          dark: '#0E6454',
        },
        orange: {
          DEFAULT: '#F97316',
          light: '#FFA07A',
        },
        purple: {
          DEFAULT: '#8B5CF6',
          dark: '#6D28D9',
          light: '#C7B8EA',
        },
        blue: {
          DEFAULT: '#3B82F6',
          light: '#87CEEB',
        },
        red: {
          DEFAULT: '#C0392B',
          light: '#FFC0CB',
        },
        offwhite: '#F8F7F4',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
