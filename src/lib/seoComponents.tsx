import Head from 'next/head'
import { seoConfig, structuredDataTemplates } from './seoKeywords'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  structuredData?: object
  noindex?: boolean
  alternateLanguages?: { [key: string]: string }
}

export function GlobalSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  structuredData,
  noindex = false,
  alternateLanguages
}: SEOProps) {
  const seoTitle = title || seoConfig.defaultTitle
  const seoDescription = description || seoConfig.defaultDescription
  const seoCanonical = canonical || seoConfig.siteUrl
  const seoImage = ogImage || `${seoConfig.siteUrl}/icons/icon-512x512.png`

  // Combine organization and website structured data with page-specific data
  const combinedStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      structuredDataTemplates.organization,
      structuredDataTemplates.website,
      ...(structuredData ? [structuredData] : [])
    ]
  }

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={seoConfig.authorName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Robots */}
      <meta 
        name="robots" 
        content={noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'} 
      />
      <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content={seoConfig.locale} />
      {seoConfig.alternateLocales.map(locale => (
        <meta key={locale} property="og:locale:alternate" content={locale} />
      ))}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoCanonical} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />
      <meta property="twitter:creator" content={seoConfig.twitterHandle} />
      <meta property="twitter:site" content={seoConfig.twitterHandle} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#10b981" />
      <meta name="msapplication-TileColor" content="#10b981" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={seoConfig.siteName} />
      
      {/* PWA Meta Tags */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
      
      {/* Hreflang for international SEO */}
      <link rel="alternate" hrefLang="ar" href={seoCanonical} />
      <link rel="alternate" hrefLang="en" href={seoCanonical.replace('/ar', '/en')} />
      <link rel="alternate" hrefLang="x-default" href={seoCanonical} />
      
      {/* Additional alternate languages */}
      {alternateLanguages && Object.entries(alternateLanguages).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* DNS Prefetch and Preconnect for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(combinedStructuredData) 
        }} 
      />
    </Head>
  )
}

// Article-specific SEO component for blog posts
export function ArticleSEO({
  title,
  description,
  publishedTime,
  modifiedTime,
  authorName,
  tags,
  images,
  canonical
}: {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  authorName: string
  tags?: string[]
  images?: string[]
  canonical: string
}) {
  const articleStructuredData = {
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: authorName
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: seoConfig.organization.logo
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: canonical,
    image: images || [`${seoConfig.siteUrl}/icons/icon-512x512.png`],
    keywords: tags?.join(', ')
  }

  return (
    <GlobalSEO
      title={title}
      description={description}
      canonical={canonical}
      ogType="article"
      structuredData={articleStructuredData}
    />
  )
}

// Service-specific SEO component
export function ServiceSEO({
  serviceName,
  description,
  price,
  serviceType
}: {
  serviceName: string
  description: string
  price?: string
  serviceType: string
}) {
  const serviceStructuredData = {
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
      url: seoConfig.organization.url
    },
    serviceType: serviceType,
    areaServed: {
      '@type': 'Place',
      name: 'Middle East'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: serviceName,
            description: description
          },
          price: price,
          priceCurrency: 'USD'
        }
      ]
    }
  }

  return (
    <GlobalSEO
      title={`${serviceName} | خدمات ${serviceName} | Codenetra`}
      description={description}
      structuredData={serviceStructuredData}
    />
  )
}