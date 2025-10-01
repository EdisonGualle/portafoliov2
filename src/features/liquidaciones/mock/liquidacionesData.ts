import type { Liquidacion } from '../types/liquidacion';

export const liquidacionesMock: Liquidacion[] = [
  {
    id: 'LQ-2024-001',
    asociacion: 'Asociación Cultural Horizonte',
    montoAsignado: 150000,
    montoGastado: 94500,
    estado: 'Pendiente',
    periodo: 'Enero 2024',
    descripcion: 'Liquidación trimestral de actividades culturales.'
  },
  {
    id: 'LQ-2024-002',
    asociacion: 'Fundación Manos Unidas',
    montoAsignado: 98000,
    montoGastado: 102500,
    estado: 'En Revisión',
    periodo: 'Febrero 2024',
    descripcion: 'Gastos operativos y programas de ayuda social.'
  },
  {
    id: 'LQ-2024-003',
    asociacion: 'Cooperativa Nueva Esperanza',
    montoAsignado: 200000,
    montoGastado: 198450,
    estado: 'Aprobada',
    periodo: 'Marzo 2024',
    descripcion: 'Financiamiento de proyectos agrícolas.'
  },
  {
    id: 'LQ-2024-004',
    asociacion: 'Asociación Deportiva Futuro',
    montoAsignado: 75000,
    montoGastado: 81200,
    estado: 'Rechazada',
    periodo: 'Abril 2024',
    descripcion: 'Organización de torneos juveniles.'
  }
];
