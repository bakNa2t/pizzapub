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
      boxShadow: {
        custom_shadow_6: "0 0 6px 0 rgba(192, 132, 252, .8)",
      },
      dropShadow: {
        xs_purple_600: "0 0 2px #9333ea",
        xs_slate_700: "0 0 2px #334155",
      },
    },
  },
  plugins: [],
};
