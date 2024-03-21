/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#3056D3',
        secondary: '#13C296',
        'gray-dark': '#090e34',
        'gray-light': '#637381',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
