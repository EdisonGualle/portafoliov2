import { create } from 'zustand';

import type { Post, PostDetail } from '@types/post';
import { ApiError } from '@services/apiClient';
import { getPostById, getPosts } from './service';

interface PostsState {
  posts: Post[];
  selectedPost?: PostDetail;
  isLoading: boolean;
  error?: string;
  fetchPosts: () => Promise<void>;
  fetchPostById: (slug: string) => Promise<PostDetail | undefined>;
  clearSelected: () => void;
}

export const usePostsStore = create<PostsState>((set, get) => ({
  posts: [],
  selectedPost: undefined,
  isLoading: false,
  error: undefined,
  fetchPosts: async () => {
    if (get().posts.length > 0) return;
    set({ isLoading: true, error: undefined });
    try {
      const posts = await getPosts();
      set({ posts, isLoading: false });
    } catch (error) {
      const message = error instanceof ApiError ? error.message : 'No pudimos cargar los artículos.';
      set({ error: message, isLoading: false });
    }
  },
  fetchPostById: async (slug) => {
    const cached = get().selectedPost;
    if (cached && cached.slug === slug) {
      return cached;
    }

    set({ isLoading: true, error: undefined });

    try {
      const post = await getPostById(slug);
      set({ selectedPost: post, isLoading: false });
      return post;
    } catch (error) {
      const message = error instanceof ApiError ? error.message : 'No encontramos este artículo.';
      set({ error: message, isLoading: false });
      return undefined;
    }
  },
  clearSelected: () => set({ selectedPost: undefined, error: undefined })
}));
