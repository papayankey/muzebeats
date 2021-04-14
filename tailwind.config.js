module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "8xl": "1440px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
