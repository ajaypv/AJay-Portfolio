/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1DA1F2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

