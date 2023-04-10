/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768.02px",
      md: "1060px",
      lg: "1200px",
      xl: "1440px",
      xxl: "1700px"
    },
    fontFamily: {
      sans: "Mulish, Arial, sans-serif"
    },
    extend: {},
  },
  plugins: [],
}

