# Makkar Bakers

> Handmade, egg-free cakes made with local ingredients for your special celebrations.

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x or higher (required for Tailwind CSS v4)
- pnpm 10.x or higher
- Modern browser for development (Safari 16.4+, Chrome 111+, Firefox 128+)
- Docker (optional, for containerized deployment)

### Development Setup

1. **Clone and install dependencies:**

   ```bash
   git clone <repository-url>
   cd bakery-app
   pnpm install
   ```

2. **Environment setup (optional):**

   ```bash
   cp .env.example .env.local
   # Edit .env.local if needed (currently no required environment variables)
   ```

3. **Start development server:**

   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm lint:css` - Run CSS linting with Stylelint
- `pnpm lint:css:fix` - Fix CSS linting issues automatically
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run unit tests with Jest
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm test:e2e` - Run end-to-end tests with Playwright (planned)
- `pnpm build:check` - Complete build validation (type-check + lint + lint:css + build)

### Tech Stack

- **Framework:** Next.js 15.1.3 with App Router
- **Language:** TypeScript 5.7.2
- **Runtime:** React 19.0.0
- **Styling:** Tailwind CSS v4.1.12 with CSS-first configuration
- **Theme:** Sugar Bliss custom design system
- **Testing:** Jest 29.7.0 + React Testing Library 16.1.0
- **Package Manager:** pnpm 10.14.0
- **Node Version:** 22+ (Alpine Linux in Docker)
- **Deployment:** Docker-ready with multi-stage builds

#### Current Implementation Status
- ✅ **Frontend:** Modern Next.js with React 19 Server Components
- ✅ **Styling:** Complete Tailwind CSS v4 design system
- ✅ **Components:** Header, Footer, Button, and card utilities
- ✅ **Development:** Full linting, testing, and quality tools
- ✅ **Deployment:** Docker containerization with health checks
- 🔄 **Database:** PostgreSQL with Prisma ORM (planned)
- 🔄 **E-commerce:** Product catalog and ordering (planned)
- 🔄 **Authentication:** User management (planned)

### Tailwind CSS v4 Configuration

This project uses **Tailwind CSS v4** with a CSS-first configuration approach:

- **Configuration**: CSS `@theme` directive in `app/globals.css` (no `tailwind.config.js`)
- **PostCSS Plugin**: `@tailwindcss/postcss` v4.1.12
- **Theme**: Sugar Bliss custom design system with rose/pink primary colors and mint green accents
- **Custom Utilities**: Built-in button styles (`btn-primary`, `btn-secondary`) and card components
- **Browser Support**: Safari 16.4+, Chrome 111+, Firefox 128+

#### Key Features
- CSS custom properties for theme variables
- Custom color palette optimized for bakery branding
- Built-in component utilities using `@utility` API
- Enhanced shadow system and border radius scale
- CSS linting with Stylelint for code quality

### Project Structure

```
bakery-app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── health/        # Health check endpoint
│   ├── globals.css        # Global styles + Tailwind v4 theme configuration
│   ├── layout.tsx         # Root layout with font loading
│   └── page.tsx           # Home page component
├── components/            # Reusable React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── ui/               # UI components (Button)
│   └── index.ts          # Component exports
├── lib/                   # Utility functions
│   └── utils.ts          # Helper utilities (minimal)
├── types/                # TypeScript type definitions
│   └── index.ts          # Global type definitions
├── public/               # Static assets
│   └── robots.txt        # SEO configuration
├── docs/                 # Documentation
│   ├── product/          # Product specifications
│   └── tech/             # Technical documentation
├── __tests__/            # Test files
│   └── components/       # Component tests
├── Dockerfile            # Multi-stage production build
└── project/              # Project management
    └── specs/            # Feature specifications
```

## 🧪 Testing

### Running Tests

```bash
# Unit tests
pnpm test

# Watch mode
pnpm test --watch

# Coverage report
pnpm test:coverage

# E2E tests
pnpm test:e2e
```

### Test Structure

- Unit tests: `__tests__/**/*.test.{ts,tsx}`
- Test setup: `jest.setup.ts`
- Jest config: `jest.config.ts`
- E2E tests: Planned with Playwright

## 📝 Code Quality

### Linting and Formatting

- **ESLint:** JavaScript/TypeScript linting with Next.js config
- **Stylelint:** CSS linting with Tailwind v4 compatibility
- **Prettier:** Code and CSS formatting with Tailwind class sorting
- **Husky:** Git hooks for pre-commit checks
- **lint-staged:** Staged file linting

### Pre-commit Hooks

Automatically runs on `git commit`:

- ESLint with auto-fix for JS/TS files
- Stylelint with auto-fix for CSS files
- Prettier formatting (with Tailwind class sorting)
- Type checking

## 🚢 Deployment

### Environment Variables

Currently no required environment variables for basic functionality.

Optional environment variables (see `.env.example`):

- `NODE_ENV` - Environment mode (production/development)
- `NEXT_TELEMETRY_DISABLED` - Disable Next.js telemetry
- Future: Database, payment processing, and cloud service variables

### Build and Deploy

#### Local Development
```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Full build check (recommended before deployment)
pnpm build:check
```

#### Docker Deployment
```bash
# Build Docker image
docker build -t bakery-app:latest .

# Run container
docker run -p 3000:3000 bakery-app:latest

# Health check
curl http://localhost:3000/api/health
```

## 📖 Documentation

- [Technical Stack](./docs/tech/tech-stack.md) - Complete technical overview
- [Tailwind CSS v4 Guide](./docs/tech/tailwind-config.md) - Styling system documentation
- [Deployment Guide](./docs/tech/DEPLOYMENT_GUIDE.md) - Google Cloud Platform deployment
- [How-To Guides](./docs/tech/HOW_TO.md) - Docker and development guides
- [Project Specs](./project/specs/) - Feature specifications and roadmap

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Makkar Bakers.

## 🆘 Support

For support, email [support@dadalicious.com](mailto:support@dadalicious.com) or create an issue in the repository.
