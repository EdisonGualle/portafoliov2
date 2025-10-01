import AxiosMockAdapter from 'axios-mock-adapter';

import { liquidacionesMock } from '../features/liquidaciones/mock/liquidacionesData';
import type {
  Liquidacion,
  NuevaLiquidacionPayload,
  ActualizarLiquidacionPayload
} from '../features/liquidaciones/types/liquidacion';
import { axiosClient } from '../services/httpClient';

let liquidacionesDb: Liquidacion[] = [...liquidacionesMock];

const generateLiquidacionId = () => {
  const consecutivo = (liquidacionesDb.length + 1).toString().padStart(3, '0');
  const year = new Date().getFullYear();
  return `LQ-${year}-${consecutivo}`;
};

const normalizeLiquidacion = (
  data: NuevaLiquidacionPayload,
  overrides?: Partial<Liquidacion>
): Liquidacion => ({
  id: overrides?.id ?? generateLiquidacionId(),
  asociacion: data.asociacion,
  periodo: data.periodo,
  montoAsignado: Number(data.montoAsignado),
  montoGastado: Number(data.montoGastado ?? 0),
  estado: data.estado ?? 'Pendiente',
  descripcion: data.descripcion,
  createdAt: overrides?.createdAt ?? new Date().toISOString(),
  updatedAt: overrides?.updatedAt ?? new Date().toISOString()
});

export const setupHttpMocks = () => {
  const mock = new AxiosMockAdapter(axiosClient, { delayResponse: 600 });

  mock.onGet('/liquidaciones').reply(() => [200, liquidacionesDb]);

  mock.onPost('/liquidaciones').reply((config) => {
    if (!config.data) {
      return [400, { message: 'Solicitud inválida' }];
    }

    const payload = JSON.parse(config.data) as NuevaLiquidacionPayload;

    if (
      !payload.asociacion ||
      !payload.periodo ||
      typeof payload.montoAsignado === 'undefined'
    ) {
      return [422, { message: 'Faltan datos requeridos para registrar la liquidación.' }];
    }

    const nuevaLiquidacion = normalizeLiquidacion(payload);
    liquidacionesDb = [nuevaLiquidacion, ...liquidacionesDb];

    return [201, nuevaLiquidacion];
  });

  mock.onPut(/\/liquidaciones\/[^/]+$/).reply((config) => {
    if (!config.url) {
      return [400, { message: 'Solicitud inválida' }];
    }

    const id = config.url.split('/').pop() as string;
    const liquidacion = liquidacionesDb.find((item) => item.id === id);

    if (!liquidacion) {
      return [404, { message: 'La liquidación indicada no existe.' }];
    }

    const payload = config.data ? (JSON.parse(config.data) as ActualizarLiquidacionPayload) : {};

    const liquidacionActualizada: Liquidacion = {
      ...liquidacion,
      montoAsignado:
        typeof payload.montoAsignado !== 'undefined'
          ? Number(payload.montoAsignado)
          : liquidacion.montoAsignado,
      montoGastado:
        typeof payload.montoGastado !== 'undefined'
          ? Number(payload.montoGastado)
          : liquidacion.montoGastado,
      estado: payload.estado ?? liquidacion.estado,
      descripcion: payload.descripcion ?? liquidacion.descripcion,
      updatedAt: new Date().toISOString()
    };

    liquidacionesDb = liquidacionesDb.map((item) => (item.id === id ? liquidacionActualizada : item));

    return [200, liquidacionActualizada];
  });

  return mock;
};

export const resetHttpMocks = () => {
  liquidacionesDb = [...liquidacionesMock];
};
