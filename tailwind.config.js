/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
    extend: {
        keyframes: {
            'trans-right': {
                '0% , 100%': { transfrom: "translateX(10px)" },
                "50%": { transfrom: "translateX(0px)" }
            }
        },
        animation: {
            'trans-right': 'trans-right 1.5s ease-in-out infinite'
        }
    },
};
export const plugins = [
    require('tailwindcss'),
    require('autoprefixer'),
];