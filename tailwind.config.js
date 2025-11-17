/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaire: {
          clair: "#E0F2FE",
          DEFAULT: "#2563EB",
          fonce: "#1D4ED8",
        },
      },
    },
  },
  plugins: [],
};
