import React from 'react';
import { Link } from 'wouter';
import { mockPosts } from '@/data/mockData';

export function NewsTicker() {
  const tickerItems = mockPosts.slice(0, 5); // Take 5 latest news

  return (
    <div className="w-full bg-primary text-primary-foreground border-b border-primary/20 flex items-stretch h-8 overflow-hidden">
      {/* Label section (fixed) */}
      <div className="flex-shrink-0 bg-primary z-10 flex items-center px-4 font-mono text-[10px] font-bold text-accent uppercase tracking-widest relative">
        ÚLTIMAS {'>'}
        {/* gradient fade for smooth transition to ticker */}
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-r from-primary to-transparent translate-x-full pointer-events-none" />
      </div>
      
      {/* Marquee section */}
      <div className="flex-1 overflow-hidden relative flex items-center">
        <div className="scrolling-ticker whitespace-nowrap font-mono text-[11px]">
          {/* Double the items to make infinite scroll seamless */}
          {[...tickerItems, ...tickerItems].map((post, idx) => (
            <React.Fragment key={`${post._id}-${idx}`}>
              <span className="mx-4 text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">
                <Link href={`/articulo/${post.slug.current}`}>{post.title}</Link>
              </span>
              <span className="text-accent/50 select-none">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
