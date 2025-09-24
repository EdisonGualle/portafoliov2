import type { Skill } from '@types/skill';

import SkillBadge from './SkillBadge';

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid = ({ skills }: SkillsGridProps): JSX.Element => {
  if (!skills.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/30 bg-white/40 p-10 text-center text-base-content shadow-glow backdrop-blur dark:border-white/10 dark:bg-white/5">
        <p className="text-base font-medium text-base-content/70">Pronto agregaré nuevas habilidades a esta colección.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <SkillBadge key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsGrid;
