// Global SEO keywords for international reach
export const globalKeywords = {
  primary: {
    english: [
      'mobile app development company',
      'android app development',
      'web development services',
      'custom software development',
      'full-stack development',
      'UI/UX design agency',
      'enterprise software solutions',
      'MVP development',
      'startup app development',
      'React development company',
      'Next.js development services',
      'TypeScript development',
      'Node.js backend development'
    ],
    arabic: [
      'شركة تطوير التطبيقات',
      'تطوير تطبيقات الأندرويد',
      'تصميم مواقع الويب',
      'برمجة التطبيقات',
      'تطوير البرمجيات',
      'شركة تقنية',
      'حلول تقنية مبتكرة',
      'تطوير المواقع الإلكترونية',
      'تصميم تطبيقات الجوال',
      'برمجة المواقع',
      'تطوير الأنظمة',
      'حلول برمجية',
      'كودنيترا',
      'تطوير تطبيقات الويب'
    ]
  },
  
  secondary: {
    technical: [
      'React development',
      'Node.js development', 
      'TypeScript development',
      'Next.js development',
      'Flutter development',
      'Kotlin development',
      'API development',
      'database design',
      'cloud solutions',
      'DevOps services',
      'microservices architecture',
      'progressive web apps',
      'mobile-first design',
      'responsive web design',
      'GraphQL development',
      'REST API development'
    ],
    business: [
      'startup development partner',
      'digital transformation',
      'business automation',
      'e-commerce development',
      'SaaS development',
      'fintech development',
      'healthcare app development',
      'education technology',
      'logistics software',
      'CRM development',
      'ERP solutions',
      'inventory management systems',
      'booking systems',
      'payment integration',
      'custom web applications'
    ]
  },
  
  location: [
    'Egypt app development',
    'Middle East software company',
    'MENA region development',
    'Cairo tech company',
    'African startup development',
    'Egypt web development',
    'Middle East mobile apps',
    'Arab software solutions',
    'Gulf region development',
    'North Africa technology'
  ],
  
  industrySpecific: {
    healthcare: [
      'healthcare app development',
      'medical software solutions',
      'telemedicine apps',
      'hospital management systems',
      'patient portal development'
    ],
    ecommerce: [
      'e-commerce platform development',
      'online store creation',
      'shopping app development',
      'payment gateway integration',
      'inventory management apps'
    ],
    education: [
      'educational app development',
      'e-learning platforms',
      'LMS development',
      'student management systems',
      'online course platforms'
    ],
    finance: [
      'fintech app development',
      'banking software solutions',
      'financial management apps',
      'cryptocurrency platforms',
      'payment processing systems'
    ]
  }
}

// SEO configuration for different page types
export const seoConfig = {
  defaultTitle: 'Codenetra | Leading App Development Company | شركة كودنيترا',
  defaultDescription: 'Professional mobile app development, web development, and custom software solutions. Transform your ideas into digital reality with our expert team. | شركة تطوير التطبيقات والمواقع الرائدة في الشرق الأوسط',
  siteName: 'Codenetra',
  siteUrl: process.env.NODE_ENV === 'production' 
    ? 'https://obieda-hussien.github.io/Codnetra' 
    : 'http://localhost:3000',
  locale: 'ar_EG',
  alternateLocales: ['en_US', 'ar_SA', 'fr_FR', 'de_DE'],
  twitterHandle: '@codenetra',
  authorName: 'Codenetra Team',
  
  organization: {
    name: 'Codenetra',
    legalName: 'شركة كودنيترا للحلول التقنية',
    url: 'https://obieda-hussien.github.io/Codnetra',
    logo: 'https://obieda-hussien.github.io/Codnetra/icons/icon-512x512.png',
    foundingDate: '2024-01-01',
    founders: [
      {
        name: 'Abdelrahman Hussein',
        jobTitle: 'Co-Founder & Full-Stack Developer',
        url: 'https://github.com/obieda-hussien'
      },
      {
        name: 'Ahmed Ismail',
        jobTitle: 'Co-Founder & UI/UX Designer'
      }
    ],
    address: {
      country: 'Egypt',
      region: 'Cairo',
      addressCountry: 'EG'
    },
    contactPoint: {
      telephone: '+20-XXX-XXX-XXXX',
      email: 'info@codenetra.com',
      contactType: 'customer service',
      availableLanguage: ['Arabic', 'English']
    },
    sameAs: [
      'https://github.com/obieda-hussien',
      'https://linkedin.com/company/codenetra',
      'https://twitter.com/codenetra',
      'https://instagram.com/codenetra',
      'https://facebook.com/codenetra'
    ]
  },
  
  services: [
    {
      name: 'Mobile App Development',
      description: 'Custom Android and iOS app development using latest technologies',
      keywords: ['mobile app development', 'android development', 'iOS development', 'تطوير تطبيقات الجوال']
    },
    {
      name: 'Web Development',
      description: 'Modern responsive websites and web applications',
      keywords: ['web development', 'website design', 'تطوير المواقع', 'تصميم مواقع']
    },
    {
      name: 'UI/UX Design',
      description: 'User-centered design for exceptional digital experiences',
      keywords: ['UI design', 'UX design', 'user interface', 'تصميم واجهات المستخدم']
    },
    {
      name: 'Custom Software Development',
      description: 'Tailored software solutions for business needs',
      keywords: ['custom software', 'enterprise solutions', 'بناء أنظمة مخصصة']
    }
  ]
}

