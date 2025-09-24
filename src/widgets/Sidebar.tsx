import { NavLink, Link } from 'react-router-dom';

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
        'fixed inset-y-0 left-0 z-50 w-72 transform bg-white/80 p-6 text-base-content shadow-2xl shadow-primary/20 backdrop-blur-xl transition-transform duration-300 md:hidden dark:bg-midnightMuted/80',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Menú</span>
        <button
          type="button"
          className="rounded-full border border-white/30 bg-white/40 px-3 py-1 text-sm font-medium shadow-sm hover:bg-white/70 dark:border-white/10 dark:bg-white/10"
          onClick={toggleSidebar}
          aria-label="Cerrar menú"
        >
          Cerrar
        </button>
      </div>
      <p className="mt-2 text-sm text-base-content/60">Explora cada capa del portafolio.</p>
      <nav className="mt-6 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={closeSidebar}
            end={item.to === '/'}
            className={({ isActive }) =>
              cn(
                'rounded-2xl px-4 py-3 text-base font-medium text-base-content/75 transition hover:bg-primary/10 hover:text-primary',
                isActive && 'bg-primary/15 text-primary shadow-glow'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-10 space-y-3">
        <div className="rounded-2xl border border-white/20 bg-white/40 p-4 text-sm shadow-sm dark:border-white/10 dark:bg-white/5">
          <p className="font-semibold text-base-content">¿Tienes un reto?</p>
          <p className="mt-1 text-base-content/70">Agenda una llamada estratégica y diseñemos la solución.</p>
          <Link
            to="/contact"
            onClick={closeSidebar}
            className="mt-3 inline-flex items-center text-sm font-semibold text-primary hover:text-aurora"
          >
            Ir a contacto →
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
