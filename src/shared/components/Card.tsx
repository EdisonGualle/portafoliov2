import type { ElementType, PropsWithChildren } from 'react';

import { cn } from '@shared/utils/cn';

interface CardProps {
  as?: ElementType;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingMap = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
} as const;

const Card = ({
  as: Component = 'div',
  className,
  hoverable = true,
  padding = 'md',
  children
}: PropsWithChildren<CardProps>): JSX.Element => {
  return (
    <Component
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-white/25 bg-white/40 text-base-content shadow-md backdrop-blur transition-all duration-300 dark:border-white/10 dark:bg-white/5',
        hoverable &&
          'hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40',
        paddingMap[padding],
        className
      )}
    >
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
        <div className="h-full w-full bg-gradient-to-br from-primary/15 via-transparent to-secondary/20" />
      </div>
      {children}
    </Component>
  );
};

export default Card;
