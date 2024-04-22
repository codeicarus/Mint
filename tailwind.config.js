// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      '2xl': {'min': '1610px', 'max': '1920px'},
      'xl': {'min': '1200px', 'max': '1609px'},
      'lg': {'min': '860px', 'max': '1199px'},
      'md': {'max': '859px'},
    },
    extend: {

    },
  },
  plugins: [],
}

