import { Link } from 'react-router-dom';

import { navItems } from './navItems';

const Footer = (): JSX.Element => {
  return (
    <footer className="border-t border-base-200 bg-base-100/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-base-content/70 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-semibold text-base-content">Laura Méndez · Frontend Engineer</p>
          <p className="mt-2 max-w-md">
            Construyendo productos digitales que combinan narrativa visual, ingeniería sólida y experiencias accesibles.
          </p>
        </div>
        <nav className="flex flex-wrap gap-3 text-base-content/70">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-1 text-right md:text-left">
          <p>Disponible para colaboraciones selectas.</p>
          <p className="font-medium text-base-content">hola@lauramendez.dev</p>
        </div>
      </div>
      <div className="border-t border-base-200/80 bg-base-200/50 py-4 text-center text-xs text-base-content/60">
        © {new Date().getFullYear()} Laura Méndez. Diseñado con cariño y código.
      </div>
    </footer>
  );
};

export default Footer;
