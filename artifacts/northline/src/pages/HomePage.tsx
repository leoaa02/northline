import React from 'react';
import { Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { mockPosts } from '@/data/mockData';
import { CategoryTag } from '@/components/ui/CategoryTag';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { motion } from 'framer-motion';

export function HomePage() {
  const heroPost = mockPosts[0];
  const secondaryPosts = mockPosts.slice(1, 5);
  const recents = mockPosts.slice(2, 8);

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd MMM yyyy", { locale: es }).toUpperCase();
  };

  return (
    <Layout>
      <div className="w-full border-b border-border">
        {/* HERO ARTICLE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            <div className="w-full lg:w-3/5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <CategoryTag category={heroPost.category} size="md" />
              </div>
              <Link href={`/articulo/${heroPost.slug.current}`}>
                <h2 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight hover:text-accent transition-colors cursor-pointer text-balance">
                  {heroPost.title}
                </h2>
              </Link>
              <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-snug mb-8 text-balance">
                {heroPost.excerpt}
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-widest border-t border-border pt-4 w-full md:w-max">
                <span className="font-semibold text-foreground">{heroPost.author.name}</span>
                <span>/</span>
                <span>{formatDate(heroPost.publishedAt)}</span>
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 order-1 lg:order-2">
              <Link href={`/articulo/${heroPost.slug.current}`}>
                <div className="relative aspect-video lg:aspect-[4/5] w-full overflow-hidden bg-muted group rounded-[2px] cursor-pointer">
                  <img 
                    src={heroPost.featuredImage.url} 
                    alt={heroPost.featuredImage.alt}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2px]" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SECONDARY GRID */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {secondaryPosts.map((post, i) => (
                <motion.article 
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col group"
                >
                  <Link href={`/articulo/${post.slug.current}`}>
                    <div className="relative aspect-[3/2] w-full mb-4 overflow-hidden bg-muted rounded-[2px] cursor-pointer">
                      <img 
                        src={post.featuredImage.url} 
                        alt={post.featuredImage.alt}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-2 left-2 z-10 shadow-sm">
                        <CategoryTag category={post.category} />
                      </div>
                    </div>
                  </Link>
                  <Link href={`/articulo/${post.slug.current}`}>
                    <h3 className="font-serif text-2xl font-bold leading-tight mb-3 group-hover:text-accent transition-colors cursor-pointer text-balance">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="font-sans text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {formatDate(post.publishedAt)}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* RECENTS SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="border-b-2 border-accent pb-2 mb-6">
                <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-accent">
                  Lo Último
                </h3>
              </div>
              <div className="flex flex-col">
                {recents.map((post) => (
                  <Link key={post._id} href={`/articulo/${post.slug.current}`}>
                    <article className="group py-5 border-b border-border border-dashed last:border-0 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <CategoryTag category={post.category} size="sm" className="opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold leading-tight group-hover:text-accent transition-colors text-balance">
                        {post.title}
                      </h4>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </Layout>
  );
}
