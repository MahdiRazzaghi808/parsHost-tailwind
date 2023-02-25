/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '540px', // => @media (min-width: 640px) { ... }
      'md': '720px', // => @media (min-width: 768px) { ... }
      'lg': '960px', // => @media (min-width: 1024px) { ... }
      'xl': '1140px', // => @media (min-width: 1280px) { ... }
    },

    extend: {},
  },
  plugins: [],
}
