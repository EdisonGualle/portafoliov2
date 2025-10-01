import { useEffect, useMemo } from 'react';

import { useLiquidacionesStore } from '../stores/liquidaciones.store';

interface UseLiquidacionesOptions {
  autoFetch?: boolean;
}

export const useLiquidaciones = ({ autoFetch = false }: UseLiquidacionesOptions = {}) => {
  const liquidaciones = useLiquidacionesStore((state) => state.liquidaciones);
  const mostrarModalNueva = useLiquidacionesStore((state) => state.mostrarModalNueva);
  const toggleModalNueva = useLiquidacionesStore((state) => state.toggleModalNueva);
  const fetchState = useLiquidacionesStore((state) => state.fetchState);
  const mutationState = useLiquidacionesStore((state) => state.mutationState);
  const fetchLiquidaciones = useLiquidacionesStore((state) => state.fetchLiquidaciones);
  const crearLiquidacion = useLiquidacionesStore((state) => state.crearLiquidacion);
  const actualizarLiquidacion = useLiquidacionesStore((state) => state.actualizarLiquidacion);

  useEffect(() => {
    if (autoFetch && fetchState.status === 'idle') {
      void fetchLiquidaciones();
    }
  }, [autoFetch, fetchState.status, fetchLiquidaciones]);

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
    resumen,
    mostrarModalNueva,
    toggleModalNueva,
    fetchState,
    mutationState,
    fetchLiquidaciones,
    crearLiquidacion,
    actualizarLiquidacion
  };
};
