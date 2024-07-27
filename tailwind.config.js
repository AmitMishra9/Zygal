/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities, theme, e }) {
      const scrollbarHide = {
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        },
      }

      addUtilities(scrollbarHide, ['responsive'])
    },
  ],
}