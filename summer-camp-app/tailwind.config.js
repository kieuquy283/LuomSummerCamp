/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0f172a',
        'brand-deep': '#1e3a8a',
        'brand-electric': '#3b82f6',
        'brand-cyan': '#06b6d4',
        'brand-yellow': '#fbbf24',
        'brand-yellow-hover': '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
