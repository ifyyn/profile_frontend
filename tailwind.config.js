/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        green: "#45b772",
        dark: "#333333",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "50%": { transform: "scale(1.05)", opacity: 0.5 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        bounceIn: "bounceIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
