module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-red": "#8a0c0c",
        red: "#bd1515",
        heart: "#FF1D1D",
        "light-red": "#fcd7d4",
        "dark-green": "#0c965c",
        green: "#15BE77",
        "light-from-green": "#15BE77",
        "light-green": "#dcf5eb",
        brown: "#DA6317",
        cream: "#f5d8b8",
        "light-brown": "#fbf4ec",
        // gray: "#e0e0e0",
        gray: "#858786",
        "light-gray": "#e6e9eb",
        yellow: "#FEAD1D",
      },
      borderRadius: {
        "2lg": "20px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
