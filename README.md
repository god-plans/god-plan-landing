# God Plan Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-4.1.3-00DC82.svg)](https://nuxt.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.22-4FC08D.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)

The official landing page for **God Plan** - Complete web development solutions featuring modern admin dashboards, landing page templates, and reusable UI component kits.

## 🌟 Overview

God Plan provides a comprehensive suite of open-source web development solutions:

- **Admin Dashboards**: Professional dashboards built with Nuxt.js, Next.js, Vuetify, and Material-UI
- **Landing Pages**: Conversion-optimized templates for showcasing products and services
- **UI Component Kits**: Reusable component libraries for consistent design systems
- **Documentation**: Comprehensive guides and API references

## ✨ Features

- 🚀 **Modern Stack**: Built with Nuxt.js 4, Vue 3, TypeScript, and Tailwind CSS
- 🎨 **Beautiful Design**: Professional UI with dark/light mode support
- 🌍 **Internationalization**: Multi-language support (English & Persian)
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance**: Optimized with modern build tools and best practices
- 🔍 **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- 🤖 **Automated**: CI/CD ready with deployment scripts
- 📖 **Well Documented**: Extensive documentation and component guides

## 🛠️ Tech Stack

### Core Framework
- **Nuxt.js 4** - The Vue.js framework for building full-stack applications
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Typed JavaScript for better development experience

### UI & Styling
- **Vuetify 3** - Material Design component framework
- **Tailwind CSS** - Utility-first CSS framework
- **Sass/SCSS** - CSS preprocessor with variables and mixins

### Features & Plugins
- **@nuxtjs/i18n** - Internationalization support
- **@nuxtjs/color-mode** - Dark/light theme switching
- **@nuxt/image** - Optimized image handling
- **@nuxtjs/sitemap** - Automatic sitemap generation
- **@nuxtjs/robots** - SEO robots.txt management
- **@pinia/nuxt** - State management

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Vite** - Fast development server and build tool

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/god-plans/god-landing-nuxt.git
   cd god-landing-nuxt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3012`

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Lint code with ESLint
npm run lint:fix     # Fix linting issues
npm run typecheck    # TypeScript type checking

# Deployment
npm run generate     # Generate static site
```

## 📁 Project Structure

```
god-landing-nuxt/
├── app/
│   ├── components/
│   │   ├── common/           # Reusable components
│   │   ├── layout/           # Layout components (Header, Footer)
│   │   └── sections/         # Page sections (Hero, Features, etc.)
│   ├── layouts/              # Page layouts
│   ├── pages/                # Nuxt pages (file-based routing)
│   └── plugins/              # Nuxt plugins
├── assets/
│   ├── css/                  # Stylesheets
│   └── variables.scss        # SCSS variables
├── i18n/
│   └── locales/              # Translation files
├── public/                   # Static assets
│   ├── icons/                # Feature icons
│   ├── images/               # Images and graphics
│   └── logo/                 # Brand assets
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind CSS config
└── package.json              # Dependencies and scripts
```

## 🌐 Internationalization

The landing page supports multiple languages:

- **English (en)** - Default language
- **Persian/Farsi (fa)** - RTL support included

Language files are located in `i18n/locales/` and can be easily extended.

## 🎨 Customization

### Themes & Colors
- Modify `assets/css/variables.scss` for global color schemes
- Use Tailwind CSS classes for component-specific styling
- Dark/light mode automatically switches based on user preference

### Content
- Update translations in `i18n/locales/` files
- Modify section components in `app/components/sections/`
- Customize meta tags and SEO in `nuxt.config.ts`

### Branding
- Replace logo files in `public/logo/`
- Update brand colors in SCSS variables
- Modify site information in `nuxt.config.ts`

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect to Netlify**
   - Push your code to GitHub
   - Connect repository to Netlify
   - Use the provided `netlify.toml` configuration

2. **Environment Variables**
   ```bash
   NUXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

3. **Deploy Command**
   ```bash
   npm run generate
   ```

### Other Platforms

The project includes deployment scripts for various platforms. Check the `deploy-*.sh` files for platform-specific instructions.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../CONTRIBUTING.md) for details.

### Development Guidelines

1. **Code Style**: Follow the existing ESLint configuration
2. **Commits**: Use conventional commit messages
3. **Testing**: Test your changes across different devices and browsers
4. **Documentation**: Update relevant documentation for new features

### Reporting Issues

- Use GitHub Issues for bug reports and feature requests
- Include screenshots, browser info, and reproduction steps
- Check existing issues before creating new ones

## 📊 Performance

This landing page is optimized for performance:

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for real user experience
- **Bundle Size**: Efficient code splitting and tree shaking
- **Image Optimization**: Automatic WebP conversion and lazy loading

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](../LICENSE) file for details.

**Note:** The landing page itself is MIT licensed, but the full God Plan suite (including admin dashboards) is AGPL-3.0 licensed.

## 🙏 Acknowledgments

- [Nuxt.js](https://nuxt.com/) - The amazing Vue.js framework
- [Vuetify](https://vuetifyjs.com/) - Material Design components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework

## 📞 Support

- **Documentation**: [godplans.org/docs](https://godplans.org/)
- **GitHub Issues**: [github.com/god-plans/god-landing-nuxt/issues](https://github.com/god-plans/god-landing-nuxt/issues)
- **Community**: [Discord Server](https://discord.gg/godplan)
- **Email**: godplans.org

---

**Built with ❤️ by the God Plan team**
