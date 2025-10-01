import { create } from 'zustand';

import type { Liquidacion } from '../mock/liquidacionesData';
import { liquidacionesMock } from '../mock/liquidacionesData';

interface LiquidacionesState {
  liquidaciones: Liquidacion[];
  mostrarModalNueva: boolean;
  toggleModalNueva: (mostrar?: boolean) => void;
}

export const useLiquidacionesStore = create<LiquidacionesState>((set) => ({
  liquidaciones: liquidacionesMock,
  mostrarModalNueva: false,
  toggleModalNueva: (mostrar) =>
    set((state) => ({ mostrarModalNueva: mostrar ?? !state.mostrarModalNueva }))
}));
