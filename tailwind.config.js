module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "kawasaki-green": "#6c3",
        "dark-gray": "#202021",
        "light-gray": "#76767c",
        "nav-gray": "#b2b2b8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
