import type { Post } from '@types/post';

import PostCard from './PostCard';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps): JSX.Element => {
  if (!posts.length) {
    return (
      <div className="rounded-2xl border border-dashed border-base-300 bg-base-200/60 p-10 text-center">
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
