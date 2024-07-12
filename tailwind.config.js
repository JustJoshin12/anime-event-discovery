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
          darkGray: '#1E1E1E',
          lightGray: '#2C2C2C',
          deepElectricPurple: '#4A00C8',
          lightElectricPurple: '#7A33EA',
          softCyanGreen: '#66E8D4',
          deepCyanGreen: '#009688',
          softLavender: '#D8B6FC',
          deepLavender: '#8E24AA',
          complementaryYellow: '#FDD835',
          complementaryOrange: '#FF7043',
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