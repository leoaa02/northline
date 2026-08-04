import type { ReactNode } from 'react';

export interface PortableTextBlockLike {
  _type?: string;
  style?: string;
  children?: Array<{ _type?: string; text?: string }>;
}

function getTextFromBlock(block: PortableTextBlockLike): string {
  return block.children?.map((child) => child.text ?? '').join('') ?? '';
}

export function renderPortableText(blocks: PortableTextBlockLike[] = []): ReactNode[] {
  return blocks
    .map((block, index) => {
      const text = getTextFromBlock(block);

      if (!text) {
        return null;
      }

      if (block.style === 'h2') {
        return (
          <h2 key={`${block._type || 'block'}-${index}`} className="text-3xl mt-12 mb-6 border-l-4 border-accent pl-4 -ml-[20px]">
            {text}
          </h2>
        );
      }

      if (block.style === 'blockquote') {
        return (
          <blockquote key={`${block._type || 'block'}-${index}`} className="my-10 border-l-4 border-accent pl-6 font-serif text-2xl italic text-foreground/80">
            {text}
          </blockquote>
        );
      }

      return (
        <p key={`${block._type || 'block'}-${index}`} className="mb-6">
          {text}
        </p>
      );
    })
    .filter(Boolean) as ReactNode[];
}
