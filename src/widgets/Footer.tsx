import { Link } from 'react-router-dom';

import { navItems } from './navItems';

const Footer = (): JSX.Element => {
  return (
    <footer className="relative mt-10 border-t border-base-200/70 bg-base-100/80">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_65%)]" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 text-sm text-base-content/70 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-base font-semibold text-base-content">Laura Méndez · Frontend Engineer</p>
          <p className="mt-2 max-w-md text-sm">
            Diseño productos donde la tecnología se siente humana: research, visual storytelling y entrega técnica lista para escalar.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-base-content/70">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="rounded-lg px-2 py-1 transition hover:bg-primary/10 hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-1 text-right md:text-left">
          <p>Disponible para colaboraciones selectas.</p>
          <p className="font-medium text-base-content">hola@lauramendez.dev</p>
        </div>
      </div>
      <div className="border-t border-base-200/60 bg-base-200/40 py-4 text-center text-xs text-base-content/60">
        © {new Date().getFullYear()} Laura Méndez. Diseñado con cariño y código.
      </div>
    </footer>
  );
};

export default Footer;
