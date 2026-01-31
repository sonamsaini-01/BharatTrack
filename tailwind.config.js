/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Deep Blue
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F59E0B', // Saffron Orange
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#059669', // Forest Green
          foreground: '#FFFFFF',
        },
        background: '#F3F4F6', // Light Gray
        text: '#374151', // Dark Gray
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
}
