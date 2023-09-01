/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            primary: "#0068cb",
            secondary: "#60a0dd",

            black: "#162333",
            gray: "#8f8f91",
            "gray-light": "#f4f5f7",
            purple: "#9078c8",
            "purple-light": "#ece7ff",
            red: "#de85a5",
            "red-light": "#fee4ef",
            green: "#69a993",
            "green-light": "#d4fef0",
            blue: "#7b90c7",
            "blue-light": "#e4f0ff",

        }
    },
  },
  plugins: [],
}
