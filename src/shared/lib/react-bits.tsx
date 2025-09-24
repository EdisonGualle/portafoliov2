import type { ElementType, PropsWithChildren } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '@shared/utils/cn';

export interface RevealProps {
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
  once?: boolean;
}

export const Reveal = ({
  as: Component = 'div',
  className,
  delay = 0,
  duration = 600,
  direction = 'up',
  threshold = 0.2,
  once = true,
  children
}: PropsWithChildren<RevealProps>): JSX.Element => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, threshold]);

  const axis = direction === 'up' || direction === 'down' ? 'translateY' : 'translateX';
  const initialOffset = direction === 'up' || direction === 'left' ? 24 : -24;
  const visibleStyle = {
    opacity: 1,
    transform: `${axis}(0px)`
  };

  const hiddenStyle = {
    opacity: 0,
    transform: `${axis}(${initialOffset}px)`
  };

  return (
    <Component
      ref={ref}
      style={{
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        ...(isVisible ? visibleStyle : hiddenStyle)
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export interface FloatProps {
  amplitude?: number;
  className?: string;
  duration?: number;
}

export const Float = ({ amplitude = 8, className, duration = 4000, children }: PropsWithChildren<FloatProps>): JSX.Element => {
  const animationName = useMemo(() => `float-${Math.random().toString(36).slice(2)}`, []);
  useEffect(() => {
    const styleId = `style-${animationName}`;
    if (typeof document === 'undefined' || document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `@keyframes ${animationName} {0% {transform: translateY(0);} 50% {transform: translateY(-${amplitude}px);} 100% {transform: translateY(0);}}`;
    document.head.append(style);
  }, [amplitude, animationName]);

  return (
    <div className={cn('inline-block', className)} style={{ animation: `${animationName} ${duration}ms ease-in-out infinite` }}>
      {children}
    </div>
  );
};

export interface ScaleOnHoverProps {
  scale?: number;
  className?: string;
}

export const ScaleOnHover = ({ scale = 1.03, className, children }: PropsWithChildren<ScaleOnHoverProps>): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={cn('inline-flex w-full transition-transform duration-300 ease-out will-change-transform', className)}
      style={{ transform: `scale(${isHovering ? scale : 1})`, transformOrigin: 'center' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      {children}
    </div>
  );
};
