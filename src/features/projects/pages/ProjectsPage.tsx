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
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-base-content">Proyectos destacados</h1>
        <p className="max-w-2xl text-lg text-base-content/70">
          Explora productos diseñados end-to-end: arquitectura, diseño de interacción, integración con APIs y despliegues
          automatizados. Cada proyecto está pensado para ser escalable y mantener una experiencia impecable.
        </p>
      </header>

      {featured.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-base-content">Selección curada</h2>
          <ProjectList projects={featured} />
        </div>
      )}

      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-base-content">Todos los proyectos</h2>
          {query && (
            <span className="badge badge-lg badge-outline">
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
