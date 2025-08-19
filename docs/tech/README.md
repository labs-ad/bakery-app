# Dadalicious Bakery - Technical Development Guide

> Complete development setup and configuration guide for the Dadalicious bakery application

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 20.x or higher
- **Package Manager**: pnpm 8.x or higher
- **PostgreSQL**: 15+ (for database - coming in Task 2)

### Installation

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

3. **Start development:**
   ```bash
   pnpm dev
   ```

4. **Open application:**
   - Visit: [http://localhost:3000](http://localhost:3000)
   - Ready in ~1.8 seconds with Turbopack

---

## 🛠️ Running the App Locally

### Development Server

```bash
# Start development server with Turbopack (fastest)
pnpm dev

# Alternative: Start without Turbopack
npx next dev
```

**Development Features:**
- **Hot Reload**: Instant updates on file changes
- **Turbopack**: Next.js 14's faster bundler
- **TypeScript**: Real-time type checking
- **Environment**: Automatically loads `.env.local`

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Production URL: http://localhost:3000
```

### Available Scripts

| Script | Description | Usage |
|--------|-------------|-------|
| `pnpm dev` | Development server with Turbopack | Primary development |
| `pnpm build` | Production build | CI/CD pipeline |
| `pnpm start` | Production server | Deployment |
| `pnpm lint` | ESLint checking | Code quality |
| `pnpm lint:fix` | ESLint auto-fix | Fix code issues |
| `pnpm type-check` | TypeScript validation | Type safety |
| `pnpm test` | Run unit tests | Testing |
| `pnpm test:ui` | Vitest UI interface | Interactive testing |
| `pnpm test:coverage` | Test coverage report | Code coverage |

---

## 🔍 Linting & Code Quality

### ESLint Configuration

**Location:** `.eslintrc.json`

```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "prefer-const": "error",
    "no-var": "error",
    "no-console": "warn",
    "react/jsx-curly-brace-presence": ["error", { "props": "never" }],
    "react/self-closing-comp": "error"
  }
}
```

**Key Features:**
- **Next.js Rules**: Core web vitals and React best practices
- **TypeScript**: Strict type checking and unused variable detection
- **React**: JSX optimization and component standards
- **Test Override**: Relaxed rules for test files

### Prettier Configuration

**Location:** `.prettierrc`

```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "avoid",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**Features:**
- **Tailwind Plugin**: Automatic class sorting
- **Consistent Style**: Single quotes, no semicolons
- **Auto-formatting**: On save and pre-commit

### Pre-commit Hooks (Husky)

**Location:** `.husky/pre-commit`

Automatically runs on every commit:
1. **lint-staged**: ESLint + Prettier on staged files
2. **Type checking**: Full TypeScript validation
3. **Commit validation**: Message format checking

```bash
# Manual execution
npx lint-staged
pnpm type-check
```

### lint-staged Configuration

