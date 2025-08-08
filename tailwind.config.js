
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        roboto: ['roboto']
      }
    },
  },
  plugins: [
  ],
  server: {
    port: 3000,
  }
}

