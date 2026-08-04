import { HomePageContent } from '@/components/homepage/HomePageContent';
import { getArticles, getFeaturedArticle, toPost } from '@/services/articles';

export async function HomePage() {
  try {
    const [articles, featured] = await Promise.all([getArticles(), getFeaturedArticle()]);
    const normalizedPosts = articles.map(toPost);
    const featuredPost = featured ? toPost(featured) : null;

    if (featuredPost) {
      normalizedPosts.unshift(featuredPost);
    }

    const posts = normalizedPosts.filter((post, index, array) => index === array.findIndex((entry) => entry._id === post._id));

    return <HomePageContent posts={posts} isLoading={false} />;
  } catch (error) {
    console.error('Unable to load content', error);
    return <HomePageContent posts={[]} isLoading={false} />;
  }
}