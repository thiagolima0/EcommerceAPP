/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D5FEF",
        secondary: "#606060",
        accent: "#DFDFFE",
        positive: "#1BE874",
        negative: "#FF354D",
        warning: "#FFBC21",
        background: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
