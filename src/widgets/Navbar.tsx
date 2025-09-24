import { Link, NavLink } from 'react-router-dom';

import { buttonStyles } from '@shared/components/Button';
import { cn } from '@shared/utils/cn';
import { useUIStore } from '@stores/uiStore';

import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import { navItems } from './navItems';

const Navbar = (): JSX.Element => {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-base-200/70 bg-base-100/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-base-content">
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30">
            <span className="absolute inset-0 rounded-2xl border border-white/20" aria-hidden="true" />
            <span className="relative text-base font-bold tracking-tight">LM</span>
          </span>
          <span className="hidden text-base-content/90 sm:inline">Laura Méndez · Experience Engineer</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-base-200/80 bg-base-100/60 px-2 py-1.5 shadow-lg shadow-base-200/30 backdrop-blur md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'group relative inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-base-content/70 transition-all duration-200 hover:text-base-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40',
                  'before:absolute before:inset-0 before:-z-10 before:rounded-[0.95rem] before:bg-base-200/70 before:opacity-0 before:blur before:transition-all before:duration-200 before:content-[""]',
                  'after:pointer-events-none after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-10 after:-translate-x-1/2 after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-primary after:via-secondary after:to-accent after:opacity-0 after:transition-all after:duration-200 after:content-[""]',
                  isActive
                    ? 'text-base-content before:opacity-100 after:opacity-100 after:scale-x-100'
                    : 'hover:before:opacity-60 hover:after:opacity-100 hover:after:scale-x-100'
                )
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <div className="hidden xl:block">
              <SearchBar />
            </div>
            <Link to="/contact" className={cn(buttonStyles('gradient', 'sm'), 'hidden lg:inline-flex')}>Agendar discovery</Link>
          </div>
          <ThemeToggle />
          <button
            type="button"
            className={cn(buttonStyles('soft', 'sm'), 'md:hidden')}
            onClick={toggleSidebar}
            aria-label="Abrir menú de navegación"
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
