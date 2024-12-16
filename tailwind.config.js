/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fatec-red': '#d62721',
        'fatec-orange': '#ec7f28',
        'fatec-yellow': '#f3a51c',
        'fatec-cream': '#f9ca6f',
        'fatec-blue': '#1a348d',
        'fatec-gray': '#293237',
      },
      boxShadow : {
        'lg': '5px 5px 5px 5px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}

