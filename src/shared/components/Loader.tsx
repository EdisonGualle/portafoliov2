interface LoaderProps {
  message?: string;
  fullScreen?: boolean;
  overlay?: boolean;
}

const Loader = ({ message = 'Cargando...', fullScreen = false, overlay = false }: LoaderProps): JSX.Element => {
  const containerClasses = fullScreen
    ? 'fixed inset-0 z-40 flex items-center justify-center bg-white/60 backdrop-blur dark:bg-midnightMuted/80'
    : overlay
      ? 'absolute inset-0 z-30 flex items-center justify-center rounded-2xl bg-white/60 backdrop-blur dark:bg-midnightMuted/80'
      : 'flex w-full items-center justify-center py-10';

  return (
    <div className={containerClasses} role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="loading loading-spinner loading-lg text-primary" />
        <p className="text-sm font-medium text-base-content/80">{message}</p>
      </div>
    </div>
  );
};

export default Loader;
