'use client';

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/content';

interface CategoryTagProps extends HTMLAttributes<HTMLSpanElement> {
  category: Category;
  size?: 'sm' | 'md';
}

export function CategoryTag({ category, size = 'sm', className, ...props }: CategoryTagProps) {
  return (
    <span
      className={cn(
        'ds-chip',
        size === 'sm' ? 'text-[10px]' : 'text-xs px-2 py-1',
        className,
      )}
      style={category.color ? { backgroundColor: category.color } : undefined}
      {...props}
    >
      {category.title}
    </span>
  );
}
