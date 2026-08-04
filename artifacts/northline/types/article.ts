import type { Author, Category, Post } from './content';

export interface SanityImage {
  _type?: 'image';
  asset?: {
    _ref?: string;
    _type?: 'reference';
  };
  alt?: string;
}

export interface SanitySeo {
  title?: string;
  description?: string;
  ogImage?: SanityImage;
}

export interface SanityCategory {
  _id: string;
  name: string;
  slug?: { current: string };
  color?: string;
  description?: string;
}

export interface SanityAuthor {
  _id: string;
  name: string;
  photo?: SanityImage;
  bio?: string;
  socialLinks?: Array<{ platform?: string; url?: string }>;
}

export interface SanityArticle {
  _id: string;
  title: string;
  slug?: { current: string };
  excerpt?: string;
  body?: Array<{
    _type?: string;
    style?: string;
    children?: Array<{ _type?: string; text?: string }>;
    markDefs?: Array<unknown>;
  }>;
  mainImage?: SanityImage & { url?: string; alt?: string };
  category?: SanityCategory;
  author?: SanityAuthor;
  publishedAt?: string;
  isFeatured?: boolean;
  readingTime?: number;
  seo?: SanitySeo;
}

export interface ArticleListItem extends SanityArticle {
  slug: { current: string };
  excerpt: string;
}

export type { Author, Category, Post } from './content';
