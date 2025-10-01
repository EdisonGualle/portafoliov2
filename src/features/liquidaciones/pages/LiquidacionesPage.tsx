import { LiquidacionesFiltros } from '../components/LiquidacionesFiltros';
import { LiquidacionesHeader } from '../components/LiquidacionesHeader';
import { LiquidacionesResumen } from '../components/LiquidacionesResumen';
import { LiquidacionesTable } from '../components/LiquidacionesTable';
import { NuevaLiquidacionModal } from '../components/NuevaLiquidacionModal';
import { useLiquidaciones } from '../hooks/useLiquidaciones';

export const LiquidacionesPage = () => {
  const { liquidaciones, resumen } = useLiquidaciones();

  return (
    <section className="space-y-6">
      <LiquidacionesHeader />
      <LiquidacionesResumen {...resumen} />
      <LiquidacionesFiltros />
      <LiquidacionesTable data={liquidaciones} />
      <NuevaLiquidacionModal />
    </section>
  );
};
