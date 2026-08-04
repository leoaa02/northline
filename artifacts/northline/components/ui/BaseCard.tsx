import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function BaseCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <article className={cn('ds-card', className)} {...props} />;
}
