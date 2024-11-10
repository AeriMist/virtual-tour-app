/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sour-gummy": ['"Sour Gummy"', "sans-serif"], // Add the custom font here
      },
    },
  },
  plugins: [],
};
