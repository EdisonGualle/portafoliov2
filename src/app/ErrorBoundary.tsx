import { Component, type ErrorInfo, type ReactNode } from 'react';

import Button from '@shared/components/Button';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary capturó un error', error, errorInfo);
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  public override render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-base-200 p-6 text-center">
          <div className="max-w-md rounded-2xl bg-base-100 p-8 shadow-xl">
            <h1 className="text-3xl font-bold text-error">Ha ocurrido un error inesperado</h1>
            <p className="mt-4 text-base-content/80">
              {this.state.error?.message ?? 'Intenta recargar la página o volver al inicio.'}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button onClick={() => window.location.assign('/')}>Ir al inicio</Button>
              <Button variant="ghost" onClick={this.handleReset}>
                Reintentar
              </Button>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
