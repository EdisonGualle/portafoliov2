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
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center bg-transparent">
      <div className="relative mx-auto mt-4 w-[94%] max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/70 p-3 shadow-glow backdrop-blur-xl transition md:w-[92%] dark:border-white/5 dark:bg-white/5">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-70 blur-30" aria-hidden="true" />
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="group flex items-center gap-2 text-lg font-semibold text-base-content">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-aurora to-secondary text-sm font-bold text-primary-foreground shadow-glow">
              EG
            </span>
            <span className="hidden bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent sm:inline">
              Edison Gualle
            </span>
          </Link>
          <nav className="hidden items-center gap-1 rounded-2xl border border-white/20 bg-white/40 px-2 py-1 text-sm shadow-sm dark:border-white/10 dark:bg-white/10 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-xl px-4 py-2 font-medium text-base-content/80 transition focus-visible:outline-none hover:text-primary',
                    isActive &&
                      'text-primary'
                  )
                }
                end={item.to === '/'}
              >
                {({ isActive }) => (
                  <span className="relative flex items-center gap-2">
                    {isActive && <span className="h-2 w-2 rounded-full bg-primary shadow-glow" aria-hidden="true" />}
                    {item.label}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden w-48 lg:block">
              <SearchBar />
            </div>
            <ThemeToggle />
            <Link to="/contact" className="hidden rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-glow hover:bg-primary/15 sm:inline-flex">
              Conversemos
            </Link>
            <button
              type="button"
              className={cn(buttonStyles('ghost', 'sm'), 'md:hidden border border-white/20 bg-white/40 dark:bg-white/10')}
              onClick={toggleSidebar}
              aria-label="Abrir menú"
            >
              ☰
            </button>
          </div>
        </div>
        <div className="mt-3 block md:hidden">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
