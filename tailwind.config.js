/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        'lg': '5px 5px 5px 5px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}

