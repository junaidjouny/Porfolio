const plugin = require("tailwindcss/plugin");
const icon = "/" + "f015";
module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#009688",
      },
      backgroundImage: {
        "hero-image": "url('/assets/hero-image.jpg')",
      },
      fontFamily: {
        sans: ["Raleway"],
      },
      gridTemplateRows: {
        // Simple 8 row grid
        "9": "repeat(9, minmax(0, 1fr))",
      },
      borderRadius: {
        none: "0",
        lg: "2.125rem",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: {
        main: "#009688",
        100: "#009688",
      },
      secondary: "#555",
      danger: "#e3342f",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#009688",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover", "group-hover"],
      backgroundColor: ["active", "hover"],
      visibility: ["group-hover", "hover", "focus"],
      transform: ["hover", "focus"],
      transition: ["hover", "focus"],
      gridTemplateColumns: ["hover", "focus"],
    },
  },
  plugins: [
    require("tailwindcss-pseudo-elements"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".empty-content": {
          content: "'\\f015'",
        },
      };
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    }),
  ],
};
