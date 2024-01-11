/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      bgcolor: "#E5E7E9",
      secondary: "#576061",
    },
    fontFamily: {
      special: ["Jacques Francois Shadow", "serif"],
      regular: ["Anonymous Pro", "monospace"],
    },
  },
  plugins: [],
};
