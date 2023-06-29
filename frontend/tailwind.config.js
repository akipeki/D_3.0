/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '780px',
        lg: '1080px',
        xl: '1280px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
      colors: {
        'page-number': '#667e75',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};


