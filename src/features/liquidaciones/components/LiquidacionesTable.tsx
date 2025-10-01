import type { Liquidacion } from '../mock/liquidacionesData';

const estadoBadgeStyles: Record<Liquidacion['estado'], string> = {
  Pendiente: 'badge-warning',
  'En Revisión': 'badge-info',
  Aprobada: 'badge-success',
  Rechazada: 'badge-error'
};

interface LiquidacionesTableProps {
  data: Liquidacion[];
}

export const LiquidacionesTable = ({ data }: LiquidacionesTableProps) => (
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
