/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Jakarta':['Plus Jakarta Sans']
      },
      screens:{
        'lg':'1156px',
        'sd':'830px'
      }
    },
  },
  plugins: [],
}

