/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 4 column grid
        4: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
    },
    colors: {
      "Lime-Green": "hsl(163, 72%, 41%)",
      "Bright-Red": "hsl(356, 69%, 56%)",

      Facebook: "hsl(208, 92%, 53%)",
      Twitter: "hsl(203, 89%, 53%)",
      Instagram1: "hsl(37, 97%, 70%) ",
      Instagram2: "hsl(329, 70%, 58%)",
      YouTube: "hsl(348, 97%, 39%)",

      Toggle1: "hsl(210, 78%, 56%)",
      Toggle2: "hsl(146, 68%, 55%)",

      Toggle: "hsl(230, 22%, 74%)",

      "Very-Dark-Blue": "hsl(230, 17%, 14%)",
      "Very-Dark-Blue-sub": "hsl(232, 19%, 15%)",
      "Dark-Desaturated-Blue": "hsl(228, 28%, 20%)",
      "Desaturated-Blue": "hsl(228, 34%, 66%)",
      White: "hsl(0, 0%, 100%)",
      "Dark-Desaturated-Blue2": "hsl(228, 28%, 30%)",

      "Very-Pale-Blue": "hsl(225, 100%, 98%)",
      "Light-Grayish-Blue": "hsl(227, 47%, 96%)",
      "Dark-Grayish-Blue": "hsl(228, 12%, 44%)",
    },
  },
  plugins: [],
};
