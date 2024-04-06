/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        1: "1px", // Add custom values for underline-offset
        2: "2px",
        6: "6px",
        // Add more custom values as needed
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
