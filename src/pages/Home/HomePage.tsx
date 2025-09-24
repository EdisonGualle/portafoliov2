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

const quickStats = [
  {
    id: 'impact',
    value: '48+',
    label: 'Lanzamientos significativos',
    description: 'Productos desplegados en producción, desde plataformas SaaS hasta experiencias inmersivas.'
  },
  {
    id: 'growth',
    value: '5x',
    label: 'Crecimiento de conversión',
    description: 'Incremento promedio tras rediseñar flujos críticos con métricas de funnel en mente.'
  },
  {
    id: 'teams',
    value: '12',
    label: 'Equipos potenciados',
    description: 'Liderando squads multidisciplinarios con metodologías de diseño colaborativo.'
  },
  {
    id: 'timeline',
    value: '10 años',
    label: 'Construyendo experiencias',
    description: 'Especializado en diseñar productos escalables y encantadores para empresas en crecimiento.'
  }
] as const;

const signatureMoves = [
  {
    id: 'journeys',
    title: 'Journeys asistidos por datos',
    description: 'Dashboards, telemetría y loops de feedback integrados desde la primera iteración para medir experiencia en tiempo real.',
    metric: 'Insights accionables en 2 semanas'
  },
  {
    id: 'systems',
    title: 'Sistemas de diseño vivos',
    description: 'Componentes escalables, tokens dinámicos y documentación viva para acelerar la entrega sin perder consistencia.',
    metric: 'Hand-off 40% más ágil'
  },
  {
    id: 'animation',
    title: 'Animaciones con propósito',
    description: 'Micro-interacciones y transiciones fluidas que guían la atención, incrementan la conversión y refuerzan la marca.',
    metric: 'Retención +18% en journeys clave'
  }
] as const;

const trustedBy = ['Figma', 'Shopify', 'Rippling', 'Hotjar', 'Canva', 'Linear'];

const serviceHighlights = [
  {
    id: 'discover',
    title: 'Discovery inmersivo',
    description: 'Workshops, entrevistas contextuales y mapas de experiencia para revelar oportunidades con alto ROI.',
    focus: 'Research & estrategia'
  },
  {
    id: 'prototype',
    title: 'Prototipado sensorial',
    description: 'Prototipos de alta fidelidad con narrativas, motion y accesibilidad integrada para validar con usuarios reales.',
    focus: 'UX + Motion'
  },
  {
    id: 'delivery',
    title: 'Delivery orquestado',
    description: 'Documentación viva, sistemas componibles y métricas conectadas a observabilidad para un lanzamiento impecable.',
    focus: 'Implementación'
  }
] as const;

const testimonials = [
  {
    id: '1',
    quote:
      'Laura nos ayudó a lanzar un rediseño global en 12 semanas, integrando motion, accesibilidad y métricas en cada decisión. El NPS subió 34 puntos.',
    author: 'Mariana Vázquez',
    role: 'VP Product · ClarityPay'
  },
  {
    id: '2',
    quote:
      'Convirtió un roadmap incierto en un journey memorable y medible. Su enfoque híbrido de diseño y código aceleró la entrega sin comprometer calidad.',
    author: 'Esteban Ruiz',
    role: 'Head of Design · AuroraAI'
  },
  {
    id: '3',
    quote:
      'Cada interacción respira marca y propósito. El equipo de ingeniería adoró su hand-off detallado y las animaciones ejecutables.',
    author: 'Daniela Ortega',
    role: 'Lead Engineer · Nova Labs'
  }
] as const;

