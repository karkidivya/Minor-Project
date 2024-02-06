/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        "primary-blue": "#4278f0",
        whitesmoke: "#f3f3f3",
        text2: "#000",
        gray: {
          "100": "#fbfffe",
          "200": "#151515",
          "300": "#0c0c0c",
          "400": "rgba(0, 0, 0, 0.5)",
        },
        secondary: "#f5f5f5",
        tomato: "#ed4b21",
        darkslateblue: "#22438a",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "roboto-condensed": "'Roboto Condensed'",
        "title-16px-medium": "Poppins",
        georgia: "Georgia",
        inter: "Inter",
      },
      borderRadius: {
        "24xl": "43px",
        "12xl": "31px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      mid: "17px",
      "3xs": "10px",
      "5xl": "22px",
      "6xl": "25px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};