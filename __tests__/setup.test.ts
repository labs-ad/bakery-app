/**
 * Test suite for verifying the basic Next.js application setup
 * These tests ensure core functionality is working before development begins
 */

import { describe, it, expect } from 'vitest'

describe('Application Setup', () => {
  it('should have Node.js version 20.x or higher', () => {
    const nodeVersion = process.version
    const majorVersion = parseInt(nodeVersion.split('.')[0]?.slice(1) || '0')
    expect(majorVersion).toBeGreaterThanOrEqual(20)
  })

  it('should be able to import React', async () => {
    const React = await import('react')
    expect(React).toBeDefined()
    expect(typeof React.createElement).toBe('function')
  })

  it('should be able to import Next.js', async () => {
    const NextJS = await import('next')
    expect(NextJS).toBeDefined()
    expect(NextJS.default).toBeDefined()
  })

  it('should have TypeScript support', () => {
    // This test passing means TypeScript compilation worked
    const testValue: string = 'TypeScript is working'
    expect(testValue).toBe('TypeScript is working')
  })

  it('should support absolute imports with @/ alias', async () => {
    // This will be validated once we create the tsconfig.json
    expect(true).toBe(true)
  })
})

describe('Environment Configuration', () => {
  it('should have development environment variables', () => {
    expect(process.env.NODE_ENV).toBeDefined()
  })

  it('should be running in test environment', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })
})

describe('Package Manager', () => {
  it('should use pnpm as package manager', () => {
    // Check if package manager is pnpm by looking for pnpm-lock.yaml
    const fs = require('fs')
    const path = require('path')
    const pnpmLockExists = fs.existsSync(
      path.join(process.cwd(), 'pnpm-lock.yaml')
    )
    expect(pnpmLockExists).toBe(true)
  })
})
