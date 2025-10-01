import { useLiquidaciones } from '../hooks/useLiquidaciones';

export const LiquidacionesHeader = () => {
  const { toggleModalNueva, fetchLiquidaciones, fetchState } = useLiquidaciones();
  const isRefreshing = fetchState.status === 'loading';

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-base-content">Liquidaciones pendientes</h1>
        <p className="text-base-content/70 text-sm">
          Consulta el avance de liquidaciones por asociación y registra nuevas solicitudes.
        </p>
      </div>
      <div className="flex gap-2">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => {
            void fetchLiquidaciones();
          }}
          disabled={isRefreshing}
        >
          {isRefreshing ? <span className="loading loading-spinner" /> : 'Sincronizar'}
        </button>
        <button className="btn btn-primary" onClick={() => toggleModalNueva(true)}>
          Nueva Liquidación
        </button>
      </div>
    </div>
  );
};
