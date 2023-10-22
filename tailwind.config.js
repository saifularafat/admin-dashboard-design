/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      mytheme: {
        "primary": "#80f780",
        "secondary": "#ea6294",
        "accent": "#3717c4",
        "neutral": "#242028",
        "base-100": "#282b58",
        "info": "#57b6cb",
        "success": "#159374",
        "error": "#e43f25",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["acid", "dark"],
  },
}

