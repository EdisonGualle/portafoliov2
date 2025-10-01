import { axiosClient } from '../../../services/httpClient';
import type { Liquidacion } from '../mock/liquidacionesData';

export const liquidacionesService = {
  listar: async () => {
    const response = await axiosClient.get<Liquidacion[]>('/liquidaciones');
    return response.data;
  },
  crear: async (payload: Partial<Liquidacion>) => {
    const response = await axiosClient.post<Liquidacion>('/liquidaciones', payload);
    return response.data;
  }
};
