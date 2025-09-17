import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-black': '#111111',
        'warm-gray': '#A1A1AA',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config