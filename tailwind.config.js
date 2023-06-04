/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./dist/js/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          "strong-cyan": "hsl(172, 67%, 45%)",
        },
        secondary: {
          cyan: "hsl(172, 31%, 51%)",
          "cyan-hover": "hsl(173, 61%, 77%)",

          "very-dark-cyan": "hsl(183, 100%, 15%)",
          "dark-grayish-cyan": "hsl(186, 14%, 43%)",

          "grayish-cyan": "hsl(184, 14%, 56%)",
          "light-grayish-cyan": "hsl(185, 41%, 84%)",
          "very-light-grayish-cyan": "hsl(189, 41%, 97%)",

          "shade-of-red": "hsl(12, 33%, 57%)",
          "shade-of-gray": "hsl(203, 50%, 97%)",
        },
      },
      fontFamily: {
        mono: "'Space Mono', monospace",
      },
      gridTemplateColumns: {
        "calculator-container": "48.01fr 48.25fr",
        "output-cols": "1fr 2fr",
        "label-cols": "55fr 45fr",
      },
      spacing: {
        3.75: "0.9375rem",
        4.25: "1.0625rem",
        4.75: "1.1875rem",
        5.75: "1.4375rem",
        8.25: "2.0625rem",
        12.5: "3.125rem",
        12.75: "3.1875rem",
        21.75: "5.4375rem",
        40.75: "10.1875rem",
      },
      width: {
        2.75: "0.6875rem",
        3.25: "0.8125rem",
        21.75: "5.4375rem",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "920px",
        },
      });
    },
  ],
};
