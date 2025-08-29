# Technical Stack Documentation

> Last Updated: 2025-08-29
> Version: 1.1.0
> Project: Makkar Bakers Web Application

## Overview

Makkar Bakers is a modern Next.js web application for a bakery business specializing in handmade, egg-free cakes. This document outlines the current technical implementation, focusing on the actually implemented features and technologies in use.

## 1. Core Application Stack

### Application Framework

- **Framework:** Next.js 15.1.3 (App Router)
- **Language:** TypeScript 5.7.2
- **Runtime:** Node.js 22+ (Alpine Linux in Docker)
- **Build Tool:** Turbopack (development)
- **Package Manager:** pnpm 10.14.0

### Frontend Architecture

- **JavaScript Framework:** React 19.0.0 with Server Components
- **Component Architecture:**
  - Server Components for static content and layouts
  - Minimal client-side JavaScript for performance
- **Import Strategy:** Absolute imports with @/* path mapping
- **State Management:** React built-in state (no external state management currently)
- **Component System:** Custom utility classes with Tailwind CSS v4

### Development Environment

- **Code Quality:** ESLint 9.18.0 + Prettier 3.4.2 + Stylelint 16.23.1
- **Pre-commit Hooks:** Husky 9.1.7 + lint-staged 15.2.11
- **Type Safety:** Strict TypeScript with comprehensive compiler options
- **Testing:** Jest 29.7.0 + React Testing Library 16.1.0

## 2. Current Implementation Status

### Static Content Focus

- **Current State:** Static marketing website with basic React components
- **Data Storage:** No database implementation yet
- **Content Management:** Static content in React components
- **Future Planning:** Database schema and e-commerce features planned but not implemented

### API Implementation

```typescript
// Currently implemented API routes
/api/health - Health check endpoint for Docker containers
```

### Planned Database Architecture

- **Database:** PostgreSQL (planned)
- **ORM:** Prisma (planned)
- **Features:** Product catalog, orders, inventory management (future implementation)

## 3. UI/UX Technologies

### Styling Framework

- **CSS Framework:** Tailwind CSS v4.1.12 (CSS-first configuration)
- **Configuration:** `@theme` directive in globals.css
- **Design System:** Sugar Bliss theme with custom color palette
- **Component Utilities:** `@utility` API for reusable components
- **PostCSS:** `@tailwindcss/postcss` v4.1.12

### Color Palette (Sugar Bliss Theme)

```css
/* Primary Colors (Rose/Pink) */
--color-primary-400: #e89bb5; /* Signature bakery color */
--color-primary-600: #d8527f; /* Interactive states */

/* Secondary Colors (Mint Green) */
--color-secondary-500: #a8d5ba; /* Primary buttons */
--color-secondary-600: #14b8a6; /* Hover states */

/* Background Gradient */
--color-background-50: #fdfcfc;
--color-background-100: #f8f0f5;
```

### Typography System

- **Font Loading:** next/font with Google Fonts integration
- **Primary Font:** Inter (--font-inter) - body text
- **Display Font:** Proza Libre (--font-proza-libre) - headings
- **Additional Fonts:** Poppins, Playfair Display (loaded but not actively used)
- **Font Display:** swap optimization for performance

### Current UI Components

```typescript
// Implemented components
components/
├── layout/
│   ├── Header.tsx      // Site navigation
│   └── Footer.tsx      // Site footer
├── ui/
│   └── Button.tsx      // Variant-based button component
└── index.ts           // Component exports

// Custom utility classes
.btn-primary    // Mint green button with hover effects
.btn-secondary  // Pink outline button
.card          // Glassmorphism content cards
.hero-card     // Enhanced hero section cards
```

## 4. Current Features & Content

### Implemented Features

- **Homepage:** Hero section with bakery branding
- **Feature Cards:** Egg-free delights, local ingredients, special celebrations
- **Interactive Buttons:** Order Now and View Menu (placeholder functionality)
- **Responsive Design:** Mobile-first layout with Tailwind CSS
- **SEO Optimization:** Complete metadata implementation
- **Health Monitoring:** Docker health check endpoint

### Content Strategy

- **Brand Focus:** Handmade, egg-free cakes
- **Target Market:** Dietary restriction conscious consumers
- **Value Propositions:**
  - Egg-free specialization
  - Local ingredient sourcing
  - Special occasion focus

### Planned E-commerce Features

- **Payment Processing:** Stripe integration (future)
- **Product Catalog:** Cake varieties and customization options (future)
- **Order Management:** Online ordering system (future)
- **Inventory Tracking:** Real-time stock management (future)

## 5. Infrastructure & Deployment

### Docker Configuration

- **Multi-stage Build:** Optimized production image with Node.js 22 Alpine
- **Package Manager:** pnpm with frozen lockfile for reproducible builds
- **Security:** Non-root user execution with proper signal handling
- **Health Checks:** Built-in health check endpoint for container orchestration
- **Size Optimization:** Standalone Next.js output for minimal runtime

### Next.js Configuration

```javascript
// Production optimizations
output: 'standalone',           // Docker-optimized build
reactStrictMode: true,          // Development safety
compress: true,                 // Gzip compression
poweredByHeader: false,         // Security header removal

// Security headers
headers: [
  'Strict-Transport-Security',
  'X-Frame-Options: SAMEORIGIN',
  'X-Content-Type-Options: nosniff',
  'Referrer-Policy: strict-origin-when-cross-origin'
]

// Image optimization
images: {
  formats: ['image/webp', 'image/avif'],
  dangerouslyAllowSVG: false    // XSS prevention
}

