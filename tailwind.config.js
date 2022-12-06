/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",

        md: "768px",

        // mmd: "868px",

        lg: "1024px",

        xl: "1280px",
        "1xl": "1440px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "hero-pattern": "url('/Images/Bg.png')",
      },
    },
  },
  plugins: [],
};
