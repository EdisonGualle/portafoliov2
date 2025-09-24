import type { ReactNode } from 'react';

import { renderMarkdownBlocks } from '@shared/utils/markdown';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps): JSX.Element => {
  const blocks: ReactNode[] = renderMarkdownBlocks(content);

  return (
    <div className="prose prose-neutral max-w-none text-base-content/80 prose-headings:text-base-content prose-a:text-primary hover:prose-a:text-aurora dark:prose-invert">
      {blocks}
    </div>
  );
};

export default MarkdownRenderer;
