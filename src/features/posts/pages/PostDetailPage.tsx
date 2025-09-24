import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { buttonStyles } from '@shared/components/Button';
import Loader from '@shared/components/Loader';

import PostDetail from '../components/PostDetail';
import { usePostsStore } from '../store';

const PostDetailPage = (): JSX.Element => {
  const { postId } = useParams<{ postId: string }>();
  const { selectedPost, isLoading, error, fetchPostById, clearSelected } = usePostsStore((state) => ({
    selectedPost: state.selectedPost,
    isLoading: state.isLoading,
    error: state.error,
    fetchPostById: state.fetchPostById,
    clearSelected: state.clearSelected
  }));

  useEffect(() => {
    if (postId) {
      void fetchPostById(postId);
    }

    return () => {
      clearSelected();
    };
  }, [postId, fetchPostById, clearSelected]);

  if (isLoading && !selectedPost) {
    return <Loader message="Cargando artículo" />;
  }

  if (!postId || (!selectedPost && error)) {
    return (
      <section className="space-y-6 text-center">
        <h1 className="text-3xl font-semibold text-base-content">No encontramos este artículo</h1>
        <p className="text-base-content/70">Puede que haya sido movido o eliminado.</p>
        <Link to="/posts" className={buttonStyles('primary', 'md')}>
          Volver al blog
        </Link>
      </section>
    );
  }

  if (!selectedPost) {
    return <Loader message="Preparando lectura" />;
  }

  return (
    <div className="space-y-8">
      <Link to="/posts" className={buttonStyles('ghost', 'sm')}>
        ← Ver más artículos
      </Link>
      <PostDetail post={selectedPost} />
    </div>
  );
};

export default PostDetailPage;
