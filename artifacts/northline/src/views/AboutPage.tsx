'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, Terminal } from 'lucide-react';

const profileCards = [
  {
    title: 'Base',
    content: 'Buenos Aires, Argentina',
    icon: MapPin,
  },
  {
    title: 'Stack',
    content: 'Next.js • React • TypeScript • Sanity CMS • TailwindCSS • Vercel',
    icon: Terminal,
  },
  {
    title: 'Intereses',
    content: 'Tecnología • Inteligencia Artificial • Diseño Editorial • Arquitectura • Historia • Literatura',
    icon: Sparkles,
  },
  {
    title: 'Contacto',
    content: (
      <div className="flex flex-wrap gap-3 text-sm">
        <a href="https://github.com/leoaa02" target="_blank" rel="noreferrer" className="text-foreground/80 transition-colors hover:text-accent">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/leonardo-alcala-192042233" target="_blank" rel="noreferrer" className="text-foreground/80 transition-colors hover:text-accent">
          LinkedIn
        </a>
        <a href="mailto:leonardoalcalaavi@gmail.com" className="text-foreground/80 transition-colors hover:text-accent">
          Correo
        </a>
      </div>
    ),
    icon: Mail,
  },
];

export function AboutPage() {
  return (
    <div className="w-full flex-1 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-14 md:space-y-16"
        >
          <header className="grid gap-10 border-b border-border/70 pb-10 lg:grid-cols-[0.85fr_0.65fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Sobre mí</p>
              <h1 className="mt-4 font-serif text-5xl leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Leonardo Alcala
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Desarrollador web, escritor y creador de Northline.
              </p>
            </div>

            <figure className="relative mx-auto h-72 w-72 max-w-full overflow-hidden rounded-full border border-border/70 bg-muted/40 p-1 shadow-sm lg:mx-0 lg:h-80 lg:w-80">
              <Image
                src="/foto-sobremi-northline.JPEG"
                alt="Retrato de Leonardo Alcala"
                width={640}
                height={640}
                sizes="(max-width: 1024px) 18rem, 20rem"
                className="h-full w-full rounded-full object-cover"
              />
              <figcaption className="absolute left-1/2 bottom-4 -translate-x-1/2 rounded-full border border-white/20 bg-white/95 px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground/70 shadow-sm">
                Editor fundador
              </figcaption>
            </figure>
          </header>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="text-lg leading-8 text-foreground/90">
                  Escribo sobre tecnología, cultura digital, ciudades, internet y las ideas que están transformando la manera en que vivimos.
                </p>
                <p className="max-w-2xl text-lg leading-8 text-foreground/70">
                  Northline nació como un espacio editorial independiente donde publico ensayos, análisis y artículos de largo formato con una estética inspirada en los grandes medios tradicionales.
                </p>
              </div>

              <div className="border-t border-border/70 pt-8">
                <h2 className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Mi filosofía editorial</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/80">
                  Creo que internet todavía necesita espacios donde las ideas puedan desarrollarse con profundidad. Northline busca recuperar el placer de leer artículos largos, bien escritos y visualmente cuidados.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {profileCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="border border-border/70 bg-background/80 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.01)] transition-colors hover:bg-muted/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">{card.title}</p>
                    </div>
                    <div className="mt-4 text-sm leading-7 text-foreground/80">{card.content}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}