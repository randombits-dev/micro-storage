const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,astro,html}"
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      'xl': '5000px',
      '2xl': '5000px'
    },
    extend: {
      borderColor: {
        DEFAULT: 'rgb(38, 38, 38)',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
