import { NavLink } from 'react-router-dom';

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
        'fixed inset-y-0 left-0 z-50 w-72 transform border-r border-base-200 bg-base-100/95 p-6 shadow-xl backdrop-blur transition-transform duration-300 md:hidden',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Navegación</span>
        <button
          type="button"
          className="rounded-full bg-base-200 px-3 py-1 text-sm"
          onClick={toggleSidebar}
          aria-label="Cerrar menú"
        >
          Cerrar
        </button>
      </div>
      <nav className="mt-6 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={closeSidebar}
            end={item.to === '/'}
            className={({ isActive }) =>
              cn(
                'rounded-xl px-4 py-3 text-base font-medium text-base-content/70 transition hover:bg-base-200',
                isActive && 'bg-base-200 text-base-content'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-10">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
