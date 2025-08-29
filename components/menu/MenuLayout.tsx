'use client'

import type { Product } from '@/types/menu'
import { useState } from 'react'
import { CategorySidebar } from './CategorySidebar'
import { ProductGrid } from './ProductGrid'

export function MenuLayout() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const handleCategoryChange = (categorySlug: string) => {
    setActiveCategory(categorySlug)
  }

  const handleProductOrder = (product: Product) => {
    // This could integrate with a cart system, show a modal, etc.
    alert(`Added ${product.title} to cart!`)
  }

  return (
    <div className="from-background-50 to-background-100 min-h-screen bg-gradient-to-br">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-primary-700 mb-4 text-4xl font-bold lg:text-6xl">
            Our Menu
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-neutral-600">
            Discover our handcrafted selection of egg-free delights, made fresh
            daily with premium local ingredients
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:flex-shrink-0">
            <CategorySidebar
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </aside>

          {/* Products */}
          <main className="min-w-0 flex-1">
            <ProductGrid
              activeCategory={activeCategory}
              onProductOrder={handleProductOrder}
            />
          </main>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="hero-card mx-auto max-w-2xl">
            <h3 className="font-display text-primary-700 mb-4 text-2xl font-semibold">
              Can&apos;t find what you&apos;re looking for?
            </h3>
            <p className="mb-6 leading-relaxed text-neutral-600">
              We love creating custom orders for special occasions. Contact us
              to discuss your unique requirements!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary">Custom Orders</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
