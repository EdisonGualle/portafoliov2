import { create } from 'zustand';

import type { Project, ProjectDetail } from '@types/project';
import { ApiError } from '@services/apiClient';
import { getProjectById, getProjects } from './service';

interface ProjectsState {
  projects: Project[];
  featured: Project[];
  selectedProject?: ProjectDetail;
  isLoading: boolean;
  error?: string;
  fetchProjects: () => Promise<void>;
  fetchProjectById: (projectId: string) => Promise<ProjectDetail | undefined>;
  clearSelected: () => void;
}

export const useProjectsStore = create<ProjectsState>((set, get) => ({
  projects: [],
  featured: [],
  selectedProject: undefined,
  isLoading: false,
  error: undefined,
  fetchProjects: async () => {
    if (get().projects.length > 0) return;
    set({ isLoading: true, error: undefined });

    try {
      const projects = await getProjects();
      set({
        projects,
        featured: projects.filter((project) => project.featured),
        isLoading: false
      });
    } catch (error) {
      const message = error instanceof ApiError ? error.message : 'No fue posible cargar los proyectos.';
      set({ error: message, isLoading: false });
    }
  },
  fetchProjectById: async (projectId) => {
    const cachedProject = get().selectedProject;
    if (cachedProject && cachedProject.id === projectId) {
      return cachedProject;
    }

    set({ isLoading: true, error: undefined });

    try {
      const project = await getProjectById(projectId);
      set({ selectedProject: project, isLoading: false });
      return project;
    } catch (error) {
      const message = error instanceof ApiError ? error.message : 'No se encontró el proyecto solicitado.';
      set({ error: message, isLoading: false });
      return undefined;
    }
  },
  clearSelected: () => set({ selectedProject: undefined, error: undefined })
}));
