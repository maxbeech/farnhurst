/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      colors: {
        primary: {
          DEFAULT: '#009fdb',
          50: '#e6f7ff',
          100: '#ccefff',
          200: '#99dfff',
          300: '#66cfff',
          400: '#33b7ff',
          500: '#009fdb',
          600: '#007fb0',
          700: '#005f85',
          800: '#003f5a',
          900: '#001f2d',
        },
        secondary: {
          DEFAULT: '#8c0053',
          50: '#ffe6f2',
          100: '#ffcce6',
          200: '#ff99cc',
          300: '#ff66b3',
          400: '#ff3399',
          500: '#8c0053',
          600: '#700042',
          700: '#540032',
          800: '#380021',
          900: '#1c0011',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
} 