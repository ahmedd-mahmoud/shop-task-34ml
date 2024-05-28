/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        title: "#1B1C1E",
        subtitle: "#C1C1C1",
        surface: "#FBFBFB",
        buttonBg: "#00ABEB",
        inputBg: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
