# Makkar Bakers

> Handmade, egg-free cakes made with local ingredients for your special celebrations.

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x or higher (required for Tailwind CSS v4)
- pnpm 10.x or higher
- PostgreSQL 15+ (for database)
- Modern browser for development (Safari 16.4+, Chrome 111+, Firefox 128+)

### Development Setup

1. **Clone and install dependencies:**

   ```bash
   git clone <repository-url>
   cd bakery-app
   pnpm install
   ```

2. **Environment setup:**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
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
- `pnpm test:e2e` - Run end-to-end tests with Playwright
- `pnpm build:check` - Complete build validation (type-check + lint + lint:css + build)

### Tech Stack

- **Framework:** Next.js 15.1.3+ with App Router
- **Language:** TypeScript 5.7+
- **Styling:** Tailwind CSS 4.1.12 with CSS-first configuration
- **Theme:** Sugar Bliss custom design system
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **Testing:** Jest + React Testing Library + Playwright
- **Deployment:** Google Cloud Platform
- **Package Manager:** pnpm 10+
- **Node Version:** 22+ (required for Tailwind v4)

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
│   ├── globals.css        # Global styles + Tailwind v4 theme configuration
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── lib/                   # Utility functions
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── docs/                  # Technical documentation
│   └── tech/             # Architecture and configuration docs
├── __tests__/            # Test files
└── project/              # Project documentation
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
- E2E tests: `e2e/**/*.spec.ts`
- Test setup: `vitest.setup.ts`

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

Required environment variables (see `.env.example`):

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Authentication secret
- `GOOGLE_CLOUD_PROJECT_ID` - GCP project ID
- `STRIPE_SECRET_KEY` - Payment processing

### Build and Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📖 Documentation

- [Project Specs](./project/specs/) - Feature specifications
- [API Documentation](./docs/api/) - API reference
- [Deployment Guide](./docs/deployment/) - Deployment instructions

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
