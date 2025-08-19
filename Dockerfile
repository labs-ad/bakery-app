# Stage 1: Build the application
FROM node:22-alpine AS builder

# Install security updates and build dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache libc6-compat && \
    rm -rf /var/cache/apk/*

# Enable pnpm package manager
RUN corepack enable pnpm

# Set working directory
WORKDIR /app

# Copy package files for dependency installation (cached layer)
COPY package.json pnpm-lock.yaml ./

# Install dependencies with exact versions from lockfile
RUN pnpm install --frozen-lockfile --prefer-offline

# Copy source code (invalidates cache when source changes)
COPY . .

# Set build-time environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build application with standalone output
RUN pnpm build

# Stage 2: Production runtime (minimal)
FROM node:22-alpine AS runner

# Install security updates and dumb-init for proper signal handling
RUN apk update && apk upgrade && \
    apk add --no-cache dumb-init curl && \
    rm -rf /var/cache/apk/*

# Set production environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

WORKDIR /app

# Copy standalone build output (minimal runtime)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy public assets to the correct location for standalone
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copy static assets to standalone's .next directory
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user before running app
USER nextjs

# Expose port (Cloud Run uses PORT env var)
EXPOSE 3000

# Health check for container orchestration
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Use dumb-init for proper signal handling
ENTRYPOINT ["dumb-init", "--"]

# Start the standalone Next.js server
CMD ["node", "server.js"]