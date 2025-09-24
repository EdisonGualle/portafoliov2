import { useEffect, useState } from 'react';

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

const ScrollProgressBar = (): JSX.Element => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
      const total = scrollHeight - clientHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }

      const nextProgress = (scrollTop / total) * 100;
      setProgress(clamp(nextProgress, 0, 100));
    };

    updateProgress();

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1.5 bg-transparent">
      <div
        aria-hidden="true"
        className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent shadow-lg transition-[width] duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
      <span className="sr-only" aria-live="polite">
        Progreso de lectura {Math.round(progress)}%
      </span>
    </div>
  );
};

export default ScrollProgressBar;
