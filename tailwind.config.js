/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#782DF3",
        "dark-purple":"#0F061D",
        "light-gray": "#f0f0f0",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
}