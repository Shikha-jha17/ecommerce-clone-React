/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c36",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee"


      },
      boxShadow: {
        eshopInput: "0 0 3px 2px rgb(244,44,55 / 70%)",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: "3rem"
          
        }
      }
    },
  },
  plugins: [],
}
