import apiClient from '@services/apiClient';
import type { Skill } from '@types/skill';

export const getSkills = async (): Promise<Skill[]> => {
  const response = await apiClient.get<Skill[]>('/skills.json');
  return response.data;
};
