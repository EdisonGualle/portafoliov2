import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { buttonStyles } from '@shared/components/Button';
import Card from '@shared/components/Card';
import { personalInfo } from '@shared/constants/personalInfo';
import { experienceTimeline } from '@shared/constants/timeline';
import { useProjectsStore } from '@features/projects/store';
import { usePostsStore } from '@features/posts/store';
import { useSkillsStore } from '@features/skills/store';
import ProjectCard from '@features/projects/components/ProjectCard';
import PostCard from '@features/posts/components/PostCard';
import SkillBadge from '@features/skills/components/SkillBadge';
import { Float, Reveal, ScaleOnHover } from 'react-bits';

const HomePage = (): JSX.Element => {
  const { heroTitle, heroSubtitle, ctaPrimary, ctaSecondary, role } = personalInfo;

  const { featured, fetchProjects } = useProjectsStore((state) => ({
    featured: state.featured,
    fetchProjects: state.fetchProjects
  }));
  const { posts, fetchPosts } = usePostsStore((state) => ({ posts: state.posts, fetchPosts: state.fetchPosts }));
  const { skills, fetchSkills } = useSkillsStore((state) => ({ skills: state.skills, fetchSkills: state.fetchSkills }));

  useEffect(() => {
    void fetchProjects();
    void fetchPosts();
    void fetchSkills();
  }, [fetchProjects, fetchPosts, fetchSkills]);

  const highlightProjects = useMemo(() => featured.slice(0, 2), [featured]);
  const latestPosts = useMemo(() => posts.slice(0, 3), [posts]);
  const topSkills = useMemo(() => skills.slice(0, 6), [skills]);

  return (
    <div className="space-y-16">
      <section className="grid gap-10 pt-6 lg:grid-cols-[1.5fr,1fr] lg:items-center">
        <Reveal className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {role} · Disponible para nuevos retos
          </span>
          <h1 className="text-4xl font-bold leading-tight text-base-content md:text-5xl lg:text-6xl">{heroTitle}</h1>
          <p className="text-lg text-base-content/70 md:text-xl">{heroSubtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Link to={ctaPrimary.href} className={buttonStyles('primary', 'lg')}>
              {ctaPrimary.label}
            </Link>
            <Link to={ctaSecondary.href} className={buttonStyles('secondary', 'lg')}>
              {ctaSecondary.label}
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {experienceTimeline.slice(0, 3).map((item) => (
              <ScaleOnHover key={item.id}>
                <Card className="h-full bg-base-100/80">
                  <p className="text-xs uppercase tracking-wide text-primary/80">{item.period}</p>
                  <h3 className="mt-2 text-base font-semibold text-base-content">{item.title}</h3>
                  <p className="mt-3 text-sm text-base-content/70 line-clamp-3">{item.description}</p>
                </Card>
              </ScaleOnHover>
            ))}
          </div>
        </Reveal>
        <Float duration={7000} amplitude={14} className="mx-auto w-full max-w-md">
          <div className="rounded-[2.5rem] border border-base-200 bg-base-100/90 p-6 shadow-xl shadow-primary/10">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-base-content">Experiencia inmersiva</h2>
              <p className="text-base-content/70">
                Interfaces animadas, arquitectura escalable y una obsesión por la micro-interacción. Así construyo productos que
                la gente disfruta usar todos los días.
              </p>
              <ul className="space-y-3 text-sm text-base-content/70">
                <li>✔︎ Sistemas de diseño componibles</li>
                <li>✔︎ Performance y observabilidad integrados</li>
                <li>✔︎ Animaciones fluidas con foco en UX</li>
              </ul>
            </div>
          </div>
        </Float>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-base-content">Proyectos recientes</h2>
          <Link to="/projects" className={buttonStyles('ghost', 'sm')}>
            Ver todos
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {highlightProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-base-content">Últimas publicaciones</h2>
          <Link to="/posts" className={buttonStyles('ghost', 'sm')}>
            Leer más
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-base-content">Stack principal</h2>
          <Link to="/skills" className={buttonStyles('ghost', 'sm')}>
            Ver todas las skills
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topSkills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
