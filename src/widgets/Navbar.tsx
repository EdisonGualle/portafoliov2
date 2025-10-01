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
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-base-100/95 to-base-100/70 backdrop-blur-xl" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold">
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/30">
            <span className="absolute inset-0 rounded-2xl border border-white/30 opacity-40" aria-hidden="true" />
            LM
          </span>
          <span className="hidden sm:inline text-base-content">Laura Méndez</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-2xl border border-base-200/70 bg-base-100/80 px-2 py-1 shadow-sm shadow-primary/10 backdrop-blur md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'relative overflow-hidden rounded-xl px-3 py-2 text-sm font-medium text-base-content/70 transition',
                  'hover:bg-base-200/80 hover:text-base-content',
                  isActive && 'bg-base-200/80 text-base-content shadow-inner shadow-primary/10'
                )
              }
              end={item.to === '/'}
            >
              <span className="relative z-10">{item.label}</span>
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
      <div className="px-5 pb-4 md:hidden">
        <SearchBar />
      </div>
    </header>
  );
};

export default Navbar;
