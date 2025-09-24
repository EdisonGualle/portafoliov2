import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Card from '@shared/components/Card';
import { buttonStyles } from '@shared/components/Button';
import { useDebouncedValue } from '@shared/hooks/useDebouncedValue';
import { useUIStore } from '@stores/uiStore';
import { useProjectsStore } from '@features/projects/store';
import { usePostsStore } from '@features/posts/store';
import { useSkillsStore } from '@features/skills/store';

const ExplorePage = (): JSX.Element => {
  const query = useDebouncedValue(useUIStore((state) => state.searchQuery), 300);
  const { projects, fetchProjects } = useProjectsStore((state) => ({ projects: state.projects, fetchProjects: state.fetchProjects }));
  const { posts, fetchPosts } = usePostsStore((state) => ({ posts: state.posts, fetchPosts: state.fetchPosts }));
  const { skills, fetchSkills } = useSkillsStore((state) => ({ skills: state.skills, fetchSkills: state.fetchSkills }));

  useEffect(() => {
    void fetchProjects();
    void fetchPosts();
    void fetchSkills();
  }, [fetchProjects, fetchPosts, fetchSkills]);

  const filteredProjects = useMemo(() => {
    if (!query) return projects.slice(0, 3);
    const normalized = query.toLowerCase();
    return projects.filter((project) => project.title.toLowerCase().includes(normalized)).slice(0, 5);
  }, [projects, query]);

  const filteredPosts = useMemo(() => {
    if (!query) return posts.slice(0, 3);
    const normalized = query.toLowerCase();
    return posts.filter((post) => post.title.toLowerCase().includes(normalized)).slice(0, 5);
  }, [posts, query]);

  const filteredSkills = useMemo(() => {
    if (!query) return skills.slice(0, 6);
    const normalized = query.toLowerCase();
    return skills.filter((skill) => skill.name.toLowerCase().includes(normalized)).slice(0, 8);
  }, [skills, query]);

  const hasQuery = Boolean(query);

  return (
    <section className="space-y-10">
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 px-6 py-10 text-base-content shadow-glow backdrop-blur-xl sm:px-12 dark:border-white/10 dark:bg-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-70" aria-hidden="true" />
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-base-content md:text-5xl">Explora el universo creativo</h1>
          <p className="max-w-2xl text-base-content/70">
            Utiliza el buscador para encontrar proyectos, artículos o habilidades específicas. Todo mi trabajo, en un solo lugar.
          </p>
        </div>
      </header>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-base-content">Proyectos</h2>
          <Link to="/projects" className={buttonStyles('ghost', 'sm')}>
            Ver proyectos
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col gap-3 border-white/20 bg-white/45">
              <h3 className="text-xl font-semibold text-base-content">{project.title}</h3>
              <p className="text-base-content/70 line-clamp-3">{project.summary}</p>
              <Link to={`/projects/${project.id}`} className={buttonStyles('ghost', 'sm')}>
                Ver detalle
              </Link>
            </Card>
          ))}
          {!filteredProjects.length && (
            <Card className="text-base-content/60">
              No encontré proyectos que coincidan {hasQuery ? `con “${query}”` : 'todavía'}.
            </Card>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-base-content">Artículos</h2>
          <Link to="/posts" className={buttonStyles('ghost', 'sm')}>
            Leer artículos
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="flex flex-col gap-3 border-white/20 bg-white/45">
              <h3 className="text-xl font-semibold text-base-content">{post.title}</h3>
              <p className="text-base-content/70 line-clamp-3">{post.excerpt}</p>
              <Link to={`/posts/${post.slug}`} className={buttonStyles('ghost', 'sm')}>
                Leer artículo
              </Link>
            </Card>
          ))}
          {!filteredPosts.length && (
            <Card className="text-base-content/60">No encontré artículos para esta búsqueda.</Card>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-base-content">Skills</h2>
          <Link to="/skills" className={buttonStyles('ghost', 'sm')}>
            Ver mapa completo
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <Card key={skill.id} className="border-white/20 bg-white/45">
              <h3 className="text-lg font-semibold text-base-content">{skill.name}</h3>
              <p className="mt-2 text-sm text-base-content/70">{skill.description}</p>
              <span className="mt-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {skill.category} · {skill.level}
              </span>
            </Card>
          ))}
          {!filteredSkills.length && (
            <Card className="text-base-content/60">Prueba con otra palabra clave.</Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExplorePage;
