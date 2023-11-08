/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '50vh': '50vh',
        '80vh': '80vh',
      },
    },
  },
  plugins: [],
};
