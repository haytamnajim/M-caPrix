/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#04070D',
        surface: '#0B111D',
        card: '#0F172A',
        primary: '#3B82F6',
        accent: '#22D3EE',
        textMain: '#F1F5F9',
        muted: '#94A3B8',
        success: '#10B981',
        brandBlue: '#2563EB',
        brandCyan: '#06B6D4',
      },
      spacing: {
        'margin': '1.5rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow': 'glow 8s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "h1": ["Inter", "sans-serif"],
        "h2": ["Inter", "sans-serif"],
        "h3": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        'blue-glow': '0 0 30px rgba(59, 130, 246, 0.3)',
      }
    },
  },
  plugins: [],
}
