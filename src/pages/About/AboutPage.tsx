import Card from '@shared/components/Card';
import { personalInfo } from '@shared/constants/personalInfo';
import { experienceTimeline } from '@shared/constants/timeline';
import { Reveal } from 'react-bits';

const AboutPage = (): JSX.Element => {
  return (
    <section className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-base-content">Detrás del código</h1>
        <p className="max-w-3xl text-lg text-base-content/70">
          {personalInfo.about.description}
        </p>
      </header>

      <Reveal className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <Card className="space-y-4 bg-base-100/80">
          <h2 className="text-2xl font-semibold text-base-content">Lo que me mueve</h2>
          <p className="text-base-content/70">
            Creo que el mejor software se construye cuando diseño y tecnología trabajan en sincronía. Me encanta traducir
            conversaciones complejas en experiencias intuitivas, diseñar sistemas que evolucionen en el tiempo y guiar equipos
            hacia entregas consistentes.
          </p>
          <p className="text-base-content/70">
            Fuera del código, me encontrarás coleccionando referencias visuales, componiendo música en sintetizadores analógicos
            o iterando ideas en cuadernos repletos de wireframes.
          </p>
        </Card>
        <Card className="space-y-4 bg-base-100/80">
          <h2 className="text-2xl font-semibold text-base-content">Manifiesto de trabajo</h2>
          <ul className="space-y-3 text-base-content/70">
            <li>· Diseño con intención: cada componente cuenta una historia.</li>
            <li>· Accesibilidad integrada, nunca añadida al final.</li>
            <li>· Métricas y feedback continuo para iterar con criterio.</li>
            <li>· Equipos empáticos que crean productos humanos.</li>
          </ul>
        </Card>
      </Reveal>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-base-content">Timeline de experiencia</h2>
        <div className="space-y-4">
          {experienceTimeline.map((item) => (
            <Reveal key={item.id}>
              <div className="flex flex-col gap-3 rounded-3xl border border-base-200 bg-base-100/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-wide text-primary/80">{item.period}</p>
                  <h3 className="text-xl font-semibold text-base-content">{item.title}</h3>
                </div>
                <p className="max-w-3xl text-base-content/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AboutPage;
