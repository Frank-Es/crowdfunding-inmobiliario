/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // fuente moderna, clara y 
confiable
      },
      colors: {
        almaBlue: {
          DEFAULT: '#E5EDF5', // azul claro, suave y limpio
          dark: '#1E3A5F',    // azul oscuro, para texto
          gold: '#D6B060',    // dorado cálido para acentos
        },
      },
    },
  },
  plugins: [],
}

