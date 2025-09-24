import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { buttonStyles } from '@shared/components/Button';
import Loader from '@shared/components/Loader';
import ProjectDetail from '../components/ProjectDetail';
import { useProjectsStore } from '../store';

const ProjectDetailPage = (): JSX.Element => {
  const { projectId } = useParams<{ projectId: string }>();
  const { selectedProject, isLoading, error, fetchProjectById, clearSelected } = useProjectsStore((state) => ({
    selectedProject: state.selectedProject,
    isLoading: state.isLoading,
    error: state.error,
    fetchProjectById: state.fetchProjectById,
    clearSelected: state.clearSelected
  }));

  useEffect(() => {
    if (projectId) {
      void fetchProjectById(projectId);
    }

    return () => {
      clearSelected();
    };
  }, [projectId, fetchProjectById, clearSelected]);

  if (isLoading && !selectedProject) {
    return <Loader message="Cargando detalles del proyecto" />;
  }

  if (!projectId || (!selectedProject && error)) {
    return (
      <section className="space-y-6 text-center">
        <h1 className="text-3xl font-semibold text-base-content">No encontramos este proyecto</h1>
        <p className="text-base-content/70">Tal vez fue renombrado o ya no está disponible.</p>
        <Link to="/projects" className={buttonStyles('primary', 'md')}>
          Volver al listado
        </Link>
      </section>
    );
  }

  if (!selectedProject) {
    return <Loader message="Preparando vista" />;
  }

  return (
    <div className="space-y-8">
      <Link to="/projects" className={buttonStyles('ghost', 'sm')}>
        ← Volver a proyectos
      </Link>
      <ProjectDetail project={selectedProject} />
    </div>
  );
};

export default ProjectDetailPage;
