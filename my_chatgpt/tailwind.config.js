/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:"#202123",
        lightblack:"#343541",
      }
    },
  },
  plugins: [],
}
