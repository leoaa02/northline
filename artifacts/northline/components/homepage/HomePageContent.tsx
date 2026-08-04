'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { BaseCard, Button, Container, Divider, Tag } from '@/components/ui';
import { CategoryTag } from '@/components/ui/CategoryTag';
import type { Post } from '@/types/content';

interface HomePageContentProps {
  posts: Post[];
  isLoading: boolean;
}

function formatDate(dateString: string) {
  return format(new Date(dateString), 'dd MMM yyyy', { locale: es }).toUpperCase();
}

function matchesCategory(post: Post, categorySlug: string) {
  return post.category.slug.current.toLowerCase() === categorySlug;
}

function SectionBlock({ title, posts }: { title: string; posts: Post[] }) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6" aria-label={`Sección ${title}`}>
      <div className="flex items-center justify-between gap-4">
        <h2 className="ds-type-title text-2xl text-foreground">{title}</h2>
        <Tag label={title} />
      </div>
      <div className="ds-grid">
        {posts.slice(0, 3).map((post) => (
          <BaseCard key={post._id} className="col-span-12 md:col-span-4 p-0 overflow-hidden">
            <Link href={`/articulo/${post.slug.current}`} className="block group">
              <div className="aspect-[16/10] bg-muted overflow-hidden">
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt}
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4 space-y-3">
                <CategoryTag category={post.category} size="sm" />
                <h3 className="ds-type-title text-[1.375rem] text-foreground leading-[1.25] group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="ds-type-body text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <p className="ds-type-meta text-muted-foreground">{formatDate(post.publishedAt)}</p>
              </div>
            </Link>
          </BaseCard>
        ))}
      </div>
    </section>
  );
}

export function HomePageContent({ posts, isLoading }: HomePageContentProps) {
  const heroPost = posts[0];
  const secondaryPosts = posts.slice(1, 3);
  const latestPosts = posts.slice(1, 9);
  const technologyPosts = posts.filter((post) => matchesCategory(post, 'tecnologia')).slice(0, 3);
  const culturePosts = posts.filter((post) => matchesCategory(post, 'cultura')).slice(0, 3);
  const opinionPosts = posts.filter((post) => matchesCategory(post, 'opinion')).slice(0, 3);

  if (isLoading) {
    return (
      <div className="w-full border-b border-border">
        <Container className="py-12">
          <div className="ds-type-body text-muted-foreground">Cargando contenido…</div>
        </Container>
      </div>
    );
  }

  if (!heroPost) {
    return (
      <div className="w-full border-b border-border">
        <Container className="py-12">
          <div className="ds-type-body text-muted-foreground">No hay contenido disponible en este momento.</div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full border-b border-border">
      <Container className="py-12 md:py-16 space-y-16 md:space-y-20">
        <section className="space-y-8" aria-label="Hero principal">
          <div className="ds-grid items-start">
            <Link href={`/articulo/${heroPost.slug.current}`} className="col-span-12 lg:col-span-7 block group">
              <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[2px] bg-muted">
                <Image
                  src={heroPost.featuredImage.url}
                  alt={heroPost.featuredImage.alt}
                  width={1800}
                  height={1200}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.01]"
                />
              </div>
            </Link>

            <div className="col-span-12 lg:col-span-5 space-y-8 lg:pt-2">
              <CategoryTag category={heroPost.category} size="md" className="transition-colors duration-200" />
              <Link href={`/articulo/${heroPost.slug.current}`} className="block">
                <h1 className="max-w-[13ch] text-balance font-serif text-[clamp(2rem,6.4vw,2.9rem)] leading-[0.98] tracking-[-0.03em] text-foreground transition-colors duration-200 hover:text-accent lg:max-w-[12ch] lg:text-[clamp(3.1rem,4.8vw,4.6rem)] lg:leading-[0.94]">
                  {heroPost.title}
                </h1>
              </Link>
              <p className="ds-type-lead max-w-[38ch] text-balance text-muted-foreground">{heroPost.excerpt}</p>
              <p className="ds-type-meta text-muted-foreground">
                {heroPost.author.name} / {formatDate(heroPost.publishedAt)}
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section id="secciones" className="space-y-6" aria-label="Noticias secundarias">
          <h2 className="ds-type-title text-2xl">Edición destacada</h2>
          <div className="ds-grid">
            {secondaryPosts.map((post) => (
              <BaseCard key={post._id} className="col-span-12 md:col-span-6 p-0 overflow-hidden">
                <Link href={`/articulo/${post.slug.current}`} className="block group">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={post.featuredImage.url}
                      alt={post.featuredImage.alt}
                      width={1400}
                      height={875}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <CategoryTag category={post.category} size="sm" />
                    <h3 className="ds-type-title text-[1.6rem] leading-[1.2] text-foreground group-hover:text-accent transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="ds-type-body text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <p className="ds-type-meta text-muted-foreground">{post.author.name} / {formatDate(post.publishedAt)}</p>
                  </div>
                </Link>
              </BaseCard>
            ))}
          </div>
        </section>

        <Divider />

        <section className="space-y-6" aria-label="Últimas noticias">
          <h2 className="ds-type-title text-2xl">Últimas noticias</h2>
          <div className="grid grid-cols-1 gap-y-0 gap-x-12 md:grid-cols-2">
            {latestPosts.map((post) => (
              <Link
                key={post._id}
                href={`/articulo/${post.slug.current}`}
                className="group block border-b border-border py-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CategoryTag category={post.category} size="sm" />
                  <p className="ds-type-meta text-muted-foreground">{formatDate(post.publishedAt)}</p>
                </div>
                <h3 className="ds-type-title text-[1.35rem] leading-[1.3] text-foreground group-hover:text-accent transition-colors text-balance">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        <Divider />

        <SectionBlock title="Tecnología" posts={technologyPosts} />

        <Divider />

        <SectionBlock title="Cultura" posts={culturePosts} />

        <Divider />

        <SectionBlock title="Opinión" posts={opinionPosts} />

        <Divider />

        <section id="newsletter" className="py-4" aria-label="Newsletter">
          <BaseCard className="p-8 md:p-10 text-center space-y-5">
            <p className="ds-type-meta text-muted-foreground">Northline semanal</p>
            <h2 className="ds-type-title text-3xl md:text-4xl text-foreground">Suscribite para recibir la edición destacada</h2>
            <p className="ds-type-body text-muted-foreground max-w-2xl mx-auto">
              Análisis, ensayos y crónicas editoriales en tu correo con una curaduría enfocada en tecnología, cultura y ciudad.
            </p>
            <div className="pt-2">
              <Button asChild variant="default" size="default">
                <Link href="/sobre">Suscribirse</Link>
              </Button>
            </div>
          </BaseCard>
        </section>
      </Container>
    </div>
  );
}
