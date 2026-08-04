'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CategoryTag } from '@/components/ui/CategoryTag';
import { renderPortableText } from '@/src/lib/portable-text';
import type { Post } from '@/types/content';

interface ArticlePageContentProps {
  post: Post | null;
  relatedPosts: Post[];
  isLoading: boolean;
}

export function ArticlePageContent({ post, relatedPosts, isLoading }: ArticlePageContentProps) {
  const formatDate = useMemo(() => (dateString: string) => {
    return format(new Date(dateString), 'dd MMM yyyy', { locale: es }).toUpperCase();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-sm text-muted-foreground">Cargando artículo…</div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-sm text-muted-foreground">
        No se encontró el artículo solicitado.
      </div>
    );
  }

  const shareUrl = `https://northline.local/articulo/${post.slug.current}`;
  const shareTitle = encodeURIComponent(post.title);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="w-full">
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="mb-8 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{post.category.title}</span>
          <span>/</span>
          <span className="max-w-[220px] truncate sm:max-w-[320px]">{post.title}</span>
        </div>

        <div className="mb-6">
          <CategoryTag category={post.category} size="md" />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6 text-balance text-foreground">
          {post.title}
        </h1>

        <p className="font-sans text-xl md:text-2xl italic text-muted-foreground leading-relaxed mb-8 text-balance">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground uppercase tracking-widest pt-6 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-foreground font-bold">POR</span>
            <span className="text-accent font-semibold">{post.author.name}</span>
          </div>
          <span>•</span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <figure className="w-full">
          <div className="aspect-video w-full overflow-hidden rounded-[2px] bg-muted md:aspect-[21/9]">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              width={1920}
              height={1080}
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>
          {post.featuredImage.alt && (
            <figcaption className="mt-3 font-mono text-[10px] text-muted-foreground uppercase tracking-widest text-right">
              FOTO: {post.featuredImage.alt}
            </figcaption>
          )}
        </figure>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="prose prose-lg mx-auto max-w-[680px] prose-a:text-accent prose-a:no-underline prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:font-serif prose-blockquote:text-2xl prose-blockquote:italic prose-blockquote:text-foreground/80 prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:font-sans prose-p:leading-[1.8] prose-p:text-foreground/90 hover:prose-a:underline lg:mx-0">
              {renderPortableText(post.body)}
            </div>

            <div className="max-w-[680px] mx-auto lg:mx-0 mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase text-muted-foreground font-bold">Etiquetas:</span>
                <CategoryTag category={post.category} size="sm" />
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs uppercase text-muted-foreground font-bold">Compartir:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase text-muted-foreground transition-colors hover:text-accent"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase text-muted-foreground transition-colors hover:text-accent"
                >
                  Facebook
                </a>
                <a
                  href={shareUrl}
                  className="font-mono text-xs uppercase text-muted-foreground transition-colors hover:text-accent"
                >
                  Link
                </a>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="border-t-4 border-foreground pt-4 mb-8">
                <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">Relacionados</h3>
              </div>
              <div className="flex flex-col gap-6">
                {relatedPosts.length === 0 && (
                  <p className="font-sans text-sm leading-7 text-muted-foreground">No hay artículos relacionados disponibles.</p>
                )}
                {relatedPosts.map((rp, i) => (
                  <motion.div
                    key={rp._id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Link href={`/articulo/${rp.slug.current}`}>
                      <article className="group cursor-pointer">
                        <div className="relative aspect-video w-full mb-3 bg-muted overflow-hidden rounded-[2px]">
                          <Image src={rp.featuredImage.url} alt={rp.featuredImage.alt} width={1200} height={675} sizes="(max-width: 768px) 100vw, 25vw" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-2 left-2 z-10">
                            <CategoryTag category={rp.category} size="sm" />
                          </div>
                        </div>
                        <h4 className="font-serif text-lg font-bold leading-tight group-hover:text-accent transition-colors text-balance mb-2">{rp.title}</h4>
                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">{formatDate(rp.publishedAt)}</span>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-accent md:bottom-8 md:right-8 md:h-12 md:w-12"
        aria-label="Volver arriba"
      >
        <ChevronUp size={24} />
      </button>
    </article>
  );
}
