import { Link } from 'react-router-dom';

import Card from '@shared/components/Card';
import { buttonStyles } from '@shared/components/Button';
import { formatDate } from '@shared/utils/date';
import type { Post } from '@types/post';
import { Reveal } from 'react-bits';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps): JSX.Element => {
  return (
    <Reveal>
      <Card className="flex h-full flex-col gap-5">
        <div className="flex items-center justify-between text-sm text-base-content/60">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-base-content">{post.title}</h3>
          <p className="text-base-content/70">{post.excerpt}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="badge badge-sm badge-primary/80 bg-primary/10">
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/posts/${post.slug}`} className={buttonStyles('secondary', 'md')}>
          Leer artículo
        </Link>
      </Card>
    </Reveal>
  );
};

export default PostCard;
