/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        text: '#1E1E1E',
        background: '#F4F0E6',
        surface: '#ECE7DA',
        primary: '#b15147',

        secondary: '#bbc0aa',
        accent: '#a7b08c',
      },
      fontFamily: {
        serif: ['var(--font-gambetta)'],
      },
    },
  },
  plugins: [],
};
