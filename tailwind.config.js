/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        assistant: ['Assistant', 'sans-serif'],
        heebo:     ['Heebo',     'sans-serif'],
      },
      colors: {
        space: {
          950: '#03000a',
          900: '#06000f',
          800: '#0a0018',
        },
      },
      letterSpacing: {
        'hero':    '-0.03em',
        'display': '-0.02em',
      },
      lineHeight: {
        'hero': '1.06',
      },
      animation: {
        'wa-ping': 'waPing 3s ease-in-out infinite',
        'float':   'float 8s ease-in-out infinite',
      },
      keyframes: {
        waPing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.35)' },
          '50%':       { boxShadow: '0 0 0 10px rgba(37,211,102,0)'  },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'   },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
