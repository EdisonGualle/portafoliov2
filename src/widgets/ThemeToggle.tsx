import { useTheme } from '@shared/hooks/useTheme';
import { buttonStyles } from '@shared/components/Button';

const ThemeToggle = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Modo oscuro' : 'Modo aurora';

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      className={buttonStyles('ghost', 'sm')}
      onClick={toggleTheme}
    >
      {isDark ? '🌙' : '☀️'}
      <span className="ml-2 hidden text-sm sm:inline">{label}</span>
    </button>
  );
};

export default ThemeToggle;
