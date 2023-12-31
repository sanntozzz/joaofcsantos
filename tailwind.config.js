/** @type {import('tailwindcss').Config} */

import * as colors from 'tailwindcss/colors'

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            transparent: colors.transparent,
            white: colors.white,
            black: colors.neutral[900],
            primary: colors.neutral,
            blue: colors.blue[400],
            warning: colors.yellow[500],
            success: colors.green[500],
            destructive: colors.red[500],
        },
        extend: {
            letterSpacing: {
                0.5: '0.5em',
                1: '1em',
            },
        },
    },
    plugins: [],
}
