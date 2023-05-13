/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'newFont': 'newFont'
      },
      
      backgroundImage: {
        'navBackground': "url('/src/images/layer.png')"
      }
    },
  },
  plugins: [],
}

