import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  initializeTheme: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const STORAGE_KEY = 'portfolio_theme';

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'light',
  initializeTheme: () => {
    if (typeof window === 'undefined') return;
    const storedTheme = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    const nextTheme = storedTheme ?? (prefersDark ? 'dark' : 'light');
    if (nextTheme !== get().theme) {
      set({ theme: nextTheme });
    }
  },
  setTheme: (theme) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
    set({ theme });
  },
  toggleTheme: () => {
    const current = get().theme;
    const nextTheme: Theme = current === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    }
    set({ theme: nextTheme });
  }
}));
