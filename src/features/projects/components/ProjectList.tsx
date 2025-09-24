import type { Project } from '@types/project';

import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps): JSX.Element => {
  if (!projects.length) {
    return (
      <div className="rounded-2xl border border-dashed border-base-300 bg-base-200/60 p-10 text-center">
        <p className="text-base font-medium text-base-content/70">
          Aún no hay proyectos publicados. Vuelve pronto ✨
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
