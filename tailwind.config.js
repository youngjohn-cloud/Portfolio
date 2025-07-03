/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#00CC00",
        greenAccent: "#00FF00",
        lightGray: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
