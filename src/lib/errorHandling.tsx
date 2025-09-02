'use client'

import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log errors to external service in production
    console.error('Application error:', error, errorInfo)
    
    // In production, you would send this to your logging service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry, LogRocket, or custom logging service
      // logErrorToService(error, errorInfo)
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              حدث خطأ غير متوقع
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              نعتذر، حدث خطأ أثناء تحميل هذه الصفحة
            </p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => window.location.reload()}
            >
              إعادة تحميل الصفحة
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Loading component for async operations
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
    </div>
  )
}

// Error message component
export function ErrorMessage({ 
  message, 
  onRetry 
}: { 
  message: string
  onRetry?: () => void 
}) {
  return (
    <div className="rounded-lg bg-red-50 dark:bg-red-900/10 p-4 border border-red-200 dark:border-red-800">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="mr-3">
          <p className="text-sm text-red-800 dark:text-red-200">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-2 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300"
            >
              إعادة المحاولة
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// Network error handler
export function handleNetworkError(error: Error): string {
  if (error.message.includes('Failed to fetch')) {
    return 'فشل في الاتصال بالخادم. تحقق من اتصالك بالإنترنت.'
  }
  if (error.message.includes('timeout')) {
    return 'انتهت مهلة الاتصال. حاول مرة أخرى.'
  }
  if (error.message.includes('404')) {
    return 'الصفحة المطلوبة غير موجودة.'
  }
  if (error.message.includes('500')) {
    return 'خطأ في الخادم. حاول مرة أخرى لاحقاً.'
  }
  return 'حدث خطأ غير متوقع. حاول مرة أخرى.'
}

// Graceful image fallback
interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  className,
  ...props
}: ImageWithFallbackProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    if (fallbackSrc && target.src !== fallbackSrc) {
      target.src = fallbackSrc
    } else {
      // Use a default placeholder
      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg=='
    }
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={className}
      {...props}
    />
  )
}