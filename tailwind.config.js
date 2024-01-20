/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // (active input border)

        // Lineargradient:
        LightPurple: "hsl(249, 99%, 64%)",
        DarkPurple: "hsl(278, 94%, 30%)",
        // (input errors)
        Red: "hsl(0, 100%, 66%)",

        White: "hsl(0, 0%, 100%)",
        LightGrayishViolet: "hsl(270, 3%, 87%)",
        DarkGrayishViolet: "hsl(279, 6%, 55%)",
        VeryDarkViolet: "hsl(278, 68%, 11%)",
      },
      fontFamily: {
        body: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
