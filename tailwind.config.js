/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#0D1117',
        'secondary': '#161B22',
        'accent-start': '#db2777',
        'accent-end': '#a21caf',
        'accent-start-hover': '#EC407A',
        'accent-end-hover': '#AB47BC',
        'text-primary': '#C9D1D9',
        'text-secondary': '#8B949E',
        'border-color': '#30363D',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-wipe': 'textWipe 0.5s ease-out 0.4s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        textWipe: {
          'from': { backgroundSize: '0% 100%' },
          'to': { backgroundSize: '100% 100%' },
        }
      }
    },
  },
  plugins: [],
}