import React from 'react';
import { Category } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface CategoryTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  category: Category;
  size?: 'sm' | 'md';
}

export function CategoryTag({ category, size = 'sm', className, ...props }: CategoryTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-mono uppercase font-medium bg-accent text-accent-foreground rounded-[2px]",
        size === 'sm' ? "text-[10px] px-1.5 py-0.5" : "text-xs px-2 py-1",
        className
      )}
      style={category.color ? { backgroundColor: category.color } : undefined}
      {...props}
    >
      {category.title}
    </span>
  );
}
