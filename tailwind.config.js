/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '991px',
        'md': '1199px',
        'lg': '1200px',
        'xl': '1280px',
         // Custom breakpoint for extra large screens
        // Add more custom breakpoints if needed
      },
    },
  },
  plugins: [],
}
