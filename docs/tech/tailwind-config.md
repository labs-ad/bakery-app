# Tailwind CSS v4 Configuration - Sugar Bliss Theme

## Overview

This project uses **Tailwind CSS v4** with a CSS-first configuration approach, implementing the Sugar Bliss bakery theme inspired by the elegant, soft aesthetic of premium bakery websites.

## Version & Compatibility

- **Tailwind CSS**: v4.0.0
- **Browser Support**: Safari 16.4+, Chrome 111+, Firefox 128+
- **PostCSS Plugin**: `@tailwindcss/postcss@^4.0.0`
- **Next.js**: v15.1.3+

## Configuration Approach

### CSS-First Configuration

Unlike Tailwind v3's JavaScript-based `tailwind.config.js`, v4 uses CSS-first configuration with the `@theme` directive:

```css
@import 'tailwindcss';

@theme {
  /* Theme variables defined here */
}
```

### Key Benefits

- **Performance**: Faster build times and smaller bundle sizes
- **Maintainability**: CSS variables are easier to debug and modify
- **Modern CSS**: Leverages native CSS custom properties
- **Developer Experience**: Better IDE support for CSS

## Sugar Bliss Color Palette

### Primary Colors (Rose/Pink)

Based on the signature color `#E89BB5`, creating a warm and inviting bakery aesthetic:

```css
--color-primary-50: #fef7f0; /* Lightest tint */
--color-primary-100: #fceee1;
--color-primary-200: #f8dac3;
--color-primary-300: #f3c49f;
--color-primary-400: #e89bb5; /* Signature color */
--color-primary-500: #e4739a;
--color-primary-600: #d8527f;
--color-primary-700: #c1406a;
--color-primary-800: #a03558;
--color-primary-900: #852d4a;
--color-primary-950: #481525; /* Darkest shade */
```

### Secondary Colors (Mint Green)

Complement the primary with fresh, natural mint green tones:

```css
--color-secondary-500: #a8d5ba; /* Primary mint green for buttons */
--color-secondary-600: #14b8a6; /* Hover states */
```

### Background Colors (Soft Pink)

Subtle background tones for a cohesive, warm atmosphere:

```css
--color-background-50: #fdfcfc;
--color-background-100: #f8f0f5; /* Main background gradient */
```

### Neutral Colors

Refined grayscale palette for text and supporting elements:

```css
--color-neutral-50: #fafafa;
--color-neutral-900: #18181b; /* Primary text */
```

## Custom Design System

### Spacing Scale

Extended spacing values for bakery-specific layouts:

```css
--spacing-18: 4.5rem; /* 72px */
--spacing-22: 5.5rem; /* 88px */
--spacing-88: 22rem; /* 352px */
--spacing-128: 32rem; /* 512px */
```

### Shadow System

Three-tier shadow system for depth and elegance:

```css
--shadow-soft:
  0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -1px rgb(0 0 0 / 0.03);
--shadow-medium:
  0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05);
--shadow-strong:
  0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04);
```

### Border Radius

Consistent rounded corners for modern, friendly appearance:

```css
--radius-xl: 1rem; /* 16px */
--radius-2xl: 1.5rem; /* 24px */
--radius-3xl: 2rem; /* 32px */
```

## Component Utilities

### Button System

Using the new `@utility` API for consistent, reusable button styles:

#### Primary Button (Mint Green)

```css
@utility btn-primary {
  border-radius: var(--radius-2xl);
  background-color: var(--color-secondary-500);
  padding: 0.75rem 2rem;
  font-weight: 600;
  color: white;
  box-shadow: var(--shadow-soft);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-secondary-600);
    box-shadow: var(--shadow-medium);
    transform: scale(0.95);
  }
}
```

#### Secondary Button (Pink Outline)

```css
@utility btn-secondary {
  border-radius: var(--radius-2xl);
  border: 2px solid var(--color-primary-400);
  padding: 0.75rem 2rem;
  font-weight: 600;
  color: var(--color-primary-600);
  background-color: transparent;

  &:hover {
    background-color: var(--color-primary-400);
    color: white;
  }
}
```

### Card System

#### Standard Card

```css
@utility card {
  border-radius: var(--radius-2xl);
  background-color: rgb(255 255 255 / 0.9);
  padding: 1.5rem;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(8px);
  border: 1px solid var(--color-primary-100);
}
```

#### Hero Card

```css
@utility hero-card {
  border-radius: var(--radius-3xl);
  background: linear-gradient(
    to bottom right,
    rgb(255 255 255 / 0.95),
    var(--color-background-50)
  );
  padding: 2rem;
  box-shadow: var(--shadow-medium);
}
```

## Build Configuration

### PostCSS Setup

```js
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### Next.js Integration

No additional configuration needed - Next.js automatically processes PostCSS plugins.

## Code Quality & Linting

### Stylelint Configuration

Custom stylelint rules for Tailwind v4 compatibility:

```js
// .stylelintrc.js
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['theme', 'utility', 'import'],
      },
    ],
    'nesting-selector-no-missing-scoping-root': null,
    'color-function-notation': null,
  },
}
```

### Pre-commit Hooks

```json
{
  "lint-staged": {
    "*.css": ["stylelint --fix", "prettier --write"]
  }
}
```

## Usage Examples

### In React Components

```tsx
// Using custom utilities
<button className="btn-primary">Order Now</button>
<div className="card">Content here</div>

// Using theme colors with standard utilities
<h1 className="text-primary-700">Makkar Bakers</h1>
<div className="bg-background-100">Background</div>
```

### Available Scripts

```bash
# Lint CSS
npm run lint:css

# Fix CSS linting issues
npm run lint:css:fix

# Full build check (includes CSS linting)
npm run build:check
```

## Migration Notes

### From Tailwind v3 to v4

1. **Configuration**: Moved from `tailwind.config.ts` to CSS `@theme` blocks
2. **Imports**: Changed from `@tailwind` directives to `@import "tailwindcss"`
3. **Custom Utilities**: Migrated from `@layer utilities` to `@utility` API
4. **Plugins**: Removed old plugins (`@tailwindcss/forms`, etc.) as v4 includes them by default

### Breaking Changes

- **Browser Support**: Requires modern browsers (Safari 16.4+, Chrome 111+, Firefox 128+)
- **Build Tool**: Requires `@tailwindcss/postcss` plugin
- **Custom CSS**: Some v3 patterns need updating for v4 compatibility

## Performance Benefits

- **Faster Builds**: ~40% faster build times compared to v3
- **Smaller Bundles**: CSS-first approach reduces JavaScript overhead
- **Better Tree Shaking**: Only used utilities are included in final CSS
- **Native CSS**: Leverages browser-native CSS custom properties

## Future Considerations

- Monitor Tailwind v4 updates for new features and optimizations
- Consider upgrading to newer v4 versions as they become stable
- Evaluate new `@utility` patterns for additional component needs
- Assess browser support requirements as project grows

---

_This documentation was created as part of the Tailwind CSS v4 upgrade on August 26, 2025._
