import type { Liquidacion } from '../types/liquidacion';

const estadoBadgeStyles: Record<Liquidacion['estado'], string> = {
  Pendiente: 'badge-warning',
  'En Revisión': 'badge-info',
  Aprobada: 'badge-success',
  Rechazada: 'badge-error'
};

interface LiquidacionesTableProps {
  data: Liquidacion[];
  isLoading?: boolean;
}

export const LiquidacionesTable = ({ data, isLoading = false }: LiquidacionesTableProps) => {
  if (isLoading) {
    return (
      <div className="overflow-hidden rounded-box border border-base-200 bg-base-100 p-6 shadow-sm">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="skeleton h-4 w-32" />
              <span className="skeleton h-4 w-24" />
              <span className="skeleton h-4 w-24" />
              <span className="skeleton h-4 w-20" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="rounded-box border border-dashed border-base-200 bg-base-100 p-10 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-base-content">Sin liquidaciones registradas</h3>
        <p className="mt-2 text-sm text-base-content/70">
          Aún no se han registrado liquidaciones para las asociaciones. Usa el botón "Nueva Liquidación" para crear una
          solicitud.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-box border border-base-200 bg-base-100 shadow-sm">
      <table className="table">
        <thead>
          <tr>
            <th>Asociación</th>
            <th>Periodo</th>
            <th className="text-right">Monto Asignado</th>
            <th className="text-right">Monto Gastado</th>
            <th className="text-center">Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((liquidacion) => (
            <tr key={liquidacion.id}>
              <td>
                <div className="font-medium text-base-content/90">{liquidacion.asociacion}</div>
                <div className="text-sm text-base-content/60">{liquidacion.id}</div>
              </td>
              <td>{liquidacion.periodo}</td>
              <td className="text-right font-semibold">
                {liquidacion.montoAsignado.toLocaleString('es-PE', {
                  style: 'currency',
                  currency: 'PEN'
                })}
              </td>
              <td className="text-right">
                {liquidacion.montoGastado.toLocaleString('es-PE', {
                  style: 'currency',
                  currency: 'PEN'
                })}
              </td>
              <td className="text-center">
                <span className={`badge ${estadoBadgeStyles[liquidacion.estado]}`}>
                  {liquidacion.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
