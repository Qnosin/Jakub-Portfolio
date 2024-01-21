/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    colors: {
      bgcolor: "#E5E7E9",
      secondary: "#576061",
    },
    fontFamily: {
      special: ["Jacques Francois Shadow", "serif"],
      regular: ["Anonymous Pro", "monospace"],
    },
    animation: {
      fade: "fadeIn 2s linear ",
    },
  },
  plugins: [],
};
