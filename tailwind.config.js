console.log('ok')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        h: {
          primary: '#fffffe',
          secondary: '#fffffe',
          card: '#fffffe',
        },
        p: {
          primary: '#94a1b2',
          secondary: '#94a1b2',
          card: '#94a1b2',
        },
        label: {
          primary: '#fffffe',
          secondary: '#fffffe',
        },
        txt: {
          btn: '#fffffe',
          placeholder: 'rgba(44,44,43,0.77)',
          link: '#7f5af0'
        },
        highlight: {
          main: '#7f5af0',
          card: '#fffffe',
        },
        bg: {
          primary: '#16161a',
          secondary: '#242629',
          card: '#242629',// '#16161a',
          tag: '#7f5af0',
          input: 'rgba(203,203,210,0.94)',
          btn: '#7f5af0',
          'btn-hover': '#825eefe4',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
