/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        primary: "orange",
        secondary: "#060d17",
        dark: "black",
        light: "white",
        "pale-white": "#FFFFFF90",
        "pri-dark": "#0a151f",
        gray: "#1c252f",
        green: "#00cc66",
        red: "#ff5050",
        yellow: "#ffcc00",
        "blue-purple": "#6699ff",
      },
      backgroundColor: {
        primary: "orange",
        secondary: "#060d17",
        dark: "black",
        light: "white",
        "gray-transparent": "#0009",
        red: "crimson",
        "pale-white": "#FFFFFF90",
        loading: "bg-slate-800",
        "pri-dark": "#0a151f",
        gray: "#1c252f",
      },
      borderColor: {
        primary: "orange",
        secondary: "#060d17",
        dark: "black",
        light: "white",
        "pale-white": "#FFFFFF90",
        "pri-dark": "#0a151f",
        gray: "#1c252f",
      },
      fontSize: {
        xsm: "10px",
        sm11: "11px",
        sm: "12px",
        smd: "13px",
        md: "15px",
        lg: "18px",
        xl: "22px",
        xl24: "24px",
        xml: "28px",
        xxl: "30px",
        xxx: "50px",
      },
      fontWeight: {
        thin: 300,
        md: 500,
        mdbold: 600,
        bold: 700,
      },
      fontFamily: {
        primary: `"Nunito", sans-serif`,
      },
      backgroundImage: {
        "bg-image": "linear-gradient(0deg, #060d17, transparent 120px)",
      },
      animation: {
        opacity: "opacity 2s ease-in-out",
        opacityTrailer: "opacity 4s ease-in-out",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        opacityTrailer: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
