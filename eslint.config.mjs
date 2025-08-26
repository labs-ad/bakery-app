import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      '.husky/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.mjs',
      'next-env.d.ts'
    ]
  },
  ...compat.config({
    extends: [
      'eslint:recommended',
      'next/core-web-vitals',
      'next/typescript',
      'prettier'
    ],
    plugins: ['@typescript-eslint'],
    rules: {
      // Accessibility rules
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-require-imports': 'off', // Allow require in config files
      '@typescript-eslint/triple-slash-reference': 'off', // Allow in Next.js type files
      
      // React rules
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/prop-types': 'off', // Using TypeScript for prop validation
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // General rules
      'no-console': 'off', // Allow console in development files
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'prefer-const': 'error',
      'no-unused-vars': 'off', // Handled by TypeScript
    },
    overrides: [
      {
        files: ['**/__tests__/**/*', '**/*.test.*', '**/*.spec.*', '**/jest.setup.*', '**/instrumentation.*'],
        env: {
          jest: true,
          node: true,
        },
        rules: {
          'no-console': 'off',
          '@typescript-eslint/no-require-imports': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
        },
      },
      {
        files: ['*.config.js', '*.config.mjs', '*.config.ts', 'tailwind.config.*'],
        env: {
          node: true,
        },
        rules: {
          '@typescript-eslint/no-require-imports': 'off',
        },
      },
    ],
  }),
]

export default eslintConfig