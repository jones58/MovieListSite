/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {},
    },
    screens: {
      "hover-hover": { raw: "(hover: hover)" },
    },
    transitionDuration: {
      400: "400ms",
    },
  },
};
