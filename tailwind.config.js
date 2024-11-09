module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"], // Choose a theme like 'light', 'dark', 'cupcake', etc.
  },
};
