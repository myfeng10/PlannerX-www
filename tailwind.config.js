/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors:{
        'bg-primary': '#121826',
        'bg-primary-light': '#2a3048', 
        'bg-primary-dark': '#0d0f1b', 

       
        'bg-secondary': '#3a3b45',
        'bg-secondary-light': '#545761', 
        'bg-secondary-dark': '#292a33', 

    
        'text-primary': '#ffffff',
        'text-secondary': '#87CEEB',
        'text-secondary-light': '#FFEAC2', 
        'text-secondary-dark': '#D4A619', 
// gold:FFD700


       
        'accent-1': '#3b82f6', 
        'accent-2': '#34d399', 
        'accent-3': '#b794f4', 
        'accent-4': '#f97316', 
        'accent-5':'#FFD700',

        'bg-darkgrey':'#3a3b45',
        'bg-blue':'#4e80ee',
        'crimson-red': '#e63946',
        'crimson-red-dark': '#d62839',  
  
        'red-button': '#ff3434', 
        'red-button-light': '#ff5757', 
        'red-button-dark': '#d42626', 

        'yellow-button': '#ffc600', 
        'yellow-button-light': '#ffde34', 
        'yellow-button-dark': '#d4aa00',
        
        'orange-button': '#0074E4', 
        'orange-button-light': '#ffde34', 
        'orange-button-dark': '#d4aa00', 
      },
    },
  },
  plugins: [],
}

