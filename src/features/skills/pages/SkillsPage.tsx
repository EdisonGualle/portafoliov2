import { useEffect } from 'react';

import Loader from '@shared/components/Loader';

import SkillsGrid from '../components/SkillsGrid';
import { useSkillsStore } from '../store';

const SkillsPage = (): JSX.Element => {
  const { skills, groupedSkills, isLoading, error, fetchSkills } = useSkillsStore((state) => ({
    skills: state.skills,
    groupedSkills: state.groupedSkills,
    isLoading: state.isLoading,
    error: state.error,
    fetchSkills: state.fetchSkills
  }));

  useEffect(() => {
    void fetchSkills();
  }, [fetchSkills]);

  if (isLoading && skills.length === 0) {
    return <Loader message="Cargando habilidades" />;
  }

  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-base-content">Mapa de habilidades</h1>
        <p className="max-w-2xl text-base-content/70">
          Una mirada a las tecnologías y procesos con los que disfruto construir productos. Desde ingeniería frontend hasta
          diseño centrado en las personas.
        </p>
      </header>

      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      <div className="space-y-8">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-base-content">{category}</h2>
              <span className="text-sm text-base-content/60">{categorySkills.length} skills</span>
            </div>
            <SkillsGrid skills={categorySkills} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
