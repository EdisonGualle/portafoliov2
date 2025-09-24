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
          DEFAULT: '#7c3aed',
          foreground: '#f4f3ff'
        },
        secondary: {
          DEFAULT: '#22d3ee',
          foreground: '#001524'
        },
        accent: {
          DEFAULT: '#f97316',
          foreground: '#0f172a'
        },
        midnight: '#050b1a',
        midnightMuted: '#0b1220',
        aurora: '#a855f7'
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.55), transparent 55%), radial-gradient(circle at 80% 10%, rgba(34, 211, 238, 0.45), transparent 50%), radial-gradient(circle at 50% 100%, rgba(249, 115, 22, 0.35), transparent 55%)',
        'mesh-gradient':
          'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(5, 11, 26, 0.88) 45%, rgba(8, 47, 73, 0.92) 100%)',
        'grid-slate': 'linear-gradient(to right, rgba(148, 163, 184, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.07) 1px, transparent 1px)'
      },
      boxShadow: {
        glow: '0 0 45px -15px rgba(124, 58, 237, 0.55)',
        'glow-secondary': '0 0 55px -20px rgba(34, 211, 238, 0.6)',
        'glow-accent': '0 0 55px -18px rgba(249, 115, 22, 0.65)'
      },
      keyframes: {
        aurora: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
            opacity: '0.4'
          },
          '50%': {
            transform: 'rotate(8deg) scale(1.05)',
            opacity: '0.7'
          },
          '100%': {
            transform: 'rotate(0deg) scale(1)',
            opacity: '0.4'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite',
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 12s linear infinite'
      },
      blur: {
        30: '30px'
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: 'dark',
    themes: [
      {
        lumen:
          {
            primary: '#7c3aed',
            'primary-content': '#f4f3ff',
            secondary: '#22d3ee',
            'secondary-content': '#001524',
            accent: '#f97316',
            'accent-content': '#0f172a',
            neutral: '#111827',
            'neutral-content': '#f8fafc',
            'base-100': '#f8fafc',
            'base-200': '#e2e8f0',
            'base-300': '#cbd5f5',
            'base-content': '#0f172a',
            info: '#38bdf8',
            success: '#22c55e',
            warning: '#facc15',
            error: '#f87171'
          }
      },
      'dark'
    ]
  }
};

export default config;
