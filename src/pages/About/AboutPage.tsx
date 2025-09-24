import Card from '@shared/components/Card';
import { personalInfo } from '@shared/constants/personalInfo';
import { experienceTimeline } from '@shared/constants/timeline';
import { Reveal } from 'react-bits';

const principles = [
  'Estrategia y narrativa conectadas a métricas',
  'Accesibilidad diseñada desde el primer trazo',
  'Colaboración radical con equipos multidisciplinarios',
  'Entrega continua con diseño de sistemas vivos'
];

const AboutPage = (): JSX.Element => {
  return (
    <section className="space-y-12">
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 px-6 py-12 text-base-content shadow-glow backdrop-blur-xl sm:px-12 dark:border-white/10 dark:bg-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-80" aria-hidden="true" />
        <Reveal className="space-y-5">
          <h1 className="text-4xl font-bold text-base-content md:text-5xl">
            Detrás del código, una visión estratégica
          </h1>
          <p className="max-w-3xl text-lg text-base-content/70 md:text-xl">{personalInfo.about.description}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle} className="flex items-center gap-3 rounded-2xl border border-white/25 bg-white/50 px-4 py-3 text-sm text-base-content/80 dark:border-white/10 dark:bg-white/5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary via-aurora to-secondary text-xs font-semibold text-primary-foreground">
                  ✓
                </span>
                {principle}
              </li>
            ))}
          </ul>
        </Reveal>
      </header>

      <Reveal className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <Card className="space-y-4 border-white/25 bg-white/50 text-base-content dark:border-white/10 dark:bg-white/5">
          <h2 className="text-2xl font-semibold text-base-content">Lo que me mueve</h2>
          <p className="text-base-content/70">
            Creo que el mejor software se construye cuando diseño y tecnología trabajan en sincronía. Me encanta traducir conversaciones complejas en experiencias intuitivas y diseñar sistemas que evolucionen en el tiempo.
          </p>
          <p className="text-base-content/70">
            Fuera del código, colecciono referencias visuales, compongo música en sintetizadores analógicos y lleno cuadernos con wireframes y patrones.
          </p>
        </Card>
        <Card className="space-y-4 border-white/25 bg-white/50 text-base-content dark:border-white/10 dark:bg-white/5">
          <h2 className="text-2xl font-semibold text-base-content">Manifiesto de trabajo</h2>
          <ul className="space-y-3 text-base-content/70">
            <li>Diseño con intención: cada componente cuenta una historia.</li>
            <li>Accesibilidad integrada, nunca añadida al final.</li>
            <li>Métricas y feedback continuo para iterar con criterio.</li>
            <li>Equipos empáticos que crean productos humanos.</li>
          </ul>
        </Card>
      </Reveal>

      <section className="space-y-6">
        <Reveal>
          <h2 className="text-3xl font-semibold text-base-content">Timeline de experiencia</h2>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-2">
          {experienceTimeline.map((item) => (
            <Reveal key={item.id}>
              <div className="group flex flex-col gap-3 rounded-[2rem] border border-white/20 bg-white/40 p-6 text-base-content shadow-glow transition hover:border-primary/40 hover:bg-primary/10 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm uppercase tracking-[0.3em] text-primary/80">{item.period}</p>
                <h3 className="text-xl font-semibold text-base-content">{item.title}</h3>
                <p className="text-base-content/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AboutPage;
