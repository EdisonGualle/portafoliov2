import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';

import { useThemeStore } from '@stores/themeStore';

const ThemeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const theme = useThemeStore((state) => state.theme);
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
