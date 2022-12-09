/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
        '128': '28rem',
      },
      screens: {
        'sm': '486px'
      },
      colors: {
        'primary': '#36393f'
      }
    },
  },
  plugins: [],
}
