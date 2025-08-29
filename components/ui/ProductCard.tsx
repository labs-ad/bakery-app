import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Button } from './Button'
import type { Product } from '@/types/menu'

const productCardVariants = cva(
  'overflow-hidden transition-all duration-300 ease-in-out group',
  {
    variants: {
      variant: {
        default: 'card hover:shadow-medium hover:scale-[1.02]',
        featured:
          'hero-card hover:shadow-strong hover:scale-[1.02] border-2 border-primary-200',
        compact:
          'rounded-xl bg-white/90 p-4 shadow-soft hover:shadow-medium hover:bg-white/95 border border-primary-100',
      },
      size: {
        sm: 'max-w-sm',
        default: 'max-w-md',
        lg: 'max-w-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const imageVariants = cva(
  'w-full object-cover transition-transform duration-300',
  {
    variants: {
      variant: {
        default: 'h-48 rounded-xl mb-4 group-hover:scale-105',
        featured: 'h-56 rounded-2xl mb-6 group-hover:scale-105',
        compact: 'h-32 rounded-lg mb-3 group-hover:scale-105',
      },
    },
  }
)

const titleVariants = cva('font-display font-semibold text-primary-700 mb-2', {
  variants: {
    variant: {
      default: 'text-lg',
      featured: 'text-xl',
      compact: 'text-base',
    },
  },
})

const descriptionVariants = cva('text-neutral-600 mb-4 line-clamp-2', {
  variants: {
    variant: {
      default: 'text-sm leading-relaxed',
      featured: 'text-base leading-relaxed',
      compact: 'text-xs leading-relaxed',
    },
  },
})

const priceVariants = cva('font-semibold text-secondary-600 mb-4', {
  variants: {
    variant: {
      default: 'text-lg',
      featured: 'text-xl',
      compact: 'text-base',
    },
  },
})

export interface ProductCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof productCardVariants> {
  product: Product
  onOrder?: (product: Product) => void
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, variant, size, product, onOrder, ...props }, ref) => {
    const handleOrder = () => {
      onOrder?.(product)
    }

    return (
      <div
        className={cn(productCardVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className={cn(imageVariants({ variant }))}
          />
        </div>

        <div className="flex flex-col">
          <h3 className={cn(titleVariants({ variant }))}>{product.title}</h3>

          <p className={cn(descriptionVariants({ variant }))}>
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className={cn(priceVariants({ variant }))}>
              ${product.price.toFixed(2)}
            </span>

            <Button
              variant="primary"
              size={variant === 'compact' ? 'sm' : 'default'}
              onClick={handleOrder}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    )
  }
)

ProductCard.displayName = 'ProductCard'

export { ProductCard, productCardVariants }
