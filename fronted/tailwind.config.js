/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          light: '#0b2d5f',  // Usado para el modo claro
          DEFAULT: '#0b2d5f', // Por defecto
          dark: '#0a224d', // Usado para el modo oscuro
        },
        secondary: {
          light: '#e6e6e6',  // Usado para el modo claro
          DEFAULT: '#cccccc', // Por defecto
          dark: '#b3b3b3', // Usado para el modo oscuro
        },
        accent: '#ffcc00',
        text: {
          light: '#ffffff', // Usado para el modo claro
          dark: '#d1d5db', // Usado para el modo oscuro
        },
        muted: {
          foreground: '#6c757d',
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#1f2937',
        },
      },
    },
    keyframes: {
      "accordion-down":{
         from: { height: 0},
         to: { height: 'auto'}
      },
      "accordion-up":{
         from: { height: 'auto'},
         to: { height: 0}
      }
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out"
    },
    //plugins: [require('tailwindcss-animate')],
  }
}

