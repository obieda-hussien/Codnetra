import { seoConfig } from './seoKeywords'

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Codenetra",
  "alternateName": "شركة كودنيترا للحلول التقنية",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/icons/icon-512x512.png`,
  "description": "Leading mobile app development and web development company specializing in custom software solutions, UI/UX design, and digital transformation services.",
  "foundingDate": "2024-01-01",
  "legalName": "Codenetra Technology Solutions",
  "slogan": "نحول أفكارك إلى واقع رقمي",
  
  "founders": [
    {
      "@type": "Person",
      "name": "Abdelrahman Hussein",
      "jobTitle": "Co-Founder & Full-Stack Developer",
      "url": "https://github.com/obieda-hussien",
      "sameAs": ["https://github.com/obieda-hussien"]
    },
    {
      "@type": "Person", 
      "name": "Ahmed Ismail",
      "jobTitle": "Co-Founder & UI/UX Designer"
    }
  ],
  
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "EG",
    "addressRegion": "Cairo",
    "addressLocality": "Cairo"
  },
  
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+20-XXX-XXX-XXXX",
      "email": "info@codenetra.com",
      "contactType": "customer service",
      "availableLanguage": ["Arabic", "English"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "ContactPoint",
      "contactType": "technical support",
      "email": "support@codenetra.com",
      "availableLanguage": ["Arabic", "English"]
    }
  ],
  
  "sameAs": [
    "https://github.com/obieda-hussien",
    "https://linkedin.com/company/codenetra",
    "https://twitter.com/codenetra",
    "https://instagram.com/codenetra",
    "https://facebook.com/codenetra"
  ],
  
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Technology Solutions & Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/services/mobile-app-development`,
          "name": "Mobile App Development",
          "description": "Custom Android and iOS mobile application development with modern frameworks and technologies",
          "serviceType": "Mobile Development",
          "provider": {
            "@type": "Organization",
            "name": "Codenetra"
          }
        },
        "category": "Technology Services"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/services/web-development`,
          "name": "Web Development",
          "description": "Modern responsive websites and web applications using React, Next.js, and other cutting-edge technologies",
          "serviceType": "Web Development",
          "provider": {
            "@type": "Organization",
            "name": "Codenetra"
          }
        },
        "category": "Technology Services"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/services/ui-ux-design`,
          "name": "UI/UX Design",
          "description": "User-centered design for exceptional digital experiences and intuitive interfaces",
          "serviceType": "Design Services",
          "provider": {
            "@type": "Organization",
            "name": "Codenetra"
          }
        },
        "category": "Design Services"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/services/custom-software`,
          "name": "Custom Software Development",
          "description": "Tailored software solutions for enterprise needs and business automation",
          "serviceType": "Software Development",
          "provider": {
            "@type": "Organization",
            "name": "Codenetra"
          }
        },
        "category": "Technology Services"
      }
    ]
  },
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "محمد أحمد"
      },
      "reviewBody": "خدمة ممتازة وفريق محترف. تم تطوير تطبيق الجوال الخاص بشركتنا بجودة عالية وفي الوقت المحدد."
    }
  ]
}

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Codenetra",
  "url": seoConfig.siteUrl,
  "description": seoConfig.defaultDescription,
  "inLanguage": ["ar", "en"],
  "isPartOf": {
    "@type": "Organization",
    "name": "Codenetra"
  },
  "about": {
    "@type": "Thing",
    "name": "Mobile App Development and Web Development Services"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${seoConfig.siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    {
      "@type": "ContactAction",
      "target": `${seoConfig.siteUrl}/contact`
    }
  ],
  "mainEntity": {
    "@type": "Organization",
    "name": "Codenetra"
  }
}

// Local Business Schema (if applicable)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Codenetra",
  "image": `${seoConfig.siteUrl}/icons/icon-512x512.png`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Technology District",
    "addressLocality": "Cairo",
    "addressRegion": "Cairo Governorate",
    "postalCode": "11511",
    "addressCountry": "EG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.0444,
    "longitude": 31.2357
  },
  "telephone": "+20-XXX-XXX-XXXX",
  "email": "info@codenetra.com",
  "url": seoConfig.siteUrl,
  "openingHours": "Mo-Th 09:00-18:00, Su 09:00-18:00",
  "priceRange": "$$",
  "currenciesAccepted": "USD,EGP",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer"
}

// FAQ Schema for common questions
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ما هي خدمات شركة كودنيترا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نقدم خدمات تطوير التطبيقات المحمولة، تطوير المواقع الإلكترونية، تصميم واجهات المستخدم، والحلول البرمجية المخصصة للشركات والمؤسسات."
      }
    },
    {
      "@type": "Question",
      "name": "كم تستغرق مدة تطوير التطبيق؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "تختلف مدة التطوير حسب تعقيد المشروع، لكن عادة ما تتراوح بين 2-6 أشهر للتطبيقات المتوسطة الحجم."
      }
    },
    {
      "@type": "Question",
      "name": "هل تقدمون دعم فني بعد التسليم؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، نقدم دعم فني شامل لمدة 6 أشهر مجاناً بعد التسليم، بالإضافة إلى خطط صيانة مدفوعة."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies do you use for development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use modern technologies including React, Next.js, Node.js, Flutter, Kotlin, TypeScript, and cloud platforms like AWS and Google Cloud."
      }
    }
  ]
}

// Breadcrumb Schema generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// Service Schema generator
export function generateServiceSchema(service: {
  name: string
  description: string
  serviceType: string
  price?: string
  duration?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "serviceType": service.serviceType,
    "provider": {
      "@type": "Organization",
      "name": "Codenetra",
      "url": seoConfig.siteUrl
    },
    "areaServed": {
      "@type": "Place",
      "name": "Middle East and North Africa"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description
          },
          "price": service.price,
          "priceCurrency": "USD",
          "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  }
}