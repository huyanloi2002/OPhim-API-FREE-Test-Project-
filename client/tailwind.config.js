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
      },
      borderColor: {
        primary: "orange",
        secondary: "#060d17",
        dark: "black",
        light: "white",
        "pale-white": "#FFFFFF90",
        "pri-dark": "#0a151f",
      },
      fontSize: {
        xsm: "10px",
        sm: "12px",
        smd: "13px",
        md: "15px",
        lg: "18px",
        xl: "22px",
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
    },
  },
  plugins: [],
};
