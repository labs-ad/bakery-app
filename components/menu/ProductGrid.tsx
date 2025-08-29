'use client'

import { ProductCard } from '@/components/ui/ProductCard'
import { categories, products, getProductsByCategory } from '@/lib/menu-data'
import type { Product } from '@/types/menu'

interface ProductGridProps {
  activeCategory?: string
  onProductOrder?: (product: Product) => void
}

export function ProductGrid({
  activeCategory = 'all',
  onProductOrder,
}: ProductGridProps) {
  const handleProductOrder = (product: Product) => {
    onProductOrder?.(product)
    // Here you could integrate with a cart system, show modal, etc.
    console.log(`Ordering ${product.title}`)
  }

  const renderCategorySection = (categorySlug: string) => {
    const category = categories.find(cat => cat.slug === categorySlug)
    const categoryProducts = getProductsByCategory(categorySlug)

    if (!category || categoryProducts.length === 0) return null

    return (
      <section
        key={categorySlug}
        id={`category-${categorySlug}`}
        className="mb-12 scroll-mt-8"
      >
        <div className="mb-8">
          <h2 className="font-display text-primary-700 mb-2 text-3xl font-bold">
            {category.name}
          </h2>
          <p className="text-lg text-neutral-600">{category.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categoryProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              variant={product.featured ? 'featured' : 'default'}
              onOrder={handleProductOrder}
            />
          ))}
        </div>
      </section>
    )
  }

  const renderAllProducts = () => {
    return (
      <>
        {/* Featured Products Section */}
        <section id="category-featured" className="mb-12 scroll-mt-8">
          <div className="mb-8">
            <h2 className="font-display text-primary-700 mb-2 text-3xl font-bold">
              Featured Items
            </h2>
            <p className="text-lg text-neutral-600">
              Our most popular and recommended items
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products
              .filter(product => product.featured)
              .map(product => (
                <ProductCard
                  key={`featured-${product.id}`}
                  product={product}
                  variant="featured"
                  onOrder={handleProductOrder}
                />
              ))}
          </div>
        </section>

        {/* All Categories */}
        {categories.map(category => renderCategorySection(category.slug))}
      </>
    )
  }

  return (
    <div className="flex-1">
      {activeCategory === 'all'
        ? renderAllProducts()
        : renderCategorySection(activeCategory)}
    </div>
  )
}
