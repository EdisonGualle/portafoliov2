import { Link } from 'react-router-dom';

import { navItems } from './navItems';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', caption: 'Actualizaciones profesionales' },
  { label: 'Dribbble', href: 'https://dribbble.com', caption: 'Experimentos visuales' },
  { label: 'Github', href: 'https://github.com', caption: 'Código abierto y librerías' }
];

const Footer = (): JSX.Element => {
  return (
    <footer className="relative mt-12 overflow-hidden rounded-t-[2.5rem] border-t border-white/10 bg-white/30 text-base-content backdrop-blur-xl dark:border-white/5 dark:bg-white/5">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-80" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr,0.9fr,1fr]">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 text-lg font-semibold">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-aurora to-secondary text-primary-foreground shadow-glow">
                EG
              </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Edison Gualle
              </span>
            </Link>
            <p className="text-base text-base-content/80">
              Estrategia, diseño y código integrados para lanzar productos memorables. Creo experiencias que construyen confianza y crecimiento sostenido.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary shadow-glow hover:bg-primary/15"
            >
              Reserva una consultoría express →
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-base-content/60">Explorar</p>
            <nav className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="rounded-xl bg-white/40 px-4 py-3 text-base-content/80 transition hover:bg-primary/10 hover:text-primary dark:bg-white/10">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-base-content/60">Conecta</p>
            <ul className="mt-4 space-y-3 text-sm">
              {socialLinks.map((item) => (
                <li key={item.label} className="group rounded-2xl border border-white/20 bg-white/40 p-4 transition hover:border-primary/40 hover:bg-primary/10 dark:border-white/10 dark:bg-white/5">
                  <a href={item.href} target="_blank" rel="noreferrer" className="flex flex-col gap-1">
                    <span className="flex items-center justify-between text-base font-medium text-base-content">
                      {item.label}
                      <span aria-hidden="true" className="text-primary transition group-hover:translate-x-1">→</span>
                    </span>
                    <span className="text-xs text-base-content/60">{item.caption}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-base-content/60 md:flex-row md:items-center md:justify-between">
          <p>Disponible para colaboraciones selectas · hola@edisongualle.dev</p>
          <p>© {new Date().getFullYear()} Edison Gualle · Crafted with intención y tecnología.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
