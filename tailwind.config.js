/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '2xl':" rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Images/hero4.png')",
  
      },
      colors:{
      'bt-color':'#002244'
      },
      minHeight: {
        "screen-85":"88.8vh"
      },
      container: {
        maxWidth: '800px !important',
      },

    },
  },
  plugins: [],
}

