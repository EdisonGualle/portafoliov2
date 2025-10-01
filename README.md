# Liquidación de Asignaciones

Este proyecto contiene la fase inicial (UI estática) del módulo de **Liquidación de Asignaciones a Asociaciones** construido con React 19, Vite, TailwindCSS y DaisyUI.

## Scripts disponibles

- `pnpm dev` / `npm run dev`: levanta el entorno de desarrollo.
- `pnpm build` / `npm run build`: compila la aplicación.
- `pnpm preview` / `npm run preview`: sirve la aplicación compilada.

## Estructura principal

El proyecto sigue una arquitectura modular basada en features:

```
src/
├── components/
├── features/
│   └── liquidaciones/
│       ├── components/
│       ├── hooks/
│       ├── mock/
│       ├── pages/
│       ├── services/
│       └── stores/
└── services/
```

La fase 1 maqueta la vista `/liquidaciones` con datos mock y componentes reutilizables listos para las siguientes fases de integración y validaciones.
