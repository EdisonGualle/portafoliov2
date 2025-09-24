import { useEffect, useMemo } from 'react';

import Loader from '@shared/components/Loader';
import { useDebouncedValue } from '@shared/hooks/useDebouncedValue';
import { useUIStore } from '@stores/uiStore';

import ProjectList from '../components/ProjectList';
import { useProjectsStore } from '../store';

const ProjectsPage = (): JSX.Element => {
  const { projects, featured, isLoading, error, fetchProjects } = useProjectsStore((state) => ({
    projects: state.projects,
    featured: state.featured,
    isLoading: state.isLoading,
    error: state.error,
    fetchProjects: state.fetchProjects
  }));

  const query = useDebouncedValue(useUIStore((state) => state.searchQuery), 300);

  useEffect(() => {
    void fetchProjects();
  }, [fetchProjects]);

  const filteredProjects = useMemo(() => {
    if (!query) return projects;
    const normalized = query.toLowerCase();
    return projects.filter((project) =>
      [project.title, project.summary, project.description, project.tags.join(' '), project.technologies.join(' ')]
        .join(' ')
        .toLowerCase()
        .includes(normalized)
    );
  }, [projects, query]);

  if (isLoading && projects.length === 0) {
    return <Loader message="Cargando proyectos seleccionados" />;
  }

  return (
    <section className="space-y-12">
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 px-6 py-10 text-base-content shadow-glow backdrop-blur-xl sm:px-12 dark:border-white/10 dark:bg-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-70" aria-hidden="true" />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-base-content md:text-5xl">Proyectos destacados</h1>
          <p className="max-w-3xl text-lg text-base-content/70">
            Explora productos diseñados end-to-end: arquitectura, research, interacción y despliegues automatizados. Cada proyecto equilibra narrativa, performance y negocio.
          </p>
        </div>
      </header>

      {featured.length > 0 && (
        <div className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-base-content">Selección curada</h2>
            <p className="max-w-2xl text-sm text-base-content/60">
              Conceptos que impulsaron métricas clave: onboarding sin fricción, dashboards accionables y experiencias que conectan con la marca.
            </p>
          </div>
          <ProjectList projects={featured} />
        </div>
      )}

      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-base-content">Todos los proyectos</h2>
            <p className="text-sm text-base-content/60">Filtra con el buscador global para encontrar tecnologías o industrias específicas.</p>
          </div>
          {query && (
            <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-glow">
              {filteredProjects.length} resultados para “{query}”
            </span>
          )}
        </div>
        {error && (
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        )}
        <ProjectList projects={filteredProjects} />
      </div>
    </section>
  );
};

export default ProjectsPage;
