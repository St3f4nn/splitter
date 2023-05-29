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
          "very-dark-cyan": "hsl(183, 100%, 15%)",
          "dark-grayish-cyan": "hsl(186, 14%, 43%)",
          "grayish-cyan": "hsl(184, 14%, 56%)",
          "light-grayish-cyan": "hsl(185, 41%, 84%)",
          "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        },
      },
      fontFamily: {
        mono: "'Space Mono', monospace",
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
