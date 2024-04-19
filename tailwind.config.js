// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      '2xl': {'min': '1610px', 'max': '1920px'},
      'xl': {'min': '1024px', 'max': '1609px'},
      'lg': {'min': '768px', 'max': '1023px'},
      'md': {'max': '767px'},
    },
    extend: {

    },
  },
  plugins: [],
}

