import { buttonStyles } from '@shared/components/Button';
import Card from '@shared/components/Card';
import type { ProjectDetail } from '@types/project';
import { Float, Reveal } from 'react-bits';

interface ProjectDetailProps {
  project: ProjectDetail;
}

const ProjectDetail = ({ project }: ProjectDetailProps): JSX.Element => {
  return (
    <article className="space-y-10">
      <Reveal className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div>
          <h1 className="text-4xl font-bold text-base-content lg:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg text-base-content/70">{project.longDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="badge badge-lg badge-outline">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className={buttonStyles('primary', 'md')}>
                Ver proyecto online
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className={buttonStyles('outline', 'md')}>
                Repositorio
              </a>
            )}
          </div>
        </div>
        <Float className="rounded-3xl border border-base-200 bg-base-100/80 p-6 shadow-lg shadow-primary/10">
          <h2 className="text-xl font-semibold">Tecnologías clave</h2>
          <ul className="mt-4 space-y-2 text-base-content/70">
            {project.technologies.map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80" aria-hidden="true" />
                {tech}
              </li>
            ))}
          </ul>
        </Float>
      </Reveal>

      <Reveal className="overflow-hidden rounded-3xl">
        <img src={project.cover} alt={project.title} className="aspect-video w-full object-cover" />
      </Reveal>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <h3 className="text-xl font-semibold text-base-content">Problema</h3>
          <p className="mt-3 text-base-content/70">{project.problem}</p>
        </Card>
        <Card className="lg:col-span-1">
          <h3 className="text-xl font-semibold text-base-content">Solución</h3>
          <p className="mt-3 text-base-content/70">{project.solution}</p>
        </Card>
        <Card className="lg:col-span-1">
          <h3 className="text-xl font-semibold text-base-content">Resultados</h3>
          <ul className="mt-3 space-y-2 text-base-content/70">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent/80" aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <Reveal className="grid gap-6 lg:grid-cols-2">
        {project.insights.map((insight) => (
          <Card key={insight} className="border-base-200/80 bg-base-100/80">
            <h4 className="text-lg font-semibold text-primary">Insight</h4>
            <p className="mt-2 text-base-content/70">{insight}</p>
          </Card>
        ))}
      </Reveal>
    </article>
  );
};

export default ProjectDetail;
