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
      spacing: {
        4.25: "1.0625rem",
        4.75: "1.1875rem",
        21.75: "5.4375rem",
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
