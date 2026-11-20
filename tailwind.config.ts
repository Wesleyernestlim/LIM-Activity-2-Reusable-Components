import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue,svelte,html}'],
  theme: {
    extend: {
      colors: {
        matcha: {
          50: '#f4f7ee',
          100: '#e7eed8',
          200: '#cfdcb3',
          300: '#b3c78a',
          400: '#98b066',
          500: '#7d974d',
          600: '#627a3a',
          700: '#4c5f2f',
          800: '#3d4c2a',
          900: '#2f3b22',
        },
        sakura: {
          50: '#fdf3f4',
          100: '#fbe4e7',
          200: '#f6c9d0',
          300: '#ee9fad',
          400: '#e27489',
          500: '#cf4f69',
          600: '#b13a54',
        },
        cream: '#faf8f1',
        hojicha: '#3b2f2a',
      },
    },
  },
} satisfies Config