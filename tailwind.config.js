/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#daeefe",
          200: "#b5dcfe",
          300: "#86c2fd",
          400: "#57a2fa",
          500: "#2f83f7", // primary
          600: "#1f66d6",
          700: "#194fb0",
          800: "#153f8c",
          900: "#122f69", // dark hero/header
        },
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
