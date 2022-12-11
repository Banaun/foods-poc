/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hiqpink: {
          100: '#F185B2',
          500: '#FF0096',
        },
        hiqgrey: {
          500: '#F0F0F0',
        },
        hiqblack: {
          500: '#333333',
        },
        pink: {
          500: '#FF0096',
          800: '#FF0096',
        },
        gray: {
          500: '#ffffff',
          800: '#fafafa',
          900: '#fafafa',
        },
      },
    },
  },
  plugins: [],
});
