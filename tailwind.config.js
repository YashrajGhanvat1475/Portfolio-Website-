/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  important: true,
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        main: 'var(--color-main)',
        secondary: 'var(--color-secondary)',
      }
    }
  },
  plugins: [],
} 