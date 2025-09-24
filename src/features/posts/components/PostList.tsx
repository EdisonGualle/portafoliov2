import type { Post } from '@types/post';

import PostCard from './PostCard';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps): JSX.Element => {
  if (!posts.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/30 bg-white/40 p-10 text-center text-base-content shadow-glow backdrop-blur dark:border-white/10 dark:bg-white/5">
        <p className="text-base font-medium text-base-content/70">Aún no hay artículos disponibles.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
