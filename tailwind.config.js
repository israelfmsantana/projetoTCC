/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(23, 26, 70)',
        'custom-blueMenu': 'rgb(0, 3, 39)',
      },
    },
  },
  plugins: [],
}

