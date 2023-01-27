/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        layeredPeaks: 'url("./src/assets/background.svg")',
      },
    },
  },
  plugins: [],
};
