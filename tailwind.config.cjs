const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      spacing: {
        '8px': '8px',
        '16px': '16px',
      },
      colors: {
        'background': '#FEFFED',
        'cta': '#79A671',
        'p': '#303D21',
      },
      fontFamily: {
        'sans': ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
