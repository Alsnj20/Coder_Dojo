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
          opt: '#2c2c2c',
        },
        secondary: {
          light: '#e6e6e6',
          dark: '#b3b3b3',
        },
        accent: '#ffcc00',
        text: {
          light: '#ffffff',
          dark: '#000000',
          optional: '#0b2d5f',
        },
        muted: {
          foreground: '#6c757d',
        },
        card: {
          light: '#ffffff',
          dark: '#d1d5db',
        },
        menu: {
          light: '#d9d9d9',
          dark: '#455064'
        }
      },
      backgroundImage: {
        'bgHome': 'linear-gradient(to bottom, #7fd7fd, #8cdcfc, #98e0fa, #a5e5fa, #b1e9f9, #beecfc, #caeffe, #d6f2ff, #e4f4ff, #f0f7ff, #f9faff, #ffffff)'
      },
      animation:{
        'move-cloud': 'moveCloud 20s linear infinite',
        'open-menu': 'openMenu 0.5s ease-in-out'
      },
      keyframes: {
        moveCloud: {
          '0%': { transform: 'translateX(-2%)' },
          '100%': { transform: 'translateX(60%)' },
        },
        openMenu: {
          '0%': { marginRight: '-10%' },
          '100%': { marginRight: '0' },
        }
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

