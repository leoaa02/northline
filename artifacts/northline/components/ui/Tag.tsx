import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
}

export function Tag({ label, className, ...props }: TagProps) {
  return (
    <span className={cn('ds-tag', className)} {...props}>
      {label}
    </span>
  );
}
