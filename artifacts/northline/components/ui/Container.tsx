import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  wide?: boolean;
}

export function Container({ wide = false, className, ...props }: ContainerProps) {
  return <div className={cn(wide ? 'ds-container-wide' : 'ds-container', className)} {...props} />;
}