// Experimental features
optimizePackageImports: true,   // Bundle optimization
reactCompiler: true             // React 19 compiler
```

### Performance Features

- **Bundle Optimization:** Package import optimization for key libraries
- **Image Optimization:** WebP/AVIF format support with Next.js Image
- **Static Optimization:** Automatic static generation where possible
- **Caching Strategy:** Browser caching for static assets
- **Font Optimization:** Google Fonts with swap display strategy

## 6. Security & Authentication

### Current Security Implementation

- **Security Headers:** Comprehensive HTTP security headers in Next.js config
- **XSS Prevention:** SVG uploads disabled in image optimization
- **Content Security:** Strict CSP for image handling
- **Docker Security:** Non-root user execution, minimal attack surface
- **Dependency Security:** Regular updates and security patches

### Security Headers Implemented

```javascript
// Next.js security headers
'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload'
'X-XSS-Protection': '1; mode=block'
'X-Frame-Options': 'SAMEORIGIN'
'X-Content-Type-Options': 'nosniff'
'Referrer-Policy': 'strict-origin-when-cross-origin'
'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
```

### Future Security Features

- **Authentication:** NextAuth.js integration (planned)
- **API Security:** Rate limiting and input validation (planned)
- **Payment Security:** PCI DSS compliance through Stripe (planned)
- **Data Protection:** GDPR compliance measures (planned)

## 7. Development & DevOps

### Development Workflow

```bash
# Available scripts
pnpm dev              # Start development server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint with TypeScript support
pnpm lint:fix         # Fix ESLint issues automatically
pnpm lint:css         # Lint CSS with Stylelint
pnpm lint:css:fix     # Fix CSS linting issues
pnpm type-check       # TypeScript compilation check
pnpm test             # Run Jest unit tests
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Run tests with coverage
pnpm build:check      # Full quality check (type, lint, css, build)
```

### Code Quality Setup

- **ESLint:** v9.18.0 with Next.js, React, and TypeScript rules
- **Prettier:** v3.4.2 with Tailwind CSS plugin
- **Stylelint:** v16.23.1 for CSS linting with Tailwind support
- **Lint-staged:** Pre-commit hooks for automatic fixing
- **Husky:** Git hooks management

### Testing Infrastructure

- **Framework:** Jest 29.7.0 with jsdom environment
- **React Testing:** @testing-library/react v16.1.0
- **Component Tests:** Basic setup for component testing
- **Future Testing:** E2E testing with Playwright (planned)

### Browser Compatibility

- **Tailwind CSS v4 Requirements:**
  - Safari 16.4+
  - Chrome 111+
  - Firefox 128+
- **Modern JavaScript:** ES2022 target with bundler module resolution

## 8. Scalability & Performance Considerations

### Current Performance Characteristics

- **Static Generation:** Optimized for static content delivery
- **Bundle Size:** Minimal JavaScript footprint with server components
- **Image Optimization:** Next.js Image with WebP/AVIF support
- **Font Loading:** Optimized Google Fonts with display: swap
- **CSS Optimization:** Tailwind CSS v4 with improved build times

### Performance Features

- **Server Components:** Reduced client-side JavaScript
- **Package Optimization:** Import optimization for key libraries
- **Static Caching:** Immutable caching for static assets
- **Compression:** Gzip compression enabled
- **Code Splitting:** Automatic with Next.js App Router

### Scalability Readiness

- **Docker:** Multi-stage builds for production deployment
- **Standalone Output:** Minimal runtime dependencies
- **Health Checks:** Container orchestration ready
- **Environment Variables:** Configurable for different environments
- **Modular Architecture:** Component-based for future expansion

## 9. Third-party Integrations

### Current Integrations

- **Fonts:** Google Fonts API for typography
- **SEO:** Built-in Next.js metadata API
- **Health Monitoring:** Custom health check endpoint

### Planned Integrations

- **Analytics:** Google Analytics 4 (future)
- **Payment Processing:** Stripe (future)
- **Email Services:** Transactional email service (future)
- **CMS:** Content management system (future)
- **Customer Support:** Help desk integration (future)

## 10. Security Compliance & Standards

### Current Compliance

- **Web Standards:** HTML5, CSS3, ES2022 compliance
- **Accessibility:** Basic accessibility practices (future enhancement planned)
- **SEO:** Search engine optimization with structured metadata
- **Security:** Basic web security headers and practices

### Future Compliance Requirements

- **PCI DSS:** Payment card industry compliance (when e-commerce is implemented)
- **GDPR:** Data protection compliance (when user data is collected)
- **WCAG:** Web accessibility guidelines (planned enhancement)
- **Food Safety:** Digital record keeping (when inventory management is implemented)

## Implementation Status Summary

**Current State (v1.1.0):**
- ✅ Modern Next.js 15 + React 19 foundation
- ✅ Tailwind CSS v4 design system
- ✅ TypeScript strict mode configuration
- ✅ Docker production deployment setup
- ✅ Comprehensive security headers
- ✅ SEO optimization and metadata
- ✅ Code quality tooling (ESLint, Prettier, Stylelint)
- ✅ Basic component architecture
- ✅ Health monitoring endpoint

**Planned Features:**
- 🔄 Database integration (PostgreSQL + Prisma)
- 🔄 E-commerce functionality
- 🔄 User authentication
- 🔄 Payment processing
- 🔄 Product catalog management
- 🔄 Order processing system
- 🔄 Admin dashboard
- 🔄 Advanced testing (E2E)
- 🔄 CI/CD pipeline
- 🔄 Production deployment

This technical foundation provides a solid base for scaling into a full-featured bakery e-commerce platform while maintaining modern development practices and performance optimization.
