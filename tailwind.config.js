module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // Keep this as it is to scan the correct files
  theme: {
    extend: {
      animation: {
        moveText: "moveText 5s linear infinite",  // Adding the custom animation for moving text
      },
      keyframes: {
        moveText: {
          "0%": { transform: "translateX(100%)" },  // Starts off-screen to the right
          "100%": { transform: "translateX(-100%)" }, // Ends off-screen to the left
        },
      },
    },
  },
  plugins: [],
};
