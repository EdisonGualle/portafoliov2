import { NavLink, Link } from 'react-router-dom';

import { buttonStyles } from '@shared/components/Button';
import { cn } from '@shared/utils/cn';
import { useUIStore } from '@stores/uiStore';

import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import { navItems } from './navItems';

const Navbar = (): JSX.Element => {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-base-200/80 bg-base-100/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            LM
          </span>
          <span className="hidden sm:inline">Laura Méndez</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-2xl border border-base-200 bg-base-100/80 px-2 py-1 shadow-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-xl px-3 py-2 text-sm font-medium text-base-content/70 transition hover:bg-base-200',
                  isActive && 'bg-base-200 text-base-content'
                )
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <SearchBar />
          </div>
          <ThemeToggle />
          <button
            type="button"
            className={cn(buttonStyles('ghost', 'sm'), 'md:hidden')}
            onClick={toggleSidebar}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </div>
      <div className="px-4 pb-4 md:hidden">
        <SearchBar />
      </div>
    </header>
  );
};

export default Navbar;
