import type { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

export const MainLayout = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen flex flex-col">
    <header className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <span className="text-xl font-semibold">Liquidación de Asignaciones</span>
      </div>
      <nav className="flex gap-2">
        <NavLink className="btn btn-ghost" to="/liquidaciones">
          Liquidaciones
        </NavLink>
      </nav>
    </header>
    <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
  </div>
);
