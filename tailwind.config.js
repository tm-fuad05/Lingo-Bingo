/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5754f7",
        heading: "#111f62",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [require("daisyui")],
};
