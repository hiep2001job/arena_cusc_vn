/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
      },
      backgroundPosition: {
        'background-position--35': '-35px',
      },
    },
  },
  plugins: [],
};
