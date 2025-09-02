// Google Analytics 4 and performance monitoring
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

// Analytics configuration
export const analyticsConfig = {
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
  debug: process.env.NODE_ENV === 'development',
  
  // Events to track
  events: {
    pageView: 'page_view',
    contactFormSubmit: 'contact_form_submit',
    projectInquiry: 'project_inquiry',
    serviceView: 'service_view',
    portfolioView: 'portfolio_view',
    fileDownload: 'file_download',
    outboundClick: 'outbound_click',
    scroll: 'scroll',
    engagement: 'engagement_time',
    error: 'exception',
    search: 'search',
    videoPlay: 'video_play',
    socialShare: 'share'
  },
  
  // Custom dimensions
  customDimensions: {
    userType: 'custom_user_type',
    projectType: 'custom_project_type',
    serviceCategory: 'custom_service_category',
    language: 'custom_language'
  }
}

// Initialize Google Analytics
export function initializeAnalytics() {
  if (typeof window === 'undefined' || !analyticsConfig.measurementId) return

  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.measurementId}`
  document.head.appendChild(script)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }

  // Configure GA4
  window.gtag('js', new Date())
  window.gtag('config', analyticsConfig.measurementId, {
    page_title: document.title,
    page_location: window.location.href,
    debug_mode: analyticsConfig.debug,
    send_page_view: true,
    
    // Enhanced measurement
    enhanced_measurement: {
      scrolls: true,
      outbound_clicks: true,
      site_search: true,
      video_engagement: true,
      file_downloads: true
    },
    
    // User privacy
    anonymize_ip: true,
    allow_google_signals: false, // Disable advertising features
    allow_ad_personalization_signals: false
  })

  console.log('Google Analytics initialized')
}

// Track page views
export function trackPageView(url: string, title?: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('config', analyticsConfig.measurementId, {
    page_title: title || document.title,
    page_location: url,
  })

  // Send custom page view event with additional data
  window.gtag('event', analyticsConfig.events.pageView, {
    page_title: title || document.title,
    page_location: url,
    page_referrer: document.referrer,
    language: document.documentElement.lang || 'ar',
    timestamp: new Date().toISOString()
  })
}

// Track custom events
export function trackEvent(
  eventName: string, 
  parameters: Record<string, unknown> = {}
) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', eventName, {
    ...parameters,
    timestamp: new Date().toISOString(),
    user_agent: navigator.userAgent,
    screen_resolution: `${screen.width}x${screen.height}`,
    viewport_size: `${window.innerWidth}x${window.innerHeight}`
  })

  if (analyticsConfig.debug) {
    console.log('Analytics Event:', eventName, parameters)
  }
}

// Track contact form submissions
export function trackContactFormSubmit(formType: string, success: boolean) {
  trackEvent(analyticsConfig.events.contactFormSubmit, {
    form_type: formType,
    success: success,
    event_category: 'engagement',
    event_label: `contact_form_${formType}`,
    value: success ? 1 : 0
  })
}

// Track project inquiries
export function trackProjectInquiry(projectType: string, budget: string) {
  trackEvent(analyticsConfig.events.projectInquiry, {
    project_type: projectType,
    budget_range: budget,
    event_category: 'lead_generation',
    event_label: 'project_inquiry',
    value: 1
  })
}

// Track service page views
export function trackServiceView(serviceName: string) {
  trackEvent(analyticsConfig.events.serviceView, {
    service_name: serviceName,
    event_category: 'content',
    event_label: `service_${serviceName}`,
    value: 1
  })
}

// Track portfolio views
export function trackPortfolioView(projectName: string, category: string) {
  trackEvent(analyticsConfig.events.portfolioView, {
    project_name: projectName,
    project_category: category,
    event_category: 'content',
    event_label: `portfolio_${projectName}`,
    value: 1
  })
}

// Track file downloads
export function trackFileDownload(fileName: string, fileType: string) {
  trackEvent(analyticsConfig.events.fileDownload, {
    file_name: fileName,
    file_extension: fileType,
    event_category: 'engagement',
    event_label: `download_${fileType}`,
    value: 1
  })
}

// Track outbound clicks
export function trackOutboundClick(url: string, linkText: string) {
  trackEvent(analyticsConfig.events.outboundClick, {
    link_url: url,
    link_text: linkText,
    event_category: 'engagement',
    event_label: 'outbound_click',
    value: 1
  })
}

// Track social media shares
export function trackSocialShare(platform: string, url: string) {
  trackEvent(analyticsConfig.events.socialShare, {
    social_platform: platform,
    shared_url: url,
    event_category: 'engagement',
    event_label: `share_${platform}`,
    value: 1
  })
}

// Track errors
export function trackError(error: Error, errorBoundary?: string) {
  trackEvent(analyticsConfig.events.error, {
    description: error.message,
    error_boundary: errorBoundary,
    stack_trace: error.stack?.substring(0, 500), // Limit stack trace length
    event_category: 'error',
    event_label: 'application_error',
    fatal: false
  })
}

// Performance monitoring
export function initializePerformanceMonitoring() {
  if (typeof window === 'undefined') return

  // Core Web Vitals monitoring
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = Math.round(entry.startTime)
          trackEvent('core_web_vital', {
            metric_name: 'LCP',
            metric_value: lcp,
            metric_rating: lcp < 2500 ? 'good' : lcp < 4000 ? 'needs_improvement' : 'poor',
            event_category: 'performance',
            value: lcp
          })
        }
      })
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'first-input') {
          const processingStart = (entry as PerformanceEventTiming).processingStart
          const fid = Math.round(processingStart - entry.startTime)
          trackEvent('core_web_vital', {
            metric_name: 'FID',
            metric_value: fid,
            metric_rating: fid < 100 ? 'good' : fid < 300 ? 'needs_improvement' : 'poor',
            event_category: 'performance',
            value: fid
          })
        }
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Cumulative Layout Shift (CLS)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const layoutShift = entry as PerformanceEntry & { hadRecentInput: boolean; value: number }
        if (entry.entryType === 'layout-shift' && !layoutShift.hadRecentInput) {
          clsValue += layoutShift.value
        }
      })
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Send CLS when page is being unloaded
    window.addEventListener('beforeunload', () => {
      const cls = Math.round(clsValue * 1000) / 1000
      trackEvent('core_web_vital', {
        metric_name: 'CLS',
        metric_value: cls,
        metric_rating: cls < 0.1 ? 'good' : cls < 0.25 ? 'needs_improvement' : 'poor',
        event_category: 'performance',
        value: cls
      })
    })

    // Time to First Byte (TTFB)
    const navigationEntries = performance.getEntriesByType('navigation')
    if (navigationEntries.length > 0) {
      const navigation = navigationEntries[0] as PerformanceNavigationTiming
      const ttfb = Math.round(navigation.responseStart - navigation.requestStart)
      trackEvent('core_web_vital', {
        metric_name: 'TTFB',
        metric_value: ttfb,
        metric_rating: ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs_improvement' : 'poor',
        event_category: 'performance',
        value: ttfb
      })
    }
  }

  // Page load timing
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        trackEvent('page_timing', {
          dns_time: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
          connect_time: Math.round(navigation.connectEnd - navigation.connectStart),
          response_time: Math.round(navigation.responseEnd - navigation.responseStart),
          dom_load_time: Math.round(navigation.domContentLoadedEventEnd - navigation.startTime),
          window_load_time: Math.round(navigation.loadEventEnd - navigation.startTime),
          event_category: 'performance'
        })
      }
    }, 0)
  })

  // Memory usage (if available)
  const performanceWithMemory = performance as Performance & { 
    memory?: { 
      usedJSHeapSize: number
      totalJSHeapSize: number
      jsHeapSizeLimit: number 
    } 
  }
  
  if (performanceWithMemory.memory) {
    trackEvent('memory_usage', {
      used_heap_size: performanceWithMemory.memory.usedJSHeapSize,
      total_heap_size: performanceWithMemory.memory.totalJSHeapSize,
      heap_size_limit: performanceWithMemory.memory.jsHeapSizeLimit,
      event_category: 'performance'
    })
  }

  console.log('Performance monitoring initialized')
}

// User engagement tracking
export function trackUserEngagement() {
  if (typeof window === 'undefined') return

  let scrollDepth = 0
  let maxScrollDepth = 0
  let timeOnPage = 0
  const startTime = Date.now()

  // Scroll depth tracking
  function updateScrollDepth() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollDepth = Math.round((scrollTop / docHeight) * 100)
    maxScrollDepth = Math.max(maxScrollDepth, scrollDepth)
  }

  window.addEventListener('scroll', updateScrollDepth, { passive: true })

  // Time on page tracking
  const timeTracker = setInterval(() => {
    timeOnPage = Math.round((Date.now() - startTime) / 1000)
  }, 1000)

  // Send engagement data when user leaves
  window.addEventListener('beforeunload', () => {
    clearInterval(timeTracker)
    
    trackEvent(analyticsConfig.events.engagement, {
      time_on_page: timeOnPage,
      scroll_depth: maxScrollDepth,
      page_url: window.location.href,
      event_category: 'engagement',
      value: timeOnPage
    })
  })

  // Track milestone scroll depths
  const scrollMilestones = [25, 50, 75, 90, 100]
  const trackedMilestones = new Set()

  window.addEventListener('scroll', () => {
    scrollMilestones.forEach(milestone => {
      if (scrollDepth >= milestone && !trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone)
        trackEvent(analyticsConfig.events.scroll, {
          scroll_depth: milestone,
          event_category: 'engagement',
          event_label: `scroll_${milestone}`,
          value: milestone
        })
      }
    })
  }, { passive: true })
}

// A/B testing support
export function getABTestVariant(testName: string, variants: string[]): string {
  if (typeof window === 'undefined') return variants[0]
  
  // Simple hash-based A/B testing
  const userId = localStorage.getItem('user_id') || 'anonymous'
  const hash = userId.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  
  const variantIndex = Math.abs(hash) % variants.length
  const variant = variants[variantIndex]
  
  // Track A/B test assignment
  trackEvent('ab_test_assignment', {
    test_name: testName,
    variant: variant,
    user_id: userId,
    event_category: 'experiment'
  })
  
  return variant
}