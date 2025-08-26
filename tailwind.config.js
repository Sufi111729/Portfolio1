/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html", // root html
        "./html/**/*.html", // html folder ke andar sab html
        "./src/**/*.{js,ts,jsx,tsx}" // agar future me react ya js files ho
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}