const processTimeline = [
  {
    id: '01',
    title: 'Descubrimiento inmersivo',
    description:
      'Workshops, shadowing y mapas de experiencia para detectar fricciones y oportunidades de alto impacto.',
    outcome: 'Insight accionable'
  },
  {
    id: '02',
    title: 'Prototipado sensorial',
    description:
      'Flujos interactivos de alta fidelidad, micro-interacciones y pruebas moderadas para validar emociones y utilidad.',
    outcome: 'Aprendizaje validado'
  },
  {
    id: '03',
    title: 'Delivery orquestado',
    description:
      'Documentación viva, sistemas de diseño componibles y métricas conectadas a observabilidad para un lanzamiento impecable.',
    outcome: 'Entrega consistente'
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

  return (
    <div className="relative space-y-24 pb-20">
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-[420px] max-w-5xl rounded-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl" />

      <section className="grid gap-12 pt-8 lg:grid-cols-[1.45fr,1fr] lg:items-center">
        <Reveal className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium tracking-wide text-primary">
            {role} · Disponible para nuevos retos
          </span>
          <div className="space-y-5">
            <h1 className="text-4xl font-bold leading-tight text-base-content md:text-5xl lg:text-6xl">{heroTitle}</h1>
            <p className="text-lg text-base-content/70 md:text-xl">{heroSubtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to={ctaPrimary.href} className={buttonStyles('gradient', 'lg')}>
              {ctaPrimary.label}
            </Link>
            <Link to={ctaSecondary.href} className={buttonStyles('soft', 'lg')}>
              {ctaSecondary.label}
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {signatureMoves.map((move) => (
              <div
                key={move.id}
                className="group relative overflow-hidden rounded-2xl border border-base-200/60 bg-base-100/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{move.metric}</span>
                <h3 className="mt-2 text-sm font-semibold text-base-content">{move.title}</h3>
                <p className="mt-2 text-xs text-base-content/70">{move.description}</p>
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/20" />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Float duration={7000} amplitude={18} className="mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-[2.85rem] border border-base-200/70 bg-base-100/95 p-8 shadow-xl shadow-primary/10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-primary/30 to-secondary/40 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-gradient-to-br from-secondary/30 to-primary/20 blur-2xl" aria-hidden="true" />
            <div className="relative space-y-5">
              <p className="inline-flex items-center rounded-full bg-base-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Experiencias inmersivas
              </p>
              <h2 className="text-2xl font-semibold text-base-content">Diseño centrado en micro-interacciones</h2>
              <p className="text-base-content/70">
                Arquitectura escalable, accesibilidad pragmática y animaciones con intención. Cada detalle del journey está diseñado para activar emoción y claridad desde el primer scroll.
              </p>
              <ul className="space-y-3 text-sm text-base-content/70">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" /> Sistemas de diseño componibles y documentados
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary" /> Performance, métricas y observabilidad integradas
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" /> Animaciones fluidas con foco en UX y accesibilidad
                </li>
              </ul>
            </div>
          </div>
        </Float>
      </section>

      <section className="space-y-6">
        <Reveal className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-base-content/60">Marcas y equipos que han confiado</p>
          <Link to="/projects" className={buttonStyles('ghost', 'sm')}>
            Ver casos
          </Link>
        </Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-base-200/80 bg-base-100/60 py-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" aria-hidden="true" />
          <div className="flex items-center gap-12 overflow-hidden py-2">
            <div className="flex min-w-full animate-marquee items-center justify-around gap-12 text-base-content/50">
              {trustedBy.map((brand) => (
                <span key={brand} className="text-lg font-semibold tracking-[0.4em] uppercase text-base-content/50">
                  {brand}
                </span>
              ))}
            </div>
            <div className="flex min-w-full animate-marquee items-center justify-around gap-12 text-base-content/50" aria-hidden="true">
              {trustedBy.map((brand) => (
                <span key={`${brand}-clone`} className="text-lg font-semibold tracking-[0.4em] uppercase text-base-content/50">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <Reveal className="space-y-4">
          <h2 className="text-3xl font-semibold text-base-content">Impacto medible en cada entrega</h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Cada iniciativa se planifica con métricas de negocio y experiencia. Estos son algunos de los resultados recurrentes al diseñar productos centrados en las personas.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickStats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 80}>
              <ScaleOnHover className="h-full">
                <Card className="flex h-full flex-col justify-between bg-base-100/80 p-6 backdrop-blur">
                  <div className="space-y-4">
                    <span className="text-4xl font-semibold text-base-content">{stat.value}</span>
                    <h3 className="text-lg font-semibold text-base-content/90">{stat.label}</h3>
                    <p className="text-sm text-base-content/70">{stat.description}</p>
                  </div>
                  <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-primary/70 via-secondary/70 to-accent/70" />
                </Card>
              </ScaleOnHover>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <Reveal className="space-y-4">
          <h2 className="text-3xl font-semibold text-base-content">Soluciones modulares que elevan tu producto</h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Puedo incorporarme en cualquier fase del ciclo de producto para desbloquear entregas de alto impacto con claridad y velocidad.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((service, index) => (
            <Reveal key={service.id} delay={index * 120}>
              <Card className="h-full bg-base-100/85 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{service.focus}</span>
                <h3 className="mt-3 text-lg font-semibold text-base-content">{service.title}</h3>
                <p className="mt-3 text-sm text-base-content/70">{service.description}</p>
                <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-base-content/60">
                  <span>Entregables clave</span>
                  <span className="text-primary">Playbooks, journeys, diseño UI</span>
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
          </Reveal>
          <Reveal delay={120}>
            <Link to="/projects" className={buttonStyles('ghost', 'sm')}>
              Ver todos
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
        <div className="flex flex-wrap items-center justify-between gap-4">
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
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-base-100 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-base-100 to-transparent" aria-hidden="true" />
          <div className="flex snap-x gap-6 overflow-x-auto pb-6 pr-6 sm:pr-0">
            {experienceTimeline.map((item, index) => (
              <Reveal key={item.id} delay={index * 80} className="min-w-[280px] snap-center">
                <Card className="h-full bg-base-100/80 p-6">
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
            <h2 className="text-3xl font-semibold text-base-content">Últimas publicaciones</h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/posts" className={buttonStyles('ghost', 'sm')}>
              Leer más
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
            Desde el primer contacto hasta el lanzamiento, diseño experiencias memorables y coherentes. Así conecto estrategia, diseño y ejecución.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {processTimeline.map((step, index) => (
            <Reveal key={step.id} delay={index * 120}>
              <ScaleOnHover className="h-full">
                <Card className="flex h-full flex-col justify-between bg-base-100/85 p-6">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
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

      <section className="space-y-10">
        <Reveal className="space-y-3">
          <h2 className="text-3xl font-semibold text-base-content">Testimonios y resultados tangibles</h2>
          <p className="max-w-2xl text-base text-base-content/70">
            Equipos de producto y tecnología comparten cómo mis intervenciones elevaron cada release.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 120}>
              <Card className="h-full bg-base-100/85 p-6">
                <p className="text-base italic text-base-content/80">“{testimonial.quote}”</p>
                <div className="mt-6 space-y-1 text-sm">
                  <p className="font-semibold text-base-content">{testimonial.author}</p>
                  <p className="text-base-content/60">{testimonial.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
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

      <section className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 p-10 text-base-content shadow-xl">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]" aria-hidden="true" />
        <div className="absolute -right-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
        <Reveal className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">¿Listo para elevar la siguiente experiencia digital?</h2>
          <p className="max-w-3xl text-base-content/70 md:text-lg">
            Conecto estrategia, diseño y código para lanzar productos memorables. Hablemos sobre cómo podemos construir algo extraordinario para tu audiencia.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className={buttonStyles('gradient', 'lg')}>
              Reservar una sesión estratégica
            </Link>
            <Link to="/explore" className={buttonStyles('soft', 'lg')}>
              Explorar estudios de caso
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default HomePage;
