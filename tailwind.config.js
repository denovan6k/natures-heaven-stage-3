/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      

      'xl': {'min': '1600px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'min': '1024px'},
      // => @media (max-width: 1023px) { ... }

      // 'md': {'min': '767px'},
      // // => @media (max-width: 767px) { ... }
       
       
      'sm': {'min': '375px', 'max': '1023px'},
      
      // => @media (max-width: 639px) { ... }
      // 'xs': {'min': '375px'},
      // // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

