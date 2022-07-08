/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: '#fff',
      'black': '#222',
      'dark': '#444',
      'lightgray': '#666666',
      'light': '#f4f4f4',
      'orange': '#ff0000',
      'primary': '#fdc726',
      'yellow':'#fff202',
      'lightprimary': '#fdfc9b',
      'dimgray': '#eee',
      'bg-fb': '#049fff',
      'bg-tw': '#00b5fc',
    },
    extend: {
      fontFamily: {
        poppins: 'Poppins, san-serif',
        inter: 'Inter, san-serif'
      },
    },
  },
  plugins: [],
}
