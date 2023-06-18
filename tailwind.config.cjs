const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl:'24px',
      '2xl': '36px',
      '2xl-mob': '30px',
      'xl-mob': '20px',
      'lg': '18px',
    },
    extend: {
      backgroundImage: {
        'texture': "url('/images/texture.png')",
      },
      spacing: {
        '8px': '8px',
        '16px': '16px',
      },
      colors: {
        'background': '#FEFFED',
        'cta': '#EE3900',
        'text': '#070034',
      },
      fontFamily: {
        'satoshi': ['Satoshi'],
      },
    },
  },
  plugins: [],
}
