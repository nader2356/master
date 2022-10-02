/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      indigo: {
        800: '#434190',
      },
      cyan:{
   50 :'#ecfeff',
   300:'#67e8f9',
   700:'#0e7490',
   600:'#0891b2'
      },
      green:{
        50 :'#f0fdf4',
        100 :'#dcfce7',
        200 :'#bbf7d0',
        300 :'#86efac',
        400 :'#4ade80',
        500:'#22c55e',
        600:'#16a34a',
        700:'#15803d',
        800:'#166534',
        900:'#14532d'
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      red: {
         500: '#ef4444',
         600: '#dc2626',
         700: '#b91c1c',
         800:'#991b1b'
      },
      'blue': '#1fb6ff',
      'black': '#000',
      'gray-dark': '#273444',
      // eslint-disable-next-line no-dupe-keys
      'gray': '#8492a6',
      'white': '#fff',
      'gray-light': '#d3dce6',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      boxShadow: {
        'lg': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    }
  },

  plugins: [],
}
