/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmserif: ['"DM Serif Text"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        polysans: ["PolySans Bulky", "sans-serif"],
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },

      animation: {
        marquee: 'marquee 20s linear infinite',
        'marquee-left': 'marquee-left 12s linear infinite',
      },
      backgroundImage: {
        'building-banner': "url('/images/building-banner.png')",
      },
    },
  },
  plugins: [],
}
