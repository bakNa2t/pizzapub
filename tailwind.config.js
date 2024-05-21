/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: "Ubuntu, sans-serif",
      encode: "Encode Sans Expanded, sans-serif",
    },
    extend: {
      height: {
        screen_dyn: "100dvh",
      },
    },
  },
  plugins: [],
};