// Page-specific SEO templates
export const pageTemplates = {
  home: {
    title: 'Codenetra - شركة تطوير التطبيقات والمواقع الرائدة في الشرق الأوسط',
    description: 'نحول أفكارك إلى تطبيقات ومواقع ناجحة. خدمات تطوير التطبيقات، تصميم المواقع، والحلول التقنية المبتكرة مع أفضل شركة تطوير في المنطقة',
    keywords: globalKeywords.primary.arabic.join(', ') + ', ' + globalKeywords.primary.english.join(', ')
  },
  
  services: {
    title: 'خدماتنا - تطوير التطبيقات والمواقع | Codenetra Services',
    description: 'خدمات شاملة في تطوير التطبيقات، تصميم المواقع، البرمجة المخصصة، وحلول الذكاء الاصطناعي. اكتشف كيف نساعدك في تحقيق أهدافك التقنية',
    keywords: globalKeywords.secondary.technical.join(', ') + ', ' + globalKeywords.secondary.business.join(', ')
  },
  
  portfolio: {
    title: 'أعمالنا - مشاريع ناجحة في تطوير التطبيقات | Codenetra Portfolio',
    description: 'استعرض مشاريعنا الناجحة في تطوير التطبيقات والمواقع. قصص نجاح حقيقية لعملائنا في مختلف القطاعات والصناعات',
    keywords: 'portfolio, مشاريع, أعمال سابقة, تطبيقات ناجحة, مواقع مميزة'
  },
  
  about: {
    title: 'من نحن - قصة كودنيترا وفريق العمل | About Codenetra',
    description: 'تعرف على قصة شركة كودنيترا، فريق العمل المتخصص، ورؤيتنا في تطوير الحلول التقنية المبتكرة للشركات والمؤسسات',
    keywords: 'عن الشركة, فريق العمل, كودنيترا, رؤيتنا, مهمتنا, خبرة تقنية'
  },
  
  contact: {
    title: 'تواصل معنا - احصل على استشارة مجانية | Contact Codenetra',
    description: 'تواصل مع فريق كودنيترا للحصول على استشارة مجانية حول مشروعك. نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي',
    keywords: 'تواصل معنا, استشارة مجانية, طلب عرض سعر, خدمة العملاء, دعم فني'
  }
}

// Structured data templates
export const structuredDataTemplates = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.organization.name,
    alternateName: seoConfig.organization.legalName,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    description: seoConfig.defaultDescription,
    foundingDate: seoConfig.organization.foundingDate,
    address: {
      '@type': 'PostalAddress',
      addressCountry: seoConfig.organization.address.addressCountry,
      addressRegion: seoConfig.organization.address.region
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: seoConfig.organization.contactPoint.telephone,
      email: seoConfig.organization.contactPoint.email,
      contactType: seoConfig.organization.contactPoint.contactType,
      availableLanguage: seoConfig.organization.contactPoint.availableLanguage
    },
    sameAs: seoConfig.organization.sameAs,
    founder: seoConfig.organization.founders.map(founder => ({
      '@type': 'Person',
      name: founder.name,
      jobTitle: founder.jobTitle,
      url: founder.url
    }))
  },
  
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    inLanguage: ['ar', 'en'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
}