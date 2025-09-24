import { Link } from 'react-router-dom';

import { buttonStyles } from '@shared/components/Button';
import { Reveal } from 'react-bits';

const NotFoundPage = (): JSX.Element => {
  return (
    <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2.5rem] border border-white/20 bg-white/40 px-8 py-16 text-center text-base-content shadow-glow backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
      <span className="text-7xl">🪐</span>
      <h1 className="text-4xl font-bold text-base-content">Esta página se perdió en el cosmos</h1>
      <p className="max-w-lg text-base-content/70">
        La ruta que intentas visitar no existe o fue reubicada. Te invito a volver al inicio y seguir explorando el portafolio.
      </p>
      <Link to="/" className={buttonStyles('primary', 'lg')}>
        Volver al inicio
      </Link>
    </Reveal>
  );
};

export default NotFoundPage;
