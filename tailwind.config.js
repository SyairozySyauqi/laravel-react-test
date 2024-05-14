import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontSize: {
                h1: "48px",
                h2: "36px",
                h3: "30px",
                h4: "24px",
                h5: "20px",
                h6: "16px",
                p: "1em",
            },
            maxWidth: {
                50: "50%",
                60: "60%",
                70: "70%",
                80: "80%",
                90: "90%",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
