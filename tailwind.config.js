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
      letterSpacing : {
        megawide: '.3em'
      },
      backgroundImage: {
        'body-pattern': "url('../images/connections.svg')",
        'js': 'url("../images/js_logo.svg")',
        'html': 'url("../images/html.svg")',
        'css': 'url("../images/css.svg")',
        'react': 'url("../images/react.svg")',
        'tailwind': 'url("../images/tailwind.svg")',
        'figma': 'url("../images/figma.svg")',
        'webpack': 'url("../images/webpack.svg")',
      },
    },
  },
  plugins: [],
}
