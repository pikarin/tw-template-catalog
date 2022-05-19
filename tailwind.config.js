const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "courious-blue": {
          dark: "#0E5A81",
          prime: "#19A1E6",
          300: "#63BFEE",
          100: "#ACDDF6",
          50: "#ACDDF6",
        },
        roman: {
          500: "#F54D3D",
          300: "#F9948B",
        },
        meadow: {
          500: "#14B866",
          300: "#35E98F",
        },
        butter: {
          500: "#F4C025",
          300: "#F8D672",
        },
        dark: {
          800: "#050506",
          DEFAULT: "#383C43",
          400: "#6B7280",
          200: "#969BA7",
          100: "#C2C5CC",
          50: "#CDD0D5"
        },
        white: "#F5F5F5",
        overlay: "rgba(56, 60, 67, 0.5)",
      },
    },
  },
  plugins: [],
}