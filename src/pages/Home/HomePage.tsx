import { useEffect, useMemo, useState } from 'react';
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

const quickStats = [
  {
    id: 'impact',
    value: '42',
    label: 'Lanzamientos guiados',
    description: 'Productos end-to-end desplegados con métricas de adopción claras y seguimiento post-release.'
  },
  {
    id: 'growth',
    value: '4.7x',
    label: 'Impulso en conversión',
    description: 'Iteraciones sobre journeys críticos que conectan UX con objetivos de negocio.'
  },
  {
    id: 'teams',
    value: '14',
    label: 'Equipos acompañados',
    description: 'Squads potenciados con rituales de discovery, design ops y documentación viva.'
  },
  {
    id: 'timeline',
    value: '10 años',
    label: 'Construyendo experiencias',
    description: 'Una década integrando estrategia, visuales y código con foco en accesibilidad.'
  }
] as const;

const heroHighlights = [
  'Ingeniería frontend con visión de producto',
  'Design systems vivos y documentados',
  'Discovery continuo + métricas accionables'
] as const;

const processTimeline = [
  {
    id: '01',
    title: 'Descubrimiento inmersivo',
    description: 'Alineación con stakeholders, research con usuarios y priorización basada en datos.',
    outcome: 'Insight accionable'
  },
  {
    id: '02',
    title: 'Diseño y prototipado inmersivo',
    description: 'Prototipos de alta fidelidad, experimentos medibles y validaciones constantes.',
    outcome: 'Aprendizaje validado'
  },
  {
    id: '03',
    title: 'Delivery orquestado',
    description: 'Design systems robustos, handoff bilingüe y métricas conectadas a negocio.',
    outcome: 'Entrega consistente'
  }
] as const;

const themePresets = [
  {
    id: 'aurora',
    label: 'Aurora Tech',
    description: 'Energía vibrante para productos visionarios.',
    gradient: 'from-primary/80 via-secondary/75 to-accent/90',
    border: 'border-primary/50',
    accent: 'text-secondary'
  },
  {
    id: 'atlantic',
    label: 'Onda Ártica',
    description: 'Paleta fría con sensación futurista y ligera.',
    gradient: 'from-sky-500/80 via-cyan-400/70 to-emerald-400/75',
    border: 'border-cyan-200/50',
    accent: 'text-emerald-200'
  },
  {
    id: 'noir',
    label: 'Nocturno',
    description: 'Minimalismo sofisticado para conversaciones ejecutivas.',
    gradient: 'from-slate-900 via-midnightMuted/90 to-slate-800/90',
    border: 'border-white/25',
    accent: 'text-white'
  }
] as const;

const languagePresets = [
  {
    id: 'es',
    label: 'Español',
    greeting: 'Hola, soy Edison 👋',
    pitch:
      'Impulso experiencias digitales end-to-end para equipos latinos y globales, conectando estrategia y craft.',
    description: 'Narrativa nativa y documentación en español.',
    microcopy: 'Comunicación transparente, documentación bilingüe y entrega impecable.',
    ctaLabel: 'Agenda una llamada'
  },
  {
    id: 'en',
    label: 'English',
    greeting: "Hey, I'm Edison 👋",
    pitch: 'I craft purposeful digital products for teams that expect clarity, craft and measurable growth.',
    description: 'Tone of voice y entregables en inglés.',
    microcopy: 'Seamless bilingual handoff, KPI alignment and scalable design systems.',
    ctaLabel: 'Book a discovery call'
  }
] as const;

