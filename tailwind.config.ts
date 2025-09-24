import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          foreground: '#ffffff'
        },
        accent: {
          DEFAULT: '#f97316',
          foreground: '#0f172a'
        }
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: 'dark',
    themes: ['light', 'dark']
  }
};

export default config;
