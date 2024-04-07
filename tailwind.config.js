/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ["focus"], // Enable focus variant for borderColor
      textColor: ["focus"], // Enable focus variant for textColor
      placeholderColor: ["focus"], // Enable focus variant for placeholderColor
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
