import { mockPosts, type Post } from '@/types/content';
import { sanityClient, isSanityConfigured } from '@/sanity/client';
import { articleBySlugQuery, articleListQuery, featuredArticleQuery, relatedArticlesQuery } from '@/sanity/queries/articles';
import type { ArticleListItem } from '@/types/article';

const SANITY_REQUEST_TIMEOUT_MS = 2500;
const SANITY_RUNTIME_ENABLED = process.env.NEXT_PUBLIC_ENABLE_SANITY_BROWSER === 'true' || process.env.ENABLE_SANITY_FETCH === 'true';

function canUseSanityInCurrentRuntime() {
  if (!isSanityConfigured) {
    return false;
  }

  // Keep Sanity reads opt-in to preserve stable rendering across local/dev environments.
  if (!SANITY_RUNTIME_ENABLED) {
    return false;
  }

  return true;
}

async function fetchFromSanity<T>(query: string, params?: Record<string, unknown>) {
  if (!sanityClient) {
    throw new Error('Sanity client is not configured');
  }

  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  try {
    const fetchPromise = params
      ? sanityClient.fetch<T>(query, params)
      : sanityClient.fetch<T>(query);

    const timeoutPromise = new Promise<T>((_, reject) => {
      timeoutId = setTimeout(() => {
        reject(new Error('Sanity request timed out'));
      }, SANITY_REQUEST_TIMEOUT_MS);
    });

    return await Promise.race([
      fetchPromise,
      timeoutPromise,
    ]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

function normalizeArticle(raw: Record<string, any>): ArticleListItem {
  return {
    _id: raw._id,
    title: raw.title,
    slug: { current: raw.slug },
    excerpt: raw.excerpt || '',
    body: raw.body || [],
    mainImage: {
      url: raw.mainImage?.url || raw.mainImage?.asset?.url || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
      alt: raw.mainImage?.alt || raw.title,
    },
    category: raw.category
      ? {
          _id: raw.category._id,
          name: raw.category.name,
          slug: { current: raw.category.slug },
          color: raw.category.color,
          description: raw.category.description,
        }
      : undefined,
    author: raw.author
      ? {
          _id: raw.author._id,
          name: raw.author.name,
          photo: raw.author.photo,
          bio: raw.author.bio,
          socialLinks: raw.author.socialLinks,
        }
      : undefined,
    publishedAt: raw.publishedAt || new Date().toISOString(),
    isFeatured: raw.isFeatured || false,
    readingTime: raw.readingTime || 5,
    seo: raw.seo,
  };
}

function normalizePost(article: ArticleListItem): Post {
  return {
    _id: article._id,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    featuredImage: {
      url: article.mainImage?.url || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
      alt: article.mainImage?.alt || article.title,
    },
    category: {
      _id: article.category?._id || 'cat-fallback',
      title: article.category?.name || 'General',
      slug: { current: article.category?.slug?.current || (typeof article.category?.slug === 'string' ? article.category.slug : 'general') },
      color: article.category?.color,
    },
    author: {
      _id: article.author?._id || 'author-fallback',
      name: article.author?.name || 'Editor',
      bio: article.author?.bio,
    },
    publishedAt: article.publishedAt || new Date().toISOString(),
    body: article.body || [],
    lang: 'es',
  };
}

function fallbackArticles() {
  return mockPosts.map((post) => normalizeArticle({
    _id: post._id,
    title: post.title,
    slug: post.slug.current,
    excerpt: post.excerpt,
    mainImage: { url: post.featuredImage.url, alt: post.featuredImage.alt },
    category: { _id: post.category._id, name: post.category.title, slug: post.category.slug.current, color: post.category.color },
    author: { _id: post.author._id, name: post.author.name, bio: post.author.bio },
    publishedAt: post.publishedAt,
    body: post.body,
    isFeatured: false,
    readingTime: 5,
  }));
}

export async function getArticles(): Promise<ArticleListItem[]> {
  if (!canUseSanityInCurrentRuntime()) {
    return fallbackArticles();
  }

  try {
    const data = await fetchFromSanity<ArticleListItem[]>(articleListQuery);
    const normalized = (data || []).map(normalizeArticle);
    return normalized.length > 0 ? normalized : fallbackArticles();
  } catch (error) {
    console.error('Error loading articles from Sanity', error);
    return fallbackArticles();
  }
}

export async function getFeaturedArticle(): Promise<ArticleListItem | null> {
  if (!canUseSanityInCurrentRuntime()) {
    const fallback = mockPosts[0];
    return normalizeArticle({
      _id: fallback._id,
      title: fallback.title,
      slug: fallback.slug.current,
      excerpt: fallback.excerpt,
      mainImage: { url: fallback.featuredImage.url, alt: fallback.featuredImage.alt },
      category: { _id: fallback.category._id, name: fallback.category.title, slug: fallback.category.slug.current, color: fallback.category.color },
      author: { _id: fallback.author._id, name: fallback.author.name, bio: fallback.author.bio },
      publishedAt: fallback.publishedAt,
      body: fallback.body,
      isFeatured: true,
      readingTime: 5,
    });
  }

  try {
    const data = await fetchFromSanity<ArticleListItem | null>(featuredArticleQuery);
    if (data) {
      return normalizeArticle(data);
    }

    const fallback = mockPosts[0];
    return normalizeArticle({
      _id: fallback._id,
      title: fallback.title,
      slug: fallback.slug.current,
      excerpt: fallback.excerpt,
      mainImage: { url: fallback.featuredImage.url, alt: fallback.featuredImage.alt },
      category: { _id: fallback.category._id, name: fallback.category.title, slug: fallback.category.slug.current, color: fallback.category.color },
      author: { _id: fallback.author._id, name: fallback.author.name, bio: fallback.author.bio },
      publishedAt: fallback.publishedAt,
      body: fallback.body,
      isFeatured: true,
      readingTime: 5,
    });
  } catch (error) {
    console.error('Error loading featured article', error);
    return null;
  }
}

export async function getArticleBySlug(slug: string): Promise<ArticleListItem | null> {
  if (!canUseSanityInCurrentRuntime()) {
    const fallback = mockPosts.find((post) => post.slug.current === slug);
    return fallback ? normalizeArticle({
      _id: fallback._id,
      title: fallback.title,
      slug: fallback.slug.current,
      excerpt: fallback.excerpt,
      mainImage: { url: fallback.featuredImage.url, alt: fallback.featuredImage.alt },
      category: { _id: fallback.category._id, name: fallback.category.title, slug: fallback.category.slug.current, color: fallback.category.color },
      author: { _id: fallback.author._id, name: fallback.author.name, bio: fallback.author.bio },
      publishedAt: fallback.publishedAt,
      body: fallback.body,
      isFeatured: false,
      readingTime: 5,
    }) : null;
  }

  try {
    const data = await fetchFromSanity<ArticleListItem | null>(articleBySlugQuery, { slug });
    return data ? normalizeArticle(data) : null;
  } catch (error) {
    console.error('Error loading article by slug', error);
    return null;
  }
}

export async function getRelatedArticles(slug: string, categoryId?: string): Promise<ArticleListItem[]> {
  if (!canUseSanityInCurrentRuntime() || !categoryId) {
    return [];
  }

  try {
    const data = await fetchFromSanity<ArticleListItem[]>(relatedArticlesQuery, { slug, categoryId });
    return (data || []).map(normalizeArticle);
  } catch (error) {
    console.error('Error loading related articles', error);
    return [];
  }
}

export function toPost(article: ArticleListItem): Post {
  return normalizePost(article);
}
