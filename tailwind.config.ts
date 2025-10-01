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
        secondary: {
          DEFAULT: '#22d3ee',
          foreground: '#0f172a'
        },
        accent: {
          DEFAULT: '#f97316',
          foreground: '#0f172a'
        }
      },
      backgroundImage: {
        'grid-signal': 'linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(99,102,241,0.08) 1px, transparent 1px)'
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
