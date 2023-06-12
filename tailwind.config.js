/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeleft:{
          '0%': {
              opacity: '0.75',
              transform: 'rotate(45deg) translate(-20px, -20px)'
          },
          '50%': {
              opacity: '0.5'
          },
          '100%': {
              opacity: '0',
              transform: 'rotate(45deg) translate(20px, 20px)'
          }
      },
        faderight:{
          '0%': {
              opacity: '0.75',
              transform: 'rotate(45deg) translate(20px, 20px)'
          },
          '50%': {
              opacity: '0.5',
          },
          '100%': {
              opacity: '0',
              transform: 'rotate(45deg) translate(-20px, -20px)',
          }
      }
      },
      animation: {
        fadeleft: 'fadeleft 2s ease-in-out infinite',
        faderight: 'faderight 2s ease-in-out infinite',
      },
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
        'black': '#1D1D1B',
        'grey': '#757575'
      },
      boxShadow: {
        'boxShadow': 'inset 0px -5px rgba(0,0,0,0.2)',
        'ShadowBlack': 'inset 0px -5px rgba(0,0,0,0.8)',
        'ShadowGrey': 'inset 0px -3px rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
}

