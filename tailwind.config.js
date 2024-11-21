/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
        secondary: "#f1f3f9",
        heading: "#111f62",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [require("daisyui")],
};
