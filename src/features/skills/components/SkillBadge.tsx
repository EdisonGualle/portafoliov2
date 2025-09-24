import type { Skill } from '@types/skill';
import { Float, Reveal } from 'react-bits';

interface SkillBadgeProps {
  skill: Skill;
}

const levelColors: Record<Skill['level'], string> = {
  Aprendiz: 'badge-ghost',
  Intermedio: 'badge-info',
  Avanzado: 'badge-success',
  Experto: 'badge-primary'
};

const SkillBadge = ({ skill }: SkillBadgeProps): JSX.Element => {
  return (
    <Reveal>
      <Float amplitude={6} duration={5000}>
        <div className="group flex h-full flex-col rounded-3xl border border-white/25 bg-white/40 p-6 text-base-content shadow-glow transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-base-content">{skill.name}</h3>
            <span className={`badge ${levelColors[skill.level]}`}>{skill.level}</span>
          </div>
          <p className="mt-4 text-base-content/70">{skill.description}</p>
          <span className="mt-6 inline-flex w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {skill.category}
          </span>
        </div>
      </Float>
    </Reveal>
  );
};

export default SkillBadge;
