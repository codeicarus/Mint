/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      '2xl': {'min': '1610px', 'max': '1920px'},
      'xl': {'min': '1024px', 'max': '1609px'},
      'lg': {'min': '768px', 'max': '1023px'},
      'md': {'min': '360px', 'max': '767px'},
      'sm': {'max':'359px'}
    },
    extend: {

    },
  },
  plugins: [],
}

