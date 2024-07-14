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
          light: '#0b2d5f', 
          dark: '#0a224d',
        },
        secondary: {
          light: '#e6e6e6', 
          dark: '#b3b3b3',
        },
        accent: '#ffcc00',
        text: {
          light: '#ffffff',
          dark: '#d1d5db', 
        },
        muted: {
          foreground: '#6c757d',
        },
        card: {
          light: '#ffffff',
          dark: '#d1d5db',
        },
      },
      backgroundColor: {
        'gradient-light': 'bg-gradient-to-r from-[#0b2d5f] to-[#0b2d5f]',
        'gradientdark': 'bg-gradient-to-r from-[#1F2937] to-[#1D2735]',
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark']
    },
  },
  keyframes: {
    "accordion-down": {
      from: { height: 0 },
      to: { height: 'auto' }
    },
    "accordion-up": {
      from: { height: 'auto' },
      to: { height: 0 }
    }
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out"
  },
  //plugins: [require('tailwindcss-animate')],
}

