module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   custom: ["Custom", "sans-serif"]
      // },
      typography: {
        DEFAULT: {
          css: {
            color: '#FFFFFF',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h1:{
              color:'#FFFFFF'
            },
            h2:{
              color:'#FFFFFF'
            },
            h3: {
              color:'#FFFFFF'
            },
            strong: {
              color:'#FFFFFF',
              fontWeight: 900
            }
          },
        },
      },
      colors: {
        skyblue: {
          DEFAULT: "#1687F3",
        },
        navyblue: {
          DEFAULT: "#2ED7E3",
        },
        background: {
          DEFAULT: "#252935",
        },
        navbar: {
          DEFAULT: "#050A22",
        },
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient-y": "gradient-y 2s ease infinite",
        "gradient-xy": "gradient-xy 7s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      fontSize: {
        fat: "15rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
