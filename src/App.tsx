import { Route, Routes } from 'react-router-dom';

import { LiquidacionesPage } from './features/liquidaciones/pages/LiquidacionesPage';
import { MainLayout } from './components/layout/MainLayout';

const App = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<LiquidacionesPage />} />
      <Route path="/liquidaciones" element={<LiquidacionesPage />} />
    </Routes>
  </MainLayout>
);

export default App;
