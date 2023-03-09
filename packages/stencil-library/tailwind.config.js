/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx,html,js,jsx}',
  
 ],
 theme: {
  extend: {
    colors : {
      'geekblue':{
        100:'#f0f5ff',
        600:'#2f54eb'
        
      }
    },
    boxShadow:{
      'base':'0px 2px 8px rgb(0 0 0 / 0.15)'
    }
  },
},
  plugins: [],
};
