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
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 px-6 py-10 text-base-content shadow-glow backdrop-blur-xl sm:px-12 dark:border-white/10 dark:bg-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-70" aria-hidden="true" />
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-base-content md:text-5xl">Mapa de habilidades</h1>
          <p className="max-w-2xl text-base-content/70">
            Tecnologías, frameworks y rituales que sostienen cada proyecto. Desde arquitectura frontend hasta research continuo.
          </p>
        </div>
      </header>

      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      <div className="space-y-10">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="space-y-4 rounded-[2rem] border border-white/20 bg-white/40 p-6 text-base-content shadow-glow backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
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
