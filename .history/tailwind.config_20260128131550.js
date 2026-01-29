/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line tells Tailwind to look at your JSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a4332',
        secondary: '#94a84a',
        darkgreen: '#0f291e',
      }
    },
  },
  plugins: [],
}