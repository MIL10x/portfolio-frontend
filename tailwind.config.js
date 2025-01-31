/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        offer: {
          // '0%, 100%': { transform: 'translatey(0%)' },
          '50%':{transform:'scale(1,2)'},
          // '25%': { transform: 'translatey(-20%)' },
        },
       
      },
      animation: {
        offer: 'offer 1s ease-in-out infinite',
 
      },
      fontSize:{
        'animatel':'10rem',
      },
      fontFamily:{
        Gotham:['Gotham','sanf-serif'],
        Freedom:['Freedom','sanf-serif'],
        popins:['Poppins','sanf-serif'],
        doto:['Doto', 'serif'],
        Squada:['Squada One', 'serif'],
        Orbitron:['Orbitron', 'serif'],
        Abril:['Abril Fatface', 'serif'],
        Libre_Caslon:['Libre Caslon Text', 'serif'],

      },
      dropShadow: {
        '3xl': '0px 5px 15px rgba(0, 0, 0, 0.35)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      boxShadow: {
        100: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD',
        200: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF',
        300: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD',
        400: 'inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)',
        500: '0px 16px 24px rgba(0, 0, 0, 0.25), 0px -1px 20px rgba(255, 255, 255,0.80)',
        600: '0px 16px 24px rgba(255, 255, 255, 0.1), 0px -8px 30px rgba(255, 255, 255, 0.1)',
        700: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #ffffff',
        800: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 16px 24px rgba(0, 0, 0, 0.05), inset 0px 1px 4px #ffffff',
      },
    },
  },
  plugins: [],
}

