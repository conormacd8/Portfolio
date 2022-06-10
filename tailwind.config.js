/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.{html,js}"'],
  theme: {
    extend: {
      colors: {
        primary: '#05386B',
        secondary: {
          100: '#32E6FF',
          200: '#3AFF36',
          300: '#053566',
        }
      },
      fontFamily : {
        body: ['Montserrat','sans-serif']
      },
    },
  },
  plugins: [],
}
