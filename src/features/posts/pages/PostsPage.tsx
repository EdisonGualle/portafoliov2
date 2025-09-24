import { useEffect, useMemo } from 'react';

import Loader from '@shared/components/Loader';
import { useDebouncedValue } from '@shared/hooks/useDebouncedValue';
import { useUIStore } from '@stores/uiStore';

import PostList from '../components/PostList';
import { usePostsStore } from '../store';

const PostsPage = (): JSX.Element => {
  const { posts, isLoading, error, fetchPosts } = usePostsStore((state) => ({
    posts: state.posts,
    isLoading: state.isLoading,
    error: state.error,
    fetchPosts: state.fetchPosts
  }));

  const query = useDebouncedValue(useUIStore((state) => state.searchQuery), 300);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  const filteredPosts = useMemo(() => {
    if (!query) return posts;
    const normalized = query.toLowerCase();
    return posts.filter((post) =>
      [post.title, post.excerpt, post.tags.join(' ')].join(' ').toLowerCase().includes(normalized)
    );
  }, [posts, query]);

  if (isLoading && posts.length === 0) {
    return <Loader message="Cargando artículos" />;
  }

  return (
    <section className="space-y-10">
      <header className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 px-6 py-10 text-base-content shadow-glow backdrop-blur-xl sm:px-12 dark:border-white/10 dark:bg-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-70" aria-hidden="true" />
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-base-content md:text-5xl">Ideas y aprendizajes</h1>
          <p className="max-w-2xl text-base-content/70">
            Reflexiones sobre arquitectura frontend, diseño de sistemas, accesibilidad y productividad creativa.
          </p>
        </div>
      </header>

      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      <PostList posts={filteredPosts} />
    </section>
  );
};

export default PostsPage;
