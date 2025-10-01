import { useMemo } from 'react';

import { useLiquidacionesStore } from '../stores/liquidaciones.store';

export const useLiquidaciones = () => {
  const liquidaciones = useLiquidacionesStore((state) => state.liquidaciones);
  const mostrarModalNueva = useLiquidacionesStore((state) => state.mostrarModalNueva);
  const toggleModalNueva = useLiquidacionesStore((state) => state.toggleModalNueva);

  const resumen = useMemo(() => {
    const totalAsignado = liquidaciones.reduce((acc, item) => acc + item.montoAsignado, 0);
    const totalGastado = liquidaciones.reduce((acc, item) => acc + item.montoGastado, 0);

    return {
      totalAsignado,
      totalGastado,
      diferencia: totalAsignado - totalGastado
    };
  }, [liquidaciones]);

  return {
    liquidaciones,
    mostrarModalNueva,
    toggleModalNueva,
    resumen
  };
};
