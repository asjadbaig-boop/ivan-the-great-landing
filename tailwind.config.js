/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DC2626',
        'primary-dark': '#b91c1c',
        dark: '#0a0a0a',
        card: '#111111',
        border: '#1f1f1f',
        muted: '#A0A0A0',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', '"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
