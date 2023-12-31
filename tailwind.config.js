/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      },
    extend: {
      backgroundImage: (theme) => ({
        background1: "linear-gradient(41deg, #96B7CD 27%, #E68D83 100%)",
        gradient:"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
      }),
      gridTemplateColumns: {
        'columns': 'repeat(auto-fill, minmax(200px, 2fr 2fr))',
        'sx-column': 'repeat(auto-fill, minmax(115px, 1fr))'
      },
    },
  },
  plugins: [],
}
