import { axiosClient } from '../../../services/httpClient';
import type {
  ActualizarLiquidacionPayload,
  Liquidacion,
  NuevaLiquidacionPayload
} from '../types/liquidacion';

export const liquidacionesService = {
  listar: async () => {
    const response = await axiosClient.get<Liquidacion[]>('/liquidaciones');
    return response.data;
  },
  crear: async (payload: NuevaLiquidacionPayload) => {
    const response = await axiosClient.post<Liquidacion>('/liquidaciones', payload);
    return response.data;
  },
  actualizar: async (id: Liquidacion['id'], payload: ActualizarLiquidacionPayload) => {
    const response = await axiosClient.put<Liquidacion>(`/liquidaciones/${id}`, payload);
    return response.data;
  }
};
