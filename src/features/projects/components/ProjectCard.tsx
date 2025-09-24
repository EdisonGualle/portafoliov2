import { Link } from 'react-router-dom';

import Card from '@shared/components/Card';
import { buttonStyles } from '@shared/components/Button';
import type { Project } from '@types/project';
import { Reveal, ScaleOnHover } from 'react-bits';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <Reveal>
      <ScaleOnHover className="h-full">
        <Card className="flex h-full flex-col gap-6">
          <div className="relative overflow-hidden rounded-xl">
            <img src={project.cover} alt={project.title} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            {project.highlight && (
              <span className="absolute left-4 top-4 rounded-full bg-base-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {project.highlight}
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-base-content">{project.title}</h3>
              <p className="mt-2 text-base-content/70">{project.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge badge-outline badge-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              <Link to={`/projects/${project.id}`} className={buttonStyles('primary', 'md')}>
                Ver detalles
              </Link>
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className={buttonStyles('outline', 'md')}>
                  Código fuente
                </a>
              )}
            </div>
          </div>
        </Card>
      </ScaleOnHover>
    </Reveal>
  );
};

export default ProjectCard;
