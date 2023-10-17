/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*.{js,html}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "heading": [ 'Montserrat', "sans-serif"],
        "body" : ['Roboto', "sans-serif"],
        "mm" : ['Padauk', "sans-serif"]
      },
      colors:{
        "primary" : "#c1121f"
      }
    },
  },
  plugins: [],
}

