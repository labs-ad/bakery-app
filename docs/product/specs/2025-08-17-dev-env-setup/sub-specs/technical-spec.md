# Technical Specification

This is the technical specification for the spec detailed in @project/specs/2025-08-17-dev-env-setup/spec.md

> Created: 2025-08-17
> Version: 1.0.0

## Technical Requirements

### 1. Next.js 14 Setup

**Application Framework Configuration:**

- Next.js 14.x with App Router architecture
- TypeScript 5.x with strict mode enabled
- Turbopack for development builds, Webpack for production
- Absolute imports with @/\* path aliasing
- Server and Client Components architecture

**Configuration Files Required:**

- `next.config.js` with Turbopack and Tailwind integration
- `tsconfig.json` with strict TypeScript settings and path mapping
- `tailwind.config.js` with shadcn/ui compatibility
- `.env.local`, `.env.example` for environment variable management

**Development Server:**

- Hot reloading with Turbopack
- Port 3000 for local development
- Automatic TypeScript compilation
- Tailwind CSS 3.x with JIT compilation

### 2. Database Environment

**PostgreSQL Setup:**

- PostgreSQL 15+ for local development
- Docker Compose configuration for consistent local database
- Connection pooling with pgbouncer for production
- Database naming convention: `dadalicious_dev`, `dadalicious_staging`, `dadalicious_prod`

**Prisma ORM Configuration:**

- Prisma 5.x with PostgreSQL provider
- Schema-first development approach
- Automatic migration generation and application
- Database seeding scripts for development data

**Schema Requirements:**

```sql
-- Initial schema structure
Tables: users, sessions, accounts (NextAuth.js)
Indexes: Optimized for authentication flows
Constraints: Foreign keys, unique constraints for data integrity
```

### 3. Development Tools

**Package Management:**

- pnpm as primary package manager
- `.npmrc` configuration for optimal performance
- Lock file management with `pnpm-lock.yaml`

**Code Quality:**

- ESLint with Next.js, TypeScript, and React rules
- Prettier for code formatting
- Husky for pre-commit hooks
- lint-staged for staged file processing

**IDE Configuration:**

- VS Code settings.json with recommended extensions
- TypeScript language server configuration
- Prettier and ESLint integration
- Recommended extensions list in `.vscode/extensions.json`

### 4. GCP Configuration

**Cloud Run Application Hosting:**

- Containerized Next.js application
- Auto-scaling configuration (0-10 instances)
- CPU allocation: 1 vCPU, Memory: 2GB
- Request timeout: 300 seconds
- Custom domain configuration support

**Cloud SQL for PostgreSQL:**

- PostgreSQL 15 instance
- Machine type: db-f1-micro for development, db-custom for production
- Automated backups with 7-day retention
- High availability in production
- Private IP configuration for security

**Cloud Storage:**

- Public bucket for static assets
- Private bucket for user uploads
- CDN integration with Cloud CDN
- Signed URL generation for private content

**Service Account & IAM:**

- Application service account with minimal required permissions
- Cloud SQL Client role
- Storage Object Admin role
- Cloud Run Invoker role for CI/CD

### 5. CI/CD Pipeline

**GitHub Actions Workflow:**

- Triggered on push to main and pull requests
- Multi-stage pipeline: test → build → deploy
- Environment-specific deployments (staging/production)
- Rollback capability on deployment failure

**Testing Strategy:**

- Unit tests with Vitest and React Testing Library
- Integration tests for API routes
- End-to-end tests with Playwright
- Minimum 80% code coverage requirement

**Build Process:**

- TypeScript compilation and type checking
- Next.js production build
- Docker image creation and push to Google Container Registry
- Environment-specific configuration injection

**Deployment Automation:**

- Automated deployment to staging on merge to main
- Manual approval gate for production deployment
- Health checks and rollback on failure
- Database migration execution during deployment

### 6. Authentication Setup

**NextAuth.js Configuration:**

- Version 4.x with App Router support
- JWT strategy for session management
- Database adapter for user persistence
- CSRF protection enabled

**Provider Setup:**

- Google OAuth 2.0 provider
- GitHub OAuth provider
- Email/password authentication (future)
- Account linking support

**Session Management:**

