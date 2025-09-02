# Codenetra - Modern Arabic Tech Company Website

A beautiful, modern website for Codenetra technology company featuring Arabic RTL design, dark mode support, and cutting-edge animations built with Next.js 15.

## 🌟 Features

- **Arabic RTL Design**: Full right-to-left support with proper text alignment
- **Modern UI/UX**: Clean, minimalist design with glassmorphism effects
- **Dark Mode**: Seamless theme switching with `next-themes`
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Beautiful CSS keyframes and Framer Motion animations
- **Performance**: Optimized with Next.js 15, Turbopack, and static export
- **Accessibility**: Keyboard navigation and screen reader support

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

# The static files will be generated in the 'out' directory
```

## 📦 Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS 4 with custom configuration
- **Animations**: Framer Motion
- **Icons**: FontAwesome & Lucide React
- **Forms**: React Hook Form with Zod validation
- **Theme**: Next Themes for dark mode

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The website automatically deploys to GitHub Pages when you push to the `main` branch. The workflow:

1. **Builds** the static site using Next.js export
2. **Optimizes** all assets and images
3. **Deploys** to GitHub Pages
4. **Available** at: `https://obieda-hussien.github.io/Codnetra/`

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
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── layout/           # Layout components (Header, Footer)
└── lib/                  # Utilities and configurations
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

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support, email info@codenetra.com or create an issue in this repository.
GitHub Pages is configured correctly. The website should show the Codenetra landing page.
