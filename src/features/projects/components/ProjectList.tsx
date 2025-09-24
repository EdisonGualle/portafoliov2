import type { Project } from '@types/project';

import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps): JSX.Element => {
  if (!projects.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/30 bg-white/40 p-10 text-center text-base-content shadow-glow backdrop-blur dark:border-white/10 dark:bg-white/5">
        <p className="text-base font-medium text-base-content/70">Aún no hay proyectos publicados. Vuelve pronto ✨</p>
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
