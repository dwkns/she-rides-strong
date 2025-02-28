/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{md,html,webc,njk}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/container-queries")],
}

