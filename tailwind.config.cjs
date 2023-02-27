/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#fff",
                secondary: "#436073",
                accent: "#FC916A",
            },
        },
    },
    plugins: [],
};
