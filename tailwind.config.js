/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        white:"#fff",
        black:"#202020",
        gray:"#979797",
        primary:"#0c7ce6"
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',  
        'sm': '0.875rem', 
        'base': '1rem',    
        'lg': '1.125rem', 
        'xl': '1.25rem', 
        '2xl': '1.5rem', 
        '3xl': '1.875rem', 
      },
      fontWeight: {
        'bold': 900,
      },
    },
  },
  plugins: [],
}
