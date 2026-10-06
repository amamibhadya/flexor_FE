/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.{html,js,jsx,ts,tsx,vue}', 
  ],
  theme: {
    extend: {
      colors: {
  'custom-white1': '#DBDADA',
  'custom-white2': '#FFFFFF', 
  'custom-black1': '#020103', 
   'custom-black2': '#0C081C', 
  'custom-purple1': '#6843EC',
  'custom-purple2': '#160E32', 
  'custom-purple4': '#5027B8', 
  'custom-purple3': '#160F1C',
  'custom-blue1': '#2737CF',
  'custom-blue2': '#497BFF',
  'custom-blue3': '#BDFCFE',
  'custom-blueblack': '#2C2865',
  'custom-btn1': '#44379D',
  'custom-btn2': '#362D76',
  'custom-btn3': '#2F3C7A',
  'custom-btn4': '#344B93',

    
},

screens: {
  maxscreen: "1920px"
},

 backgroundImage: {
       'four-color-gradient': 'linear-gradient(45deg, #44379D, #362D76, #2F3C7A, #344B93)',

    },
 fontFamily: {
       inter: ['Inter', 'sans-serif'],
        darkgrotesque: ['Darker Grotesque', 'sans-serif'], 
         worksans: ['Work Sans', 'sans-serif'],
         dmsans: ['DM Sans', 'sans-serif'],
      },

    
    },
  },
  plugins: [],
}

