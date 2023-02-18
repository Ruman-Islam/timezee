/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1840px",
    },
    colors: {
      amazonOrange: "#FF9900",
      amazonOrangeLite: "#FEBD69",
      amazonBlue: "#146EB4",
      amazonAccent: "#131921",
      amazonNeutral: "#232F3E",
      amazonGray: "#F2F2F2",
      primary: "#277CD9",
      secondary: "#3542AE",
      accent: "#21323D",
      white: "#ffff",
      base: "#ffff",
      neutral: "#00586D",
      info: "#DAF0D8",
      success: "#3BBF6F",
      warning: "#FEE15B",
      error: "#E73D50",
      grayBackground: "#EEEEEE",
    },
    borderColor: {
      amazonOrange: "#FF9900",
      primary: "#277CD9",
      secondary: "#3542AE",
      thin: "rgba(30, 41, 59, 0.1)",
      accent: "#21323D",
      error: "#E73D50",
    },
    fontFamily: {
      ibm: ["IBM Plex Sans", "sans-serif"],
    },
    // fontSize: {

    // },
    extend: {},
  },
  plugins: [],
};
