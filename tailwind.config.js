module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
      gridTemplateColumns: {
        7: "repeat(7, 200px)",
      },
      gridTemplateRows: {
        24: "repeat(24, 100px)",
      },
    },
  },
  variants: {},
  plugins: [],
};
