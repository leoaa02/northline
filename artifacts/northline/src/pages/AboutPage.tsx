import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { author } from '@/data/mockData';
import { motion } from 'framer-motion';
import { Mail, MapPin, Terminal, Coffee } from 'lucide-react';

export function AboutPage() {
  return (
    <Layout>
      <div className="w-full flex-1 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-2xl mx-auto"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 ring-4 ring-background shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" 
                alt="Portrait placeholder"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
              {author.name}
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed italic mb-10 text-balance">
              {author.bio}
            </p>

            <div className="w-16 h-1 bg-accent mb-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left font-mono text-sm text-foreground/80 mb-16">
              <div className="bg-background p-6 rounded-[2px] shadow-sm border border-border flex flex-col gap-3">
                <MapPin size={20} className="text-accent" />
                <span className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Base</span>
                <span className="font-medium">Madrid, España</span>
              </div>
              <div className="bg-background p-6 rounded-[2px] shadow-sm border border-border flex flex-col gap-3">
                <Terminal size={20} className="text-accent" />
                <span className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Stack</span>
                <span className="font-medium">React, TypeScript, Node, Palabras</span>
              </div>
              <div className="bg-background p-6 rounded-[2px] shadow-sm border border-border flex flex-col gap-3">
                <Coffee size={20} className="text-accent" />
                <span className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Ritual</span>
                <span className="font-medium">V60, Prensa Francesa, 15g in / 250g out</span>
              </div>
              <div className="bg-background p-6 rounded-[2px] shadow-sm border border-border flex flex-col gap-3">
                <Mail size={20} className="text-accent" />
                <span className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Contacto</span>
                <a href="mailto:hello@example.com" className="font-medium hover:text-accent transition-colors">carlos@northline.com</a>
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert prose-p:font-sans prose-p:leading-[1.8] text-left max-w-full">
              <p>
                Northline nació como un archivo personal, un lugar donde depositar notas al margen sobre las herramientas que construimos y los espacios que habitamos. No es un portafolio ni un blog de tutoriales, sino un cuaderno de campo digital.
              </p>
              <p>
                Creo en la web artesanal, en las interfaces que respetan la atención del usuario y en el código como una forma de literatura moderna. Si encuentras algún valor en estas páginas, el objetivo principal del proyecto se habrá cumplido con creces.
              </p>
            </div>
            
          </motion.div>

        </div>
      </div>
    </Layout>
  );
}
