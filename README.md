# Codenetra - Modern Arabic Tech Company Website

A beautiful, modern website for Codenetra technology company featuring Arabic RTL design, dark mode support, comprehensive security, and cutting-edge SEO optimization built with Next.js 15.

## 🌟 Features

### Core Features
- **Arabic RTL Design**: Full right-to-left support with proper text alignment
- **Modern UI/UX**: Clean, minimalist design with glassmorphism effects
- **Dark Mode**: Seamless theme switching with `next-themes`
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Beautiful CSS keyframes and Framer Motion animations
- **Performance**: Optimized with Next.js 15, Turbopack, and static export
- **Accessibility**: Keyboard navigation and screen reader support

### ✅ NEW: Security & SEO Enhancements
- **🛡️ Advanced Security**: Comprehensive .htaccess security headers, CSP, XSS protection
- **🔍 SEO Optimization**: Multi-language keywords, structured data, dynamic sitemap
- **📱 PWA Ready**: Complete Progressive Web App with manifest and icons
- **📊 Analytics**: Google Analytics 4 with Core Web Vitals monitoring
- **⚠️ Error Handling**: React error boundaries and graceful fallbacks
- **✅ Form Validation**: Zod-powered validation with Arabic language support
- **🌍 International SEO**: Arabic/English hreflang tags and geo-targeting
- **🚀 Performance**: Bundle optimization and comprehensive caching

## 🛡️ Security Features

- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **Content Security Policy**: Configured for secure resource loading
- **Input Validation**: SQL injection and XSS attack prevention
- **Rate Limiting**: IP-based request throttling
- **File Protection**: Sensitive file and directory access blocking
- **HTTPS Enforcement**: Automatic secure connection redirection

## 🔍 SEO & Analytics

- **Structured Data**: Schema.org markup for organization and services
- **Meta Tags**: Optimized Open Graph and Twitter Card tags
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine optimized crawling instructions
- **Keywords**: Comprehensive Arabic/English keyword targeting
- **Analytics**: Google Analytics 4 with performance monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking and optimization

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build the project
npm run build

# Run linting
npm run lint

# The static files will be generated in the 'out' directory
```

## 📦 Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS 4 with custom configuration
- **Animations**: Framer Motion
- **Icons**: FontAwesome & Lucide React
- **Forms**: React Hook Form with Zod validation
- **Theme**: Next Themes for dark mode
- **Security**: Custom validation and sanitization
- **Analytics**: Google Analytics 4 with performance monitoring
- **SEO**: Structured data and meta tag optimization

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The website automatically deploys to GitHub Pages when you push to the `main` branch. The workflow:

1. **Builds** the static site using Next.js export
2. **Optimizes** all assets and images
3. **Generates** sitemap and SEO files
4. **Deploys** to GitHub Pages
5. **Available** at: `https://obieda-hussien.github.io/Codnetra/`

### Manual Deployment

You can also trigger a manual deployment from the GitHub Actions tab in your repository.

### Local Build Testing

```bash
# Test the production build locally
npm run build

# The static files will be in the 'out' directory
# You can serve them with any static file server
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx          # Home page
│   └── sitemap.ts        # Dynamic sitemap generation
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   ├── layout/           # Layout components (Header, Footer)
│   └── AnalyticsProvider.tsx # Analytics integration
├── lib/                  # Utilities and configurations
│   ├── analytics.ts      # Google Analytics 4 setup
│   ├── errorHandling.tsx # Error boundaries and handling
│   ├── security.ts       # Security utilities
│   ├── seoKeywords.ts    # SEO configuration
│   ├── structuredData.ts # Schema.org markup
│   └── validation.ts     # Form validation schemas
└── public/
    ├── .htaccess         # Security headers and rules
    ├── manifest.json     # PWA manifest
    ├── robots.txt        # SEO robots file
    ├── icons/           # PWA icons
    └── screenshots/     # PWA screenshots
```

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.ts`:

- **Primary**: Blue (#2563eb)
- **Secondary**: Green (#10b981)
- **Dark Theme**: Custom dark color scheme

### Fonts

- **Display**: Inter (optimized with `next/font`)
- **Monospace**: JetBrains Mono

## 🌐 Sections

1. **Hero Section**: Animated landing with call-to-action
2. **Services**: Technology services with interactive cards
3. **Portfolio**: Project showcase with filtering
4. **Contact**: Contact form with validation
5. **Blog**: Latest articles and insights

## 📊 Performance Monitoring

- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Bundle Analysis**: Code splitting and tree shaking
- **Image Optimization**: WebP/AVIF support
- **Caching**: Long-term static asset caching

## 🌍 Internationalization

- **Arabic Support**: RTL layout, Arabic fonts, localized content
- **English Support**: Fallback language with international SEO
- **Hreflang Tags**: Proper language targeting for search engines

## 📋 Security Checklist

- [x] Security headers configured (.htaccess)
- [x] Content Security Policy implemented
- [x] Input validation and sanitization
- [x] XSS and SQL injection protection
- [x] Rate limiting for forms
- [x] Sensitive file protection
- [x] HTTPS enforcement

## 📈 SEO Checklist

- [x] Meta tags optimized (Open Graph, Twitter)
- [x] Structured data (Schema.org)
- [x] Dynamic sitemap generation
- [x] Robots.txt optimization
- [x] Arabic/English keywords
- [x] Hreflang implementation
- [x] Performance optimization

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 Documentation

- **[IMPLEMENTATION.md](IMPLEMENTATION.md)**: Detailed implementation guide
- **[Security Features](src/lib/security.ts)**: Security utilities documentation
- **[SEO Configuration](src/lib/seoKeywords.ts)**: SEO setup and keywords
- **[Analytics Setup](src/lib/analytics.ts)**: Google Analytics 4 integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support, email info@codenetra.com or create an issue in this repository.

---

**Last Updated**: January 2024  
**Version**: 2.0.0 (Comprehensive Security & SEO Implementation)
