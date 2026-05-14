/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        gsef: {
          navy: '#0B162C',
          navyDeep: '#070d18',
          teal: '#00A67E',
          tealBright: '#00A99D',
          orange: '#F9A825',
          purple: '#6A1B9A',
          magenta: '#C2186D',
          green: '#13B47E',
          blue: '#0077B6',
          cyan: '#00B4D8',
        },
      },
    },
  },
  plugins: [],
}
