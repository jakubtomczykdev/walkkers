
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
    
      colors: {
        primary: '#2D77FFEB', 
      },
     
      fontFamily: {
      
        'quicksand-bold': ['Quicksand-Bold'],
        'quicksand-regular': ['Quicksand-Regular'],
      },
    },
  },
  plugins: [],
}