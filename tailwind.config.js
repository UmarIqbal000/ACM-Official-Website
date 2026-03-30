/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#FFFFFF',
        'light-secondary': '#F8FAFC',
        'blue-accent': '#2563EB',
        'sky-accent': '#0EA5E9',
        'neon-blue': '#2563EB',
        'neon-sky': '#0EA5E9',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'grid-move': 'gridMove 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(37,99,235,0.3), 0 0 10px rgba(37,99,235,0.3), 0 0 15px rgba(37,99,235,0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(37,99,235,0.5), 0 0 20px rgba(37,99,235,0.5), 0 0 30px rgba(37,99,235,0.5)' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.05)',
        'neon': '0 0 20px rgba(37, 99, 235, 0.15)',
        'neon-purple': '0 0 20px rgba(14, 165, 233, 0.15)',
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}
