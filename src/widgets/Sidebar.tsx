import { Link, NavLink } from 'react-router-dom';

import { buttonStyles } from '@shared/components/Button';
import { cn } from '@shared/utils/cn';
import { useUIStore } from '@stores/uiStore';

import ThemeToggle from './ThemeToggle';
import { navItems } from './navItems';

const Sidebar = (): JSX.Element => {
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useUIStore((state) => ({
    isSidebarOpen: state.isSidebarOpen,
    toggleSidebar: state.toggleSidebar,
    closeSidebar: state.closeSidebar
  }));

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-50 w-[19rem] transform border-r border-base-200/70 bg-base-100/90 p-6 shadow-2xl shadow-base-300/40 backdrop-blur-xl transition-transform duration-300 md:hidden',
        'before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-primary/10 before:via-transparent before:to-secondary/20 before:opacity-90 before:content-[""]',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-base-content">Explorar</span>
        <button
          type="button"
          className={buttonStyles('soft', 'sm')}
          onClick={toggleSidebar}
          aria-label="Cerrar menú"
        >
          Cerrar
        </button>
      </div>
      <nav className="mt-8 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={closeSidebar}
            end={item.to === '/'}
            className={({ isActive }) =>
              cn(
                'relative rounded-xl px-4 py-3 text-base font-medium text-base-content/70 transition-all duration-200 hover:bg-base-200/70 hover:text-base-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40',
                'after:pointer-events-none after:absolute after:right-4 after:top-1/2 after:h-1 after:w-8 after:-translate-y-1/2 after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-primary after:via-secondary after:to-accent after:opacity-0 after:transition-all after:duration-200 after:content-[""]',
                isActive
                  ? 'bg-base-200/80 text-base-content after:scale-x-100 after:opacity-100'
                  : 'hover:after:scale-x-100 hover:after:opacity-100'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-10 space-y-4">
        <ThemeToggle />
        <Link
          to="/contact"
          onClick={closeSidebar}
          className={buttonStyles('gradient', 'md')}
        >
          Agendar discovery
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
