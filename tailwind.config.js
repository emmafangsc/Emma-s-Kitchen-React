/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Aroly': 'Aroly',
        'OrkneyBold': 'OrkneyBold',
        'OrkneyRegular': 'OrkneyRegular',
        'OrkneyLight': 'OrkneyLight',
        'Thinoo': 'Thinoo'
      },
      
      backgroundImage: {
        'navBackground': "url('/src/images/layer.png')",
        'footerBackground': "url('/src/images/footer.png')",
      },

      colors: {
        'yellow': '#FFDF12',
        'black': '#1D1D1B'
      },
      boxShadow: {
        'boxShadow': 'inset 0px -5px rgba(0,0,0,0.2)',
        'boxShadowBlack': 'inset 0px -5px rgba(0,0,0,1.2)',
      }
    },
  },
  plugins: [],
}

