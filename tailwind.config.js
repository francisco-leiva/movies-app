/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        cards: 'repeat(auto-fit, minmax(260px, 1fr))',
      },
      backgroundImage: {
        titleGradient:
          'linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))',
        bannerMovieDetails:
          'linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [],
}