- 30-day session expiration
- Secure HTTP-only cookies
- Session refresh token rotation
- User role-based access control foundation

**Database Schema:**

```sql
-- NextAuth.js required tables
users (id, email, name, image, emailVerified, createdAt, updatedAt)
accounts (provider, providerAccountId, userId, type, access_token, etc.)
sessions (sessionToken, userId, expires)
verification_tokens (identifier, token, expires)
```

## Approach

### Phase 1: Local Development Setup

1. Initialize Next.js 14 project with TypeScript
2. Configure Tailwind CSS and development tools
3. Set up local PostgreSQL with Docker
4. Implement Prisma schema and migrations
5. Configure environment variables and secrets management

### Phase 2: Authentication Foundation

1. Install and configure NextAuth.js
2. Set up Google and GitHub OAuth providers
3. Implement user database schema
4. Create basic authentication UI components
5. Test authentication flow end-to-end

### Phase 3: GCP Infrastructure

1. Create GCP project and enable required APIs
2. Set up Cloud SQL PostgreSQL instance
3. Configure Cloud Storage buckets
4. Create service accounts and IAM policies
5. Deploy initial application to Cloud Run

### Phase 4: CI/CD Implementation

1. Create GitHub Actions workflow files
2. Configure testing pipeline with Vitest and Playwright
3. Set up Docker build and container registry push
4. Implement automated deployment to staging
5. Configure production deployment with manual approval

### Development Workflow

1. Feature development on local environment
2. Automated testing on pull request
3. Code review and merge to main
4. Automatic deployment to staging
5. Manual promotion to production after validation

## External Dependencies

### Core Application Dependencies

- **next@14.x** - React framework with App Router and Server Components
- **typescript@5.x** - Type safety and developer experience
- **react@18.x** - UI library with concurrent features
- **tailwindcss@3.x** - Utility-first CSS framework
- **@tailwindcss/typography** - Typography plugin for content styling

### Database & ORM

- **prisma@5.x** - Modern database toolkit with type safety
- **@prisma/client** - Auto-generated database client
- **pg@8.x** - PostgreSQL client for Node.js
- **@types/pg** - TypeScript definitions for pg

### Authentication

- **next-auth@4.x** - Authentication library for Next.js
- **@next-auth/prisma-adapter** - Prisma adapter for NextAuth.js
- **@auth/prisma-adapter** - Updated Prisma adapter (if migrating to Auth.js)

### Development Tools

- **eslint@8.x** - Code linting and style enforcement
- **prettier@3.x** - Code formatting
- **husky@8.x** - Git hooks for automation
- **lint-staged@15.x** - Run linters on staged files
- **@typescript-eslint/parser** - TypeScript parser for ESLint
- **@typescript-eslint/eslint-plugin** - TypeScript-specific ESLint rules

### Testing

- **vitest@1.x** - Fast unit test runner with Vite integration
- **@testing-library/react@14.x** - React component testing utilities
- **@testing-library/jest-dom@6.x** - Custom Jest matchers for DOM
- **playwright@1.x** - End-to-end testing framework
- **@playwright/test** - Playwright test runner

### GCP & Deployment

- **@google-cloud/storage@6.x** - Google Cloud Storage client
- **@google-cloud/sql@3.x** - Cloud SQL management (if needed)
- **dockerfile** - Container configuration for Cloud Run deployment

### Dependency Justification

**Next.js 14**: Chosen for its App Router architecture, Server Components, and excellent TypeScript integration, providing optimal performance and developer experience for the bakery application.

**Prisma**: Selected for its type-safe database access, automatic migration generation, and excellent TypeScript integration, reducing database-related bugs and improving development velocity.

**NextAuth.js**: Industry-standard authentication solution for Next.js with built-in security features, multiple provider support, and seamless database integration.

**Tailwind CSS**: Utility-first approach enables rapid UI development while maintaining design consistency, with excellent tree-shaking for production builds.

**Vitest + Playwright**: Modern testing stack providing fast unit tests and reliable end-to-end testing, essential for maintaining code quality in a food service application where reliability is critical.

**Google Cloud Platform**: Comprehensive cloud platform offering managed services (Cloud SQL, Cloud Run) that reduce operational overhead while providing enterprise-grade reliability and scalability for the bakery's growth.
