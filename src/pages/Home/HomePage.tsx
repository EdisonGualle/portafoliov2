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
import { cn } from '@shared/utils/cn';

const heroHighlights = [
  {
    id: 'highlight-systems',
    title: 'Sistemas vivos',
    description: 'Design tokens, documentación viva y handoff impecable para lanzar sin fricción.'
  },
  {
    id: 'highlight-growth',
    title: 'Crecimiento medible',
    description: 'Experimentos guiados por funnel, analítica en tiempo real y métricas accionables.'
  },
  {
    id: 'highlight-experience',
    title: 'Experiencias inmersivas',
    description: 'Micro-interacciones con intención, accesibilidad pragmática y performance ágil.'
  }
] as const;

const heroSignals = [
  {
    id: 'signal-impact',
    label: 'Conversión promedio',
    value: '5x',
    badgeClass: 'bg-primary/15 text-primary',
    glowClass: 'from-primary/40 via-primary/10 to-transparent'
  },
  {
    id: 'signal-teams',
    label: 'Equipos potenciados',
    value: '12',
    badgeClass: 'bg-secondary/20 text-secondary',
    glowClass: 'from-secondary/50 via-secondary/10 to-transparent'
  },
  {
    id: 'signal-deliveries',
    label: 'Lanzamientos en producción',
    value: '48+',
    badgeClass: 'bg-accent/20 text-accent',
    glowClass: 'from-accent/40 via-accent/10 to-transparent'
  }
] as const;

const innovationTracks = [
  {
    id: 'track-journeys',
    icon: '🌀',
    title: 'Journeys adaptables',
    detail: 'Mapas de experiencia que se actualizan con señal de negocio real.'
  },
  {
    id: 'track-co',
    icon: '🤝',
    title: 'Co-creación estratégica',
    detail: 'Workshops inmersivos con stakeholders para alinear visión y entregables.'
  },
  {
    id: 'track-data',
    icon: '📊',
    title: 'Decisiones basadas en data',
    detail: 'Dashboards conectados al journey para iterar con evidencia.'
  },
  {
    id: 'track-motion',
    icon: '✨',
    title: 'Animación con propósito',
    detail: 'Micro-interacciones accesibles que refuerzan claridad y emoción.'
  }
] as const;

const quickStats = [
  {
    id: 'impact',
    value: '48+',
    label: 'Lanzamientos significativos',
    description: 'SaaS, plataformas educativas y experiencias inmersivas en producción.'
  },
  {
    id: 'growth',
    value: '5x',
    label: 'Aceleración promedio',
    description: 'Incremento en conversión al rediseñar journeys críticos con foco en métricas.'
  },
  {
    id: 'teams',
    value: '12',
    label: 'Equipos potenciados',
    description: 'Squads multidisciplinarios con procesos y herramientas compartidas.'
  },
  {
    id: 'timeline',
    value: '10 años',
    label: 'Construyendo experiencias',
    description: 'End-to-end product design con entregables listos para ingeniería.'
  }
] as const;

const processTimeline = [
  {
    id: '01',
    title: 'Descubrimiento inmersivo',
    description: 'Research mixto, sesiones de co-creación y análisis de datos para encontrar oportunidades claras.',
    outcome: 'Insight accionable'
  },
  {
    id: '02',
    title: 'Prototipado sensorial',
    description: 'Flows interactivos de alta fidelidad, pruebas iterativas y motion que guía la atención.',
    outcome: 'Aprendizaje validado'
  },
  {
    id: '03',
    title: 'Delivery orquestado',
    description: 'Design system componible, documentación viva y medición continua para el lanzamiento.',
    outcome: 'Entrega consistente'
  }
] as const;

