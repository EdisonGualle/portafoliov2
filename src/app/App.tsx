import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import Loader from '@shared/components/Loader';

import ErrorBoundary from './ErrorBoundary';
import { router } from './router';

const App = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loader fullScreen message="Preparando la experiencia" />}>
      <RouterProvider router={router} />
    </Suspense>
  </ErrorBoundary>
);

export default App;
