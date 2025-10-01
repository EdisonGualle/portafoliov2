import { FormEvent, useState } from 'react';

import { useLiquidaciones } from '../hooks/useLiquidaciones';

const initialFormState = {
  asociacion: '',
  periodo: '',
  montoAsignado: '',
  descripcion: ''
};

export const NuevaLiquidacionModal = () => {
  const { mostrarModalNueva, toggleModalNueva, crearLiquidacion, mutationState } = useLiquidaciones();
  const [formValues, setFormValues] = useState(initialFormState);

  const handleClose = () => {
    toggleModalNueva(false);
    setFormValues(initialFormState);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const montoAsignado = Number(formValues.montoAsignado);

    if (!formValues.asociacion || !formValues.periodo || Number.isNaN(montoAsignado)) {
      return;
    }

    const nueva = await crearLiquidacion({
      asociacion: formValues.asociacion,
      periodo: formValues.periodo,
      montoAsignado,
      descripcion: formValues.descripcion,
      montoGastado: 0,
      estado: 'Pendiente'
    });
    if (nueva) {
      setFormValues(initialFormState);
    }
  };

  return (
    <dialog className="modal" open={mostrarModalNueva}>
      <div className="modal-box max-w-2xl">
        <h3 className="text-lg font-bold">Nueva Liquidación</h3>
        <p className="py-2 text-sm text-base-content/70">
          Registra una nueva solicitud de liquidación para la asociación seleccionada.
        </p>
        <form className="grid grid-cols-1 gap-4 mt-4" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="asociacion">
              <span className="label-text">Asociación</span>
            </label>
            <input
              id="asociacion"
              className="input input-bordered"
              placeholder="Nombre de la asociación"
              type="text"
              value={formValues.asociacion}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, asociacion: event.target.value }))
              }
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="form-control">
              <label className="label" htmlFor="periodo">
                <span className="label-text">Periodo</span>
              </label>
              <input
                id="periodo"
                className="input input-bordered"
                placeholder="Ej. Abril 2024"
                value={formValues.periodo}
                onChange={(event) =>
                  setFormValues((prev) => ({ ...prev, periodo: event.target.value }))
                }
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="montoAsignado">
                <span className="label-text">Monto Asignado (S/)</span>
              </label>
              <input
                id="montoAsignado"
                className="input input-bordered"
                type="number"
                min="0"
                step="0.01"
                value={formValues.montoAsignado}
                onChange={(event) =>
                  setFormValues((prev) => ({ ...prev, montoAsignado: event.target.value }))
                }
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="descripcion">
              <span className="label-text">Descripción</span>
            </label>
            <textarea
              id="descripcion"
              className="textarea textarea-bordered"
              rows={3}
              placeholder="Resumen del uso de la asignación"
              value={formValues.descripcion}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, descripcion: event.target.value }))
              }
            />
          </div>
          {mutationState.status === 'error' && (
            <div className="alert alert-error">
              <span>{mutationState.error}</span>
            </div>
          )}
          <div className="modal-action">
            <button className="btn btn-ghost" type="button" onClick={handleClose}>
              Cancelar
            </button>
            <button className="btn btn-primary" type="submit" disabled={mutationState.status === 'loading'}>
              {mutationState.status === 'loading' ? (
                <span className="loading loading-spinner" />
              ) : (
                'Guardar Borrador'
              )}
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop" onSubmit={handleClose}>
        <button type="submit">close</button>
      </form>
    </dialog>
  );
};
