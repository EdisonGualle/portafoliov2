import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { buttonStyles } from '@shared/components/Button';

import { navItems } from './navItems';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'in' },
  { label: 'Behance', href: 'https://www.behance.net', icon: 'be' },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: 'db' },
  { label: 'GitHub', href: 'https://github.com', icon: 'gh' }
] as const;

const Footer = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setEmail('');
    window.setTimeout(() => setSubmitted(false), 2800);
  };

  return (
    <footer className="relative border-t border-base-200/70 bg-base-100/80 text-base-content/80">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)] opacity-70" />
      <div className="pointer-events-none absolute -top-32 right-16 h-60 w-60 rounded-full bg-primary/15 blur-3xl" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8 lg:px-12">
        <div className="md:col-span-2 space-y-4">
          <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
            Laura Méndez
            <span className="h-px w-12 bg-gradient-to-r from-primary/40 to-secondary/40" aria-hidden="true" />
          </p>
          <h3 className="text-2xl font-semibold text-base-content">Experiencias que combinan estrategia, diseño y código.</h3>
          <p className="max-w-xl text-sm text-base-content/70">
            Diseño productos digitales que convierten usuarios en fans leales. Cada entrega combina investigación, narrativa visual y ejecución técnica impecable.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-base-200/70 bg-base-100/80 text-sm font-semibold uppercase tracking-[0.2em] text-base-content/70 transition hover:border-primary/60 hover:text-primary"
                aria-label={`Visitar ${item.label}`}
              >
                <span className="group-hover:-translate-y-0.5 group-hover:scale-105 transition-transform duration-200">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold text-base-content">Mapa del sitio</p>
          <nav className="grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="rounded-lg px-2 py-1 text-base-content/70 transition hover:bg-base-200/70 hover:text-base-content">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold text-base-content">Recibe insights exclusivos</p>
          <p className="text-sm text-base-content/70">
            Tendencias de diseño de producto, casos de estudio y guías descargables directamente en tu bandeja.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3" aria-label="Suscripción a la newsletter">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="tu@email.com"
                className="w-full rounded-2xl border border-base-300 bg-base-100/80 px-4 py-3 text-sm shadow-sm transition focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className={`${buttonStyles('gradient', 'sm')} absolute right-1 top-1/2 -translate-y-1/2 px-4 py-2`}
              >
                Unirme
              </button>
            </div>
            {submitted && <p className="text-xs font-medium text-primary">¡Gracias! Te escribiré muy pronto.</p>}
          </form>
          <div className="space-y-1 text-sm">
            <p className="font-semibold text-base-content">Contacto directo</p>
            <a href="mailto:hola@lauramendez.dev" className="text-base-content/70 hover:text-primary">
              hola@lauramendez.dev
            </a>
            <p className="text-base-content/60">Disponible para colaboraciones selectas.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-base-200/80 bg-base-200/40 py-4">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-base-content/60 md:flex-row md:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Laura Méndez. Diseñado con cariño y obsesión por el detalle.</p>
          <div className="flex gap-3">
            <Link to="/privacy" className="hover:text-primary">
              Privacidad
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Términos
            </Link>
            <a href="mailto:hola@lauramendez.dev" className="hover:text-primary">
              Escríbeme
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
