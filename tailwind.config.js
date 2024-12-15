/** @type {import('tailwindcss').Config} */

import themeConfig from './config/tailwind/theme.js'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: themeConfig,
  plugins: [],
}

