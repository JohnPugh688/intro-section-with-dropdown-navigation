/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Epilogue: ["Epilogue", "sans-serif"],
    },
    extend: {
      colors: {
        AlmostWhite: " hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
