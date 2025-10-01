interface LiquidacionesResumenProps {
  totalAsignado: number;
  totalGastado: number;
  diferencia: number;
  isLoading?: boolean;
}

const formatCurrency = (value: number) =>
  value.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });

export const LiquidacionesResumen = ({
  totalAsignado,
  totalGastado,
  diferencia,
  isLoading = false
}: LiquidacionesResumenProps) => (
  <div className="stats w-full shadow">
    {[
      {
        label: 'Total Asignado',
        value: formatCurrency(totalAsignado),
        className: 'text-primary'
      },
      {
        label: 'Total Gastado',
        value: formatCurrency(totalGastado),
        className: 'text-secondary'
      },
      {
        label: 'Saldo',
        value: formatCurrency(diferencia),
        className: diferencia >= 0 ? 'text-success' : 'text-error'
      }
    ].map((stat) => (
      <div key={stat.label} className="stat">
        <div className="stat-title">{stat.label}</div>
        {isLoading ? (
          <div className="stat-value">
            <span className="skeleton h-8 w-40" />
          </div>
        ) : (
          <div className={`stat-value ${stat.className}`}>{stat.value}</div>
        )}
      </div>
    ))}
  </div>
);
