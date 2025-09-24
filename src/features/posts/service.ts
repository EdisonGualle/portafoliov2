import apiClient from '@services/apiClient';
import type { Post, PostDetail } from '@types/post';

export const getPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get<Post[]>('/posts.json');
  return response.data;
};

export const getPostById = async (slug: string): Promise<PostDetail> => {
  const response = await apiClient.get<PostDetail>(`/posts/${slug}.json`);
  return response.data;
};
