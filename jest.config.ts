import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
  // Module name mapping for absolute imports
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  
  // Test file patterns
  testMatch: [
    '**/__tests__/**/*.(ts|tsx)',
    '**/*.(test|spec).(ts|tsx)'
  ],
  
  // Coverage settings
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/*.stories.{ts,tsx}',
    '!**/node_modules/**',
  ],
  
  // Transform ignore patterns
  transformIgnorePatterns: [
    'node_modules/(?!(@testing-library|@babel)/)',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)