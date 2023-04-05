/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'siyuan': ['Source Han Serif CN Heavy', 'sans-serif'],
        'roman': ['Roman', 'sans-serif']
      },
    },
  },
  plugins: [],
}
