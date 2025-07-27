/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif'],
      },
      colors: {
        primary: 'rgb(0 54 255)',
        secondary: '#64748b',
        accent: '#f59e42',
      },
    },
  },
  plugins: [],
}

