interface LiquidacionesResumenProps {
  totalAsignado: number;
  totalGastado: number;
  diferencia: number;
}

export const LiquidacionesResumen = ({ totalAsignado, totalGastado, diferencia }: LiquidacionesResumenProps) => (
  <div className="stats shadow w-full">
    <div className="stat">
      <div className="stat-title">Total Asignado</div>
      <div className="stat-value text-primary">
        {totalAsignado.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })}
      </div>
    </div>
    <div className="stat">
      <div className="stat-title">Total Gastado</div>
      <div className="stat-value text-secondary">
        {totalGastado.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })}
      </div>
    </div>
    <div className="stat">
      <div className="stat-title">Saldo</div>
      <div className={`stat-value ${diferencia >= 0 ? 'text-success' : 'text-error'}`}>
        {diferencia.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })}
      </div>
    </div>
  </div>
);
