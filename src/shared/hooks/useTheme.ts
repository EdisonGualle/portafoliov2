import { useThemeStore } from '@stores/themeStore';

export const useTheme = () =>
  useThemeStore((state) => ({
    theme: state.theme,
    toggleTheme: state.toggleTheme,
    setTheme: state.setTheme
  }));
