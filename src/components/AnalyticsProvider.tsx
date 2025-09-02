'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { 
  initializeAnalytics, 
  trackPageView, 
  initializePerformanceMonitoring,
  trackUserEngagement
} from '../lib/analytics'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize analytics only in production or when explicitly enabled
    if (process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true') {
      initializeAnalytics()
      initializePerformanceMonitoring()
      trackUserEngagement()
    }
  }, [])

  useEffect(() => {
    // Track page views on route changes
    if (process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true') {
      const url = window.location.origin + pathname
      trackPageView(url)
    }
  }, [pathname])

  return <>{children}</>
}