/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF525D",
        primaryLigth: "#FF7A85",
        secondary: "#1F3F5B",
        footer: "#C8C8CB",
        body: "#4B5862",
        footerBg: "#25252D",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "cursive"],
        overpass: ["Overpass", "cursive"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to bottom, hsl(13deg 100% 72% / 90%), hsl(353deg 100% 62% /90%)), url(/images/bg-pattern-intro-mobile.svg)",
        "btn-gradient":
          "linear-gradient(to right, hsl(13deg 100% 72% / 90%), hsl(353deg 100% 62% /90%))",
      },
    },
  },
  plugins: [],
};
