import { notFound } from 'next/navigation';
import { ArticlePage } from '@/views/ArticlePage';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ArticleRoute({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  return <ArticlePage slug={slug} />;
}
