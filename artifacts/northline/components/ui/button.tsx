import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva('ds-button', {
  variants: {
    variant: {
      default: 'ds-button-primary',
      secondary: 'ds-button-secondary',
      outline: 'ds-button-secondary',
      ghost: 'bg-transparent text-foreground border border-transparent hover:bg-muted',
      link: 'bg-transparent border-0 px-0 min-h-0 text-foreground underline-offset-4 hover:underline',
      destructive: 'bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90',
    },
    size: {
      default: 'min-h-10 px-4 text-sm',
      sm: 'min-h-8 px-3 text-xs',
      lg: 'min-h-11 px-6 text-base',
      icon: 'h-10 w-10 px-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  },
);

Button.displayName = 'Button';
