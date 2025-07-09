/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
        secondary: "#F5F3FF",
        accent: "#A78BFA",
        dark: "#1F2937"
      },
    },
  },
  plugins: [],
}
