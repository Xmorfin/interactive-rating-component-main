/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
