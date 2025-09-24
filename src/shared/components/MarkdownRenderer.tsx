import type { ReactNode } from 'react';

import { renderMarkdownBlocks } from '@shared/utils/markdown';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps): JSX.Element => {
  const blocks: ReactNode[] = renderMarkdownBlocks(content);

  return <div className="prose prose-neutral max-w-none dark:prose-invert">{blocks}</div>;
};

export default MarkdownRenderer;
