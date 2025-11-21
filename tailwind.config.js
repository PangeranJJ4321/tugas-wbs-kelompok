/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'ml-40',
    'ml-80',
    'lg:ml-80',
    'lg:pl-[calc(20rem+2rem)]',
  ],
}

