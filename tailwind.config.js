/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grigioTesto: "#868686",
        biancoTesto: "#f6f6f6",
        nero: "#000000",
        grigioBg: "#121212",
        griginoBg: "#242424",
        grigioHover: "#727272",
        verdeSpotify: "#1fdf64",
      },
    },
    safelist: [
      "animate-[fade-in-up_1s_ease-in-out]",
      "animate-[fade-out-down_1s_ease-in-out]",
    ],
  },
  plugins: [],
};
