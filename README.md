# Portafolio moderno con React 19

Configuración base para un portafolio interactivo construido con **React 19 (SPA)**, **Vite**, **TailwindCSS**, **daisyUI**, **Zustand**, **Axios** y animaciones provistas mediante utilidades compatibles con `react-bits`. El proyecto sigue una arquitectura modular por dominios para facilitar la escalabilidad y la colaboración entre equipos.

## Tecnologías clave

- React 19 RC + Vite
- TailwindCSS + daisyUI
- Zustand para estado global
- Axios con interceptores y manejo centralizado de errores
- Adaptadores compatibles con `react-bits` para animaciones y transiciones
- TypeScript con rutas absolutas y validaciones estrictas

## Estructura del proyecto

```
src/
  app/                # Configuración global: App, router, layouts, ErrorBoundary
  shared/             # Componentes atómicos, hooks, utils, constantes y tipos
  services/           # Cliente Axios y servicios generales
  stores/             # Stores globales de Zustand (uiStore, themeStore)
  features/           # Dominios autocontenidos (projects, posts, skills, ...)
  widgets/            # Bloques reutilizables (Navbar, Footer, Sidebar, ThemeToggle)
  pages/              # Páginas de alto nivel (Home, Explore, About, Contact, NotFound)
public/mock-api/      # Endpoints simulados para proyectos, posts y skills
```

Cada dominio dentro de `features/` contiene sus componentes, páginas internas, stores locales y servicios de datos. Esto permite escalar nuevas secciones replicando el mismo patrón.

## Funcionalidades implementadas

- **Home** con héroe animado, CTA y resúmenes de proyectos, posts y skills.
- **About** con información personal, manifiesto de trabajo y timeline interactivo.
- **Projects**: listado dinámico desde API mock, tarjetas animadas y vista detallada de cada proyecto.
- **Posts**: listado de artículos con contenido en markdown y vista de detalle.
- **Skills**: badges animados clasificados por categoría.
- **Contact**: formulario funcional que utiliza Axios (mock adapter) para enviar los datos.
- **Widgets globales**: Navbar sticky con búsqueda, Sidebar responsive, Footer y ThemeToggle conectado a Zustand.
- **Experiencia de navegación**: loader en transiciones, ErrorBoundary global y fallback a NotFound.

## Variables de entorno

Copia `.env.example` a `.env` y ajusta la URL base si cuentas con un backend real:

```
VITE_API_BASE_URL=/mock-api
```

## Scripts disponibles

| Comando        | Descripción                                    |
| -------------- | ---------------------------------------------- |
| `npm install`  | Instala las dependencias.                      |
| `npm run dev`  | Arranca el servidor de desarrollo en `5173`.   |
| `npm run build`| Genera el build de producción.                 |
| `npm run preview` | Previsualiza el build generado.             |

> Nota: en este entorno los paquetes no se descargan automáticamente. Ejecuta `npm install` en tu máquina para obtener todas las dependencias indicadas en `package.json`.

## Mock API

Los datos se sirven desde `public/mock-api` y se consumen a través del cliente Axios configurado con interceptores. Puedes sustituir estos archivos por una API real manteniendo los contratos actuales.

## Próximos pasos sugeridos

- Integrar un CMS o backend real.
- Añadir pruebas unitarias y E2E.
- Conectar analítica y monitoreo de performance.
- Extender la librería de widgets (timeline interactivo, testimonials, etc.).
