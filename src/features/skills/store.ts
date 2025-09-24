import { create } from 'zustand';

import type { Skill } from '@types/skill';
import { ApiError } from '@services/apiClient';
import { getSkills } from './service';

type SkillCategory = Skill['category'];

interface SkillsState {
  skills: Skill[];
  groupedSkills: Record<SkillCategory, Skill[]>;
  isLoading: boolean;
  error?: string;
  fetchSkills: () => Promise<void>;
}

export const useSkillsStore = create<SkillsState>((set, get) => ({
  skills: [],
  groupedSkills: {
    Frontend: [],
    Backend: [],
    DevOps: [],
    'UI/UX': [],
    Data: []
  },
  isLoading: false,
  error: undefined,
  fetchSkills: async () => {
    if (get().skills.length > 0) return;
    set({ isLoading: true, error: undefined });

    try {
      const skills = await getSkills();
      const grouped = skills.reduce<Record<SkillCategory, Skill[]>>((acc, skill) => {
        acc[skill.category] = [...(acc[skill.category] ?? []), skill];
        return acc;
      }, {
        Frontend: [],
        Backend: [],
        DevOps: [],
        'UI/UX': [],
        Data: []
      });

      set({ skills, groupedSkills: grouped, isLoading: false });
    } catch (error) {
      const message = error instanceof ApiError ? error.message : 'No pudimos obtener las habilidades.';
      set({ error: message, isLoading: false });
    }
  }
}));
