export type EstadoLiquidacion = 'Pendiente' | 'En Revisión' | 'Aprobada' | 'Rechazada';

export interface Liquidacion {
  id: string;
  asociacion: string;
  periodo: string;
  montoAsignado: number;
  montoGastado: number;
  estado: EstadoLiquidacion;
  descripcion?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface NuevaLiquidacionPayload {
  asociacion: string;
  periodo: string;
  montoAsignado: number;
  montoGastado?: number;
  descripcion?: string;
  estado?: EstadoLiquidacion;
}

export interface ActualizarLiquidacionPayload {
  montoAsignado?: number;
  montoGastado?: number;
  estado?: EstadoLiquidacion;
  descripcion?: string;
}