const focusModes = [
  {
    id: 'product',
    label: 'Producto digital',
    description: 'Ideal para SaaS y plataformas con roadmaps agresivos.',
    highlights: [
      'Discovery continuo con usuarios reales',
      'Roadmaps medibles conectados a KPIs',
      'DesignOps integrado al ciclo de desarrollo'
    ]
  },
  {
    id: 'teams',
    label: 'Equipos in-house',
    description: 'Coaching técnico y diseño de sistemas para escalar equipos internos.',
    highlights: [
      'Playbooks para escuadrones multidisciplinarios',
      'Mentorías y workshops especializados',
      'Sistema de diseño con librerías compartidas'
    ]
  },
  {
    id: 'launch',
    label: 'Lanzamientos rápidos',
    description: 'MVPs listos para validar mercado y crecer con solidez.',
    highlights: [
      'Narrativa y visuales listos para marketing',
      'Arquitectura escalable desde el día uno',
      'Ciclos de iteración cortos con analítica conectada'
    ]
  }
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
  const [selectedTheme, setSelectedTheme] = useState(themePresets[0].id);
  const [selectedLanguage, setSelectedLanguage] = useState(languagePresets[0].id);
  const [selectedFocus, setSelectedFocus] = useState(focusModes[0].id);

  const activeTheme = useMemo(
    () => themePresets.find((preset) => preset.id === selectedTheme) ?? themePresets[0],
    [selectedTheme]
  );
  const activeLanguage = useMemo(
    () => languagePresets.find((option) => option.id === selectedLanguage) ?? languagePresets[0],
    [selectedLanguage]
  );
  const activeFocus = useMemo(
    () => focusModes.find((mode) => mode.id === selectedFocus) ?? focusModes[0],
    [selectedFocus]
  );

  return (
    <div className="relative space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-white/40 px-6 py-12 text-base-content shadow-glow backdrop-blur-xl transition-colors sm:px-10 md:px-14 dark:border-white/10 dark:bg-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-80" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-32 left-20 hidden h-64 w-64 rounded-full bg-primary/30 blur-3xl mix-blend-screen lg:block" aria-hidden="true" />
        <div className="grid gap-12 lg:grid-cols-[1.35fr,1fr] lg:items-center">
          <Reveal className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-primary shadow-glow">
              {role} · Disponible
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.6rem]">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {heroTitle}
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-base-content/70 md:text-xl">{heroSubtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to={ctaPrimary.href} className={buttonStyles('primary', 'lg')}>
                {ctaPrimary.label}
              </Link>
              <Link to={ctaSecondary.href} className={buttonStyles('ghost', 'lg')}>
                {ctaSecondary.label}
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {heroHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="group flex items-center gap-3 rounded-2xl border border-white/30 bg-white/50 px-4 py-3 text-sm text-base-content/80 transition hover:border-primary/50 hover:bg-primary/10 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary/70 to-secondary/70 text-xs font-semibold text-primary-foreground shadow-glow">
                    ★
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="relative">
            <Float duration={8000} amplitude={18} className="mx-auto max-w-sm">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-midnight/80 via-midnightMuted/80 to-midnight/90 p-8 text-white shadow-2xl backdrop-blur">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.35),transparent_65%)]" aria-hidden="true" />
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.35em] text-secondary/80">Playbook</p>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                      Tiempo real
                    </span>
                  </div>
                  <p className="text-2xl font-semibold text-white">Experiencias orquestadas</p>
                  <p className="text-white/70">
                    Mezclo visuales, research y código para acelerar lanzamientos. Cada entrega conecta decisiones con métricas tangibles.
                  </p>
                  <div className="grid gap-3 text-sm text-white/70">
                    {quickStats.slice(0, 3).map((stat) => (
                      <div key={stat.id} className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-secondary/80">{stat.label}</p>
                          <p className="text-sm text-white/80">{stat.description}</p>
                        </div>
                        <span className="text-xl font-semibold text-secondary">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Float>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-base-content">Impacto medible en cada entrega</h2>
            <p className="max-w-2xl text-base text-base-content/70">
              Experimentos, analítica y comunicación transparente para que cada release impulse el negocio y la experiencia.
            </p>
          </div>
          <Link to="/projects" className={buttonStyles('outline', 'sm')}>
            Ver portafolio completo
          </Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickStats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 80}>
              <ScaleOnHover className="h-full">
                <Card className="group flex h-full flex-col justify-between border-white/30 bg-white/50 p-6 text-base-content shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="space-y-3">
                    <span className="text-4xl font-semibold text-primary">{stat.value}</span>
                    <h3 className="text-lg font-semibold text-base-content/90">{stat.label}</h3>
                    <p className="text-sm text-base-content/70">{stat.description}</p>
                  </div>
                  <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
                </Card>
              </ScaleOnHover>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <Reveal className="space-y-3">
          <h2 className="text-3xl font-semibold text-base-content">Personaliza la experiencia</h2>
          <p className="max-w-3xl text-base text-base-content/70">
            Experimenta con la narrativa, el lenguaje y la estética que mejor conectan con tu equipo. Este panel refleja cómo adapto cada colaboración a su contexto.
          </p>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[1.25fr,1fr]">
          <Card className="space-y-8 border-white/30 bg-white/55 dark:border-white/10 dark:bg-white/5" hoverable={false}>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-base-content/60">Paletas</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {themePresets.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setSelectedTheme(preset.id)}
                    className={cn(
                      'flex flex-col items-start gap-2 rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
                      selectedTheme === preset.id
                        ? 'border-primary/60 bg-primary/15 text-primary shadow-glow dark:border-primary/70 dark:bg-primary/20 dark:text-primary-foreground'
                        : 'border-white/25 bg-white/60 text-base-content/80 hover:border-primary/40 hover:bg-primary/10 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-base-content/70 dark:hover:border-primary/60 dark:hover:bg-primary/20'
                    )}
                  >
                    <span className="text-sm font-semibold">{preset.label}</span>
                    <span className="text-xs text-base-content/60">{preset.description}</span>
                    <span className={cn('h-1.5 w-full rounded-full bg-gradient-to-r', preset.gradient)} aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-base-content/60">Lenguaje</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {languagePresets.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedLanguage(option.id)}
                    className={cn(
                      'flex flex-col items-start gap-2 rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40',
                      selectedLanguage === option.id
                        ? 'border-secondary/60 bg-secondary/15 text-secondary shadow-glow-secondary dark:border-secondary/70 dark:bg-secondary/20 dark:text-slate-900'
                        : 'border-white/25 bg-white/60 text-base-content/80 hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary dark:border-white/10 dark:bg-white/5 dark:text-base-content/70 dark:hover:border-secondary/60 dark:hover:bg-secondary/20'
                    )}
                  >
                    <span className="text-sm font-semibold">{option.label}</span>
                    <span className="text-xs text-base-content/60">{option.description}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-base-content/60">Enfoque</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {focusModes.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setSelectedFocus(mode.id)}
                    className={cn(
                      'flex flex-col items-start gap-2 rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40',
                      selectedFocus === mode.id
                        ? 'border-accent/70 bg-accent/15 text-accent shadow-glow-accent dark:border-accent/80 dark:bg-accent/25 dark:text-slate-900'
                        : 'border-white/25 bg-white/60 text-base-content/80 hover:border-accent/50 hover:bg-accent/10 hover:text-accent dark:border-white/10 dark:bg-white/5 dark:text-base-content/70 dark:hover:border-accent/60 dark:hover:bg-accent/20'
                    )}
                  >
                    <span className="text-sm font-semibold">{mode.label}</span>
                    <span className="text-xs text-base-content/60">{mode.description}</span>
                  </button>
                ))}
              </div>
            </div>
          </Card>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-16 bg-hero-glow opacity-60 blur-3xl" aria-hidden="true" />
            <div
              className={cn(
                'relative overflow-hidden rounded-[2.5rem] border bg-slate-950/90 p-10 text-white shadow-2xl backdrop-blur-lg',
                activeTheme.border
              )}
            >
              <div className={cn('absolute inset-0 -z-10 bg-gradient-to-br opacity-90', activeTheme.gradient)} aria-hidden="true" />
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  {activeFocus.label}
                </span>
                <div className="space-y-3">
                  <p className="text-3xl font-semibold leading-tight">{activeLanguage.greeting}</p>
                  <p className="text-white/75">{activeLanguage.pitch}</p>
                </div>
                <ul className="space-y-3 text-sm text-white/80">
                  {activeFocus.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-white/90" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={cn(buttonStyles('primary', 'md'), 'w-full justify-center text-base font-semibold shadow-glow')}
                >
                  {activeLanguage.ctaLabel}
                </Link>
                <div className="space-y-1 text-xs text-white/70">
                  <p className="font-semibold uppercase tracking-[0.3em]">Tema {activeTheme.label}</p>
                  <p>{activeTheme.description}</p>
                  <p className="text-white/60">{activeLanguage.microcopy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="text-3xl font-semibold text-base-content">Proyectos recientes</h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/projects" className={buttonStyles('ghost', 'sm')}>
              Explorar proyectos
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {highlightProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="text-3xl font-semibold text-base-content">Experiencia destacada</h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/about" className={buttonStyles('ghost', 'sm')}>
              Ver trayectoria completa
            </Link>
          </Reveal>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-midnight/70 to-transparent dark:from-midnight" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-midnight/70 to-transparent dark:from-midnight" aria-hidden="true" />
          <div className="flex snap-x gap-6 overflow-x-auto pb-6 pr-6 sm:pr-0">
            {experienceTimeline.map((item, index) => (
              <Reveal key={item.id} delay={index * 80} className="min-w-[280px] snap-center">
                <Card className="h-full border-white/30 bg-white/50 p-6 text-base-content transition-colors dark:border-white/10 dark:bg-white/5">
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
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="text-3xl font-semibold text-base-content">Últimas publicaciones</h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/posts" className={buttonStyles('ghost', 'sm')}>
              Leer más ideas
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 120}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <Reveal className="space-y-3">
          <h2 className="text-3xl font-semibold text-base-content">Un proceso pensado para sorprender</h2>
          <p className="max-w-2xl text-base text-base-content/70">
            El journey completo, desde el primer workshop hasta el monitoreo en producción, diseñado para generar adopción sostenida y experiencias memorables.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {processTimeline.map((step, index) => (
            <Reveal key={step.id} delay={index * 120}>
              <ScaleOnHover className="h-full">
                <Card className="flex h-full flex-col justify-between border-white/30 bg-white/55 p-6 text-base-content backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                      Fase {step.id}
                    </span>
                    <h3 className="text-lg font-semibold text-base-content">{step.title}</h3>
                    <p className="text-sm text-base-content/70">{step.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-base-content/60">
                    <span>Resultado</span>
                    <span className="text-primary">{step.outcome}</span>
                  </div>
                </Card>
              </ScaleOnHover>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="text-3xl font-semibold text-base-content">Stack principal</h2>
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

      <section className="relative overflow-hidden rounded-[3rem] border border-primary/30 bg-gradient-to-br from-primary/15 via-white/50 to-secondary/15 p-12 text-base-content shadow-glow backdrop-blur-xl dark:border-primary/20 dark:from-primary/20 dark:via-midnightMuted/80 dark:to-secondary/20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.3),transparent_55%)]" aria-hidden="true" />
        <Reveal className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">
            ¿Listo para elevar la siguiente experiencia digital?
          </h2>
          <p className="max-w-3xl text-base-content/70 md:text-lg">
            Conecto estrategia, diseño y código para lanzar productos memorables. Hablemos de tu próximo reto y diseñemos juntos un roadmap irresistible.
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
