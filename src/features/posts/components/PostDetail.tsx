import { formatDate } from '@shared/utils/date';
import MarkdownRenderer from '@shared/components/MarkdownRenderer';
import type { PostDetail } from '@types/post';
import { Reveal } from 'react-bits';

interface PostDetailProps {
  post: PostDetail;
}

const PostDetail = ({ post }: PostDetailProps): JSX.Element => {
  return (
    <article className="space-y-8">
      <Reveal className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-base-content/60">
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="text-4xl font-bold text-base-content lg:text-5xl">{post.title}</h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="badge badge-primary/80 bg-primary/10">
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      {post.heroImage && (
        <Reveal className="overflow-hidden rounded-3xl">
          <img src={post.heroImage} alt={post.title} className="aspect-video w-full object-cover" />
        </Reveal>
      )}

      <MarkdownRenderer content={post.content} />
    </article>
  );
};

export default PostDetail;
