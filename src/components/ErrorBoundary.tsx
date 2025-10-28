import React, { ReactNode, ReactElement } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactElement {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="max-w-[375px] w-full">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-destructive" />
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  문제가 발생했습니다
                </h2>
                <p className="text-sm text-muted-foreground">
                  {this.state.error?.message || '예기치 않은 오류가 발생했습니다.'}
                </p>
                {process.env.NODE_ENV === 'development' && (
                  <details className="mt-4 text-left">
                    <summary className="cursor-pointer text-sm text-primary">
                      오류 상세정보 (개발 모드)
                    </summary>
                    <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-auto max-h-48">
                      {this.state.error?.stack}
                    </pre>
                  </details>
                )}
                <Button
                  onClick={this.resetError}
                  className="w-full bg-primary hover:bg-[#2563EB] text-primary-foreground rounded-xl"
                >
                  다시 시도
                </Button>
              </div>
            </div>
          </div>
        )
      );
    }

    return this.props.children as ReactElement;
  }
}
