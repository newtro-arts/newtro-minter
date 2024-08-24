// eslint-disable-next-line @typescript-eslint/no-var-requires
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      screens: {
        ios: '320px',
        samsungS8: '360px',
        xs: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xls': '1350px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
    extend: {
      colors: {
        grey: {
          DEFAULT: '#D1F121',
          light: '#D1F121',
        },
        background: {
          DEFAULT: '#191919',
        },
      },
      fontFamily: {
        pragmatica: ['"Pragmatica Extended Light"', 'sans-serif'],
        ibmPlexMono: ['"IBM Plex Mono"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [],
}
