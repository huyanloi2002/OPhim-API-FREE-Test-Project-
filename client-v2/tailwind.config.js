/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#6732b2",
        secondary: "#1a1421",
        dark: "#08010f",
        light: "#ffffff",
        "green-dark": "#1abc9c",
        "green-darker": "#16a085",
        "red-dark": "#ff5050",
        "gray-dark": "#636262",
        "opacity-dark-0.5": "rgba(0, 0, 0, 0.5)",
        "opacity-gray-0.7": "rgba(128, 128, 128, 0.7)",
        "opacity-white-0.1": "rgba(255, 255, 255, 0.1)",
        "opacity-white-0.2": "rgba(255, 255, 255, 0.2)",
        "opacity-white-0.3": "rgba(255, 255, 255, 0.3)",
        "opacity-white-0.5": "rgba(255, 255, 255, 0.5)",
        "opacity-white-0.6": "rgba(255, 255, 255, 0.6)",
        "opacity-white-0.8": "rgba(255, 255, 255, 0.8)",
      },
      textColor: {
        light: "#ffffff",
        secondary: "#1a1421",
        "red-dark": "#ff5050",
        "green-dark": "#1abc9c",
        "gray-opacity": "#f8fafc0f",
        primary: "#6732b2",
        dark: "#08010f",
        "opacity-white-0.6": "rgba(255, 255, 255, 0.6)",
        "opacity-white-0.8": "rgba(255, 255, 255, 0.8)",
      },
      borderColor: {
        dark: "#08010f",
        primary: "#6732b2",
        "red-dark": "#ff5050",
        "gray-opacity": "#f8fafc0f",
        "green-dark": "#1abc9c",
        red: "red",
        "opacity-white-0.3": "rgba(255, 255, 255, 0.3)",
      },
      fontSize: {
        xsm: "8px",
        sm: "10px",
        xmd: "12px",
        md13: "13px",
        md: "14px",
        xlg: "16px",
        lg: "18px",
        xl: "22px",
        xml: "25px",
        xxl: "30px",
        xl32: "32px",
        xl35: "35px",
        "3xl": "40px",
        "4xl": "50px",
      },
      fontWeight: {
        b200: "200",
        b300: "300",
        b400: "400",
        b500: "500",
        b600: "600",
        b700: "700",
        b800: "800",
        b900: "900",
        b1000: "1000",
      },
      animation: {
        navmenu: "navmenu 0.5s ease-in-out",
        textmenu: "textmenu 0.5s ease-in-out",
        slide: "slide 1s ease-in-out",
      },
      keyframes: {
        navmenu: {
          "0%": {
            borderColor: "transparent",

            transform: "translateX(-50%)",
          },
          "100%": {
            borderColor: "#6732b2",
            transform: "translateX(0%)",
          },
        },
        textmenu: {
          "0%": {
            color: "gray",
          },
          "100%": {
            color: "#ffffff",
          },
        },
        slide: {
          "0%": {
            transform: "translateX(-1214px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};

