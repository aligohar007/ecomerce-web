/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-blue": "#1DA1F2",
                "brand-dark": "#0D1117",
            },
        },
    },
    plugins: [],
}
