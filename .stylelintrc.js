module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // Allow @import for Tailwind CSS v4
    'import-notation': null,

    // Allow @theme and @utility directives
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'theme',
          'utility',
          'custom-variant',
          'reference',
          'import',
        ],
      },
    ],

    // Allow CSS custom properties (variables)
    'custom-property-pattern': null,

    // Allow nested selectors for @utility blocks
    'selector-nested-pattern': null,
    'nesting-selector-no-missing-scoping-root': null,

    // Allow vendor prefixes for backdrop-filter
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['backdrop-filter'],
      },
    ],

    // Allow rgb() with space-separated values and alpha values
    'color-function-notation': null,
    'alpha-value-notation': null,

    // Allow animation names in any case
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['animation', 'animation-name'],
        ignoreKeywords: ['fadeIn', 'slideUp'],
      },
    ],

    // Allow CSS-in-JS syntax within @utility blocks
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
  },
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/node_modules/**',
    '**/dist/**',
    '**/.next/**',
  ],
}
