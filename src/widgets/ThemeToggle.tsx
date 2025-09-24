import { useMemo } from 'react';

import { cn } from '@shared/utils/cn';
import { useTheme } from '@shared/hooks/useTheme';

const ThemeToggle = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const ariaLabel = useMemo(
    () => (isDark ? 'Activar modo claro' : 'Activar modo oscuro'),
    [isDark]
  );

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={toggleTheme}
      className="relative flex h-10 w-[72px] min-w-[72px] items-center rounded-full border border-base-200/70 bg-base-100/70 px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60 shadow-inner shadow-base-200/40 transition hover:text-base-content"
    >
      <span className="pointer-events-none absolute left-3 flex h-6 w-6 items-center justify-center text-base">
        <span aria-hidden="true" className={cn('transition-opacity duration-300', isDark ? 'opacity-40' : 'opacity-100')}>
          ☀️
        </span>
      </span>
      <span className="pointer-events-none absolute right-3 flex h-6 w-6 items-center justify-center text-base">
        <span aria-hidden="true" className={cn('transition-opacity duration-300', isDark ? 'opacity-100' : 'opacity-40')}>
          🌙
        </span>
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-1 top-1 h-8 w-8 rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-lg shadow-primary/40 transition-transform duration-300 ease-out',
          isDark ? 'translate-x-8' : 'translate-x-0'
        )}
      />
    </button>
  );
};

export default ThemeToggle;
