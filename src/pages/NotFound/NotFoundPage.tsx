import { Link } from 'react-router-dom';

import { buttonStyles } from '@shared/components/Button';
import { Reveal } from 'react-bits';

const NotFoundPage = (): JSX.Element => {
  return (
    <Reveal className="flex flex-col items-center gap-6 py-20 text-center">
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
