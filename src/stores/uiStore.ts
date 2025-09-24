import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  searchQuery: string;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  setSearchQuery: (value: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  searchQuery: '',
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
  setSearchQuery: (value) => set({ searchQuery: value })
}));
