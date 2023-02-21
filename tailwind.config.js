/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '~2/5': '17.45%',
        '~3/5': '82.55%'
      },
    },
  },
  plugins: [],
}
