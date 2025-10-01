import { LiquidacionesFiltros } from '../components/LiquidacionesFiltros';
import { LiquidacionesHeader } from '../components/LiquidacionesHeader';
import { LiquidacionesResumen } from '../components/LiquidacionesResumen';
import { LiquidacionesTable } from '../components/LiquidacionesTable';
import { NuevaLiquidacionModal } from '../components/NuevaLiquidacionModal';
import { useLiquidaciones } from '../hooks/useLiquidaciones';

export const LiquidacionesPage = () => {
  const { liquidaciones, resumen, fetchState } = useLiquidaciones({ autoFetch: true });

  return (
    <section className="space-y-6">
      <LiquidacionesHeader />
      <LiquidacionesResumen {...resumen} isLoading={fetchState.status === 'loading'} />
      <LiquidacionesFiltros />
      {fetchState.status === 'error' && (
        <div className="alert alert-error">
          <span>{fetchState.error ?? 'Ocurrió un problema al obtener las liquidaciones. Inténtalo nuevamente.'}</span>
        </div>
      )}
      <LiquidacionesTable data={liquidaciones} isLoading={fetchState.status === 'loading'} />
      <NuevaLiquidacionModal />
    </section>
  );
};
