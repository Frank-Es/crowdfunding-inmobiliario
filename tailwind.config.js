/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      },
      colors: {
        almaBlue: {
          DEFAULT: '#ebf4ff', // azul muy claro
          dark: '#1e3a8a',    // azul profundo
          gold: '#fbbf24',    // azul botón
        },
       },
     fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

