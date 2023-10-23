/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        theme: {

        },
      },
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar')],
  daisyui: {
    themes: [{
      customLightTheme: {
        colors: '#0b0504',
        background: '#f0f0f0',
        primary: '#4098a0',
        secondary: '#27272a',
        accent: '#477361',
        sideColor: '#f0f0f0',
        flag1: '#006a4e',
        flag2: '#f42a41',
      },
      customDarkTheme: {
        colors: '#ffffff',
        background: '#0b0504',
        primary: '#4098a0',
        secondary: '#27272a',
        accent: '#92d3b8',
        flag1: '#006a4e',
        flag2: '#f42a41',
        sideColor: '#477361',
      },
    }]
  },
}
