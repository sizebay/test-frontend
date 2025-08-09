import type { Config } from 'tailwindcss'
import lineClamp from '@tailwindcss/line-clamp'

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./.storybook/**/*.{js,ts,jsx,tsx}"  // importante para Storybook reconhecer classes
    ],
    theme: {
        extend: {
            fontFamily: {
                'ibm-mono': ['"IBM Plex Mono"', 'monospace', 'sans-serif'],
            },
        },
    },
    plugins: [lineClamp],
}

export default config;
