import type { Skill } from '@types/skill';

import SkillBadge from './SkillBadge';

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid = ({ skills }: SkillsGridProps): JSX.Element => {
  if (!skills.length) {
    return (
      <div className="rounded-2xl border border-dashed border-base-300 bg-base-200/60 p-10 text-center">
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
