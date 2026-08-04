import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CategoryChipProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  color?: string;
}

export function CategoryChip({ label, color, className, style, ...props }: CategoryChipProps) {
  return (
    <span
      className={cn('ds-chip', className)}
      style={color ? { ...style, backgroundColor: color } : style}
      {...props}
    >
      {label}
    </span>
  );
}
