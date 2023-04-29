/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      persian: "#320d6dff",
      rose: "#e365c1ff",
      ghost: "#f7f7ffff",
      smoky: "#070600ff",
      caribbean: "#0f7173ff",
      oxford: "#191d32ff",
      cyclamen: "#f2699dff",
      lightpink: "#ffccff",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        name: ["Indie Flower", "curisve"],
      },
    },
  },
  plugins: [require("daisyui")],
};
