import React from 'react';
import { useRoute } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { mockPosts } from '@/data/mockData';
import { CategoryTag } from '@/components/ui/CategoryTag';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Link } from 'wouter';
import { ChevronUp } from 'lucide-react';
import NotFound from './not-found';
import { motion } from 'framer-motion';

export function ArticlePage() {
  const [match, params] = useRoute('/articulo/:slug');
  const slug = params?.slug;
  const post = mockPosts.find(p => p.slug.current === slug);

  if (!match || !post) {
    return <NotFound />;
  }

  const relatedPosts = mockPosts.filter(p => p._id !== post._id && p.category._id === post.category._id).slice(0, 3);
  if (relatedPosts.length === 0) {
    relatedPosts.push(...mockPosts.filter(p => p._id !== post._id).slice(0, 3));
  }

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd MMM yyyy", { locale: es }).toUpperCase();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <article className="w-full">
        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">{post.category.title}</span>
            <span>/</span>
            <span className="truncate max-w-[200px]">{post.title}</span>
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

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <figure className="w-full">
            <div className="relative aspect-video md:aspect-[21/9] w-full bg-muted rounded-[2px] overflow-hidden">
              <img 
                src={post.featuredImage.url} 
                alt={post.featuredImage.alt}
                className="object-cover w-full h-full"
              />
            </div>
            {post.featuredImage.alt && (
              <figcaption className="mt-3 font-mono text-[10px] text-muted-foreground uppercase tracking-widest text-right">
                FOTO: {post.featuredImage.alt}
              </figcaption>
            )}
          </figure>
        </div>

        {/* Article Body & Sidebar Layout */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg dark:prose-invert prose-p:font-sans prose-p:leading-[1.8] prose-p:text-foreground/90 prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:text-foreground/80 max-w-[680px] mx-auto lg:mx-0">
                
                {/* Mocking rich text rendering for demo purposes based on simple blocks */}
                {post.body.map((block: any, i: number) => {
                  if (block.style === 'h2') {
                    return <h2 key={i} className="text-3xl mt-12 mb-6 border-l-4 border-accent pl-4 -ml-[20px]">{block.children[0].text}</h2>;
                  }
                  if (block.style === 'blockquote') {
                    return <blockquote key={i} className="my-10">{block.children[0].text}</blockquote>;
                  }
                  return <p key={i} className="mb-6">{block.children[0].text}</p>;
                })}

                {/* Adding some fake expanded content to demonstrate long-form reading measure */}
                <p>
                  El trazado de la ciudad es un reflejo de nuestras prioridades cognitivas. Cuando observamos cómo las aceras se han estrechado para dar paso a carriles optimizados, estamos viendo, en tiempo real, la materialización de un algoritmo de eficiencia. Y sin embargo, la memoria urbana reside precisamente en aquellos rincones ineficientes: el callejón ciego, la plaza asimétrica, el monumento que interrumpe el flujo del tráfico.
                </p>
                
                <h2 className="text-3xl mt-12 mb-6 border-l-4 border-accent pl-4 -ml-[20px]">La fricción como valor</h2>
                
                <p>
                  Si toda interacción está diseñada para carecer de fricción, nos convertimos en pasajeros pasivos de nuestra propia experiencia. La próxima vez que abra una aplicación de mapas, intente ignorar la ruta azul. Tome la ruta roja. Tome la ruta gris. O mejor aún, apague la pantalla y deje que la ciudad le hable en su idioma original: el del espacio, la piedra y la coincidencia.
                </p>

              </div>
              
              {/* Tags & Sharing */}
              <div className="max-w-[680px] mx-auto lg:mx-0 mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase text-muted-foreground font-bold">Etiquetas:</span>
                  <CategoryTag category={post.category} size="sm" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs uppercase text-muted-foreground font-bold">Compartir:</span>
                  <button className="text-muted-foreground hover:text-accent transition-colors font-mono text-xs uppercase">Twitter</button>
                  <button className="text-muted-foreground hover:text-accent transition-colors font-mono text-xs uppercase">Facebook</button>
                  <button className="text-muted-foreground hover:text-accent transition-colors font-mono text-xs uppercase">Link</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="border-t-4 border-foreground pt-4 mb-8">
                  <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
                    Relacionados
                  </h3>
                </div>
                <div className="flex flex-col gap-6">
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
                            <img 
                              src={rp.featuredImage.url} 
                              alt={rp.featuredImage.alt}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 left-2 z-10">
                              <CategoryTag category={rp.category} size="sm" />
                            </div>
                          </div>
                          <h4 className="font-serif text-lg font-bold leading-tight group-hover:text-accent transition-colors text-balance mb-2">
                            {rp.title}
                          </h4>
                          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                            {formatDate(rp.publishedAt)}
                          </span>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>

        {/* Back to top FAB */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-colors z-40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          aria-label="Volver arriba"
        >
          <ChevronUp size={24} />
        </button>

      </article>
    </Layout>
  );
}
