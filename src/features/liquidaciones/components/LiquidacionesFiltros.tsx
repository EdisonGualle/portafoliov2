export const LiquidacionesFiltros = () => (
  <section className="rounded-box border border-base-200 bg-base-100 p-4 shadow-sm">
    <h2 className="text-sm font-semibold text-base-content/80">Filtros rápidos</h2>
    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
      <label className="form-control w-full max-w-xs">
        <span className="label-text mb-1">Buscar asociación</span>
        <input className="input input-bordered input-sm" placeholder="Nombre o código" />
      </label>
      <label className="form-control w-full max-w-xs">
        <span className="label-text mb-1">Estado</span>
        <select className="select select-bordered select-sm">
          <option value="">Todos</option>
          <option>Pendiente</option>
          <option>En Revisión</option>
          <option>Aprobada</option>
          <option>Rechazada</option>
        </select>
      </label>
      <label className="form-control w-full max-w-xs">
        <span className="label-text mb-1">Periodo</span>
        <input className="input input-bordered input-sm" placeholder="Ej. 2024" />
      </label>
    </div>
  </section>
);
