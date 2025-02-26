/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "js/*.js"],
  theme: {
    extend: {
      keyframes: {
        "subir-rg": {
          "0%": { transform: "translate(-50%,0)" },
          "100%": { transform: "translate(-50%,-80%)" },
        },
        "subir-dinheiro": {
          "0%": { transform: "translate(-50%,0)" },
          "100%": { transform: "translate(-50%,-50%)" },
        },
      },
    },
    fontFamily: {
      avenir: ["Avenir", "sans-serif"],
      avenir_heavy: ["Avenir Heavy", "sans-serif"],
    },
  },
  plugins: [],
};
