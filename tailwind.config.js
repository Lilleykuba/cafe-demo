module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a855f7",
        secondary: "#ec4899",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"], // You can choose other themes like 'forest', 'synthwave', 'retro', etc.
  },
};
