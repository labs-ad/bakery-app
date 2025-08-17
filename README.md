# Dadalicious Bakery

> Handmade, egg-free cakes made with local ingredients for your special celebrations.

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- pnpm 8.x or higher
- PostgreSQL 15+ (for database)

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
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run unit tests with Vitest
- `pnpm test:ui` - Run tests with Vitest UI
- `pnpm test:coverage` - Run tests with coverage
- `pnpm test:e2e` - Run end-to-end tests with Playwright

### Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 3.x
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **Testing:** Vitest + React Testing Library + Playwright
- **Deployment:** Google Cloud Platform
- **Package Manager:** pnpm

### Project Structure

```
bakery-app/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── lib/                   # Utility functions
├── prisma/               # Database schema and migrations
├── public/               # Static assets
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

- **ESLint:** Code linting with Next.js config
- **Prettier:** Code formatting
- **Husky:** Git hooks for pre-commit checks
- **lint-staged:** Staged file linting

### Pre-commit Hooks

Automatically runs on `git commit`:

- ESLint with auto-fix
- Prettier formatting
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

This project is private and proprietary to Dadalicious Bakery.

## 🆘 Support

For support, email [support@dadalicious.com](mailto:support@dadalicious.com) or create an issue in the repository.
