
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#2C2420',
        },
        beige: {
          300: '#D4C5B0',
          400: '#B8A48E',
        },
        cream: {
          100: '#F5F0EB',
        },
        offwhite: '#FAF8F5',
        dark: '#1A1A1A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
