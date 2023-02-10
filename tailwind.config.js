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
    },
    colors: {
      primary: "#277CD9",
      secondary: "#3542AE",
      accent: "#21323D",
      base: "#ffff",
      neutral: "#00586D",
      info: "#DAF0D8",
      success: "#3BBF6F",
      warning: "#FEE15B",
      error: "#E73D50",
      grayBackground: '#DDDDDD',
    },
    borderColor: {
      primary: "#277CD9",
      secondary: "#3542AE",
      thin: "rgba(30, 41, 59, 0.1)",
      accent: "#21323D",
      error: '#E73D50',
    },
    fontFamily: {
      ibm: ["IBM Plex Sans", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
};
