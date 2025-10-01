# Liquidación de Asignaciones

Este proyecto contiene el módulo de **Liquidación de Asignaciones a Asociaciones** construido con React 19, Vite, TailwindCSS y DaisyUI.

Actualmente se han completado las fases de maquetación y la integración inicial con servicios HTTP (GET/POST/PUT) utilizando Axios y un backend simulado con `axios-mock-adapter` para facilitar el desarrollo local.

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

### Mock API para desarrollo

Para mantener el flujo de trabajo desacoplado del backend definitivo, en modo desarrollo (`npm run dev`) se habilita un mock API basado en `axios-mock-adapter` que responde a las rutas:

- `GET /liquidaciones`: devuelve el listado de liquidaciones.
- `POST /liquidaciones`: registra una nueva liquidación.
- `PUT /liquidaciones/:id`: actualiza campos clave (monto asignado/gastado, estado, descripción).

Las respuestas utilizan los datos de `src/features/liquidaciones/mock/liquidacionesData.ts`, que pueden ampliarse según las necesidades de QA o demos.

Para conectar la aplicación con un backend real, define la variable de entorno `VITE_API_URL` en un archivo `.env` y la aplicación utilizará esa URL como `baseURL` por defecto para Axios.