**Location:** `package.json`

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css}": [
      "prettier --write"
    ]
  }
}
```

---

## ⚙️ Next.js Configuration

### Next.js Config

**Location:** `next.config.js`

```javascript
const nextConfig = {
  // Turbopack for faster development
  experimental: {
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  },
  
  // Performance optimizations
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Security headers
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    }]
  },
}
```

**Key Features:**
- **Turbopack**: Faster development builds
- **SWC Minification**: Optimized production builds
- **Security Headers**: Enhanced security posture
- **Image Optimization**: WebP/AVIF support

### App Router Structure

```
app/
├── layout.tsx          # Root layout with fonts and metadata
├── page.tsx           # Home page (/)
├── globals.css        # Global Tailwind styles
└── (future routes)    # Additional pages
```

**Layout Features:**
- **Font Loading**: Optimized Google Fonts (Inter + Playfair Display)
- **SEO Metadata**: Complete Open Graph and Twitter cards
- **Layout Components**: Header, main content, Footer

---

## 📘 TypeScript Configuration

### TypeScript Config

**Location:** `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "strict": true,
    
    // Strict type checking
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    
    // Path mapping
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/app/*": ["./app/*"],
      "@/hooks/*": ["./hooks/*"],
      "@/types/*": ["./types/*"]
    }
  }
}
```

**Key Features:**
- **Strict Mode**: Maximum type safety
- **Path Mapping**: Clean import aliases with `@/`
- **Next.js Integration**: Automatic type generation
- **Error Prevention**: Comprehensive checks for null/undefined

### Type Definitions

**Location:** `types/index.ts`

**Available Types:**
- `User`, `Product`, `Order` - Core business entities
- `ApiResponse<T>`, `PaginatedResponse<T>` - API responses
- `ContactForm`, `OrderForm` - Form interfaces
- `EnvironmentVariables` - Environment type safety

**Usage Example:**
```typescript
import type { Product, ApiResponse } from '@/types'

const product: Product = {
  id: '1',
  name: 'Chocolate Cake',
  price: 25.99,
  category: ProductCategory.CAKES,
  // ... other properties
}
```

---

## 🧪 Testing Setup

### Test Framework: Vitest

**Location:** `vitest.config.ts`

```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './') },
  },
})
```

**Features:**
- **Fast**: Vite-powered test runner
- **React Testing Library**: Component testing
- **JSdom**: Browser environment simulation
- **Path Aliases**: Same `@/` imports as main code

### Test Structure

```
__tests__/
├── setup.test.ts              # Application setup tests
├── components/
│   └── HomePage.test.tsx      # Component tests
└── (future test files)
```

**Test Categories:**
- **Setup Tests**: Node.js version, React imports, TypeScript
- **Component Tests**: UI rendering and interactions
- **Integration Tests**: Feature workflows (coming)

### Running Tests

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test --watch

# UI interface
pnpm test:ui

# Coverage report
pnpm test:coverage

# Specific test file
pnpm test HomePage
```

### Test Setup

**Location:** `vitest.setup.ts`

```typescript
import '@testing-library/jest-dom'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
})
```

**Current Test Results:**
- ✅ 13/13 tests passing
- ✅ Application setup validation
- ✅ HomePage component rendering
- ✅ TypeScript compilation

---

## 🎨 Styling & UI

### Tailwind CSS Configuration

**Location:** `tailwind.config.ts`

**Custom Theme:**
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#f97316', // Dadalicious orange
        600: '#ea580c',
        // ... full palette
      }
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      display: ['var(--font-playfair)'],
    }
  }
}
```

**Features:**
- **Brand Colors**: Custom Dadalicious palette
- **Typography**: Google Fonts integration
- **Responsive**: Mobile-first design system
- **Plugins**: Forms, Typography, Aspect Ratio

### Component Architecture

```
components/
├── ui/
│   └── Button.tsx           # Reusable UI components
├── layout/
│   ├── Header.tsx          # Site header with navigation
│   └── Footer.tsx          # Site footer
└── index.ts                # Component exports
```

**Design System:**
- **Button**: Multiple variants with class-variance-authority
- **Layout**: Consistent header/footer across pages
- **Utilities**: Helper functions in `lib/utils.ts`

---

## 📁 Project Structure

```
bakery-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
├── types/                # TypeScript definitions
├── __tests__/            # Test files
├── docs/                 # Documentation
│   └── tech/            # Technical documentation
├── project/              # Project specifications
│   └── specs/           # Feature specs
└── .claude/             # Claude Code configuration
```

---

## 🔧 Development Tools

### VS Code Integration

**Recommended Extensions:**
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **ESLint**
- **TypeScript Importer**
- **Tailwind CSS IntelliSense**

### Package Manager

**pnpm Configuration:**
- **Lock file**: `pnpm-lock.yaml`
- **Node version**: 20.x enforced
- **Workspace**: Single package setup
- **Speed**: 3x faster than npm

---

## 🚨 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
pnpm dev
```

**TypeScript errors:**
```bash
# Clear Next.js cache
rm -rf .next
pnpm type-check
pnpm dev
```

**Dependency issues:**
```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Performance

**Development:**
- **Turbopack**: ~1.8s startup time
- **Hot reload**: <100ms for most changes
- **Type checking**: Parallel with development

**Production:**
- **Build time**: ~30s for current codebase
- **Bundle size**: Optimized with SWC
- **Image optimization**: Automatic WebP/AVIF

---

## 📈 Next Steps

### Upcoming Features (Roadmap)

1. **Task 2**: Database setup with PostgreSQL + Prisma
2. **Task 3**: Authentication with NextAuth.js
3. **Task 4**: Google Cloud Platform integration
4. **Task 5**: CI/CD pipeline setup

### Monitoring

**Current Status:**
- ✅ **Build**: Passing
- ✅ **Tests**: 13/13 passing
- ✅ **Types**: No TypeScript errors
- ✅ **Lint**: No ESLint errors
- ✅ **Performance**: Ready in 1.8s

---

## 📞 Support

**Development Issues:**
- Check this documentation first
- Review test failures: `pnpm test`
- Validate types: `pnpm type-check`
- Check linting: `pnpm lint`

**Configuration Changes:**
- Next.js: Edit `next.config.js`
- TypeScript: Edit `tsconfig.json`
- Tailwind: Edit `tailwind.config.ts`
- ESLint: Edit `.eslintrc.json`