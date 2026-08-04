import Link from 'next/link';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type EditorialLinkProps = ComponentProps<typeof Link> & {
  className?: string;
};

export function EditorialLink({ className, ...props }: EditorialLinkProps) {
  return <Link className={cn('ds-link', className)} {...props} />;
}
