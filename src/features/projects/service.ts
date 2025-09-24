import type { Project, ProjectDetail } from '@types/project';
import apiClient from '@services/apiClient';

export const getProjects = async (): Promise<Project[]> => {
  const response = await apiClient.get<Project[]>('/projects.json');
  return response.data;
};

export const getProjectById = async (projectId: string): Promise<ProjectDetail> => {
  const response = await apiClient.get<ProjectDetail>(`/projects/${projectId}.json`);
  return response.data;
};
