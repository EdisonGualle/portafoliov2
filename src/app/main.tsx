import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AppProviders from './providers/AppProviders';
import '../index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el nodo raíz para montar la aplicación.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
