import type { Metadata } from "next";
import { inter, jetbrainsMono } from "../lib/fonts";
import { pageTemplates, seoConfig, structuredDataTemplates } from "../lib/seoKeywords";
import { ErrorBoundary } from "../lib/errorHandling";
import { AnalyticsProvider } from "../components/AnalyticsProvider";
import "./globals.css";

// Import FontAwesome icons configuration
import "../lib/icons";

export const metadata: Metadata = {
  title: pageTemplates.home.title,
  description: pageTemplates.home.description,
  keywords: pageTemplates.home.keywords,
  authors: [{ name: seoConfig.authorName }],
  
  // Open Graph
  openGraph: {
    title: pageTemplates.home.title,
    description: pageTemplates.home.description,
    type: "website",
    locale: seoConfig.locale,
    alternateLocale: seoConfig.alternateLocales,
    siteName: seoConfig.siteName,
    url: seoConfig.siteUrl,
    images: [
      {
        url: `${seoConfig.siteUrl}/icons/icon-512x512.png`,
        width: 512,
        height: 512,
        alt: 'Codenetra Logo'
      }
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    site: seoConfig.twitterHandle,
    creator: seoConfig.twitterHandle,
    title: pageTemplates.home.title,
    description: pageTemplates.home.description,
    images: [`${seoConfig.siteUrl}/icons/icon-512x512.png`],
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification tags (add your verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code'
    }
  },
  
  // Manifest and icons
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icons/icon-192x192.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icons/icon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/icons/icon-16x16.png',
      },
    ]
  },
  
  // Alternate languages
  alternates: {
    canonical: seoConfig.siteUrl,
    languages: {
      'ar': seoConfig.siteUrl,
      'en': `${seoConfig.siteUrl}/en`,
      'x-default': seoConfig.siteUrl,
    }
  },
  
  // Other metadata
  category: 'technology',
  classification: 'Business, Technology, Software Development',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // App-specific metadata
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: seoConfig.siteName,
    startupImage: '/icons/icon-512x512.png'
  },
  
  // Additional tags
  other: {
    'application-name': seoConfig.siteName,
    'msapplication-TileColor': '#10b981',
    'theme-color': '#10b981',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className="dark">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                structuredDataTemplates.organization,
                structuredDataTemplates.website
              ]
            })
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="EG-C" />
        <meta name="geo.placename" content="Cairo" />
        <meta name="geo.position" content="30.0444;31.2357" />
        <meta name="ICBM" content="30.0444, 31.2357" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-dark-background text-dark-text`}
      >
        <ErrorBoundary>
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
