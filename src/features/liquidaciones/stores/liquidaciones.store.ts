import { create } from 'zustand';

import { getErrorMessage } from '../../../utils/error';
import { liquidacionesService } from '../services/liquidaciones.service';
import type {
  ActualizarLiquidacionPayload,
  Liquidacion,
  NuevaLiquidacionPayload
} from '../types/liquidacion';

interface AsyncState {
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
}

const createAsyncIdleState = (): AsyncState => ({ status: 'idle', error: null });

interface LiquidacionesState {
  liquidaciones: Liquidacion[];
  fetchState: AsyncState;
  mutationState: AsyncState;
  mostrarModalNueva: boolean;
  toggleModalNueva: (mostrar?: boolean) => void;
  fetchLiquidaciones: () => Promise<void>;
  crearLiquidacion: (payload: NuevaLiquidacionPayload) => Promise<Liquidacion | undefined>;
  actualizarLiquidacion: (
    id: Liquidacion['id'],
    payload: ActualizarLiquidacionPayload
  ) => Promise<Liquidacion | undefined>;
}

export const useLiquidacionesStore = create<LiquidacionesState>((set) => ({
  liquidaciones: [],
  fetchState: createAsyncIdleState(),
  mutationState: createAsyncIdleState(),
  mostrarModalNueva: false,
  toggleModalNueva: (mostrar) =>
    set((state) => ({
      mostrarModalNueva: mostrar ?? !state.mostrarModalNueva,
      mutationState: mostrar ? state.mutationState : createAsyncIdleState()
    })),
  fetchLiquidaciones: async () => {
    set({ fetchState: { status: 'loading', error: null } });
    try {
      const data = await liquidacionesService.listar();
      set({ liquidaciones: data, fetchState: { status: 'success', error: null } });
    } catch (error) {
      set({ fetchState: { status: 'error', error: getErrorMessage(error) } });
    }
  },
  crearLiquidacion: async (payload) => {
    set({ mutationState: { status: 'loading', error: null } });
    try {
      const nuevaLiquidacion = await liquidacionesService.crear(payload);
      set((state) => ({
        liquidaciones: [nuevaLiquidacion, ...state.liquidaciones],
        mutationState: createAsyncIdleState(),
        mostrarModalNueva: false
      }));
      return nuevaLiquidacion;
    } catch (error) {
      set({ mutationState: { status: 'error', error: getErrorMessage(error) } });
      return undefined;
    }
  },
  actualizarLiquidacion: async (id, payload) => {
    set({ mutationState: { status: 'loading', error: null } });
    try {
      const liquidacionActualizada = await liquidacionesService.actualizar(id, payload);
      set((state) => ({
        liquidaciones: state.liquidaciones.map((item) =>
          item.id === id ? liquidacionActualizada : item
        ),
        mutationState: { status: 'success', error: null }
      }));
      return liquidacionActualizada;
    } catch (error) {
      set({ mutationState: { status: 'error', error: getErrorMessage(error) } });
      return undefined;
    }
  }
}));
