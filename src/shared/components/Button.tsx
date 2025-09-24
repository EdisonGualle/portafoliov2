import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@shared/utils/cn';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-xl border font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60';

const variants = {
  primary:
    'border-primary bg-gradient-to-r from-primary via-aurora to-secondary text-primary-foreground shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl',
  secondary:
    'border-white/30 bg-white/60 text-base-content shadow-md hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 dark:border-white/10 dark:bg-white/10',
  outline:
    'border-white/40 bg-transparent text-base-content hover:border-primary hover:text-primary dark:border-white/20',
  ghost: 'border-transparent bg-transparent text-base-content/80 hover:text-primary hover:bg-primary/10'
} as const;

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg'
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export const buttonStyles = (variant: ButtonVariant = 'primary', size: ButtonSize = 'md'): string =>
  cn(baseStyles, variants[variant], sizes[size]);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button className={cn(buttonStyles(variant, size), className)} disabled={disabled ?? loading} {...props}>
      {loading && <span className="loading loading-spinner loading-sm" aria-hidden="true" />} {children}
    </button>
  );
};

export default Button;
