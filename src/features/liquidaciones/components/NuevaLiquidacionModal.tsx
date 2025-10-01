import { useLiquidacionesStore } from '../stores/liquidaciones.store';

export const NuevaLiquidacionModal = () => {
  const mostrarModalNueva = useLiquidacionesStore((state) => state.mostrarModalNueva);
  const toggleModalNueva = useLiquidacionesStore((state) => state.toggleModalNueva);

  return (
    <dialog className="modal" open={mostrarModalNueva}>
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-lg">Nueva Liquidación</h3>
        <p className="py-2 text-sm text-base-content/70">
          Esta es una maqueta de la fase 1. Los campos aún no realizan envíos reales.
        </p>
        <form className="grid grid-cols-1 gap-4 mt-4">
          <div className="form-control">
            <label className="label" htmlFor="asociacion">
              <span className="label-text">Asociación</span>
            </label>
            <input
              id="asociacion"
              className="input input-bordered"
              placeholder="Nombre de la asociación"
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="form-control">
              <label className="label" htmlFor="periodo">
                <span className="label-text">Periodo</span>
              </label>
              <input id="periodo" className="input input-bordered" placeholder="Ej. Abril 2024" />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="montoAsignado">
                <span className="label-text">Monto Asignado (S/)</span>
              </label>
              <input id="montoAsignado" className="input input-bordered" type="number" min="0" step="0.01" />
            </div>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="descripcion">
              <span className="label-text">Descripción</span>
            </label>
            <textarea id="descripcion" className="textarea textarea-bordered" rows={3} placeholder="Resumen del uso de la asignación" />
          </div>
        </form>
        <div className="modal-action">
          <button className="btn btn-ghost" type="button" onClick={() => toggleModalNueva(false)}>
            Cancelar
          </button>
          <button className="btn btn-primary" type="button">
            Guardar Borrador
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop" onSubmit={() => toggleModalNueva(false)}>
        <button type="submit">close</button>
      </form>
    </dialog>
  );
};
