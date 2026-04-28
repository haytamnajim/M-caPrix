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
        background: '#0B0F1A',
        card: '#111827',
        primary: '#3B82F6',
        accent: '#22D3EE',
        textMain: '#E5E7EB',
        muted: '#9CA3AF',
        success: '#10B981',
        
        // Retaining old colors as fallbacks strictly just in case
        "surface-container": "#1d2024",
        "primary-container": "#185fa5",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      fontFamily: {
        "button": ["Inter", "sans-serif"],
        "h2": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "h1": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "h3": ["Inter", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        "inter": ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}
