/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        galactic: {
          background: '#121212',
          primary: '#6200EA',
          secondary: '#03DAC6',
          accent: '#BB86FC',
          text: '#E0E0E0',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('autoprefixer'),
    require('@tailwindcss/forms')
  ],
}