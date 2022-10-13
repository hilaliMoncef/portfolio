/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",
        secondary: "#f57dff",
        muted: "#e6f1ff",
        primaryTint: "rgba(100, 255, 218, 0.3)",
      },
      fontFamily: {
        sans: ["Inconsolata", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
