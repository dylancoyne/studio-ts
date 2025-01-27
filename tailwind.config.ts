import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.25rem' }],
      sm: ['0.875rem', { lineHeight: '1.375rem' }],
      base: ['1rem', { lineHeight: '1.625rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.25rem', { lineHeight: '1.625rem' }],
      '3xl': ['1.625em', { lineHeight: '2.125rem' }],
      '4xl': ['2rem', { lineHeight: '2.625rem' }],
      '5xl': ['2.5rem', { lineHeight: '3.25rem' }],
      '6xl': ['3.125rem', { lineHeight: '4.125rem' }],
      '7xl': ['4rem', { lineHeight: '5.125rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#20789D',
        'secondary': '#20399D',
        'tertiary':'#22A355',
        'lightblue':'#34a6d6',
        'neutral': {
          50: '#f4f4f4',
          100: '#e8e7e7',
          200: '#d1d0d0',
          300: '#bab9b9',
          400: '#a3a2a2',
          500: '#8c8b8b',
          600: '#757474',
          700: '#5e5d5d',
          800: '#464646',
          900: '#2f2f2f',
          950: '#191818',
      },
    },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['DM Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
