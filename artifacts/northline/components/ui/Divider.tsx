import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ orientation = 'horizontal', className, ...props }: DividerProps) {
  return (
    <hr
      className={cn('ds-divider border-0', orientation === 'vertical' ? 'h-full w-px self-stretch' : '', className)}
      {...props}
    />
  );
}
