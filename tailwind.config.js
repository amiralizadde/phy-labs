/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        '3xl': '0px 3px 3px 0px rgb(0,0,0)'
      },
      colors: {
        primary: "#ce0010",
        primary2: "#eeeded",
      },
      fontFamily: {
        inter: "inter",
        shabnam: ["Shabnam", "sans-serif"],
        "shabnam-bold": ["Shabnam-Bold", "sans-serif"],
      },
      screens: {
        "2xs": "350px",
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        promote: "15px 15px 0px 0px #0000ff21",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
