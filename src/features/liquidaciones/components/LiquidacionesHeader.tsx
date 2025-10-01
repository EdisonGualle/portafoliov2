import { useLiquidacionesStore } from '../stores/liquidaciones.store';

export const LiquidacionesHeader = () => {
  const toggleModalNueva = useLiquidacionesStore((state) => state.toggleModalNueva);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-base-content">Liquidaciones pendientes</h1>
        <p className="text-base-content/70 text-sm">
          Consulta el avance de liquidaciones por asociación y registra nuevas solicitudes.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-outline btn-sm">Exportar</button>
        <button className="btn btn-primary" onClick={() => toggleModalNueva(true)}>
          Nueva Liquidación
        </button>
      </div>
    </div>
  );
};
