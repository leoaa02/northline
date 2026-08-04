export const articleListQuery = `*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "mainImage": {
    "url": mainImage.asset->url,
    "alt": coalesce(mainImage.alt, title)
  },
  "category": category-> {
    _id,
    name,
    "slug": slug.current,
    color,
    description
  },
  "author": author-> {
    _id,
    name,
    "photo": {
      "url": photo.asset->url,
      "alt": coalesce(photo.alt, name)
    },
    bio,
    socialLinks
  },
  publishedAt,
  isFeatured,
  readingTime,
  seo,
  body
}`;

export const featuredArticleQuery = `*[_type == "article" && isFeatured == true] | order(publishedAt desc)[0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "mainImage": {
    "url": mainImage.asset->url,
    "alt": coalesce(mainImage.alt, title)
  },
  "category": category-> {
    _id,
    name,
    "slug": slug.current,
    color,
    description
  },
  "author": author-> {
    _id,
    name,
    "photo": {
      "url": photo.asset->url,
      "alt": coalesce(photo.alt, name)
    },
    bio,
    socialLinks
  },
  publishedAt,
  isFeatured,
  readingTime,
  seo,
  body
}`;

export const articleBySlugQuery = `*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  "mainImage": {
    "url": mainImage.asset->url,
    "alt": coalesce(mainImage.alt, title)
  },
  "category": category-> {
    _id,
    name,
    "slug": slug.current,
    color,
    description
  },
  "author": author-> {
    _id,
    name,
    "photo": {
      "url": photo.asset->url,
      "alt": coalesce(photo.alt, name)
    },
    bio,
    socialLinks
  },
  publishedAt,
  isFeatured,
  readingTime,
  seo
}`;

export const relatedArticlesQuery = `*[_type == "article" && slug.current != $slug && category._ref == $categoryId] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "mainImage": {
    "url": mainImage.asset->url,
    "alt": coalesce(mainImage.alt, title)
  },
  "category": category-> {
    _id,
    name,
    "slug": slug.current,
    color,
    description
  },
  publishedAt
}`;
