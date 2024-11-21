/** @type {import('tailwindcss').Config} */
/* global module */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plex: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
