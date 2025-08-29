'use client'

import { Button } from '@/components/ui/Button'
import { categories } from '@/lib/menu-data'

interface CategorySidebarProps {
  activeCategory?: string
  onCategoryChange?: (categorySlug: string) => void
}

export function CategorySidebar({
  activeCategory = 'all',
  onCategoryChange,
}: CategorySidebarProps) {
  const handleCategoryClick = (categorySlug: string) => {
    onCategoryChange?.(categorySlug)

    // Smooth scroll to section
    const element = document.getElementById(`category-${categorySlug}`)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="w-full lg:sticky lg:top-8 lg:h-fit lg:w-64">
      <div className="card p-6">
        <h2 className="font-display text-primary-700 mb-6 text-2xl font-semibold">
          Categories
        </h2>

        <nav className="space-y-2">
          <Button
            variant={activeCategory === 'all' ? 'primary' : 'ghost'}
            size="sm"
            className="w-full justify-start"
            onClick={() => handleCategoryClick('all')}
          >
            All Items
          </Button>

          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.slug ? 'primary' : 'ghost'}
              size="sm"
              className="w-full justify-start"
              onClick={() => handleCategoryClick(category.slug)}
            >
              {category.name}
            </Button>
          ))}
        </nav>

        <div className="border-primary-100 mt-8 border-t pt-6">
          <p className="text-sm leading-relaxed text-neutral-600">
            All our products are made fresh daily with premium, locally sourced
            ingredients.
          </p>
        </div>
      </div>
    </div>
  )
}
