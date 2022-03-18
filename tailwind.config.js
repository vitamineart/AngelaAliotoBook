module.exports = {
  content: ["./src/pug/**/*.pug", "./src/js/**/*.js", "./src/**/*.html"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        gray: "#404241",
        red: "#9B2A25",
        "red-light": "#EB4841",
      },
      borderWidth: {},
      boxShadow: {},
      fontFamily: {
        playfair: "Playfair Display, serif",
        roboto: "Roboto, sans-serif",
      },
      willChange: {
        "transform-opacity": "transform, opacity",
        opacity: "opacity",
      },
      transitionProperty: {
        "transform-opacity": "transform, opacity",
      },
      spacing: {
        12.5: "3.125rem",
        13: "3.25rem",
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        92: "23rem",
        94: "23.5rem",
      },
    },
  },
  plugins: [],
};
