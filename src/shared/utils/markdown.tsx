import { Fragment, type ReactNode } from 'react';

const escapeHtml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const inlineMarkdownToHtml = (text: string): string => {
  let html = escapeHtml(text);
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  return html;
};

export const renderMarkdownBlocks = (markdown: string): ReactNode[] => {
  const lines = markdown.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let listBuffer: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let codeLanguage = '';

  const flushList = () => {
    if (!listBuffer) return;
    const Tag = listBuffer.type === 'ul' ? 'ul' : 'ol';
    blocks.push(
      <Tag key={`list-${blocks.length}`} className="list-inside space-y-2 pl-4">
        {listBuffer.items.map((item, index) => (
          <li key={`list-item-${index}`} dangerouslySetInnerHTML={{ __html: inlineMarkdownToHtml(item) }} />
        ))}
      </Tag>
    );
    listBuffer = null;
  };

  const flushCode = () => {
    if (!inCodeBlock) return;
    blocks.push(
      <pre key={`code-${blocks.length}`} className="overflow-x-auto rounded-xl bg-base-300/60 p-4 text-sm">
        <code data-language={codeLanguage}>{codeBuffer.join('\n')}</code>
      </pre>
    );
    inCodeBlock = false;
    codeBuffer = [];
    codeLanguage = '';
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        flushCode();
      } else {
        flushList();
        inCodeBlock = true;
        codeLanguage = trimmed.replace('```', '').trim();
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      return;
    }

    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith('### ')) {
      flushList();
      blocks.push(
        <h3 key={`h3-${index}`} className="text-xl font-semibold">
          <span dangerouslySetInnerHTML={{ __html: inlineMarkdownToHtml(trimmed.slice(4)) }} />
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushList();
      blocks.push(
        <h2 key={`h2-${index}`} className="text-2xl font-semibold">
          <span dangerouslySetInnerHTML={{ __html: inlineMarkdownToHtml(trimmed.slice(3)) }} />
        </h2>
      );
      return;
    }

    if (trimmed.startsWith('# ')) {
      flushList();
      blocks.push(
        <h1 key={`h1-${index}`} className="text-3xl font-bold">
          <span dangerouslySetInnerHTML={{ __html: inlineMarkdownToHtml(trimmed.slice(2)) }} />
        </h1>
      );
      return;
    }

    if (trimmed.startsWith('>')) {
      flushList();
      blocks.push(
        <blockquote
          key={`quote-${index}`}
          className="border-l-4 border-primary/60 bg-primary/10 px-5 py-3 italic text-base-content/80"
        >
          <span dangerouslySetInnerHTML={{ __html: inlineMarkdownToHtml(trimmed.slice(1).trim()) }} />
        </blockquote>
      );
      return;
    }

    if (trimmed.startsWith('- ')) {
      if (!listBuffer || listBuffer.type !== 'ul') {
        flushList();
        listBuffer = { type: 'ul', items: [] };
      }
      listBuffer.items.push(trimmed.slice(2));
      return;
    }

    const orderedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (orderedMatch) {
      if (!listBuffer || listBuffer.type !== 'ol') {
        flushList();
        listBuffer = { type: 'ol', items: [] };
      }
      listBuffer.items.push(orderedMatch[2]);
      return;
    }

    flushList();
    blocks.push(
      <p key={`p-${index}`} className="leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: inlineMarkdownToHtml(trimmed) }} />
      </p>
    );
  });

  flushList();
  flushCode();

  if (blocks.length === 0) {
    return [<Fragment key="empty" />];
  }

  return blocks;
};
