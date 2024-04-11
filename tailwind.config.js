/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            boxShadow: {
                top: " 0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
            },
            colors: {
                primary: "#0068cb",
                secondary: "#60a0dd",
                black: "#162333",
            },
            backgroundImage: {
                profile: "url('/background.jpg')",
            },
            aspectRatio: {
                "5/1": "5 / 1",
                "8/1": "8 / 1",
            },
        },
    },
    plugins: [],
};
