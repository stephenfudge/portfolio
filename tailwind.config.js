/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        grey: "#121212",
        rose: "#e365c1ff",
        ghost: "#f7f7ffff",
        smoky: "#070600ff",
        caribbean: "#0f7173ff",
        lightpink: "#ffccff",
        deep: "#ff1493ff",
        violet: "#9400d3ff",
        purple: "#ba55d3ff",
        lightpurple: "#bf80ff",
        navy: "#00008bff",
      },

      fontFamily: {
        name: ["Indie Flower", "curisve"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
