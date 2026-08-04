import { ArticlePageContent } from '@/components/article/ArticlePageContent';
import { getArticleBySlug, getRelatedArticles, toPost } from '@/services/articles';

export async function ArticlePage({ slug }: { slug: string }) {
  if (!slug) {
    return <ArticlePageContent post={null} relatedPosts={[]} isLoading={false} />;
  }

  try {
    const article = await getArticleBySlug(slug);

    if (!article) {
      return <ArticlePageContent post={null} relatedPosts={[]} isLoading={false} />;
    }

    const related = await getRelatedArticles(slug, article.category?._id);

    return <ArticlePageContent post={toPost(article)} relatedPosts={related.map(toPost)} isLoading={false} />;
  } catch (error) {
    console.error('Unable to load article', error);
    return <ArticlePageContent post={null} relatedPosts={[]} isLoading={false} />;
  }
}