const accentGradients = [
  'from-primary/60 via-primary/10 to-transparent',
  'from-secondary/60 via-secondary/10 to-transparent',
  'from-accent/70 via-accent/10 to-transparent',
  'from-primary/50 via-secondary/20 to-transparent'
] as const;

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
    <div className="relative space-y-24 pb-24">
      <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 mx-auto h-[520px] max-w-6xl rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl" />

      <section className="relative overflow-hidden rounded-[3rem] border border-base-200/60 bg-base-100/80 p-10 shadow-[0_32px_120px_-60px_rgba(99,102,241,0.65)] backdrop-blur lg:p-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.28),transparent_55%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-10 w-px bg-gradient-to-b from-transparent via-base-200/60 to-transparent" aria-hidden="true" />
        <div className="grid gap-12 lg:grid-cols-[1.3fr,1fr] lg:items-center">
          <Reveal className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-base-200/60 bg-base-100/90 px-5 py-2 text-sm font-medium text-base-content/70 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_0_4px_rgba(99,102,241,0.15)]" />
              {role} · disponible para colaborar
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-base-content md:text-5xl lg:text-6xl">{heroTitle}</h1>
              <p className="max-w-2xl text-lg text-base-content/70 md:text-xl">{heroSubtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to={ctaPrimary.href} className={buttonStyles('primary', 'lg')}>
                {ctaPrimary.label}
              </Link>
              <Link to={ctaSecondary.href} className={buttonStyles('secondary', 'lg')}>
                {ctaSecondary.label}
              </Link>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((highlight) => (
                <li
                  key={highlight.id}
                  className="group relative overflow-hidden rounded-2xl border border-base-200/60 bg-base-100/80 p-5 shadow-sm"
                >
                  <div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-semibold text-base-content">{highlight.title}</h3>
                  <p className="mt-2 text-xs text-base-content/60">{highlight.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Float duration={6800} amplitude={18} className="mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-[2.75rem] border border-base-200/70 bg-base-100/90 p-8 shadow-xl shadow-primary/15 backdrop-blur">
              <div className="absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-gradient-to-br from-primary/30 to-secondary/40 blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-16 right-0 h-52 w-52 rounded-full bg-gradient-to-br from-accent/30 to-primary/25 blur-3xl" aria-hidden="true" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-base-content/60">
                  <span>Experience Radar</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-base-200/70 px-3 py-1 text-[0.7rem] text-base-content/70">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    En vivo
                  </span>
                </div>
                <p className="text-2xl font-semibold text-base-content">
                  Diseño + código para activar productos memorables y medibles.
                </p>
                <p className="text-sm text-base-content/70">
                  Observabilidad, motion y accesibilidad integradas desde el primer prototipo hasta el release.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {heroSignals.map((signal) => (
                    <div
                      key={signal.id}
                      className="relative overflow-hidden rounded-2xl border border-base-200/60 bg-base-100/85 p-4 shadow-sm"
                    >
                      <div className={cn('absolute inset-0 -z-10 bg-gradient-to-br opacity-60', signal.glowClass)} aria-hidden="true" />
                      <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide', signal.badgeClass)}>
                        {signal.label}
                      </span>
                      <p className="mt-3 text-2xl font-semibold text-base-content">{signal.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Float>
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-[1.1fr,1fr] lg:items-start">
        <Reveal className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-base-content">Laboratorio de impacto</h2>
            <p className="max-w-xl text-base text-base-content/70">
              Conecto estrategia, UX research y delivery técnico para acelerar resultados. Cada iniciativa combina exploración
              creativa con medición constante.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {innovationTracks.map((track) => (
              <Card key={track.id} className="h-full bg-base-100/85 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {track.icon}
                  </span>
                  <h3 className="text-base font-semibold text-base-content">{track.title}</h3>
                </div>
                <p className="mt-3 text-sm text-base-content/70">{track.detail}</p>
              </Card>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {quickStats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 90}>
              <Card className="relative h-full overflow-hidden bg-base-100/85 p-6">
                <div className={cn('pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-70', accentGradients[index % accentGradients.length])} aria-hidden="true" />
                <div className="space-y-3">
                  <span className="text-4xl font-semibold text-base-content">{stat.value}</span>
                  <h3 className="text-lg font-semibold text-base-content/90">{stat.label}</h3>
                  <p className="text-sm text-base-content/70">{stat.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Reveal>
            <h2 className="text-3xl font-semibold text-base-content">Proyectos recientes</h2>
            <p className="max-w-xl text-sm text-base-content/60">
              Experimentos convertidos en productos listos para escalar: SaaS B2B, plataformas educativas y experiencias XR.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/projects" className={buttonStyles('ghost', 'sm')}>
              Ver todos
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {highlightProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 140}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
        <Reveal className="space-y-4">
          <h2 className="text-3xl font-semibold text-base-content">Trayectoria selecta</h2>
          <p className="max-w-md text-sm text-base-content/70">
            Liderando squads y diseñando productos end-to-end para fintech, edtech y startups en expansión.
          </p>
          <Link to="/about" className={buttonStyles('ghost', 'sm')}>
            Ver trayectoria completa
          </Link>
        </Reveal>
        <div className="relative pl-6">
          <div className="pointer-events-none absolute left-0 top-1 hidden h-full w-px bg-gradient-to-b from-primary/40 via-base-200 to-transparent sm:block" aria-hidden="true" />
          <div className="flex snap-x gap-6 overflow-x-auto pb-6 pr-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pr-0">
            {experienceTimeline.map((item, index) => (
              <Reveal key={item.id} delay={index * 120} className="min-w-[280px] snap-center">
                <Card className="relative h-full border-base-200/70 bg-base-100/85 p-6">
                  <span className="absolute -left-3 top-6 hidden h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 ring-4 ring-base-100 sm:flex" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{item.period}</p>
                  <h3 className="mt-4 text-lg font-semibold text-base-content">{item.title}</h3>
                  <p className="mt-3 text-sm text-base-content/70">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Reveal>
            <h2 className="text-3xl font-semibold text-base-content">Bitácora de aprendizajes</h2>
            <p className="max-w-xl text-sm text-base-content/60">
              Estrategias de producto, insights de investigación y notas sobre motion y accesibilidad.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/posts" className={buttonStyles('ghost', 'sm')}>
              Leer más
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 160}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <Reveal className="space-y-3">
          <h2 className="text-3xl font-semibold text-base-content">Framework de co-creación</h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Una cadencia clara para pasar de los hallazgos al release con seguridad. Cada fase mantiene a negocio, diseño y
            tecnología alineados.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {processTimeline.map((step, index) => (
            <Reveal key={step.id} delay={index * 130}>
              <ScaleOnHover className="h-full">
                <Card className="flex h-full flex-col justify-between border-base-200/70 bg-base-100/85 p-6">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Fase {step.id}
                    </span>
                    <h3 className="text-lg font-semibold text-base-content">{step.title}</h3>
                    <p className="text-sm text-base-content/70">{step.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-base-content/60">
                    <span>Entrega</span>
                    <span className="text-primary">{step.outcome}</span>
                  </div>
                </Card>
              </ScaleOnHover>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Reveal>
            <h2 className="text-3xl font-semibold text-base-content">Stack core</h2>
            <p className="max-w-xl text-sm text-base-content/60">
              Herramientas y tecnologías que utilizo para diseñar, prototipar y desplegar experiencias digitales.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/skills" className={buttonStyles('ghost', 'sm')}>
              Ver todas las skills
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topSkills.map((skill, index) => (
            <Reveal key={skill.id} delay={index * 80}>
              <SkillBadge skill={skill} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-base-100 to-secondary/15 p-12 text-base-content shadow-[0_40px_140px_-90px_rgba(59,130,246,0.65)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.4),transparent_60%)]" aria-hidden="true" />
        <Reveal className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">¿Listo para activar la próxima experiencia digital?</h2>
          <p className="max-w-3xl text-base-content/70 md:text-lg">
            Transformemos ideas en productos listos para crecer. Podemos co-crear una visión clara, prototipos medibles y un
            plan de entrega impecable.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className={buttonStyles('primary', 'lg')}>
              Reservar una sesión estratégica
            </Link>
            <Link to="/explore" className={buttonStyles('ghost', 'lg')}>
              Explorar estudios de caso
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default HomePage;
